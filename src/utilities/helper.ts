import * as Sentry from "@sentry/react";
import mixpanel from "mixpanel-browser";
import clevertap from "clevertap-web-sdk";
import { isIOS } from "react-device-detect";

// Import native interface types to ensure global declarations are loaded
import "../types/native-interfaces";


export const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

export const isIOSDevice = () => {
  return !!isIOS;
};


export const isProduction = () => {
  return import.meta.env.VITE_ENVIRONMENT == "production";
};

export const logSentryError = (error: unknown) => {
  if (isProduction()) {
    Sentry.captureException(error);
  }
};


export const getMockValue = () => {
  try {
    const mockValue = localStorage.getItem("mock");
    return mockValue ? JSON.parse(mockValue) : false;
  } catch (e) {
    logSentryError(e);
    return false;
  }
};

export const openExternalLink = (url: string, type = "_blank") => {
  try {
    if (
      typeof AndroidInterface !== 'undefined' &&
      AndroidInterface?.openUrlInBrowser
    ) {
      AndroidInterface.openUrlInBrowser(url);
    } else if (window.webkit?.messageHandlers?.iosInterface) {
      window.webkit.messageHandlers.iosInterface.postMessage({
        action: "redirect",
        data: {
          url: url,
        },
      });
    } else {
      window.open(url, type);
    }
  } catch (e) {
    logSentryError(e);
    window.open(url, type);
  }
};

export const handleInApp = (method: string, data: Record<string, unknown>) => {
  if (
    typeof AndroidInterface !== 'undefined' &&
    AndroidInterface?.[method]
  ) {
    AndroidInterface[method](
      JSON.stringify(data),
      JSON.stringify({
        isMixpanelAllowed: isTrackingAllowed("mixpanel"),
        isClevertapAllowed: isTrackingAllowed("clevertap"),
      })
    );
    return true;
  } else if (window.webkit?.messageHandlers?.iosInterface?.postMessage) {
    window.webkit.messageHandlers.iosInterface.postMessage({
      action: method,
      data: data,
      isAnalyticsAllowed: {
        isMixpanelAllowed: isTrackingAllowed("mixpanel"),
        isClevertapAllowed: isTrackingAllowed("clevertap"),
      },
    });
    return true;
  }
  return false;
};

export const isDebug = () => {
  return import.meta.env.VITE_ENVIRONMENT == "debug";
};

export const isTrackingAllowed = (key: string) => {
  return import.meta.env.VITE_TRACKING_APPS.toLowerCase()
    .split(",")
    .includes(key);
};

const safeTrack = (name: string, props: Record<string, unknown>) => {
  const tryTrack = () => {
    if (mixpanel && (mixpanel as any).__loaded) {
      mixpanel.track(name, {
        ...props,
        sourceUrl: window.location.href,
      });
      return true;
    }
    return false;
  };

  if (!tryTrack()) {
    const interval = setInterval(() => {
      if (tryTrack()) clearInterval(interval);
    }, 100);
  }
};


export const analyticsAppTrack = (eventName: string, eventData = {}) => {
  if (isProduction() || isDebug()) {
    if (
      !handleInApp("analyticsAppTrackEvent", {
        eventName,
        eventData: { ...eventData, sourceUrl: window.location.href },
      })
    ) {
      if (isTrackingAllowed("mixpanel")) {
        safeTrack(eventName, {
          ...eventData,
          sourceUrl: window.location.href,
        });
      }

      if (isTrackingAllowed("clevertap")) {
        clevertap.event.push(eventName, {
          ...eventData,
          sourceUrl: window.location.href,
        });
      }
    }
  } else {
    console.log(eventName, eventData);
  }
};


export const removeQueryParams = (params: string[] = [], url: string = window.location.href) => {
  const parsedUrl = new URL(url);
  params.forEach((param) => {
    parsedUrl.searchParams.delete(param);
  });
  return parsedUrl.toString();
};

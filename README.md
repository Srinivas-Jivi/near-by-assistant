# Nearby Assistant Plugin

A reusable, configurable React component for finding nearby places with location search, filtering, and booking capabilities.

## 🚀 Features

- **🔍 Location-based Search** - Find nearby doctors, hospitals, labs, pharmacies, restaurants, and more
- **🎯 Smart Filtering** - Filter by specialty, category, ratings, and distance
- **📱 Mobile-First Design** - Responsive UI optimized for all devices
- **🔧 Fully Configurable** - Customize services, navigation, analytics, and UI
- **🌐 i18n Support** - Built-in internationalization support
- **📊 Analytics Ready** - Integrated analytics tracking
- **🎨 Themeable** - Customizable colors and styling
- **♿ Accessible** - Screen reader friendly and keyboard navigable

## 📦 Installation

```bash
npm install @your-org/nearby-assistant-plugin
# or
yarn add @your-org/nearby-assistant-plugin
```

## 🔧 Quick Start

```tsx
import { NearByAssistant } from '@your-org/nearby-assistant-plugin';
import '@your-org/nearby-assistant-plugin/styles';

const config = {
  searchService: {
    searchPlaces: async (params) => {
      // Your API implementation
      return await yourApiService.searchPlaces(params);
    },
    getPhotoUrl: async (photoRef) => {
      return await yourApiService.getPhotoUrl(photoRef);
    },
    getPlaceDetails: async (placeId) => {
      return await yourApiService.getPlaceDetails(placeId);
    },
  },
  navigation: {
    onPlaceClick: (place, type) => {
      // Handle place selection
      navigate(`/place/${place.place_id}`);
    },
    onCallClick: (phone) => {
      window.open(`tel:${phone}`);
    },
    onDirectionsClick: (place) => {
      // Open maps
      window.open(`https://maps.google.com/?q=${place.name}`);
    },
  },
  features: {
    enableBooking: true,
    enablePhotos: true,
    enableFilters: true,
  }
};

function App() {
  return <NearByAssistant config={config} />;
}
```

## 📖 Documentation

### Configuration Options

#### `searchService` (required)
Service for searching places and loading photos.

#### `locationService` (optional)
Service for getting user location. Uses browser geolocation by default.

#### `navigation` (optional)
Handlers for user interactions.

#### `features` (optional)
Feature flags to enable/disable functionality.

#### `categories` (optional)
Custom categories and specialties.

#### `theme` (optional)
Custom colors and styling.

### API Reference

See the [full API documentation](./docs/API.md) for complete configuration options.

## 🎨 Customization

### Custom Categories

```tsx
const customCategories = [
  {
    id: 'veterinary',
    label: 'Veterinarians',
    icon: Heart,
    color: 'green',
    keywords: ['veterinary', 'animal hospital', 'pet clinic']
  }
];
```

### Custom Theme

```tsx
const customTheme = {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
  },
  borderRadius: {
    md: '8px',
  }
};
```

## 🔌 Integration Examples

### With React Router

```tsx
const config = {
  navigation: {
    onPlaceClick: (place, type) => {
      navigate(`/places/${type}/${place.place_id}`, {
        state: { placeData: place }
      });
    }
  }
};
```

### With Google Places API

```tsx
const searchService = {
  searchPlaces: async (params) => {
    const response = await fetch('/api/places/nearby', {
      method: 'POST',
      body: JSON.stringify(params)
    });
    return response.json();
  }
};
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@your-org.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-org/nearby-assistant-plugin/issues)
- 📖 Docs: [Documentation](https://your-org.github.io/nearby-assistant-plugin)
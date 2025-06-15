export const GET_OTP = "/api/v1/auth/otp/generate";
export const RESEND_OTP = "/api/v1/auth/otp/regenerate";
export const SUBMIT_OTP = "/api/v1/auth/otp/verify";
export const GET_RECENT_NEWS = "/api/v1/trends/geological";
export const GET_SESSION_TOKEN = "/api/v1/chat/init";
export const GET_TOP_SYMPTOMS = "/api/v1/symptoms?top=5&search_type=running";
export const GET_SEARCH_SYMPTOMS =
  "/api/v1/symptoms?key=:search_key&search_type=running";
export const GET_TRENDING_ISSUES = "/api/v1/trends/symptoms";
export const GUIDED_CHAT = "/api/v2/chat/guided";
export const GET_SUMMARY = "/api/v1/session/summary";
export const GET_DIFFERENTIAL_DIAGNOSIS = "/api/v1/session/diagnosis";
export const GET_TRANSCRIBE = "/api/v1/speech/transcribe";
export const GET_TRANSCRIBE_FILE = "/api/v2/speech/transcribe";
export const SESSION_LIST = "/api/v1/user/sessions?page=:page_number";
export const UPDATE_VITALS = "/api/v1/user/:session_id/vitals";
export const GET_CONVERSATION = "/api/v1/user/chat/:session_id";
export const EDIT_CHAT = "/api/v1/session";
export const SKIP_LOGIN = "/api/v1/anonymous/token/generate";
export const DOC_UPLOAD = "/api/v1/docs/upload";
export const GET_DOC_FROM_SESSION_ID = "/api/v1/:session_id/docs";
export const DOC_INTERNAL_UPLOAD = "api/v1/internal/upload/docs";
export const SESSION_DETAILS = "/api/v1/session/:session_id";
export const GET_PROMPT = "/api/v1/user/prompt?agent=:agent";
export const UPDATE_PROMPT = "/api/v1/user/prompt";
export const DELETE_PROMPT =
  "/api/v1/user/prompt?agent=:agent&prompt_id=:prompt_id";
export const GET_AUDIO_TEXT = "/api/v1/speech/generate";
export const UPDATE_FEEDBACK = "/api/v1/feedback";
export const GET_USER_PROFILES = "/api/v1/user/profiles";
export const PROFILE_CONFIG = "/api/v1/configs/profile";
export const UPDATE_PROFILE = "/api/v1/user/profile/:profile_id";
export const CREATE_PROFILE = "/api/v1/user/profile";
export const GET_LANGUAGE = "/api/v1/configs/languages";
export const GET_TREATMENTS = "/api/v1/session/treatments";
export const FREE_CHAT = "/api/v1/chat/free";
export const USER_DETAILS = "api/v1/user";
export const CHAT_SEARCH = "api/v1/symptom/:session_id?key=:search_key";
export const IMAGE_ANALYSIS = "/api/v2/image/analyse";
export const IMAGE_ANALYSIS_V3 = "/api/v3/image/analyse";
export const GET_CHAT_MESSAGES =
  "/api/v2/chat/messages?sessionId=:sessionID&sessionType=:sessionType";
export const DOCTOR_CONFIG =
  "/api/v1/doctor/configs?identifier=:identifier_type";
export const REPORT_FAQS =
  "/api/v1/configs/faqs?configIdentifier=:report_identifier";
export const GENERIC_CONTENT = "/api/v1/content";
export const GET_DOCS = "/api/v1/docs";
export const GET_CONFIG = "api/v1/configs?identifier=:identifier";
export const GET_SECOND_OPINION_CHAT = "/api/v1/chat/second-opinion";

export const GET_SCREENING_CHAT = "/v1/screening/chat";
export const GET_SCREENING_DDX = "/v1/screening/ddx";

export const GET_LOCATION = "/ds/api/features/v1/profile_info";

export const GET_SECOND_OPINION_DDX =
  "/api/v1/session/diagnosis/second-opinion";
export const GET_ONE_MG_LINK = "/api/v1/deeplink/one-mg";
export const GET_DISEASES_LIST = "/api/v1/diseases";

export const VALIDATE_REFERRAL = "/api/v1/referrals/validate";
export const GET_SAMPLE_REPORTS = "/api/v1/samples";
export const GET_TREATMENTS_AND_NEXT_STEPS = "/api/v3/treatments";
export const EDIT_SESSION = "/api/v1/session";
export const GET_SEARCH_RESULT = "/api/v1/search";
export const FOLLOW_UP_CHAT = "/api/v1/session/followup";
export const CLASSIFY_QUERY = "/ds/api/med_classifier/v1/classify_query";
export const SEARCH_CONTENT = "/ds/api/med_classifier/v1/search_content";
export const SEARCH_OPTIONS =
  "/ds/api/med_classifier/v1/related_searches?text=:search_query";
export const IMAGE_CLASSIFIER =
  "/ds/api/med_classifier/v1/classify_image_query";
export const GET_RECENT_SEARCHES =
  "/ds/api/med_classifier/v1/user_recent_searches?user_id=:user_id&search_value=:limit";
export const GET_SHAREABLE_ID = "/api/v1/share";
export const ANALYSE_HEARTBEAT = "/api/v1/vitals/heartbeat/analyse";
export const SET_VITALS = "/api/v1/vitals";
//TEMP
export const INIT_COPILOT_SESSION = "/api/v1/consultations/init";

//SMART HEALTH
export const AGG_DASHBOARD = "/ds/api/smart_health/v1/agg/dashboard";

export const JIVI_CARES = "/ds/api/smart_health/v1/vital_suggestions";

export const GET_STRESS_FROM_DATA = "/api/v1/session/stress-checker";

export const GET_STRESS_HISTORY = "/ds/api/smart_health/v1/agg/stress";

export const GET_DERMA_DOC_CHAT = "/v1/derma/chat";
export const GET_DERMA_DOC_DETAILS = "/v1/derma/ddx";
export const GET_DERMA_DOC_TREATMENTS = "/v1/derma/treatment";
export const EDIT_SESSION_DATA = "/api/v1/session/:sessionId";

//NUTRITION
export const INVOKE_WORKFLOW = "/ds/api/agent_workflow/v1/invoke_workflow";

// PAYMENTS
export const ORDERS = "/api/v1/user/orders";

export const GET_PRODUCT_DETAILS = "/api/v1/user/purchases";

export const GET_PRODUCTS = "/api/v1/user/purchases/all";

export const UPDATE_ORDER_DETAILS = "/api/v1/user/orders";

// Nutrition
export const LOG_MEAL = "/api/v1/nutrition/logMeal";
export const CREATE_PLAN = "/api/v1/nutrition/create/plan";
export const ADD_MEAL = "/api/v1/nutrition/addMeal";
export const FETCH_PLAN = "/api/v1/nutrition/fetch/plan";
export const FETCH_PLAN_DETAILS = "/api/v1/nutrition/fetch/plan/details/";
export const FETCH_LOGGED_MEALS = "/api/v1/nutrition/fetch/logged/meals";
export const FETCH_ANALYSIS_PLAN_ID = "/api/v1/nutrition/fetch/analysis/";
export const UPDATE_PLAN_STATUS = "api/v1/nutrition/status";
export const FETCH_ALL_PLANS = "/api/v1/nutrition/all/plans";
export const CUSTOMISE_PLAN = "/api/v1/nutrition/customise/plan";
export const CREATE_ASYNC_PLAN = "/api/v1/nutrition/async/plan";

// RATINGS
export const FEEDBACK = "/api/v1/feedback";

// ASSISTANT
export const GET_FOLLOW_UP_CONTEXT =
  "/uat/ds/api/assistant/v1/follow_up/context";

export declare const generate: {
    data: {};
};
export declare const resend_otp: {
    data: {};
};
export declare const verify: {
    data: {};
};
export declare const skip_login: {
    data: {};
};
export declare const recent_news: {
    data: {};
};
export declare const session_token: {
    data: {};
};
export declare const top_symptoms: {
    data: {};
};
export declare const trending_issues: {
    data: {};
};
export declare const search_result: {
    data: {};
};
export declare const guided_chat: {
    data: {};
};
export declare const get_summary: {
    data: {};
};
export declare const get_differential_diagnosis: {
    data: {};
};
export declare const get_transcribe: {
    data: {};
};
export declare const chat_history: {
    data: {};
};
export declare const update_vitals: {
    data: {};
};
export declare const get_conversation: {
    data: {};
};
export declare const edit_chat: {
    data: {};
};
export declare const upload_doc: {
    data: {};
};
export declare const session_details: {
    data: {
        data: {
            name: string;
            summary: {
                symptoms: never[];
                summary: string;
                diseases: string[];
            };
            createdAt: string;
            sessionId: string;
            differentialDiagnosis: {
                diagnosis: {
                    name: string;
                    reference: {
                        WIKI_MEDICAL_TERMS: string;
                    };
                    description: string;
                    symptom: {
                        name: string;
                        isMatched: boolean;
                    }[];
                    conf: number;
                }[];
            };
        };
    };
};
export declare const get_prompt: {
    data: {};
};
export declare const delete_prompt: {
    data: {};
};
export declare const update_prompt: {
    data: {};
};
export declare const update_feedback: {
    data: {};
};
export declare const get_text_audio: {
    data: {};
};
export declare const user_profiles: {
    data: {};
};
export declare const profile_config: {
    data: {};
};
export declare const update_profile: {
    data: {};
};
export declare const create_profile: {
    data: {};
};
export declare const get_languages: {
    data: {};
};
export declare const treatments: {
    data: {};
};
export declare const free_chat: {
    data: {};
};
export declare const analyse_reports: {
    data: {};
};
export declare const get_doctor_config: {
    data: {};
};
export declare const get_report_faqs: {
    data: {};
};
export declare const get_generic_content: {
    data: {};
};
export declare const get_config: {
    data: {};
};
export declare const get_second_opinion_chat: {
    data: {
        data: {
            response: {
                header: string;
                questions: {
                    code: string;
                    description: string;
                }[];
                questions_type: string;
            }[];
        };
        metrics: {
            timeTaken: number;
        };
    };
};
export declare const get_second_opinion_ddx: {
    data: {};
};
export declare const get_treatments_and_next_steps: {
    data: {};
};
export declare const get_one_mg_link: {
    data: {
        data: {
            deeplink: string;
        };
        metrics: {
            timeTaken: number;
        };
    };
};
export declare const get_diseases_list: {
    data: {
        diseases: {
            id: string;
            name: string;
        }[];
    };
    metrics: {
        timeTaken: number;
    };
};
export declare const validate_referral: {
    data: {};
};
export declare const get_search_result: {
    data: {};
};
export declare const follow_up_chat: {
    data: {};
};
export declare const get_search_content: {
    data: {};
};
export declare const get_classify_query: {
    data: {
        data: {
            chat_response: string;
            related_queries: string[];
            search_entity_keys_translated: string[];
            images: string[];
            search_entity_keys: string[];
            actions: {
                action: string;
                text: string;
            }[];
            entity: string;
            query_id: string;
            search_entity_keys_v2: ({
                title: string;
                translated: string;
                actions: {
                    action: string;
                    text: string;
                }[];
            } | {
                title: string;
                translated: string;
                actions?: undefined;
            })[];
        };
        metrics: {
            timeTaken: number;
        };
    };
};
export declare const get_search_options: {
    data: {};
};
export declare const get_image_classification: {
    data: {};
};
export declare const upload_internal_doc: {
    data: {};
};
export declare const get_recent_searches: {
    data: {};
};
export declare const set_vitals: {
    data: {};
};
export declare const analyse_heartbeat: {
    data: {};
};
export declare const jivi_cares: {
    data: {
        data: string[];
    };
};
export declare const smart_vitals_dashboard: {
    data: {
        data: {
            items: {
                HEARTRATE: {
                    timestamp: string;
                    value: number;
                }[];
                HEARTRATEVARIABILITYRMSSD: {
                    timestamp: string;
                    value: number;
                }[];
                RESTINGHEARTRATE: {
                    timestamp: string;
                    value: number;
                }[];
                STEPS: {
                    timestamp: string;
                    value: number;
                }[];
                DISTANCE: {
                    timestamp: string;
                    value: number;
                }[];
                POWER: {
                    timestamp: string;
                    value: number;
                }[];
                STRESS: {
                    timestamp: string;
                    value: number;
                }[];
                STRAIN: {
                    timestamp: string;
                    value: number;
                }[];
                RECOVERY: {
                    timestamp: string;
                    value: number;
                }[];
                HEALTHSCORE: {
                    calc_value: string;
                    high: null;
                    low: null;
                    average: number;
                    calc_percent: number;
                    current: null;
                    last_updated: string;
                };
                STRESS_AGG: {
                    calc_value: string;
                    high: number;
                    low: number;
                    average: number;
                    calc_percent: number;
                    current: number;
                    last_updated: string;
                };
                STRAIN_AGG: {
                    calc_value: string;
                    high: number;
                    low: number;
                    average: number;
                    calc_percent: number;
                    current: number;
                    last_updated: string;
                };
                RECOVERY_AGG: {
                    calc_value: string;
                    high: number;
                    low: number;
                    average: number;
                    calc_percent: number;
                    current: number;
                    last_updated: string;
                };
                SLEEP_AGG: {};
            };
            metadata: {
                latest_agg_date: string;
            };
        };
    };
};
export declare const get_stress_from_data: {
    data: {};
};
export declare const get_stress_history: {
    data: {};
};
export declare const get_derma_doc_chat: {
    data: {};
};
export declare const get_derma_doc_details: {
    data: {};
};
export declare const get_derma_doc_treatments: {
    data: {};
};
export declare const edit_session_data: {
    data: {};
};
export declare const send_nutrition_chat_message: {
    data: {};
};
export declare const get_screening_chat: {
    data: {};
};
export declare const get_screening_ddx: {
    data: {};
};
export declare const get_products: {
    data: {};
};
export declare const update_order_details: {
    data: {};
};
export declare const log_meal: {
    data: {};
};
export declare const create_meal: {
    data: {};
};
export declare const add_meal: {
    data: {};
};
export declare const get_meal: {
    data: {};
};
export declare const get_plan_details: {
    data: {};
};
export declare const get_logged_meals: {
    data: {};
};
export declare const get_plan_analysis: {
    data: {};
};
export declare const update_plan_status: {
    data: {};
};
export declare const get_location: {
    data: {};
};
export declare const get_all_plans: {
    data: {};
};
export declare const customise_plan: {
    data: {};
};
export declare const async_plan: {
    data: {};
};
export declare const error_response: {
    data: {};
};

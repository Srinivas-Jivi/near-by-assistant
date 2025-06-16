export const generate = {
  data: {},
};

export const resend_otp = {
  data: {},
};

export const verify = {
  data: {},
};

export const skip_login = {
  data: {},
};

export const recent_news = {
  data: {},
};

export const session_token = {
  data: {},
};

export const top_symptoms = {
  data: {},
};

export const trending_issues = {
  data: {},
};

export const search_result = {
  data: {},
};

export const guided_chat = {
  data: {},
};

export const get_summary = {
  data: {},
};

export const get_differential_diagnosis = {
  data: {},
};

export const get_transcribe = {
  data: {},
};

export const chat_history = {
  data: {},
};

export const update_vitals = {
  data: {},
};

export const get_conversation = {
  data: {},
};

export const edit_chat = {
  data: {},
};

export const upload_doc = {
  data: {},
};

export const session_details = {
  data: {
    data: {
      name: "Fever, Cold, Chest Pain Assessment",
      summary: {
        symptoms: [],
        summary:
          "Patient presented with symptoms of fever, cold, body aches, chills, sore throat, cough, and chest pain. No history of heart problems or lung conditions. Differential diagnosis includes Influenza, Pneumonia, and Bronchitis.",
        diseases: ["Influenza", "Pneumonia", "Bronchitis"],
      },
      createdAt: "2024-02-26T00:25:57.000+00:00",
      sessionId: "02184865-6f60-41a7-9915-6d9efe1ab154",
      differentialDiagnosis: {
        diagnosis: [
          {
            name: "Pneumonia",
            reference: {
              WIKI_MEDICAL_TERMS:
                "https://huggingface.co/datasets/gamino/wiki_medical_terms",
            },
            description:
              "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing symptoms such as cough, fever, and difficulty breathing.",
            symptom: [
              {
                name: "Cough",
                isMatched: true,
              },
              {
                name: "Fever",
                isMatched: true,
              },
              {
                name: "Shortness of breath",
                isMatched: false,
              },
              {
                name: "Chest pain",
                isMatched: false,
              },
              {
                name: "Fatigue",
                isMatched: false,
              },
              {
                name: "Nausea",
                isMatched: false,
              },
              {
                name: "Vomiting",
                isMatched: false,
              },
              {
                name: "Confusion",
                isMatched: false,
              },
            ],
            conf: 25.0,
          },
          {
            name: "Influenza",
            reference: {
              WIKI_MEDICAL_TERMS:
                "https://huggingface.co/datasets/gamino/wiki_medical_terms",
            },
            description:
              "Influenza, commonly known as the flu, is a viral infection that affects the respiratory system. Symptoms include fever, cough, muscle aches, fatigue, and more.",
            symptom: [
              {
                name: "Fever",
                isMatched: true,
              },
              {
                name: "Cough",
                isMatched: true,
              },
              {
                name: "Sore throat",
                isMatched: false,
              },
              {
                name: "Runny or stuffy nose",
                isMatched: false,
              },
              {
                name: "Muscle or body aches",
                isMatched: false,
              },
              {
                name: "Headaches",
                isMatched: false,
              },
              {
                name: "Fatigue",
                isMatched: false,
              },
              {
                name: "Vomiting and diarrhea (more common in children)",
                isMatched: false,
              },
            ],
            conf: 25.0,
          },
          {
            name: "Bronchitis",
            reference: {
              WIKI_MEDICAL_TERMS:
                "https://huggingface.co/datasets/gamino/wiki_medical_terms",
            },
            description:
              "Bronchitis is characterized by symptoms such as cough, chest discomfort, fatigue, slight fever and chills, and mucus production.",
            symptom: [
              {
                name: "Cough",
                isMatched: true,
              },
              {
                name: "Shortness of breath",
                isMatched: false,
              },
              {
                name: "Chest discomfort",
                isMatched: false,
              },
              {
                name: "Fatigue",
                isMatched: false,
              },
              {
                name: "Slight fever and chills",
                isMatched: false,
              },
              {
                name: "Mucus production (may be clear, white, yellowish-gray or green)",
                isMatched: false,
              },
            ],
            conf: 16.0,
          },
        ],
      },
    },
  },
};

export const get_prompt = {
  data: {},
};

export const delete_prompt = {
  data: {},
};

export const update_prompt = {
  data: {},
};

export const update_feedback = {
  data: {},
};

export const get_text_audio = {
  data: {},
};

export const user_profiles = {
  data: {},
};

export const profile_config = {
  data: {},
};

export const update_profile = {
  data: {},
};

export const create_profile = {
  data: {},
};

export const get_languages = {
  data: {},
};

export const treatments = {
  data: {},
};

export const free_chat = {
  data: {},
};

export const analyse_reports = {
  data: {},
};

export const get_doctor_config = {
  data: {},
};

export const get_report_faqs = {
  data: {},
};

export const get_generic_content = {
  data: {},
};

export const get_config = {
  data: {},
};

export const get_second_opinion_chat = {
  data: {
    data: {
      response: [
        {
          header: "Have you experienced any trauma or injury recently?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header: "Where specifically is the pain located?",
          questions: [
            {
              code: "Arm",
              description: "Arm",
            },
            {
              code: "Leg",
              description: "Leg",
            },
            {
              code: "Hand",
              description: "Hand",
            },
            {
              code: "Foot",
              description: "Foot",
            },
            {
              code: "Other",
              description: "Other",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header: "Is the pain constant or does it come and go?",
          questions: [
            {
              code: "Constant",
              description: "Constant",
            },
            {
              code: "Comes and goes",
              description: "Comes and goes",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header:
            "Have you noticed any swelling or bruising in the affected area?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header:
            "Can you describe the type of pain you are feeling? (e.g. sharp, dull, throbbing)",
          questions: [
            {
              code: "Sharp",
              description: "Sharp",
            },
            {
              code: "Dull",
              description: "Dull",
            },
            {
              code: "Throbbing",
              description: "Throbbing",
            },
            {
              code: "Other",
              description: "Other",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header: "Does the pain worsen with movement or pressure?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header: "Have you had any previous fractures or bone injuries?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header:
            "Do you have any underlying medical conditions that may affect your bones?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header: "Have you recently started any new medications?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
        {
          header:
            "Have you had any recent X-rays or imaging done on the affected area?",
          questions: [
            {
              code: "Yes",
              description: "Yes",
            },
            {
              code: "No",
              description: "No",
            },
          ],
          questions_type: "multi-select",
        },
      ],
    },
    metrics: {
      timeTaken: 7245,
    },
  },
};

export const get_second_opinion_ddx = {
  data: {},
};

export const get_treatments_and_next_steps = {
  data: {},
};

export const get_one_mg_link = {
  data: {
    data: {
      deeplink:
        "https://jupiter.1mg.com?merchant_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJudW1iZXIiOiI3Mzc2MTExOTExIiwibWVyY2hhbnRfa2V5IjoiMzdkZWU2YjAtNjUwMC00MTk3LWFiOWYtMzE2M2E4ZGU5M2MxIiwic291cmNlIjoiaml2aSIsInJlZGlyZWN0X3VybCI6Imh0dHBzOi8vanVwaXRlcmFwaS4xbWcuY29tIiwiZXh0ZXJuYWxfaWQiOiIxIiwibWVyY2hhbnRfaWQiOiJiODc4ODg1YS1lZDJjLTQ3OGItODJlMS0zYmViYmE5Zjk1ZDEiLCJleHAiOjE3MTkzMDM1NzB9.ZBO56_wyaYZ-5aO93Mn5VotYW7f_5GcE6RQb7CTTta0&number=7376111911&_source=jivi",
    },
    metrics: {
      timeTaken: 22,
    },
  },
};

export const get_diseases_list = {
  data: {
    diseases: [
      {
        id: "D_3037",
        name: "malaria",
      },
      {
        id: "D_5463",
        name: "plasmodium_malariae_malaria",
      },
      {
        id: "D_2445",
        name: "cerebral_malaria",
      },
      {
        id: "D_4943",
        name: "plasmodium_ovale_malaria",
      },
      {
        id: "D_5201",
        name: "tracheomalacia",
      },
    ],
  },
  metrics: {
    timeTaken: 57,
  },
};

export const validate_referral = {
  data: {},
};

export const get_search_result = {
  data: {},
};

export const follow_up_chat = {
  data: {},
};

export const get_search_content = {
  data: {},
};

export const get_classify_query = {
  data: {
    data: {
      chat_response:
        "nihalà¤¬à¥à¤–à¤¾à¤° à¤¶à¤°à¥€à¤° à¤•à¥‡ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ à¤®à¥‡à¤‚ à¤…à¤¸à¥à¤¥à¤¾à¤¯à¥€ à¤µà¥ƒà¤¦à¥à¤§à¤¿ à¤¹à¥ˆ, à¤œà¥‹ à¤…à¤•à¥à¤¸à¤° à¤•à¤¿à¤¸à¥€ à¤¬à¥€à¤®à¤¾à¤°à¥€ à¤•à¥‡ à¤•à¤¾à¤°à¤£ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¯à¤¹ à¤¸à¤‚à¤•à¥à¤°à¤®à¤£, à¤¸à¥‚à¤œà¤¨ à¤¯à¤¾ à¤…à¤¨à¥à¤¯ à¤šà¤¿à¤•à¤¿à¤¤à¥à¤¸à¤¾ à¤¸à¥à¤¥à¤¿à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤ªà¥à¤°à¤¤à¤¿ à¤à¤• à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤¹à¥ˆà¥¤ à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤¶à¤°à¥€à¤° à¤•à¤¾ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤° 97Â°F (36.1Â°C) à¤¸à¥‡ 99Â°F (37.2Â°C) à¤¤à¤• à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤¬à¥à¤–à¤¾à¤° à¤•à¥‹ à¤†à¤® à¤¤à¥Œà¤° à¤ªà¤° 100.4Â°F (38Â°C) à¤¸à¥‡ à¤Šà¤ªà¤° à¤•à¤¾ à¤¤à¤¾à¤ªà¤®à¤¾à¤¨ à¤®à¤¾à¤¨à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤",
      related_queries: [
        "à¤¬à¥à¤–à¤¾à¤° à¤•à¥‡ à¤•à¤¾à¤°à¤£",
        "à¤¬à¥à¤–à¤¾à¤° à¤•à¤¾ à¤‡à¤²à¤¾à¤œ",
        "à¤¬à¥à¤–à¤¾à¤° à¤•à¥‡ à¤²à¤•à¥à¤·à¤£",
        "à¤¬à¤šà¥à¤šà¥‹à¤‚ à¤®à¥‡à¤‚ à¤¬à¥à¤–à¤¾à¤°",
        "à¤µà¤¯à¤¸à¥à¤•à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¬à¥à¤–à¤¾à¤°",
      ],
      search_entity_keys_translated: [
        "à¤ªà¤°à¤¿à¤šà¤¯",
        "à¤•à¤¾à¤°à¤£",
        "à¤œà¥‹à¤–à¤¿à¤®",
        "à¤²à¤•à¥à¤·à¤£",
        "à¤œà¤Ÿà¤¿à¤²à¤¤à¤¾à¤“à¤‚",
        "à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤¸à¥‡ à¤•à¤¬ à¤®à¤¿à¤²à¥‡à¤‚",
      ],
      images: [
        "https://crawler-ingestion-data.s3.amazonaws.com/dev/IMG/DRUGS/Semprex%2520D.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWVPR5UA6QCJAEBVT%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T200158Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=3841880b054860696e29ed1b5d0f6ed4132823a7d3b0472d226273e09979ccf7",
        "https://crawler-ingestion-data.s3.amazonaws.com/dev/IMG/DERM_NET/lipoid-proteinosis-figure-1__ProtectWyJQcm90ZWN0Il0_FocusFillWzI5NCwyMjIsIngiLDFd.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWVPR5UA6QCJAEBVT%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T200158Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1d71ef254489ebed456db091826fa36e5d04dcff8703c0b403022db6a2b82955",
        "https://crawler-ingestion-data.s3.amazonaws.com/dev/IMG/DRUGS/CLG07200.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWVPR5UA6QCJAEBVT%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T200158Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ec894250350f3ae45d8d0bbd14f30a51d17fa5a59ba4456a26d5a7c265bc302f",
        "https://crawler-ingestion-data.s3.amazonaws.com/dev/IMG/DRUGS/ibrance.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWVPR5UA6QCJAEBVT%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T200158Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f08a2f4ad51270fac1086a0c5ba1ef7ecea588b6304dc6aaa984ad53b146690c",
        "https://crawler-ingestion-data.s3.amazonaws.com/dev/IMG/DRUGS/ibrance.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWVPR5UA6QCJAEBVT%2F20240724%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240724T200158Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f08a2f4ad51270fac1086a0c5ba1ef7ecea588b6304dc6aaa984ad53b146690c",
      ],
      search_entity_keys: [
        "introduction",
        "causes",
        "risk_factors",
        "symptoms",
        "complications",
        "when_to_see_a_doctor",
      ],
      actions: [
        {
          action: "DR_JIVI",
          text: "Talk to Dr. Jivi",
        },
        {
          action: "SECOND_OPINION",
          text: "Get a second opinion",
        },
        {
          action: "BOOK_LAB_TEST",
          text: "Book lab test now",
        },
        {
          action: "ORDER_MEDICINE",
          text: "Order medicines now",
        },
      ],
      entity: "SYMPTOM",
      query_id: "56d5c3f9-5280-4c2f-9feb-5817f1361b82",
      search_entity_keys_v2: [
        {
          title: "introduction",
          translated: "à¤ªà¤°à¤¿à¤šà¤¯",
          actions: [
            {
              action: "DR_JIVI",
              text: "Talk to Dr. Jivi",
            },
            {
              action: "SECOND_OPINION",
              text: "Get a second opinion",
            },
            {
              action: "BOOK_LAB_TEST",
              text: "Book lab test now",
            },
          ],
        },
        {
          title: "causes",
          translated: "à¤•à¤¾à¤°à¤£",
        },
        {
          title: "risk_factors",
          translated: "à¤œà¥‹à¤–à¤¿à¤®",
        },
        {
          title: "symptoms",
          translated: "à¤²à¤•à¥à¤·à¤£",
        },
        {
          title: "complications",
          translated: "à¤œà¤Ÿà¤¿à¤²à¤¤à¤¾à¤“à¤‚",
        },
        {
          title: "when_to_see_a_doctor",
          translated: "à¤¡à¥‰à¤•à¥à¤Ÿà¤° à¤¸à¥‡ à¤•à¤¬ à¤®à¤¿à¤²à¥‡à¤‚",
        },
      ],
    },
    metrics: {
      timeTaken: 3365,
    },
  },
};

export const get_search_options = {
  data: {},
};

export const get_image_classification = {
  data: {},
};

export const upload_internal_doc = {
  data: {},
};

export const get_recent_searches = {
  data: {},
};

export const set_vitals = {
  data: {},
};

export const analyse_heartbeat = {
  data: {},
};

export const jivi_cares = {
  data: {
    data: [
      "Incorporate relaxation techniques like meditation to manage stress and improve diabetes control.",
      "Take short breaks throughout the day to reduce strain on your heart.",
      "Focus on improving your recovery rate by prioritizing sleep and hydration.",
      "Engage in mindfulness exercises to lower stress levels and enhance overall well-being.",
      "Maintain a balanced diet to support your diabetes management and recovery.",
    ],
  },
};

export const smart_vitals_dashboard = {
  data: {
    data: {
      items: {
        HEARTRATE: [
          {
            timestamp: "2024-09-15 11:00:00",
            value: 112.2,
          },
          {
            timestamp: "2024-09-16 11:00:00",
            value: 94.6,
          },
          {
            timestamp: "2024-09-17 11:00:00",
            value: 100.2,
          },
          {
            timestamp: "2024-09-18 07:00:00",
            value: 94.05,
          },
        ],
        HEARTRATEVARIABILITYRMSSD: [
          {
            timestamp: "2024-09-15 11:00:00",
            value: 169.0,
          },
          {
            timestamp: "2024-09-16 11:00:00",
            value: 80.0,
          },
          {
            timestamp: "2024-09-17 11:00:00",
            value: 150.0,
          },
          {
            timestamp: "2024-09-18 07:00:00",
            value: 98.0,
          },
        ],
        RESTINGHEARTRATE: [
          {
            timestamp: "2024-09-18 07:00:00",
            value: 86.0,
          },
        ],
        STEPS: [
          {
            timestamp: "2024-09-12 18:00:00",
            value: 2764.0,
          },
          {
            timestamp: "2024-09-13 18:00:00",
            value: 4820.0,
          },
          {
            timestamp: "2024-09-14 18:00:00",
            value: 1028.0,
          },
          {
            timestamp: "2024-09-15 18:00:00",
            value: 3450.0,
          },
          {
            timestamp: "2024-09-16 18:00:00",
            value: 2196.0,
          },
          {
            timestamp: "2024-09-17 10:00:00",
            value: 46.0,
          },
          {
            timestamp: "2024-09-17 11:00:00",
            value: 114.0,
          },
          {
            timestamp: "2024-09-17 13:00:00",
            value: 642.0,
          },
          {
            timestamp: "2024-09-17 14:00:00",
            value: 136.0,
          },
          {
            timestamp: "2024-09-17 15:00:00",
            value: 400.0,
          },
          {
            timestamp: "2024-09-17 17:00:00",
            value: 110.0,
          },
          {
            timestamp: "2024-09-17 18:00:00",
            value: 1976.0,
          },
          {
            timestamp: "2024-09-18 05:00:00",
            value: 844.0,
          },
          {
            timestamp: "2024-09-18 06:00:00",
            value: 12.0,
          },
          {
            timestamp: "2024-09-18 18:00:00",
            value: 1118.0,
          },
        ],
        DISTANCE: [
          {
            timestamp: "2024-09-17 06:00:00",
            value: 684.5300064086914,
          },
          {
            timestamp: "2024-09-17 10:00:00",
            value: 108.03100000000002,
          },
          {
            timestamp: "2024-09-17 11:00:00",
            value: 267.7289999999998,
          },
          {
            timestamp: "2024-09-17 13:00:00",
            value: 1634.6819999999996,
          },
          {
            timestamp: "2024-09-17 14:00:00",
            value: 273.7680000000001,
          },
          {
            timestamp: "2024-09-17 15:00:00",
            value: 922.2000000000005,
          },
          {
            timestamp: "2024-09-17 17:00:00",
            value: 221.43000000000006,
          },
          {
            timestamp: "2024-09-18 05:00:00",
            value: 1657.6100000000006,
          },
          {
            timestamp: "2024-09-18 06:00:00",
            value: 20.13,
          },
        ],
        POWER: [
          {
            timestamp: "2024-09-18 07:00:00",
            value: 77.1,
          },
        ],
        STRESS: [
          {
            timestamp: "2024-09-15 11:00:00",
            value: 0,
          },
          {
            timestamp: "2024-09-16 11:00:00",
            value: 44.25,
          },
          {
            timestamp: "2024-09-17 11:00:00",
            value: 0,
          },
          {
            timestamp: "2024-09-18 07:00:00",
            value: 26.25,
          },
        ],
        STRAIN: [
          {
            timestamp: "2024-09-15 11:00:00",
            value: 0.0,
          },
          {
            timestamp: "2024-09-16 11:00:00",
            value: 44.25,
          },
          {
            timestamp: "2024-09-17 11:00:00",
            value: 44.25,
          },
          {
            timestamp: "2024-09-18 07:00:00",
            value: 70.5,
          },
        ],
        RECOVERY: [
          {
            timestamp: "2024-09-17 11:00:00",
            value: 70.0,
          },
        ],
        HEALTHSCORE: {
          calc_value: "High",
          high: null,
          low: null,
          average: 70.7875,
          calc_percent: 70.7875,
          current: null,
          last_updated: "2024-09-17 11:00:00",
        },
        STRESS_AGG: {
          calc_value: "Low",
          high: 44.25,
          low: 0,
          average: 17.625,
          calc_percent: 59.32203389830508,
          current: 26.25,
          last_updated: "2024-09-18 07:00:00",
        },
        STRAIN_AGG: {
          calc_value: "Low",
          high: 70.5,
          low: 0.0,
          average: 39.75,
          calc_percent: 100.0,
          current: 70.5,
          last_updated: "2024-09-18 07:00:00",
        },
        RECOVERY_AGG: {
          calc_value: "High",
          high: 70.0,
          low: 70.0,
          average: 70.0,
          calc_percent: 100.0,
          current: 70.0,
          last_updated: "2024-09-17 11:00:00",
        },
        SLEEP_AGG: {},
      },
      metadata: {
        latest_agg_date: "2024-09-23 21:48:09",
      },
    },
  },
};

export const get_stress_from_data = {
  data: {},
};

export const get_stress_history = {
  data: {},
};

export const get_derma_doc_chat = {
  data: {},
};

export const get_derma_doc_details = {
  data: {},
};

export const get_derma_doc_treatments = {
  data: {},
};

export const edit_session_data = {
  data: {},
};

export const send_nutrition_chat_message = {
  data: {},
};

export const get_screening_chat = {
  data: {},
};

export const get_screening_ddx = {
  data: {},
};

export const get_products = {
  data: {},
};

export const update_order_details = {
  data: {},
};

export const log_meal = {
  data: {},
};

export const create_meal = {
  data: {},
};

export const add_meal = {
  data: {},
};

export const get_meal = {
  data: {},
};

export const get_plan_details = {
  data: {},
};

export const get_logged_meals = {
  data: {},
};

export const get_plan_analysis = {
  data: {},
};

export const update_plan_status = {
  data: {},
};

export const get_location = {
  data: {},
};

export const get_all_plans = {
  data: {},
};

export const customise_plan = {
  data: {},
};

export const async_plan = {
  data: {},
};

export const error_response = {
  data: {},
};

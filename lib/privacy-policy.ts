// Privacy Policy copy, kept verbatim as supplied by the client. The page at
// app/(public)/privacy-policy renders it; URLs, emails and phone numbers in
// the text are turned into links there.

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "lines"; title: string; lines: string[] };

export interface PolicySection {
  title: string;
  blocks: PolicyBlock[];
}

export const privacyPolicy: {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: PolicySection[];
} = {
  title: "Privacy Policy",
  effectiveDate: "27 November 2026",
  lastUpdated: "27 November 2026",
  sections: [
    {
      title: "1. Introduction",
      blocks: [
        { type: "p", text: 'VR Unisex Salon ("VR Unisex Salon", "we", "us" or "our") respects your privacy and is committed to protecting your personal information.' },
        { type: "p", text: "This Privacy Policy explains how we collect, use, process, store, disclose and protect personal information when you visit our website, enquire about our services, book an appointment, visit our salons, interact with our social media channels or respond to our advertising campaigns." },
        { type: "p", text: "We process personal information in accordance with applicable data protection laws in the United Arab Emirates, including Federal Decree-Law No. 45 of 2021 concerning the Protection of Personal Data, where applicable." },
      ],
    },
    {
      title: "2. Scope of This Privacy Policy",
      blocks: [
        { type: "p", text: "This Privacy Policy applies to information collected through:" },
        {
          type: "ul",
          items: [
            "Our official website, https://www.vrunisexsalon.com/",
            "Online appointment booking and enquiry forms.",
            "Facebook and Instagram Lead Forms and advertising campaigns.",
            "WhatsApp, telephone, SMS and email communications.",
            "Social media pages and direct messages.",
            "In-person visits to our salon branches.",
            "Promotional campaigns, special offers and customer feedback forms.",
            "Other authorised communication and customer engagement channels.",
          ],
        },
      ],
    },
    {
      title: "3. Personal Information We Collect",
      blocks: [
        { type: "p", text: "Depending on how you interact with us, we may collect the following categories of personal information." },
        { type: "h3", text: "3.1 Personal and Contact Information" },
        {
          type: "ul",
          items: [
            "Full name.",
            "Telephone or mobile number.",
            "Email address.",
            "Preferred method of communication.",
            "Other information you voluntarily provide when contacting us.",
          ],
        },
        { type: "h3", text: "3.2 Appointment and Service Information" },
        {
          type: "ul",
          items: [
            "Services or treatments you are interested in.",
            "Preferred appointment date and time.",
            "Preferred salon branch.",
            "Booking and appointment history.",
            "Service preferences and special requests.",
            "Information relating to promotional packages or offers you enquire about.",
          ],
        },
        { type: "h3", text: "3.3 Treatment and Consultation Information" },
        { type: "p", text: "Where necessary to provide safe and appropriate salon services, we may request relevant information concerning:" },
        {
          type: "ul",
          items: [
            "Allergies or sensitivities.",
            "Skin, hair or scalp conditions.",
            "Previous treatments.",
            "Product sensitivities.",
            "Other information relevant to the suitability and safety of a requested service.",
          ],
        },
        { type: "p", text: "Such information will be collected only when reasonably necessary, handled confidentially and processed with appropriate consent or another lawful basis permitted under applicable law." },
        { type: "p", text: "We do not request sensitive health information through general advertising lead forms." },
        { type: "h3", text: "3.4 Payment and Transaction Information" },
        { type: "p", text: "When you purchase a service or product, we may collect information relating to:" },
        {
          type: "ul",
          items: [
            "Services or products purchased.",
            "Transaction amounts.",
            "Payment status and method.",
            "Billing information, where required.",
          ],
        },
        { type: "p", text: "Where third-party payment processors are used, payment information may be processed directly by those providers under their respective privacy and security policies." },
        { type: "p", text: "We do not request payment card details, banking passwords or financial credentials through advertising lead forms." },
        { type: "h3", text: "3.5 Technical and Website Usage Information" },
        { type: "p", text: "When you visit our website, certain information may be collected automatically, including:" },
        {
          type: "ul",
          items: [
            "IP address.",
            "Browser type and version.",
            "Device type and operating system.",
            "Pages visited and browsing activity.",
            "Referral sources.",
            "Approximate geographic location.",
            "Website interaction and engagement information.",
            "Cookie identifiers and similar technical information.",
          ],
        },
        { type: "h3", text: "3.6 Photographs, Videos and Testimonials" },
        { type: "p", text: "With appropriate permission, we may collect photographs, videos, testimonials or other content relating to your salon experience, including before-and-after treatment results." },
        { type: "p", text: "We will obtain appropriate consent before using identifiable customer photographs or videos for promotional or advertising purposes." },
      ],
    },
    {
      title: "4. How We Collect Personal Information",
      blocks: [
        { type: "p", text: "We may collect personal information:" },
        {
          type: "ul",
          items: [
            "Directly from you when you complete an enquiry or appointment form.",
            "When you contact us through WhatsApp, telephone, email or social media.",
            "When you submit a Facebook or Instagram Instant Form.",
            "During salon visits, consultations and appointments.",
            "When you participate in promotional campaigns or provide feedback.",
            "Automatically through cookies, analytics tools and similar technologies.",
            "Through authorised third-party platforms involved in providing our services.",
          ],
        },
        { type: "p", text: "We aim to collect only information that is relevant and reasonably necessary for the intended purpose." },
      ],
    },
    {
      title: "5. How We Use Your Personal Information",
      blocks: [
        { type: "p", text: "We may use your personal information for the following purposes:" },
        {
          type: "ul",
          items: [
            "Responding to enquiries about our salon services.",
            "Providing information about treatments, packages, pricing and availability.",
            "Scheduling, confirming, rescheduling or cancelling appointments.",
            "Sending appointment reminders and service-related communications.",
            "Delivering personalised hair, beauty, grooming and wellness services.",
            "Assessing treatment suitability and supporting customer safety.",
            "Processing transactions and maintaining appropriate business records.",
            "Providing customer support and resolving complaints.",
            "Improving our website, services and customer experience.",
            "Understanding customer preferences and service demand.",
            "Measuring the effectiveness of advertising and marketing campaigns.",
            "Sending promotional communications where permitted by law.",
            "Preventing fraud, misuse and unauthorised access.",
            "Complying with applicable legal, regulatory and contractual obligations.",
          ],
        },
        { type: "p", text: "We will not use your personal information for unrelated purposes unless permitted by applicable law or with your appropriate consent." },
      ],
    },
    {
      title: "6. Legal Basis for Processing Personal Information",
      blocks: [
        { type: "p", text: "We process personal information on an appropriate lawful basis under applicable UAE data protection laws." },
        { type: "p", text: "Depending on the circumstances, this may include:" },
        {
          type: "ul",
          items: [
            "Your consent to the processing of your personal information.",
            "Taking steps at your request before providing a service.",
            "Performing our contractual obligations in connection with your appointment or purchase.",
            "Complying with applicable legal or regulatory obligations.",
            "Protecting your safety or vital interests where permitted by law.",
            "Establishing, exercising or defending legal claims.",
            "Other circumstances expressly permitted under applicable data protection legislation.",
          ],
        },
        { type: "p", text: "Where processing is based on your consent, you may withdraw that consent at any time." },
        { type: "p", text: "Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal." },
      ],
    },
    {
      title: "7. Facebook and Instagram Lead Forms",
      blocks: [
        { type: "p", text: "VR Unisex Salon may use Meta Platforms, including Facebook and Instagram, to promote its services, advertise special offers and collect customer enquiries through Instant Forms and other lead generation features." },
        { type: "p", text: "When you voluntarily submit a lead form, we may receive information such as:" },
        {
          type: "ul",
          items: [
            "Your name.",
            "Telephone number.",
            "Email address.",
            "Services or promotional offers you are interested in.",
            "Preferred appointment date or time.",
            "Responses to questions included in the form.",
          ],
        },
        { type: "p", text: "We use this information to:" },
        {
          type: "ul",
          items: [
            "Respond to your enquiry.",
            "Provide relevant service and promotional offer details.",
            "Discuss your requirements.",
            "Assist you with appointment scheduling.",
            "Follow up regarding the service or offer you have expressed interest in.",
            "Manage enquiries and measure the effectiveness of our campaigns, where permitted.",
          ],
        },
        { type: "p", text: "Our authorised representatives may contact you through telephone, WhatsApp, SMS or email in connection with your enquiry." },
        { type: "p", text: "Submitting a lead form does not automatically confirm an appointment or constitute consent to receive unrelated promotional communications." },
        { type: "p", text: "We do not sell or rent personal information collected through Meta Lead Forms. Such information may be accessed by authorised personnel and service providers acting on our behalf for the purposes described in this Privacy Policy and in accordance with applicable Meta terms." },
        { type: "p", text: "Meta may independently process your information in accordance with its own privacy policies and platform terms." },
        { type: "p", text: "For further information, please refer to Meta's Privacy Policy:" },
        { type: "p", text: "https://www.facebook.com/privacy/policy/" },
      ],
    },
    {
      title: "8. WhatsApp and Other Communication Channels",
      blocks: [
        { type: "p", text: "We may use WhatsApp, telephone, SMS, email and social media messaging to communicate with customers." },
        { type: "p", text: "These communications may include:" },
        {
          type: "ul",
          items: [
            "Responses to service enquiries.",
            "Appointment confirmations and reminders.",
            "Information about requested treatments or packages.",
            "Appointment changes or cancellations.",
            "Customer support and follow-up communications.",
            "Promotional messages where appropriate consent has been obtained or otherwise permitted by law.",
          ],
        },
        { type: "p", text: "When you communicate with us through WhatsApp or another third-party messaging platform, your information may also be processed by the relevant platform provider under its own privacy policy." },
        { type: "p", text: "We recommend that you do not share unnecessary sensitive personal information, payment credentials or confidential documents through general messaging channels." },
        { type: "p", text: "WhatsApp Privacy Policy:" },
        { type: "p", text: "https://www.whatsapp.com/legal/privacy-policy" },
      ],
    },
    {
      title: "9. Marketing and Promotional Communications",
      blocks: [
        { type: "p", text: "Subject to applicable laws and your communication preferences, we may send you information about:" },
        {
          type: "ul",
          items: [
            "Special offers and discounts.",
            "Seasonal promotions.",
            "New salon services and treatments.",
            "Beauty and grooming packages.",
            "Customer loyalty programmes, where available.",
            "Salon announcements and events.",
          ],
        },
        { type: "p", text: "Where consent is required, we will obtain your consent before sending marketing communications." },
        { type: "p", text: "You may opt out of promotional communications at any time by:" },
        {
          type: "ul",
          items: [
            "Contacting us using the details provided in this Privacy Policy.",
            "Requesting removal from our promotional contact list.",
            "Replying with an opt-out request.",
            "Using an unsubscribe option, where available.",
          ],
        },
        { type: "p", text: "Opting out of marketing communications will not prevent us from sending necessary service-related messages, such as appointment confirmations or cancellation notices." },
      ],
    },
    {
      title: "10. Cookies and Tracking Technologies",
      blocks: [
        { type: "p", text: "Our website may use cookies, tags, pixels and similar technologies to support website functionality, understand visitor behaviour and improve our marketing activities." },
        { type: "p", text: "These technologies may include:" },
        { type: "h3", text: "Essential Cookies" },
        { type: "p", text: "Used to support website functionality, security and essential features." },
        { type: "h3", text: "Analytics Cookies" },
        { type: "p", text: "Used to understand how visitors interact with our website, identify popular pages and improve website performance." },
        { type: "h3", text: "Functional Cookies" },
        { type: "p", text: "Used to remember preferences and improve the browsing experience." },
        { type: "h3", text: "Advertising and Marketing Cookies" },
        { type: "p", text: "Used to measure advertising effectiveness, understand campaign performance and deliver relevant advertisements where permitted." },
        { type: "p", text: "We may use third-party technologies such as Google Analytics, Google Tag Manager, Meta Pixel or similar tools where configured and enabled." },
        { type: "p", text: "These technologies may collect information about your device, browsing activity and interactions with our website." },
        { type: "p", text: "Where required by applicable law, we will obtain your consent before activating non-essential cookies or tracking technologies." },
        { type: "p", text: "You may manage cookie preferences through available website consent controls or your browser settings. Disabling certain cookies may affect some website functionality." },
      ],
    },
    {
      title: "11. Sharing and Disclosure of Personal Information",
      blocks: [
        { type: "p", text: "We do not sell or rent your personal information." },
        { type: "p", text: "However, we may share relevant information with authorised parties where reasonably necessary to provide our services, operate our business or comply with legal obligations." },
        { type: "p", text: "These parties may include:" },
        {
          type: "ul",
          items: [
            "Authorised salon staff and management.",
            "Website hosting and maintenance providers.",
            "Appointment booking and customer management service providers.",
            "Digital marketing and advertising agencies.",
            "Advertising and social media platforms.",
            "Communication service providers.",
            "Analytics and technology service providers.",
            "Payment processing providers.",
            "Professional advisers, including legal and accounting professionals.",
            "Government authorities, regulators or law enforcement agencies where legally required.",
          ],
        },
        { type: "p", text: "Where third parties process personal information on our behalf, we take reasonable steps to ensure appropriate confidentiality, security and data protection obligations are in place." },
        { type: "p", text: "We may also disclose personal information in connection with a lawful business restructuring, merger, acquisition or transfer of business ownership, subject to applicable data protection requirements." },
      ],
    },
    {
      title: "12. International Data Transfers",
      blocks: [
        { type: "p", text: "Some technology platforms, hosting providers, communication services or authorised service providers may process or store personal information outside the United Arab Emirates." },
        { type: "p", text: "Where personal information is transferred internationally, we will take appropriate steps to ensure that such transfers comply with applicable UAE data protection requirements." },
        { type: "p", text: "Depending on the circumstances, these steps may include appropriate contractual safeguards, recognised data protection mechanisms or other transfer arrangements permitted by law." },
      ],
    },
    {
      title: "13. Data Retention",
      blocks: [
        { type: "p", text: "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected." },
        { type: "p", text: "Retention periods may depend on:" },
        {
          type: "ul",
          items: [
            "The nature and purpose of the information.",
            "Ongoing customer relationships.",
            "Appointment and transaction history.",
            "Customer support requirements.",
            "Applicable legal, accounting and regulatory obligations.",
            "The need to resolve disputes or protect legal rights.",
          ],
        },
        { type: "p", text: "When personal information is no longer required, we will take appropriate steps to securely delete, destroy or anonymise it, unless further retention is required or permitted by law." },
      ],
    },
    {
      title: "14. Data Security",
      blocks: [
        { type: "p", text: "We are committed to protecting personal information against unauthorised access, disclosure, alteration, misuse, loss or destruction." },
        { type: "p", text: "We implement reasonable technical and organisational safeguards appropriate to the nature of the information we process." },
        { type: "p", text: "These may include:" },
        {
          type: "ul",
          items: [
            "Restricted access to customer information.",
            "Password-protected systems.",
            "Secure data storage and transmission where appropriate.",
            "Confidentiality obligations for authorised personnel.",
            "Appropriate access controls for third-party service providers.",
            "Periodic review of information handling practices.",
          ],
        },
        { type: "p", text: "While we take reasonable precautions to safeguard personal information, no electronic transmission or storage system can guarantee absolute security." },
      ],
    },
    {
      title: "15. Personal Data Breaches",
      blocks: [
        { type: "p", text: "If a personal data breach occurs, we will take appropriate steps to investigate, contain and address the incident." },
        { type: "p", text: "Where required by applicable law, we will notify the relevant authorities and affected individuals in accordance with applicable notification requirements." },
      ],
    },
    {
      title: "16. Your Privacy Rights",
      blocks: [
        { type: "p", text: "Subject to applicable UAE data protection laws and relevant legal exceptions, you may have the right to:" },
        {
          type: "ul",
          items: [
            "Request information about how your personal data is processed.",
            "Request access to your personal information.",
            "Request correction or updating of inaccurate or incomplete information.",
            "Request deletion of personal information.",
            "Request restriction or cessation of certain processing activities.",
            "Object to processing for direct marketing purposes.",
            "Withdraw previously provided consent.",
            "Request transfer or portability of personal information where applicable.",
            "Object to certain decisions based solely on automated processing, where applicable.",
            "Submit a complaint to the relevant data protection authority.",
          ],
        },
        { type: "p", text: "You may exercise your applicable privacy rights by contacting us using the details provided below." },
        { type: "p", text: "We may request reasonable information to verify your identity before processing a privacy-related request." },
        { type: "p", text: "We will respond to valid requests in accordance with applicable legal requirements." },
      ],
    },
    {
      title: "17. Automated Processing and Advertising",
      blocks: [
        { type: "p", text: "We may use advertising, analytics and customer management technologies to understand customer interests, measure campaign performance and improve the relevance of our communications." },
        { type: "p", text: "Third-party advertising platforms may use automated systems to determine which advertisements are displayed to users." },
        { type: "p", text: "Where automated processing is subject to specific data protection requirements, we will comply with applicable legal obligations and respect your relevant privacy rights." },
      ],
    },
    {
      title: "18. Children's Privacy",
      blocks: [
        { type: "p", text: "Our online advertising lead forms are intended for individuals aged 18 years or older." },
        { type: "p", text: "Where salon services are requested for a minor, we may require the involvement and appropriate consent of a parent or legal guardian." },
        { type: "p", text: "We do not knowingly collect personal information from children through our advertising lead forms." },
        { type: "p", text: "If we become aware that children's personal information has been collected without appropriate authorisation, we will take reasonable steps to address the matter in accordance with applicable law." },
      ],
    },
    {
      title: "19. Customer Photographs, Videos and Reviews",
      blocks: [
        { type: "p", text: "We may invite customers to share feedback, testimonials, photographs or videos relating to their salon experience." },
        { type: "p", text: "Identifiable photographs, videos or privately submitted testimonials will not be used for promotional purposes without appropriate permission." },
        { type: "p", text: "Where consent has been provided, such content may be published on:" },
        {
          type: "ul",
          items: [
            "Our website.",
            "Official social media channels.",
            "Digital advertisements.",
            "Promotional materials.",
            "Other authorised marketing channels.",
          ],
        },
        { type: "p", text: "Customers may contact us to withdraw their consent for future use, subject to applicable legal requirements and reasonable limitations concerning materials already distributed." },
        { type: "p", text: "Reviews independently published on third-party platforms are also subject to those platforms' respective policies." },
      ],
    },
    {
      title: "20. Third-Party Websites and Services",
      blocks: [
        { type: "p", text: "Our website and communications may contain links to third-party websites, social media platforms, maps, messaging services and other external resources." },
        { type: "p", text: "These third parties operate under their own privacy policies and terms of service." },
        { type: "p", text: "VR Unisex Salon is not responsible for the independent privacy practices, content or security measures of external websites and platforms." },
        { type: "p", text: "We encourage you to review their privacy policies before providing personal information." },
      ],
    },
    {
      title: "21. Information Provided About Other Individuals",
      blocks: [
        { type: "p", text: "If you provide personal information about another individual, such as when arranging a couple's treatment or booking an appointment on someone else's behalf, you should ensure that you have appropriate permission to share their information." },
        { type: "p", text: "You should also inform the individual about the purposes for which their information is being provided and the availability of this Privacy Policy." },
      ],
    },
    {
      title: "22. Changes to This Privacy Policy",
      blocks: [
        { type: "p", text: "We may update this Privacy Policy periodically to reflect changes in our services, business operations, technology, data handling practices or applicable legal requirements." },
        { type: "p", text: "The revised version will be published on our website with an updated revision date." },
        { type: "p", text: "Where required, we will provide additional notice of material changes or obtain further consent." },
        { type: "p", text: "We encourage you to review this Privacy Policy periodically." },
      ],
    },
    {
      title: "23. Contact Us",
      blocks: [
        { type: "p", text: "If you have any questions, concerns or requests regarding this Privacy Policy or the processing of your personal information, please contact us:" },
        { type: "lines", title: "VR Unisex Salon", lines: [] },
        {
          type: "lines",
          title: "Main Branch:",
          lines: [
            "The Canvas Dubai – MGallery Hotel Collection",
            "23 Kuwait Street, Port Rashid",
            "Dubai 52700, United Arab Emirates",
          ],
        },
        {
          type: "lines",
          title: "Second Branch:",
          lines: [
            "Ground Floor, Sea View Hotel",
            "Al Mina Street, Beside Sharaf Building",
            "Al Raffa, Dubai, United Arab Emirates",
          ],
        },
        {
          type: "lines",
          title: "",
          lines: [
            "Phone: +971 55 956 6627",
            "Email: info@vrunisexsalon.com",
            "Website: https://www.vrunisexsalon.com/",
          ],
        },
        { type: "p", text: "We are committed to addressing privacy-related enquiries and handling your personal information responsibly, transparently and in accordance with applicable laws." },
      ],
    },
  ],
};

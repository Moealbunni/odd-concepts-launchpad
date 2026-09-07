/**
 * Bilingual content source of truth (English / Arabic).
 *
 * `en` defines the shape; `ar` must match it exactly (enforced by the
 * `Translations` type). Consumers read the resolved object via
 * `useLanguage().t` — e.g. `t.hero.subhead`.
 *
 * Proper nouns (client names, brand name, email) are intentionally NOT
 * translated.
 */

export const en = {
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    growthPlan: "Free Growth Plan",
    privacy: "Privacy",
    terms: "Terms",
  },
  site: {
    tagline: "Premium Digital Growth Studio",
    positioning:
      "A premium digital growth partner helping businesses turn attention into customers.",
    primaryCta: "Get Your Free Growth Plan",
    whatsappCta: "WhatsApp Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    whatsappAria: "Message us on WhatsApp",
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "Digital growth studio · Dubai",
    h1: "We don’t just build websites. We build the system that ",
    h1Gradient: "brings you customers.",
    subhead:
      "Premium websites, sharper visibility and modern content — designed and run as one system that turns attention into enquiries and customers.",
    secondaryLink: "See the Growth System",
    or: "or",
    whatsappInline: "message us on WhatsApp",
    reassurance: "No inflated claims · No borrowed proof · Built with care in Dubai",
    captionSmall: "UAE Today",
    captionLarge: "World Wide Tomorrow",
    skylineAlt:
      "Dubai skyline at night with the Burj Khalifa and glowing light trails",
  },
  reality: {
    eyebrow: "The reality",
    title:
      "You’re great at what you do. Online, the business that shows up first wins.",
    p1: "Most customers choose whoever they find and trust first — not always the best option, just the easiest to find and the most convincing at a glance.",
    p2: "If you’re hard to find or easy to overlook, you lose them before you ever get the chance to compete.",
    imageAlt:
      "Dubai city street at night with blue light trails rising between towers",
  },
  growth: {
    eyebrow: "The Growth System",
    title: "One connected system — from invisible to ",
    titleGradient: "growing",
    titleAfter: ".",
    subtitle:
      "Six stages, one engine. Each stage builds on the last — turning quiet visibility into a business that grows on its own.",
    button: "Map this system to your business",
    note: "Free Growth Plan — no pressure, no obligation.",
    aria: "Growth system diagram: six connected stages that turn attention into growth — Visibility, Trust, Preference, Capture, Response, Growth.",
    stagesAria: "Growth system stages",
    stages: [
      {
        n: "01",
        name: "Visibility",
        verb: "Get found",
        line: "When people search, you’re the one they find.",
      },
      {
        n: "02",
        name: "Trust",
        verb: "Look premium",
        line: "A first impression that makes you the obvious choice.",
      },
      {
        n: "03",
        name: "Preference",
        verb: "Get chosen",
        line: "Reputation and content that tip the decision your way.",
      },
      {
        n: "04",
        name: "Capture",
        verb: "Get the enquiry",
        line: "Make it effortless to take the next step.",
      },
      {
        n: "05",
        name: "Response",
        verb: "Never miss a lead",
        line: "Every enquiry answered, day or night.",
      },
      {
        n: "06",
        name: "Growth",
        verb: "Grow on autopilot",
        line: "One visit becomes repeat, compounding revenue.",
      },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "Everything that turns attention into customers — connected.",
    subtitle:
      "Most agencies sell you a single service and leave you to join the dots. We design and run one system — every part below plugs into a stage of your growth.",
    seeAll: "See all services",
    items: [
      {
        name: "Premium Websites",
        line: "A fast, modern site that makes the right first impression.",
      },
      {
        name: "Google Business Profile",
        line: "Show up where local customers are already searching.",
      },
      {
        name: "Review Management",
        line: "Build trust before a single conversation happens.",
      },
      {
        name: "UGC Content",
        line: "Real, relatable content that keeps your brand top of mind.",
      },
      {
        name: "Video Advertising",
        line: "Short-form videos that stop the scroll and sell the outcome.",
      },
      {
        name: "AI Avatar Videos",
        line: "Polished brand videos at a pace and cost that scales.",
      },
      {
        name: "Meta Ads",
        line: "Reach the right people with campaigns built to convert.",
      },
      {
        name: "Instagram & TikTok Ads",
        line: "Show up where attention lives and turn it into enquiries.",
      },
      {
        name: "AI Receptionist",
        line: "Capture and qualify leads around the clock.",
      },
      {
        name: "Apps",
        line: "Custom mobile and web apps that extend your reach.",
      },
      {
        name: "Marketing Automation",
        line: "Turn one-off enquiries into steady, automated follow-up.",
      },
      {
        name: "CRM Automation",
        line: "Keep every lead tracked, nurtured and never forgotten.",
      },
      {
        name: "Business Intelligence",
        line: "Clear dashboards that show what’s actually driving growth.",
      },
    ],
  },
  industries: {
    eyebrow: "Who we build for",
    title: "We speak your industry — not “business in general”.",
    subtitle:
      "We work with ambitious local businesses that rely on trust, reputation and a steady flow of new customers.",
    closing: "And any local business that deserves more customers than it’s getting.",
    items: [
      {
        name: "Cafés & Restaurants",
        line: "Fill quiet tables and turn first-time guests into regulars.",
      },
      {
        name: "Salons & Barbers",
        line: "Keep the chairs full and the calendar booked.",
      },
      {
        name: "Dental Clinics",
        line: "Become the practice patients trust before they call.",
      },
      {
        name: "Medical & Wellness",
        line: "Turn quiet searches into booked appointments.",
      },
      {
        name: "Gyms & Studios",
        line: "Attract members who actually stay.",
      },
      {
        name: "Real Estate",
        line: "Get in front of buyers and sellers first.",
      },
      {
        name: "Accounting & Finance",
        line: "Win clients who value expertise over price.",
      },
      {
        name: "Law Firms",
        line: "Be the firm clients choose with confidence.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Simple to start. Built to last.",
    subtitle:
      "A clear, three-step path from where you are now to a system that brings you customers.",
    steps: [
      {
        title: "Get your free Growth Plan",
        line: "We review how easily customers find you, how much you’re trusted at a glance, and where enquiries slip away.",
      },
      {
        title: "We build your system",
        line: "Website, profiles, content and lead capture — designed and connected as one, not bolted together.",
      },
      {
        title: "You grow",
        line: "We run it and keep improving it, so you can focus on your business.",
      },
    ],
  },
  concept: {
    eyebrow: "Proof of craft",
    title: "Proof is in the work.",
    subtitle:
      "We’re a new studio, so we’ll be straight with you — what you see here is concept work, the standard we build to. Every piece is labelled for exactly what it is. When we have client work we’re proud to show, it’ll live right here beside it.",
    tag: "Concept",
    disclaimer:
      "All work shown is conceptual and created for demonstration purposes. No clients, logos, results or testimonials are invented.",
    items: [
      {
        title: "The Growth System",
        line: "How visibility, trust, content and conversion fit together as one connected machine.",
      },
      {
        title: "Website & interface design",
        line: "Premium, fast, conversion-focused layouts that sell before the visitor reads a second paragraph.",
      },
      {
        title: "Brand & content concepts",
        line: "Tone, messaging and visual systems that make a local business feel unmistakably credible.",
      },
      {
        title: "Industry brand photography",
        line: "Conceptual photo direction for salons, clinics, cafés and studios — the kind of visual trust that stops the scroll.",
      },
    ],
  },
  why: {
    eyebrow: "About us",
    title: "A studio, not an agency.",
    subtitle: "Deliberately small, so clients work directly with the people doing the work.",
    p1: "Odd Concepts Digital is a boutique digital growth studio in Dubai. We stay small by design: you talk to the strategist and the builder, not an account manager three layers deep.",
    p2: "AI is our accelerator, not our product. It helps us move faster, write sharper, and build systems that work — but every decision is made by a human who cares about your business.",
    cardHeading: "What matters here",
    imageAlt: "Museum of the Future illuminated at night in Dubai",
    items: [
      {
        title: "Based in Dubai",
        line: "A boutique digital growth studio working with ambitious local businesses across the UAE.",
      },
      {
        title: "What we sell",
        line: "Growth, trust, visibility and customers — not just websites, AI or ads in isolation.",
      },
      {
        title: "Our promise",
        line: "No invented clients, borrowed logos or made-up numbers. Everything here is honest.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Straight answers.",
    items: [
      {
        q: "What does it cost?",
        a: "It’s priced to what you actually need. We don’t sell one-size-fits-all packages. The Growth Plan is free, and after that we recommend the right work for your goals and budget.",
      },
      {
        q: "How much of my time will this take?",
        a: "Very little. We do the heavy lifting — reviews, design, build, content and setup. You just need to answer a few questions, give us access, and approve the work.",
      },
      {
        q: "What kind of results can I expect?",
        a: "No one can honestly promise specific numbers. What we do is fix the specific reasons customers aren’t finding you, trusting you, or choosing you — then keep improving it.",
      },
      {
        q: "What industries do you work with?",
        a: "Local businesses where reputation and first impressions matter: hospitality, cafés, restaurants, salons, barbers, gyms, dental and medical clinics, real estate, accounting, law and professional services.",
      },
      {
        q: "What is the free Growth Plan?",
        a: "A free review of your visibility, reputation and conversion. You get the gaps we found, the fixes we recommend, and what it would take to put them in place — no cost, no obligation.",
      },
      {
        q: "What makes you different?",
        a: "We build and run one connected system, not a list of separate services. And we use AI as an accelerator behind the scenes — not as a shiny feature to sell you.",
      },
    ],
  },
  finalCta: {
    heading: "Ready to stop guessing and start ",
    headingGradient: "growing?",
    subtitle: "Get your free Growth Plan. No cost, no obligation, no pressure.",
  },
  servicesPage: {
    eyebrow: "Services",
    title: "Not a menu. ",
    titleGradient: "One connected system.",
    subtitle:
      "Every service below plugs into a stage of your growth — visibility, trust, preference, capture, response and growth. You can start with the piece that hurts most; we design the rest so it fits.",
  },
  workPage: {
    eyebrow: "Work",
    title: "The standard we ",
    titleGradient: "build to",
    titleAfter: ".",
    subtitle:
      "We're a new studio, so we won't dress up someone else's work as ours. What you see here is concept work — clearly labelled — until real client work is ready to sit beside it.",
  },
  clientSites: {
    eyebrow: "Live client work",
    title: "Sites we’ve shipped.",
    subtitle: "Real client websites, live and in use today.",
    /** `{name}` is replaced with the (untranslated) client name. */
    visitAria: "Visit {name} website (opens in new tab)",
  },
  media: {
    eyebrow: "Studio output",
    title: "Cinematic & reels.",
    subtitle: "Real production work — organized by format.",
    tabCinematic: "Cinematic",
    tabReels: "Reels",
    titles: {
      "m-room44": "Venue Promo",
      "m-amer": "Company Mascot & Storyline",
      "m-4429": "Cinematic Realism — Story Telling",
      "m-4745": "Company Promo I",
      "m-5217": "Company Promo II",
      "m-4744": "Company Promo III",
      "m-4693": "Company Promo IV",
      "m-5015": "Venue Photoshoot",
      "m-4519": "Story Telling",
      "m-3761": "Futuristic Promo",
      "m-3694": "Modeling Photoshoot",
      "m-4062": "Cinematic Story Telling I",
      "m-4370": "Cinematic Story Telling II",
      "m-4378": "Instagram Virality — Cinematic Shoot",
    } as Record<string, string>,
  },
  aboutPage: {
    eyebrow: "About",
    title: "A small studio with a ",
    titleGradient: "clear point of view",
    titleAfter: ".",
    subtitle:
      "Odd Concepts Digital is a Dubai-based growth studio for ambitious local businesses. We design and run one connected system — websites, visibility, content and response — so attention turns into enquiries and enquiries turn into customers.",
    p1: "We’re new — and we’d rather be honest about that than borrow someone else’s proof. What you see across this site is our own concept work, clearly labelled. When we have client work we’re proud to show, it will live right beside it.",
    p2: "We work best with owners who care about the details, want a partner rather than a vendor, and would rather grow steadily on a solid foundation than chase a shortcut. If that sounds like you, the free Growth Plan is the easiest way to start.",
    imageAlt: "Aerial night view of Palm Jumeirah lit up in blue and purple",
  },
  growthPlanPage: {
    eyebrow: "Free Growth Plan",
    title: "A clear plan for how to ",
    titleGradient: "grow your business",
    titleAfter: ".",
    subtitle:
      "Tell us a little about your business. We'll review it carefully and come back with a Growth Plan tailored to you — no cost, no obligation, no pressure.",
  },
  form: {
    businessTypes: {
      "Café / Restaurant": "Café / Restaurant",
      "Salon / Barber": "Salon / Barber",
      Dental: "Dental",
      "Medical / Wellness": "Medical / Wellness",
      "Gym / Studio": "Gym / Studio",
      "Real Estate": "Real Estate",
      "Accounting / Finance": "Accounting / Finance",
      Law: "Law",
      Other: "Other",
    } as Record<string, string>,
    yourName: "Your name",
    businessName: "Business name",
    email: "Email",
    phone: "Phone / WhatsApp",
    businessType: "Business type",
    website: "Current website",
    optional: "Optional",
    about: "Tell us about your business",
    aboutHint: "Optional — anything that helps us understand you",
    needs: "What do you need help with?",
    selectPlaceholder: "Select one…",
    submitIdle: "Get My Free Growth Plan",
    submitSending: "Sending…",
    formNote: "No spam · No pressure · Just a clear next step",
    doneTitle: "Request received.",
    doneBody:
      "We’ll review your business carefully and get back to you shortly with a clear, honest Growth Plan.",
    failedTitle: "Almost there.",
    failedBody:
      "We couldn’t send your details automatically just now. Please reach us on WhatsApp or email — your answers are ready to send in one tap.",
    talkWhatsapp: "Talk on WhatsApp",
    emailDirect: "Or email us directly",

    validation: {
      nameRequired: "Please tell us your name",
      businessNameRequired: "Business name is required",
      emailInvalid: "Enter a valid email",
      phoneInvalid: "Enter a valid phone or WhatsApp number",
      businessTypeInvalid: "Choose the closest match",
      urlInvalid: "Enter a valid URL",
      needsTooShort: "A sentence or two is enough",
    },
  },
  privacy: {
    eyebrow: "Privacy",
    title: "How we handle your information.",
    subtitle: "Plain-English summary of what we collect, why, and what we don't do.",
    collectH: "What we collect.",
    collectB:
      "When you submit the Growth Plan form, we receive the details you enter — your name, business name, email, phone/WhatsApp, business type, optional website and what you need help with. That’s it.",
    whyH: "Why.",
    whyB: "Solely so we can read your enquiry and reply to you. We don’t sell, rent or share your details with third parties.",
    storedH: "How it’s stored.",
    storedB:
      "Enquiries are delivered to us by email. We keep them only for as long as needed to help you — you can ask us to delete yours at any time.",
    cookiesH: "Cookies.",
    cookiesB:
      "This site doesn’t set marketing or tracking cookies. Any cookies used are strictly necessary for the site to function.",
    choicesH: "Your choices.",
    choicesB: "To request access, correction or deletion of your data, email us at",
    disclaimer:
      "This is a plain-language summary, not a legal contract. If your business has specific compliance requirements, please get in touch and we’ll be glad to help.",
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms of use.",
    subtitle: "The short version — no surprises.",
    siteH: "This site.",
    siteB:
      "The Odd Concepts Digital website is provided for information and enquiry only. Content, wording, visuals and structure are ours — please don’t copy or reuse them without asking.",
    workShownH: "Work shown.",
    workShownB:
      "Any portfolio pieces marked “Concept” are creative demonstrations of the standard we build to, not paid client work.",
    growthPlanH: "Growth Plan.",
    growthPlanB:
      "The Growth Plan is offered free of charge with no obligation. It reflects our honest opinion at the time of writing and is not a guarantee of results.",
    liabilityH: "Liability.",
    liabilityB:
      "We take reasonable care with the information on this site, but we can’t accept liability for decisions made purely on the basis of pages here. Anything binding will always be set out in writing when we engage.",
    contactH: "Contact.",
    contactB: "Questions? Email",
  },
  footer: {
    contact: "Contact",
    explore: "Explore",
    readyToGrow: "Ready to grow?",
    rightsReserved: "All rights reserved.",
    portfolioDisclaimer: "Portfolio pieces shown are concept work and creative demonstrations.",
  },
};

export type Translations = typeof en;

export const ar: Translations = {
  nav: {
    home: "الرئيسية",
    services: "خدماتنا",
    work: "أعمالنا",
    about: "من نحن",
    growthPlan: "خطة النمو المجانية",
    privacy: "الخصوصية",
    terms: "الشروط",
  },
  site: {
    tagline: "استوديو النمو الرقمي المتميز",
    positioning:
      "شريك نمو رقمي متميز يساعد الأعمال على تحويل الاهتمام إلى عملاء.",
    primaryCta: "احصل على خطة نموك المجانية",
    whatsappCta: "تواصل عبر واتساب",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    whatsappAria: "راسلنا عبر واتساب",
    languageLabel: "اللغة",
  },
  hero: {
    eyebrow: "استوديو النمو الرقمي · دبي",
    h1: "نحن لا نكتفي ببناء المواقع الإلكترونية. نحن نبني النظام الذي ",
    h1Gradient: "يجلب لك العملاء.",
    subhead:
      "مواقع إلكترونية متميزة، ظهور أقوى ومحتوى عصري — مصممة لتعمل كنظام واحد يحوّل الاهتمام إلى استفسارات وعملاء.",
    secondaryLink: "شاهد نظام النمو",
    or: "أو",
    whatsappInline: "راسلنا عبر واتساب",
    reassurance: "لا ادعاءات مبالغ فيها · لا نعتمد على سمعة مستعارة · نُبنى بعناية في دبي",
    captionSmall: "الإمارات اليوم",
    captionLarge: "والعالم غدًا",
    skylineAlt: "أفق دبي ليلاً مع برج خليفة وخطوط الإضاءة المتوهجة",
  },
  reality: {
    eyebrow: "الواقع",
    title: "أنتم بارعون فيما تفعلونه. أونلاين، من يظهر أولاً هو من يفوز.",
    p1: "معظم العملاء يختارون أول من يجدونه ويثقون به — وليس بالضرورة الأفضل، بل الأسهل في الوصول والأكثر إقناعًا للوهلة الأولى.",
    p2: "إذا كان من الصعب إيجادكم أو من السهل تجاهلكم، فإنكم تخسرون هؤلاء العملاء قبل أن تحصلوا على فرصة المنافسة أصلاً.",
    imageAlt: "شارع في دبي ليلاً مع خطوط إضاءة زرقاء ترتفع بين الأبراج",
  },
  growth: {
    eyebrow: "نظام النمو",
    title: "نظام واحد متكامل — من الغياب إلى ",
    titleGradient: "النمو",
    titleAfter: ".",
    subtitle:
      "ست مراحل، محرك واحد. كل مرحلة تبني على سابقتها — لتحويل الظهور الهادئ إلى عمل ينمو من تلقاء نفسه.",
    button: "طبّق هذا النظام على عملك",
    note: "خطة النمو المجانية — بلا ضغط، وبلا التزام.",
    aria: "مخطط نظام النمو: ست مراحل مترابطة تحوّل الاهتمام إلى نمو — الظهور، الثقة، التفضيل، الالتقاط، الاستجابة، النمو.",
    stagesAria: "مراحل نظام النمو",
    stages: [
      {
        n: "01",
        name: "الظهور",
        verb: "كونوا الأسهل إيجادًا",
        line: "عندما يبحث الناس، تكونون أنتم من يجدونه.",
      },
      {
        n: "02",
        name: "الثقة",
        verb: "اظهروا بمظهر متميز",
        line: "انطباع أول يجعلكم الخيار الواضح.",
      },
      {
        n: "03",
        name: "التفضيل",
        verb: "كونوا الخيار المفضل",
        line: "سمعة ومحتوى يخلّون الناس يختارونكم.",
      },
      {
        n: "04",
        name: "الالتقاط",
        verb: "احصلوا على الاستفسار",
        line: "اجعلوا الخطوة التالية سهلة بلا أي جهد.",
      },
      {
        n: "05",
        name: "الاستجابة",
        verb: "لا تفوتوا أي عميل محتمل",
        line: "نرد على كل استفسار، ليلاً أو نهارًا.",
      },
      {
        n: "06",
        name: "النمو",
        verb: "انموا تلقائيًا",
        line: "زيارة واحدة تتحول إلى تكرار، وإيراد متراكم.",
      },
    ],
  },
  services: {
    eyebrow: "ماذا نقدم",
    title: "كل ما يحوّل الاهتمام إلى عملاء — متصل ببعضه.",
    subtitle:
      "معظم الوكالات تبيعك خدمة واحدة وتتركك تربط بين الأجزاء. نحن نصمم وندير نظامًا واحدًا — كل جزء أدناه يرتبط بمرحلة من نموّكم.",
    seeAll: "عرض جميع الخدمات",
    items: [
      { name: "مواقع إلكترونية متميزة", line: "موقع سريع وعصري يترك الانطباع الأول الصحيح." },
      { name: "ملف جوجل التجاري", line: "اظهروا حيث يبحث عنكم العملاء المحليون بالفعل." },
      { name: "إدارة التقييمات", line: "ابنوا الثقة قبل أن تبدأ أي محادثة." },
      { name: "محتوى المستخدمين (UGC)", line: "محتوى حقيقي وقريب من الناس يبقي علامتكم في الذهن." },
      { name: "إعلانات الفيديو", line: "فيديوهات قصيرة توقف التمرير وتبيع النتيجة." },
      {
        name: "فيديوهات الأفاتار بالذكاء الاصطناعي",
        line: "فيديوهات احترافية لعلامتكم، بسرعة وبتكلفة تناسب نموكم.",
      },
      { name: "إعلانات ميتا", line: "وصّلوا لرسالتكم للجمهور المناسب بحملات مصممة تبيع." },
      {
        name: "إعلانات إنستغرام وتيك توك",
        line: "اظهروا حيث يوجد الانتباه وحوّلوه إلى استفسارات.",
      },
      {
        name: "موظف استقبال بالذكاء الاصطناعي",
        line: "التقطوا العملاء المحتملين وصنّفوهم على مدار الساعة.",
      },
      { name: "التطبيقات", line: "تطبيقات جوال وويب مخصصة توسّع نطاق وصولكم." },
      { name: "أتمتة التسويق", line: "حوّلوا الاستفسارات العابرة إلى متابعة تلقائية ومستمرة." },
      {
        name: "أتمتة إدارة علاقات العملاء",
        line: "تتبّعوا كل عميل محتمل وارعوه دون أن ينسى أبدًا.",
      },
      { name: "ذكاء الأعمال", line: "لوحات بيانات واضحة تُظهر ما يقود النمو فعليًا." },
    ],
  },
  industries: {
    eyebrow: "لمن نعمل",
    title: "نتحدث لغة قطاعكم — لا «أعمال بشكل عام».",
    subtitle:
      "نعمل مع أصحاب أعمال محلية طموحة تعتمد على الثقة والسمعة وتدفق مستمر من العملاء الجدد.",
    closing: "وأي عمل محلي يستحق عملاء أكثر مما يحصل عليه حاليًا.",
    items: [
      {
        name: "المقاهي والمطاعم",
        line: "املأوا الطاولات الهادئة وحوّلوا الزوار الجدد إلى رواد دائمين.",
      },
      { name: "الصالونات والحلاقة", line: "أبقوا الكراسي ممتلئة والمواعيد محجوزة." },
      { name: "عيادات الأسنان", line: "كونوا العيادة التي يثق بها المرضى قبل أن يتصلوا." },
      { name: "الرعاية الطبية والعافية", line: "حوّلوا عمليات البحث الهادئة إلى مواعيد محجوزة." },
      { name: "الصالات الرياضية والاستوديوهات", line: "استقطبوا أعضاء يبقون فعليًا." },
      { name: "العقارات", line: "كونوا أول من يظهر أمام المشترين والبائعين." },
      { name: "المحاسبة والمالية", line: "اكسبوا عملاء يقدّرون الخبرة أكثر من السعر." },
      { name: "مكاتب المحاماة", line: "كونوا المكتب الذي يختاره العملاء بثقة." },
    ],
  },
  how: {
    eyebrow: "كيف نعمل",
    title: "بسيط في البداية. مبني ليدوم.",
    subtitle: "مسار واضح من ثلاث خطوات، من حيث أنتم الآن إلى نظام يجلب لكم العملاء.",
    steps: [
      {
        title: "احصلوا على خطة نموكم المجانية",
        line: "نراجع مدى سهولة إيجاد العملاء لكم، ومستوى الثقة التي تمنحونها للوهلة الأولى، وأين تضيع الاستفسارات.",
      },
      {
        title: "نبني نظامكم",
        line: "الموقع الإلكتروني، الملفات، المحتوى والتقاط العملاء — مصممة ومترابطة كنظام واحد، لا أجزاء منفصلة.",
      },
      {
        title: "أنتم تنمون",
        line: "نحن ندير النظام ونطوّره باستمرار، لتتفرغوا أنتم لعملكم.",
      },
    ],
  },
  concept: {
    eyebrow: "دليل الحرفية",
    title: "الإثبات في العمل نفسه.",
    subtitle:
      "نحن استوديو جديد، لذا سنكون صريحين معكم — ما ترونه هنا هو عمل مفاهيمي، وهو المعيار الذي نبني وفقه. كل عمل موسوم بوضوح لما هو عليه فعلاً. وعندما يكون لدينا عمل حقيقي لعملاء نفخر بعرضه، سيظهر هنا بجانبه.",
    tag: "مفاهيمي",
    disclaimer:
      "كل الأعمال المعروضة هنا هي أعمال مفاهيمية أُنشئت لأغراض العرض فقط. لا عملاء ولا نتائج ولا شهادات مختلقة.",
    items: [
      {
        title: "نظام النمو",
        line: "كيف يترابط الظهور والثقة والمحتوى والتحويل كآلة واحدة متصلة.",
      },
      {
        title: "تصميم المواقع والواجهات",
        line: "تصاميم متميزة وسريعة وموجهة للتحويل تبيع قبل أن يقرأ الزائر الفقرة الثانية.",
      },
      {
        title: "مفاهيم العلامة والمحتوى",
        line: "نبرة ورسائل وأنظمة بصرية تجعل العمل المحلي يبدو موثوقًا بلا شك.",
      },
      {
        title: "تصوير العلامات القطاعي",
        line: "توجيه تصوير مفاهيمي للصالونات والعيادات والمقاهي والاستوديوهات — نوع الثقة البصرية التي توقف التمرير.",
      },
    ],
  },
  why: {
    eyebrow: "من نحن",
    title: "استوديو، لا وكالة.",
    subtitle: "صغير بشكل متعمد، ليعمل العملاء مباشرة مع من ينجز العمل فعليًا.",
    p1: "Odd Concepts Digital استوديو نمو رقمي متميز في دبي. نحافظ على حجمنا الصغير بشكل مقصود: تتحدثون مع الاستراتيجي والمنفذ مباشرة، لا مع مدير حسابات على بعد ثلاث طبقات.",
    p2: "الذكاء الاصطناعي أداة تساعدنا نشتغل أسرع ونكتب بشكل أدق ونبني أنظمة فعالة — لكن كل قرار يتخذه إنسان يهتم فعلاً بعملكم.",
    cardHeading: "ما يهمنا هنا",
    imageAlt: "متحف المستقبل مضاءً ليلاً في دبي",
    items: [
      {
        title: "مقرنا في دبي",
        line: "استوديو نمو رقمي صغير ومتخصص، يعمل مع أعمال محلية طموحة في جميع أنحاء الإمارات.",
      },
      {
        title: "ما نبيعه",
        line: "النمو والثقة والظهور والعملاء — لا مجرد مواقع أو ذكاء اصطناعي أو إعلانات منفصلة.",
      },
      {
        title: "وعدنا",
        line: "لا عملاء وهميون، ولا شعارات مستعارة، ولا أرقام غير حقيقية. كل شيء هنا صادق.",
      },
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "إجابات واضحة ومباشرة.",
    items: [
      {
        q: "كم تكلفة الخدمة؟",
        a: "السعر يُحدَّد وفق ما تحتاجونه فعلاً. لا نبيع باقات موحدة للجميع. خطة النمو مجانية، وبعدها نوصي بالعمل المناسب لأهدافكم وميزانيتكم.",
      },
      {
        q: "كم من وقتي سيستغرق هذا؟",
        a: "وقت قليل جدًا. نحن نتولى الجهد الأكبر — المراجعات والتصميم والبناء والمحتوى والإعداد. كل ما عليكم هو الإجابة عن بعض الأسئلة، منحنا الصلاحيات، والموافقة على العمل.",
      },
      {
        q: "ما نوع النتائج التي يمكنني توقعها؟",
        a: "لا يمكن لأحد أن يعِد بأرقام محددة بصدق. ما نقوم به هو معالجة الأسباب الفعلية التي تمنع العملاء من إيجادكم أو الثقة بكم أو اختياركم — ثم الاستمرار في التحسين.",
      },
      {
        q: "مع أي قطاعات تعملون؟",
        a: "الأعمال المحلية التي تعتمد على السمعة والانطباع الأول: الضيافة، المقاهي، المطاعم، الصالونات، الحلاقة، الصالات الرياضية، عيادات الأسنان والطب، العقارات، المحاسبة، القانون والخدمات المهنية.",
      },
      {
        q: "ما هي خطة النمو المجانية؟",
        a: "مراجعة مجانية لظهوركم وسمعتكم ومعدل التحويل لديكم. تحصلون على الثغرات التي وجدناها، والحلول التي نوصي بها، وما يتطلبه تطبيقها — بلا تكلفة وبلا التزام.",
      },
      {
        q: "ما الذي يميزكم؟",
        a: "نبني وندير نظامًا واحدًا متكاملاً، لا قائمة خدمات منفصلة. ونستخدم الذكاء الاصطناعي كمسرّع خلف الكواليس — لا كميزة لامعة نبيعها لكم.",
      },
    ],
  },
  finalCta: {
    heading: "جاهزون للتوقف عن التخمين والبدء في ",
    headingGradient: "النمو؟",
    subtitle: "احصلوا على خطة نموكم المجانية. بلا تكلفة، بلا التزام، بلا ضغط.",
  },
  servicesPage: {
    eyebrow: "خدماتنا",
    title: "ليست قائمة. بل ",
    titleGradient: "نظام واحد متكامل",
    subtitle:
      "كل خدمة أدناه ترتبط بمرحلة من نموّكم — الظهور، الثقة، التفضيل، الالتقاط، الاستجابة والنمو. يمكنكم البدء بالجزء الأكثر إلحاحًا؛ ونحن نصمم الباقي ليتناسب معه.",
  },
  workPage: {
    eyebrow: "أعمالنا",
    title: "المعيار الذي ",
    titleGradient: "نبني وفقه",
    titleAfter: ".",
    subtitle:
      "نحن استوديو جديد، لذا لن نُقدّم عمل الآخرين وكأنه عملنا. ما ترونه هنا هو عمل مفاهيمي — موسوم بوضوح — إلى أن يصبح لدينا عمل عملاء حقيقي يجلس بجانبه.",
  },
  clientSites: {
    eyebrow: "أعمال عملاء حقيقية",
    title: "مواقع أطلقناها بالفعل.",
    subtitle: "مواقع عملاء حقيقية، تعمل الآن.",
    visitAria: "زيارة موقع {name} (يفتح في نافذة جديدة)",
  },
  media: {
    eyebrow: "إنتاج الاستوديو",
    title: "سينمائي وريلز.",
    subtitle: "أعمال إنتاج حقيقية — منظمة حسب الشكل.",
    tabCinematic: "سينمائي",
    tabReels: "ريلز",
    titles: {
      "m-room44": "إعلان ترويجي للمكان",
      "m-amer": "تميمة الشركة والقصة",
      "m-4429": "واقعية سينمائية — سرد قصصي",
      "m-4745": "إعلان الشركة الأول",
      "m-5217": "إعلان الشركة الثاني",
      "m-4744": "إعلان الشركة الثالث",
      "m-4693": "إعلان الشركة الرابع",
      "m-5015": "جلسة تصوير المكان",
      "m-4519": "سرد قصصي",
      "m-3761": "إعلان مستقبلي",
      "m-3694": "جلسة تصوير أزياء",
      "m-4062": "سرد سينمائي أول",
      "m-4370": "سرد سينمائي ثاني",
      "m-4378": "انتشار إنستغرام — لقطة سينمائية",
    },
  },
  aboutPage: {
    eyebrow: "من نحن",
    title: "استوديو صغير برؤية ",
    titleGradient: "واضحة",
    titleAfter: ".",
    subtitle:
      "Odd Concepts Digital استوديو نمو مقره دبي لخدمة الأعمال المحلية الطموحة. نصمم وندير نظامًا واحدًا متكاملاً — المواقع، الظهور، المحتوى والاستجابة — بحيث يتحول الاهتمام إلى استفسارات، والاستفسارات إلى عملاء.",
    p1: "نحن جدد — ونفضّل أن نكون صادقين حيال ذلك بدلًا من استعارة إثبات الآخرين. ما ترونه في هذا الموقع هو عملنا المفاهيمي الخاص، موسوم بوضوح. وعندما يكون لدينا عمل عملاء نفخر بعرضه، سيظهر هنا بجانبه مباشرة.",
    p2: "نعمل بشكل أفضل مع أصحاب الأعمال الذين يهتمون بالتفاصيل، ويريدون شريكًا لا مجرد مورّد، ويفضّلون النمو التدريجي على أساس متين بدلًا من ملاحقة حل سريع. إذا كان هذا يصفكم، فإن خطة النمو المجانية هي أسهل طريقة للبدء.",
    imageAlt: "منظر جوي ليلي لنخلة جميرا مضاءة بالأزرق والبنفسجي",
  },
  growthPlanPage: {
    eyebrow: "خطة النمو المجانية",
    title: "خطة واضحة لكيفية ",
    titleGradient: "تنمية عملكم",
    titleAfter: ".",
    subtitle:
      "أخبرونا قليلاً عن عملكم. سنراجعه بعناية ونعود إليكم بخطة نمو مصممة خصيصًا لكم — بلا تكلفة، بلا التزام، بلا ضغط.",
  },
  form: {
    businessTypes: {
      "Café / Restaurant": "مقهى / مطعم",
      "Salon / Barber": "صالون / حلاقة",
      Dental: "طب أسنان",
      "Medical / Wellness": "طبي / عافية",
      "Gym / Studio": "صالة رياضية / استوديو",
      "Real Estate": "عقارات",
      "Accounting / Finance": "محاسبة / مالية",
      Law: "قانون",
      Other: "أخرى",
    },
    yourName: "اسمك",
    businessName: "اسم النشاط التجاري",
    email: "البريد الإلكتروني",
    phone: "الهاتف / واتساب",
    businessType: "نوع النشاط",
    website: "الموقع الإلكتروني الحالي",
    optional: "اختياري",
    about: "أخبرونا عن نشاطكم التجاري",
    aboutHint: "اختياري — أي شيء يساعدنا على فهمكم",
    needs: "بماذا تحتاجون المساعدة؟",
    selectPlaceholder: "اختر...",
    submitIdle: "احصل على خطة نموي المجانية",
    submitSending: "جارٍ الإرسال...",
    formNote: "بلا رسائل مزعجة · بلا ضغط · مجرد خطوة تالية واضحة",
    doneTitle: "تم استلام طلبكم.",
    doneBody: "سنراجع نشاطكم بعناية ونعود إليكم قريبًا بخطة نمو واضحة وصادقة.",
    failedTitle: "خطوة أخيرة.",
    failedBody:
      "ما قدرنا نرسل بياناتكم تلقائيًا الآن. تواصلوا معنا عبر واتساب أو البريد — إجاباتكم جاهزة للإرسال بضغطة واحدة.",
    talkWhatsapp: "تحدث عبر واتساب",
    emailDirect: "أو راسلنا مباشرة عبر البريد",

    validation: {
      nameRequired: "يرجى إخبارنا باسمك",
      businessNameRequired: "اسم النشاط التجاري مطلوب",
      emailInvalid: "أدخل بريدًا إلكترونيًا صالحًا",
      phoneInvalid: "أدخل رقم هاتف أو واتساب صالحًا",
      businessTypeInvalid: "اختر الأقرب لنشاطك",
      urlInvalid: "أدخل رابطًا صالحًا",
      needsTooShort: "جملة أو جملتان كافية",
    },
  },
  privacy: {
    eyebrow: "الخصوصية",
    title: "كيف نتعامل مع معلوماتكم.",
    subtitle: "ملخص واضح لما نجمعه، ولماذا، وما لا نقوم به.",
    collectH: "ما الذي نجمعه.",
    collectB:
      "عند إرسال نموذج خطة النمو، نستلم التفاصيل التي تُدخلونها — اسمكم، اسم النشاط، البريد الإلكتروني، الهاتف/واتساب، نوع النشاط، الموقع الإلكتروني (اختياري) وما تحتاجون المساعدة به. هذا كل شيء.",
    whyH: "لماذا.",
    whyB: "فقط لنتمكن من قراءة استفساركم والرد عليكم. نحن لا نبيع أو نؤجر أو نشارك بياناتكم مع أطراف ثالثة.",
    storedH: "كيف يتم تخزينها.",
    storedB:
      "تُرسَل الاستفسارات إلينا عبر البريد الإلكتروني. نحتفظ بها فقط للمدة اللازمة لمساعدتكم — يمكنكم طلب حذف بياناتكم في أي وقت.",
    cookiesH: "ملفات تعريف الارتباط.",
    cookiesB:
      "لا يستخدم هذا الموقع ملفات تعريف ارتباط تسويقية أو تتبعية. أي ملفات مستخدمة ضرورية فقط لعمل الموقع.",
    choicesH: "خياراتكم.",
    choicesB: "لطلب الوصول إلى بياناتكم أو تصحيحها أو حذفها، راسلونا عبر البريد الإلكتروني",
    disclaimer:
      "هذا ملخص بلغة مبسطة، وليس عقدًا قانونيًا. إذا كان لدى نشاطكم متطلبات قانونية خاصة، تواصلوا معنا وسنكون سعداء بالمساعدة.",
  },
  terms: {
    eyebrow: "الشروط",
    title: "شروط الاستخدام.",
    subtitle: "النسخة المختصرة — بلا مفاجآت.",
    siteH: "هذا الموقع.",
    siteB:
      "موقع Odd Concepts Digital مُقدَّم لأغراض المعلومات والاستفسار فقط. المحتوى والنصوص والعناصر البصرية والهيكل ملك لنا — يُرجى عدم نسخها أو إعادة استخدامها دون إذن.",
    workShownH: "الأعمال المعروضة.",
    workShownB:
      "أي أعمال في معرضنا موسومة بـ«مفاهيمي» هي عروض إبداعية للمعيار الذي نبني وفقه، وليست أعمالًا مدفوعة لعملاء.",
    growthPlanH: "خطة النمو.",
    growthPlanB:
      "تُقدَّم خطة النمو مجانًا وبلا أي التزام. وهي تعكس رأينا الصادق وقت كتابتها، وليست ضمانًا للنتائج.",
    liabilityH: "المسؤولية.",
    liabilityB:
      "نتوخى الحرص المعقول في المعلومات الواردة في هذا الموقع، لكننا لا نتحمل المسؤولية عن قرارات تُتخذ بناءً على صفحات الموقع وحدها فقط. أي أمر ملزم سيتم توضيحه دائمًا كتابيًا عند التعاقد.",
    contactH: "التواصل.",
    contactB: "أسئلة؟ راسلونا عبر",
  },
  footer: {
    contact: "التواصل",
    explore: "استكشف",
    readyToGrow: "جاهزون للنمو؟",
    rightsReserved: "جميع الحقوق محفوظة.",
    portfolioDisclaimer: "الأعمال المعروضة هي أعمال مفاهيمية وعروض إبداعية.",
  },
};

export const dictionaries = { en, ar };
export type Lang = keyof typeof dictionaries;

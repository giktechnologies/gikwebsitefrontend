type Pricing = {
  weekdays: number;
  weekdays_night_or_online: number;
  weekend_online: number;
};

type CourseSession = {
  session_id: string;
  title: string;
  week_duration: number;
  description: string;
  pricing: Pricing;
};

export type Course = {
  name: string;
  image_asset: string;
  image_asset_alt: string; // dark mode or alternate image
  description: string;
  course_sessions: CourseSession[];
};


export const courses: Course[] = [
  {
    name: "ICT Basics",
    image_asset: "/images/training/courses/ict/icons8-information-technology-96.png",
    image_asset_alt: "/images/training/courses/ict/icons8-information-technology-96_alt.png",
    description:
      "Learn the fundamentals of computers and networks: hardware, operating systems, basic networking, security best practices, and responsible online behavior.",
    course_sessions: [
      {
        session_id: "ict_basics_4wk",
        title: "ICT Basics – 4 Weeks",
        week_duration: 4,
        description:
          "A fast-paced, 4-week program covering core ICT concepts and hands-on practice.",
        pricing: {
          weekdays: 60000,
          weekdays_night_or_online: 50000,
          weekend_online: 40000,
        },
      },
    ],
  },
  {
    name: "Data Management & Statistics",
    image_asset: "/images/training/courses/stats/icons8-statistics-64.png",
    image_asset_alt: "/images/training/courses/stats/icons8-statistics-64_alt.png",
    description:
      "Master data cleaning, analysis, and visualization using Excel, Google Sheets, STATA, SPSS, and ODK. Covers descriptive and introductory inferential statistics.",
    course_sessions: [
      {
        session_id: "data_stat_4wk",
        title: "Data Management & Statistics – 4 Weeks",
        week_duration: 4,
        description:
          "An intensive 4-week module with hands-on data exercises each session.",
        pricing: {
          weekdays: 80000,
          weekdays_night_or_online: 70000,
          weekend_online: 60000,
        },
      },
      {
        session_id: "data_stat_12wk",
        title: "Data Management & Statistics – 12 Weeks",
        week_duration: 12,
        description:
          "An extended 12-week program for deeper practice and advanced topics.",
        pricing: {
          weekdays: 240000,
          weekdays_night_or_online: 210000,
          weekend_online: 180000,
        },
      },
    ],
  },
  {
    name: "Graphics Design",
    image_asset: "/images/training/courses/grfx/icons8-graphic-design-100.png",
    image_asset_alt: "/images/training/courses/grfx/icons8-graphic-design-100_alt.png",
    description:
      "Explore the world of visual communication through graphic design. This course covers fundamental principles, design software (e.g., Adobe Photoshop, Illustrator), typography, color theory, logo design, image editing, illustration, print and web design, branding, motion graphics, and social media graphics, culminating in portfolio development.",
    course_sessions: [
      {
        session_id: "gfx_des_4wk",
        title: "Graphics Design – 4 Weeks",
        week_duration: 4,
        description:
          "A foundational 4-week module covering graphic design principles, introduction to design software (e.g., Adobe Photoshop, Illustrator), typography basics, color theory, and an introduction to logo design and image editing.",
        pricing: {
          weekdays: 80000,
          weekdays_night_or_online: 70000,
          weekend_online: 60000,
        },
      },
      {
        session_id: "gfx_des_12wk",
        title: "Graphics Design – 12 Weeks",
        week_duration: 12,
        description:
          "A comprehensive 12-week program covering introduction to graphic design, software proficiency (e.g., Photoshop, Illustrator), typography, layout, color theory, logo design, image editing, vector illustration, print design, web UI basics, branding, motion graphics, social media design, and portfolio development.",
        pricing: {
          weekdays: 240000,
          weekdays_night_or_online: 210000,
          weekend_online: 180000,
        },
      },
    ],
  },
  {
    name: "Introduction to Web Development & Setup",
    image_asset: "/images/training/courses/web/icons8-html-100.png",
    image_asset_alt: "/images/training/courses/web/icons8-html-100_alt.png",
    description:
      "An introductory course that teaches how to build interactive websites using HTML, CSS, JavaScript, and PHP. Learn foundational web concepts, set up a development environment, and gain hands-on experience creating responsive and dynamic web pages.",
    course_sessions: [
      {
        session_id: "web_dev_12wk",
        title: "Introduction to Web Development & Setup – 12 Weeks",
        week_duration: 12,
        description:
          "A complete 12-week journey into the world of web development—covering HTML, CSS, JavaScript, PHP, responsive design, and interactivity through DOM manipulation and events, along with real-world hands-on assignments.",
        pricing: {
          weekdays: 250000,
          weekdays_night_or_online: 210000,
          weekend_online: 200000,
        },
      },
      {
        session_id: "web_dev_26wk",
        title: "Introduction to Web Development & Setup – 26 Weeks",
        week_duration: 26,
        description:
          "An in-depth 26-week course exploring HTML, CSS, JavaScript, PHP, responsive design, functions, arrays, objects, and user interaction. Includes extensive practice through projects and real-life simulations to strengthen web development skills.",
        pricing: {
          weekdays: 350000,
          weekdays_night_or_online: 300000,
          weekend_online: 250000,
        },
      },
    ],
  },
  {
    name: "Advanced web design technologies (React, Next.js, Vue)",
    image_asset: "/images/training/courses/adv_web/icons8-web-development-100-blue.png",
    image_asset_alt: "/images/training/courses/adv_web/icons8-web-development-100_alt.png",
    description:
      "An advanced course exploring reactive programming paradigms and their application in building modern, interactive front-end web applications using popular frameworks like React, Next.js, and Vue. Ideal for those with a foundation in HTML, CSS, and JavaScript who are ready to build scalable and high-performance interfaces.",
    course_sessions: [
      {
        session_id: "adv_web_tech_16wk",
        title: "Advanced Web Design Technologies – 16 Weeks",
        week_duration: 16,
        description:
          "A comprehensive 16-week course focused on building modern, reactive front-end applications using React, Next.js, and Vue. Students will explore reactive programming principles, work with hooks, routing, global state management, and gain hands-on experience through real-world projects. Topics include client-side routing, advanced JavaScript, component composition, and performance optimization.",
        pricing: {
          weekdays: 350000,
          weekdays_night_or_online: 300000,
          weekend_online: 250000,
        },
      },
    ],
  },
];

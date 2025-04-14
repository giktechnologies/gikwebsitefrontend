export const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    description: "Work on the latest web technologies and build amazing user experiences.",
    details_markdown: `
# Frontend Developer

Join our **Engineering Team** and help build cutting-edge web applications!

## Responsibilities
- Develop and maintain user-friendly web applications.
- Collaborate with designers to create seamless UI/UX experiences.
- Write clean, maintainable, and scalable code.
- Optimize applications for performance and accessibility.

## Requirements
- **3+ years** experience in Frontend Development.
- Proficiency in **React, Next.js, and TypeScript**.
- Strong understanding of **CSS frameworks (Tailwind, Bootstrap)**.
- Experience with **RESTful APIs** and state management.

## Benefits
- Competitive salary 💰
- Flexible work schedule 🏡
- Health insurance 🏥
- Learning and development opportunities 📚

### Apply Now!
[Click here to apply](https://example.com/apply/1)
    `,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    description: "Design intuitive and beautiful user interfaces for our products.",
    details_markdown: `
# UI/UX Designer

We’re looking for a creative **UI/UX Designer** to shape the future of our digital products.

## What You'll Do
- Design wireframes, prototypes, and high-fidelity visuals.
- Conduct user research and usability testing.
- Collaborate with developers and product managers.

## Skills Required
- Strong experience with **Figma, Adobe XD, Sketch**.
- Understanding of **User Experience principles**.
- Ability to create **interactive prototypes**.

## Why Join Us?
- Work on exciting projects 🚀
- Competitive compensation 💵
- Career growth opportunities 📈

**[Apply Now](https://example.com/apply/2)** 
    `,
  },
  {
    id: 3,
    title: "Backend Developer",
    department: "Engineering",
    description: "Develop and maintain robust backend systems.",
    details_markdown: `
# Backend Developer

We’re hiring a **Backend Developer** to build scalable and reliable server-side applications.

## Key Responsibilities
- Develop and maintain **APIs and databases**.
- Implement authentication and security best practices.
- Optimize system performance and scalability.

## Qualifications
- Experience with **Node.js, Express, MongoDB**.
- Understanding of **microservices architecture**.
- Familiarity with **Docker and cloud services**.

## Perks & Benefits
- Remote-friendly work options 🌍
- Company-sponsored tech equipment 💻
- Paid leave and wellness programs 🏖️

**[Apply Here](https://example.com/apply/3)** 
    `,
  },
  {
    id: 4,
    title: "Web Developer",
    department: "Engineering",
    description: "Develop and maintain robust backend systems.",
    details_markdown: `
      Here’s the revised **Web Developer Vacancy Template** with your specifications included:

### **Job Vacancy: Web Developer (Contractual Role)**

**Company Name:** \[Insert Company Name\]  
**Location:** \[Remote/In-office/Hybrid\]  
**Contract Duration:** \[Specify duration, e.g., 3 months, 6 months, or project-based\]  
**Application Deadline:** \[Insert Date\]

#### **About Us**

\[Provide a brief description of your company, its mission, and why this role is critical.\]

#### **Job Description**

We are seeking a highly skilled and versatile **Web Developer** to join our team on a contractual basis. The ideal candidate will be proficient in modern web development technologies, have experience with CMS platforms like WordPress, and possess a strong understanding of web accessibility (WCAG compliance). You will work collaboratively with designers, product managers, and other developers to deliver high-quality, user-friendly, and accessible websites and applications.

#### **Key Responsibilities**

- Develop and maintain responsive websites and web applications using **HTML, CSS, JavaScript**, and modern frameworks like **Angular, Next.js, and Vue.js**.
- Work with CMS platforms such as **WordPress**, customizing themes and plugins to meet project requirements.
- Ensure all websites meet **WCAG 2.1 accessibility standards**, creating inclusive user experiences.
- Optimize websites for performance, SEO, and scalability.
- Collaborate with designers to implement and refine UI/UX designs.
- Debug and resolve cross-browser and cross-device compatibility issues.
- Integrate third-party APIs and services as needed.
- Use version control systems like **Git** for efficient collaboration.
- Stay updated on emerging web development trends, tools, and best practices.

#### **Requirements**

- **Proven experience** as a Web Developer with a portfolio showcasing your work on CMS platforms, modern frameworks, and accessible websites.
- **Proficiency** in front-end technologies: HTML5, CSS3 (including preprocessors like Sass or LESS), and JavaScript (ES6+).
- Hands-on experience with **Angular, Vue.js, Next.js**, or similar frameworks.
- Strong understanding of **WordPress** (theme customization, plugin development, etc.).
- Knowledge of **WCAG 2.1 compliance** and implementing accessibility best practices.
- Familiarity with back-end technologies (Node.js, PHP, or other server-side programming).
- Experience with database systems such as **MySQL** or **PostgreSQL**.
- Expertise in debugging, performance optimization, and browser compatibility testing.
- Familiarity with **RESTful APIs** and integrating them into web applications.
- Strong problem-solving and collaboration skills.

#### **Preferred Skills (not mandatory)**

- Experience with static site generators like Gatsby or Nuxt.js.
- Knowledge of DevOps workflows, including CI/CD pipelines.
- Familiarity with eCommerce platforms (Shopify, WooCommerce).
- Understanding of web security best practices.

#### **Benefits**

- Competitive compensation.
- Flexible working hours.
- Opportunity to work on cutting-edge projects with a dynamic team.
- \[Additional perks, if applicable, such as access to tools or professional development opportunities.\]

#### **How to Apply**

If you are passionate about web development and creating accessible, user-friendly experiences, we’d love to hear from you! Please submit the following:

1. Your updated resume.
2. A portfolio of your previous work (including links to live projects or GitHub repositories).
3. \[Optional\] A brief cover letter highlighting your relevant experience, particularly with CMS, frameworks, and WCAG compliance.

Send your application to **\[Insert Email Address\]** with the subject line **“Application for Web Developer (Contract)”** by **\[Insert Deadline\]**.

We look forward to reviewing your application!

Let me know if there are more specifics you'd like to include!
    
    `,
  }
];


export const categories = [...new Set(jobsData.map(job => job.department))];
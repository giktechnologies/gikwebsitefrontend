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
  }
];


  export const categories = [...new Set(jobsData.map(job => job.department))];
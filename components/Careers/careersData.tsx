export const jobsData = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'Engineering',
      description: 'Work on the latest web technologies and build amazing user experiences.',
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      description: 'Design intuitive and beautiful user interfaces for our products.',
    },
    {
      id: 3,
      title: 'Backend Developer',
      department: 'Engineering',
      description: 'Develop and maintain robust backend systems.',
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'Marketing',
      description: 'Craft compelling marketing campaigns to drive user engagement.',
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      description: 'Lead cross-functional teams to deliver outstanding products.',
    },
  ];

  export const categories = [...new Set(jobsData.map(job => job.department))];
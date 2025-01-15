import React from 'react';
import { checkIcon } from './AboutSectionOne';
import SectionTitle from '../Common/SectionTitle';



const CompanyGoals = () => {
  const goals = [
    {
      id: 1,
      type: "Vision",
      title: "Our Vision",
      description: " GIK's vision is to be a tech company that impacts society and the globe as a whole with innovative solutions that change the way of doing things, people's perspectives, and overall development",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      points: [
        "Leading technological advancement",
        "Creating sustainable solutions",
        "Driving digital transformation"
      ]
    },
    {
      id: 2,
      type: "Mission",
      title: "Our Mission",
      description: "GIK's mission is to be a world-class ICT company that provides cutting-edge solutions through technological innovations and creations.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      points: [
        "Excellence in service delivery",
        "Innovation at our core",
        "Customer-centric approach"
      ]
    }
  ];

  const GoalCard = ({ type, title, description, icon, points }) => {
    return (
      <div className="rounded-lg p-8 border border-indigo-500/30">
        <div className="mb-8 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="mb-4 text-center text-2xl font-bold text-black">
          {title}
        </h3>
        <p className="mb-6 text-center text-lg font-medium text-body-color">
          {description}
        </p>
        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-center">
              {/* <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
              <p className="text-gray-700">{point}</p> */}


              <List text={point} checkIcon={checkIcon}/>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl mb-12">
          <SectionTitle
            title="Company Goals"
            paragraph="Guided by our vision and driven by our mission, we strive to create meaningful impact and deliver exceptional value."
            center
          />
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {goals.map((goal) => (
            <GoalCard key={goal.id} {...goal} />
          ))}
        </div>
      </div>
    </section>
  );
};


export const List = ({ text, checkIcon }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

export default CompanyGoals;
// components/Careers/RoleDetails.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface Job {
  id: number;
  title: string;
  department: string;
  description: string;
  details_markdown: string;
}

interface RoleDetailsProps {
  job: Job;
}

const RoleDetails: React.FC<RoleDetailsProps> = ({ job }) => {
  return (
    <div className="min-h-screen py-10 px-6 md:px-20">
      {/* Link to go back to the careers listing */}
      {/* <Link href="/careers" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Careers
      </Link> */}

      {/* Job Title & Description */}
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <p className="mb-6 text-lg text-gray-600">{job.description}</p>
      
      {/* Job details rendered from Markdown */}
      <div className="prose dark:prose-dark">
        <ReactMarkdown>{job.details_markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default RoleDetails;

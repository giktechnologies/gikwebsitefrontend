// "use client";
// import { jobsData } from "@/components/Careers/careersData";
// import { useParams } from "next/navigation";

// import ReactMarkdown from "react-markdown";
// import { Metadata } from "next";
// import Breadcrumb from "@/components/Common/Breadcrumb";

// export const metadata: Metadata = {
//   title: "Careers Pagey | Free Next.js Template for Startup and SaaS",
//   description: "This is About Page for Startup Nextjs Template",
//   // other metadata
// };
// const RoleDetails = () => {
//   const { id } = useParams(); // Get dynamic route parameter
//   console.error("ID ",id)

//   const job = jobsData.find((job) => job.id.toString() === id);

//   if (!job) {
//     return <div className="text-center py-20 text-red-500">Job not found.</div>;
//   }

//   return (<>
//     <Breadcrumb
//         pageName="Careers Page"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
//       />

//     <div className="max-w-4xl mx-auto py-10 px-6">
//       <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
//       <p className="text-lg text-gray-600 mb-6">Department: {job.department}</p>
//       <div className="prose lg:prose-xl dark:prose-invert">
//         <ReactMarkdown>{job.details_markdown}</ReactMarkdown>
//       </div>
//       <div className="mt-8">
//         <a
//           href={`/apply/${job.id}`}
//           className="inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
//     </>
//   );
// };

// app/careers/role/[id]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { jobsData } from '@/components/Careers/careersData'; // adjust the import path as needed
import RoleDetails from '@/components/Careers/Roles/RoleDetails';
import Breadcrumb from '@/components/Common/Breadcrumb';


type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const jobId = parseInt(params.id, 10);
  const job = jobsData.find(job => job.id === jobId);

  if (!job) {
    return {
      title: 'Job Not Found',
      description: 'The job you are looking for does not exist.',
    };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
  };
}

const RoleDetailsPage = ({ params }: { params: Params }) => {
  const jobId = parseInt(params.id, 10);
  const job = jobsData.find(job => job.id === jobId);

  if (!job) {
    notFound(); // This will render your 404 page if the job doesn't exist
  }

  return (<>
    <Breadcrumb
      pageName="Careers Page"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
    />
    <RoleDetails job={job} />
    </>
  );
};

export default RoleDetailsPage;

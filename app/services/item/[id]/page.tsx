

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
      pageName="Service Details Page"

      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
    />
    <RoleDetails job={job} />
    </>
  );
};

export default ServiceDetailsPage;


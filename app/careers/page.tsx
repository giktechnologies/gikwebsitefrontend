import OpenRoleListings from "@/components/Careers";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const CareersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <OpenRoleListings/>

    </>
  );
};

export default CareersPage;
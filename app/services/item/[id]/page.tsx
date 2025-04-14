


// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import servicesData from "@/components/Services/servicesData";
// import ServiceDescription from "@/components/Services/ServicesDetail";
// import Breadcrumb from "@/components/Common/Breadcrumb";
// import ServiceNavigation from "@/components/Services/ServiceNavigation";

// type Params = {
//   id: string;
// };

// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//   const serviceId = parseInt(params.id, 10);
//   const service = servicesData.find((s) => s.id === serviceId);

//   if (!service) {
//     return {
//       title: "Service Not Found",
//       description: "The service you are looking for does not exist.",
//     };
//   }

//   return {
//     title: `${service.title} | Services`,
//     description: service.paragraph,
//   };
// }

// const ServiceDetailsPage = ({ params }: { params: Params }) => {
//   const serviceId = parseInt(params.id, 10);
//   const service = servicesData.find((s) => s.id === serviceId);

//   if (!service) {
//     notFound();
//   }

//   return (
//     <>
//       <Breadcrumb
//         pageName="Service Details Page"
//         description="Explore detailed insights about our premium services."
//       />

//       <div className="py-16 md:py-20 lg:py-28">
//         <div className="flex flex-col md:flex-row gap-6 mx-4 md:mx-12 mb-9">
//           {/* Service Description Section */}
//           <div className="lg:w-2/3 md:w-[70%]">
//             <ServiceDescription
//               imageSrc={service.image}
//               title={service?.title || "Service"}
//               description={service?.paragraph || "No description available."}
//             />
//           </div>

//           {/* Service Navigation Section */}
//           <div className="lg:w-1/3 md:w-[30%] min-w-[250px]">
//             <ServiceNavigation currentServiceId={serviceId} />
//           </div>
//         </div>
//       </div>


//     </>
//   );
// };

// export default ServiceDetailsPage;




import Breadcrumb from "@/components/Common/Breadcrumb";
import ServiceNavigation from "@/components/Services/ServiceNavigation";
import servicesData from "@/components/Services/servicesData";
import ServiceDescription from "@/components/Services/ServicesDetail";
import ServiceRequestForm from "@/components/Services/ServicesDetail/ServicesRequestForm";
import SubServicesList from "@/components/Services/ServicesDetail/SubServicesList";
import { notFound } from "next/navigation";



type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const serviceId = parseInt(params.id, 10);
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The service you are looking for does not exist.",
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.paragraph,
  };
}


const ServiceDetailsPage = ({ params }: { params: Params }) => {
  const serviceId = parseInt(params.id, 10);
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName="Service Details Page"
        description="Explore detailed insights about our premium services."
      />

      <div className="py-16 md:py-20 lg:py-28">
        <div className="flex flex-col md:flex-row gap-6 mx-4 md:mx-12 mb-9">
          {/* Service Description Section */}
          <div className="lg:w-2/3 md:w-[70%]">
            <ServiceDescription
              imageSrc={service.image}
              title={service?.title || "Service"}
              description={service?.paragraph || "No description available."}
            />
          </div>

          {/* Service Navigation Section */}
          <div className="lg:w-1/3 md:w-[30%] min-w-[250px]">
            <ServiceNavigation currentServiceId={serviceId} />
          </div>
        </div>

        {/* New Sections */}
        <div className="flex flex-col md:flex-row gap-6 mx-4 md:mx-12">
          {/* Sub Services List */}
          <div className="lg:w-2/3 md:w-[70%] pt-10">
            <SubServicesList subServices={service.detailspage_info.sub_services} />
          </div>

          {/* Service Request Form */}
          <div className="lg:w-1/3 md:w-[30%] min-w-[250px]">
            <ServiceRequestForm subServices={service.detailspage_info.sub_services} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsPage;

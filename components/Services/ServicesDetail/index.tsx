// import SectionTitle from "@/components/Common/SectionTitle";
// import servicesData from "../servicesData";
// import SingleService from "../SingleService";
// import React from "react";


// const ServiceDetail : React.FC<ServiceProps> = ({ service }) => {

//   return (
//     <>
//       <section id="features" className="py-16 md:py-20 lg:py-28">
//         <div className="container">
//           <SectionTitle
//             title="Service Detail"
//             paragraph="Explore Our Extensive Range of Specialized and Tailored Professional Services for Your Business"
//             center
//           />

//           <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
//             {servicesData.map((feature) => (
//               <SingleService key={feature.id} feature={feature} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceDetail;


// interface Service {
//   id: number;
//   title: string;
//   department: string;
//   description: string;
//   details_markdown: string;
// }

// interface ServiceProps {
//   service: Service;
// }

import Image from "next/image";

interface ServiceDescriptionProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceDescription = ({ imageSrc, title, description }: ServiceDescriptionProps) => {
  return (
<div className="flex flex-col items-center text-center">
  <div className="mb-4">
    <Image 
      src={imageSrc} 
      alt={title} 
      width={250} 
      height={150} 
      className="w-full max-w-xs h-auto rounded-lg"
    />
  </div>
  <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed px-5">
    {description}
  </p>
</div>

  );
};

export default ServiceDescription;

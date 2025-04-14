// import Link from "next/link";
// import servicesData from "@/components/Services/servicesData";

// const ServiceNavigation = ({ currentServiceId }: { currentServiceId: number }) => {
//   return (
//     <div className="w-1/3 p-4 bg-primary bg-opacity-10 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl mb-4">Other Services</h2>
//       <ul className="space-y-2">
//         {servicesData.map((service) => (
//           <li key={service.id}>
//             <Link
//               href={`/services/item/${service.id}`}
//               className={`block p-2 rounded-md transition-colors ${
//                 service.id === currentServiceId
//                   ? "bg-blue-500 text-white font-medium leading-relaxed text-body-color"
//                   : "hover:bg-blue-100 text-base font-medium leading-relaxed text-body-color"
//               }`}
//             >
//               {service.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServiceNavigation;


import Link from "next/link";
import servicesData from "@/components/Services/servicesData";

const ServiceNavigation = ({ currentServiceId }: { currentServiceId: number }) => {
  return (
    <div className="w-full p-4 bg-primary bg-opacity-10 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black dark:text-white mb-4">
        Other Services
      </h2>
      <ul className="space-y-2">
        {servicesData.map((service) => (
          <li key={service.id}>
            <Link
              href={`/services/item/${service.id}`}
              className={`block p-3 rounded-md transition-colors duration-200 ${
                service.id === currentServiceId
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-300 font-medium"
              }`}
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceNavigation;

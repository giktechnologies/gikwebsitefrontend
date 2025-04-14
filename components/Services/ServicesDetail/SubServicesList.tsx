import { checkIcon } from "@/components/About/AboutSectionOne";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyComponent = () => {
  return (
    <div>
      <i className="bi bi-alarm"></i> Alarm Icon
    </div>
  );
};

export { MyComponent };


interface SubServicesListProps {
  subServices: { id: number; name: string }[];
}

const SubServicesList = ({ subServices }: SubServicesListProps) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black dark:text-white mb-4">Sub Services   </h3>
      <ul className="space-y-2">

        {subServices.map((subService) => (
          <>
            <li key={subService.id} className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              <i className="bi bi-check-circle-fill" style={{ marginRight: "8px" }}></i>
              {subService.name}
            </li>
          </>

        ))}
      </ul>
    </div>
  );
};

export default SubServicesList;

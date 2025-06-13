// import Image from "next/image";
// import Link from "next/link";
// import { Course } from "./courseData";

// type SingleCourseProps = {
//   course: Course;
// };

// export const SingleCourse: React.FC<SingleCourseProps> = ({ course }) => {
//   const slug = course.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

//   return (
//     <Link
//       href={`/courses/${slug}`}
//       className="flex items-center gap-4 p-5 rounded-lg border border-gray-200 dark:border-dark-higher bg-white shadow-sm hover:shadow-md transition-all min-h-[100px] sm:min-h-[120px] xl:min-h-[130px] wow fadeInUp dark:hover:shadow-gray-dark group relative overflow-hidden bg-white shadow-one duration-300 dark:bg-dark"
//     >
//       {/* ICON: Left side */}
//       <div className="w-10 h-10 relative flex-shrink-0">
//         <Image
//           src={course.image_asset}
//           alt={course.name}
//           fill
//           className="object-contain"
//           sizes="40px"
//         />
//       </div>

//       {/* TITLE: Right of the icon */}
//       <span className="text-lg sm:text-xl font-bold text-black dark:text-white leading-snug">
//         {course.name}
//       </span>
//     </Link>
//   );
// };

import Image from "next/image";
import Link from "next/link";
import { Course } from "./courseData";

type SingleCourseProps = {
  course: Course;
};

export const SingleCourse: React.FC<SingleCourseProps> = ({ course }) => {
  const slug = course.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <Link
      href={`/courses/${slug}`}
      className="group flex items-center gap-4 p-5 rounded-lg border border-gray-200 dark:border-dark-higher 
                 bg-white dark:bg-dark 
                 shadow-sm hover:shadow-md transition-all min-h-[100px] sm:min-h-[120px] xl:min-h-[130px] 
                 wow fadeInUp dark:hover:shadow-gray-dark relative overflow-hidden duration-300 
                 hover:bg-[#1D4ED8] dark:hover:bg-[#1D4ED8]"
    >
      {/* ICON: Left side */}
      <div className="w-10 h-10 relative flex-shrink-0">
        {/* Default Icon */}
        <Image
          src={course.image_asset}
          alt={course.name}
          fill
          className="object-contain group-hover:hidden"
          sizes="40px"
        />
        {/* Hover (alt) Icon */}
        <Image
          src={course.image_asset_alt}
          alt={`${course.name} (alt)`}
          fill
          className="object-contain hidden group-hover:block"
          sizes="40px"
        />
      </div>

      {/* TITLE */}
      <span
        className="text-lg sm:text-xl font-bold 
                   text-black dark:text-white 
                   leading-snug 
                   group-hover:text-white"
      >
        {course.name}
      </span>
    </Link>
  );
};

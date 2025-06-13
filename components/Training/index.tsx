// components/Courses/index.tsx
"use client";

import SectionTitle from "../Common/SectionTitle";
import { courses } from "./courseData";
import { SingleCourse } from "./SingleCourse";




 // if you need any client-only behavior; otherwise you can drop this

;

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* <h2 className="mb-6 text-3xl font-bold text-gray-800 text-center">
          Explore Our Courses
        </h2>
        <p className="mb-10 text-center text-gray-600">
          Choose from a variety of training programs designed to fit your
          schedule and goals.
        </p> */}

        <SectionTitle
                    title="Explore Our Courses"
                    paragraph="Choose from a variety of training programs designed to fit your
          schedule and goals."
                    center
                  />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <SingleCourse key={course.name} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

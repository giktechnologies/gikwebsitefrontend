"use client"
import { useState } from "react";
import { categories, jobsData } from "./careersData";
import { motion } from "framer-motion";
import { Card, CardContent, Select } from "./Cards";

const OpenRoleListings = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
      const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
    
      const filteredJobs = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
      });
      return (
        <div className="min-h-screen py-10 px-6 md:px-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg pr-[10px] text-base leading-relaxed text-body-color">
              Discover exciting opportunities to grow and make an impact with us.
            </p>
          </div>
    
          <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search job titles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 p-4 shadow-md rounded-2xl border-gray-300 dark:bg-dark"
            />
            <Select
              value={selectedDepartment}
              onChange={setSelectedDepartment}
              options={["All", ...categories]}
              className="w-full md:w-1/2"
            />
          </div>
    
          <div className="max-w-5xl mx-auto">
            {filteredJobs.length > 0 ? (
              categories.map(category => {
                const jobsInCategory = filteredJobs.filter(job => job.department === category);
                if (jobsInCategory.length === 0) return null;
                return (
                  <div key={category} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gik-orange">{category}</h2>
                    <ul className="space-y-4">
                      {jobsInCategory.map(job => (
                        <motion.li
                          key={job.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="list-none"
                        >
                          <Card className="border rounded-lg hover:shadow-2xl transition-shadow dark:border-gray-800">
                            <CardContent>
                              <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
                                <div>
                                  <h3 className="text-xl font-bold">{job.title}</h3>
                                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color mt-1">{job.description}</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                  <a
                                    href={`/apply/${job.id}`}
                                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                                  >
                                    Apply Now
                                  </a>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                );
              })
            ) : (
              <div className="text-center text-gray-500 mt-10">
                <p>No job positions match your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      );
  };
  
  export default OpenRoleListings;
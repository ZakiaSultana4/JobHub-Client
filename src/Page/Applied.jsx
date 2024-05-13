import { useContext, useEffect, useState } from "react";
import { axiosSecure } from "../hooks/useExiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { usePDF } from "react-to-pdf";

const Applied = () => {
  const [jobs, setJobs] = useState([]);
  const { toPDF, targetRef } = usePDF({ filename: "Applied-job.pdf" });
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    axiosSecure
      .get(`/my-bids?email=${user.email}`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [user.email]);

  const handleFilter = (v) => {
    const specificData = jobs.filter((data) => {
      if (data?.category.includes(v)) {
        return data;
      }
    });
    setJobs(specificData);
  };
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className=" flex justify-between">
        <div className="">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              My Total Applied Jobs
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {jobs.length}
            </span>
          </div>
        </div>
        <div>
          <select
            onChange={(e) => handleFilter(e.target.value)}

            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="OnSite">On Site Job</option>
            <option value="Remote">Remote Job</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part-Time">Part Time</option>
          </select>
        </div>
        <div
              color="primary"
              className="cursor-pointer bg-blue-500 text-white  text-center my-auto py-2 px-2 rounded-md"
              onClick={() => toPDF()}
            >
              Download Your Job Summary
            </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 " ref={targetRef}>
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Salary</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Expired Date</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Category
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Posted by
                    </th>

                    {/* <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {jobs?.map((item) => (
                    <>
                      <tr>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {/* <div className=" flex gap-2 justify-center items-center">
                          <img src={item.CompanyImage} alt="" className=" rounded-full w-8"/>
                        
                        </div> */}
                          <div className=" flex flex-col gap-2">
                            <p> {item.title}</p>
                            <p className=" font-semibold"> {item.Cname}</p>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          $({item.MaximumSalary} - {item.MinimumSalary})
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {item.expiredDate}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                         text-xs"
                            >
                              {item.category}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {/* <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100/60 text-yellow-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                          <h2 className="text-sm font-normal ">Pending</h2>
                        </div> */}
                          <div className=" flex gap-2 justify-center items-center">
                            <img
                              src={item.jobAdderPhoto}
                              alt=""
                              className=" rounded-full w-8"
                            />
                            <p>{item.jobAdderName}</p>
                          </div>
                        </td>
                        {/* <td className="px-4 py-4  flex  gap-3 ">
                        <MdDeleteOutline
                          onClick={() => handleDelete(item._id)}
                          size={20}
                          className=" cursor-pointer"
                        />
                      
                   
                      </td> */}
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applied;

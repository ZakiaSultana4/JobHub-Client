import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { axiosSecure } from "../hooks/useExiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
const My = () => {
  const [jobs, setJobs] = useState([]);
  const [jobs2, setJobs2] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure
      .get(`/my-jobs/${user?.email}`)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [user.email]);
  const { bannerUrl } = jobs || {};
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/job/${id}`).then((res) => {
          const filter = jobs.filter((f) => f._id !== id);
          setJobs2(filter);
          setLoading(true);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
        setLoading(false).catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
      }
    });
  };
  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Total Jobs</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {jobs.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
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

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {jobs?.map((item) => (
                    <>
                      <tr key={item._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          <div className=" flex gap-2 justify-center items-center">
                            <img
                              src={bannerUrl}
                              alt=""
                              className=" rounded-full w-8"
                            />
                          </div>
                          <div className=" flex flex-col gap-2">
                            <p> {item.title}</p>
                            <p className=" font-semibold"> {item.Cname}</p>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          $({item.MinimumSalary}-{item.MaximumSalary})
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
                          <div className=" flex gap-2 justify-center items-center">
                            <img
                              src={item.jobAdderPhoto}
                              alt=""
                              className=" rounded-full w-8"
                            />
                            <p>{item.jobAdderName}</p>
                          </div>
                        </td>
                        <td className="px-4 py-4  flex  gap-3 ">
                          <MdDeleteOutline
                            onClick={() => handleDelete(item._id)}
                            size={20}
                            className=" cursor-pointer"
                          />
                          <Link to={`/job-update/${item._id}`}>
                            {" "}
                            <FaEdit />
                          </Link>
                        </td>
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

export default My;

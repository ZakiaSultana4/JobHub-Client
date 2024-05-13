



import { useEffect, useState } from "react";
import MyJobs from "./MyJobs";
import { axiosSecure } from "../hooks/useExiosSecure";

const MyJob = () => {
   
   

    


//   const token = Cookies.get("user");
//   const queryClient = useQueryClient();

//   const { mutate } = useMutation({
//     mutationFn: (id) =>
//       Axios.delete(
//         "/jobs/" + id,

//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       ),
//     onSuccess: (mutatedData) => {
//       queryClient.invalidateQueries({ queryKey: ["auth"] });
//       toast("Job Deleted  Successfully.");
//       console.log(mutatedData.data.data.id);
//     },
//     onError: (err) => {
//       console.log(err);
//       toast.error("Something Went Wrong when deleting job.");
//     },
//   });

  return (
    <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-3">
   
      <MyJobs
        jobs={jobs}

        // mutate={mutate}
      />
    </div>
  );
};

export default MyJob;

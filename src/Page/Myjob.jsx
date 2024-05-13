



import { useEffect, useState } from "react";
import MyJobs from "./MyJobs";
import { axiosSecure } from "../hooks/useExiosSecure";

const MyJob = () => {
   
   

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


/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { useEffect, useState } from 'react'
import { axiosSecure } from '../hooks/useExiosSecure'
import JobCard from '../Component/JobCard '
const MyTabs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/jobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <Tabs>
      <div className=' container px-5 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
          Browse All Jobs By Categories
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          Three categories available for the time being. They are 
          On Site Job, Remote Job, Hybrid Job and Part Time Job. Browse them by
          clicking on the tabs below.
        </p>
       <div className=" ">
       <div className='flex items-center justify-center '>
          <TabList>
            <Tab>Remote Job</Tab>
            <Tab>On Site Job</Tab>
            <Tab>Hybrid Job</Tab>
            <Tab>Part Time Job</Tab>
          </TabList>
        </div>
       <div className="">
       <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'Remote').slice(0,4)
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'OnSite')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>


        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'Hybrid')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter(j => j.category === 'Part-Time')
              .map(job => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
       </div>
       </div>
      </div>
    </Tabs>
  )
}

export default MyTabs
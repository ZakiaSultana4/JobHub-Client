/* eslint-disable react/no-unescaped-entities */
import { Divider, Snippet, Tab, Tabs } from "@nextui-org/react";
import { format } from "date-fns";


const Blogs = () => {
  return (
    <div className="container mx-auto ">
   
      <h3 className="md:text-2xl  max-w text-xl ">All Blogs</h3>
      <Divider className="" />
      <div className="flex flex-col md:flex-row gap-10 ">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "md:gap-2 gap-4 w-full  relative  px-2  border-divider flex  md:flex-col  overflow-x-scroll  justify-start items-start       ",
            cursor: "  bg-[#2d74c8] snap-y w-full  ",
            tab: "w-ful px-0  h-12  justify-start text-left",
            tabContent: " group-data-[selected=true]:text-[#06b6d4]  ",
          }}
        >
          <Tab
            key="token"
            title={
              <div className="flex items-start text-lg text-primary group-data-[selected=true]:text-[#2d74c8] hover:text-[#2d74c8]   md:mx-3  w-full">
                <span> Access token & Refresh token</span>
              </div>
            }
          >
            <h3 className=" text-xl ">Access token</h3>
            <Divider className="my-3" />
            <p className="text-foreground-500">
              The access token is a short-lived credential that is issued to a
              client application after a user successfully logs in and is
              granted authorization to access specific resources or perform
              actions on behalf of the user. It typically takes the form of a
              JSON Web Token (JWT) or a random string and contains information
              about the user, their permissions, and the token&apos;s expiration
              time. The access token is used to authenticate API requests,
              allowing the client application to access protected resources or
              perform actions that require authentication. Access tokens have a
              limited lifespan, usually in the range of minutes, and when they
              expire, the client must obtain a new access token to continue
              accessing protected resources.
            </p>
            <h3 className=" text-xl mt-10">Refresh token</h3>
            <Divider className="my-3" />
            <p className="text-foreground-500">
              The refresh token is a long-lived credential that is issued
              alongside the access token when a user logs in or authorizes a
              client application. Unlike the access token, refresh tokens have a
              longer lifespan, sometimes extending to weeks or even months. The
              primary purpose of a refresh token is to enable the client
              application to request a new access token without requiring the
              user to reauthenticate. When the access token expires or needs to
              be refreshed, the client application presents the refresh token to
              the authorization server. The authorization server validates the
              refresh token and, if it is valid, issues a new access token. This
              mechanism ensures that users don&apos;t need to log in repeatedly
              and can maintain their session with the application.
            </p>
            <h3 className=" text-xl mt-10 text-danger">Where to store:</h3>
            <Divider className="my-3" />
            <ul className="text-foreground-500 list-disc list-outside  ">
              <li>
                Store the access token in memory, as it is a short-lived
                credential that should not be persisted to potentially insecure
                storage mechanisms like local storage or cookies.
              </li>
              <li className="my-3">
                Store the refresh token securely in an HTTP-only cookie, which
                provides an additional layer of security against potential
                security risks and helps protect the token from being accessed
                by client-side JavaScript.
              </li>
            </ul>
          </Tab>

          <Tab
            key="applied"
            title={
              <div className="flex items-start text-lg text-primary group-data-[selected=true]:text-[#2d74c8] hover:text-[#2d74c8]  mx-3">
                <span>Express js & Nest JS </span>
              </div>
            }
          >
            <h3 className=" text-xl ">Express.js</h3>
            <Divider className="my-3" />
            <p className="text-foreground-500">
              Express.js is a minimal and flexible web application framework for
              Node.js, designed to simplify the development of web and mobile
              applications. It provides a robust set of features for building
              web servers and APIs, such as routing, middleware support, and
              request/response handling. Express.js is widely used in the
              Node.js ecosystem and is known for its simplicity and performance.
              It allows developers to create web applications and RESTful APIs
              efficiently, making it a popular choice for building back-end
              services.
            </p>
            <h3 className=" text-xl mt-10">Nest.js</h3>
            <Divider className="my-3" />
            <p className="text-foreground-500">
              Nest.js is a progressive and innovative Node.js framework for
              building efficient, scalable, and maintainable server-side
              applications. It takes inspiration from various programming
              languages and frameworks, such as Angular and Express, to provide
              a well-structured and modular approach to application development.
              Nest.js encourages the use of TypeScript for writing code and
              follows a modular, component-based architecture. It offers
              features like dependency injection, decorators, and built-in
              support for testing, making it a powerful choice for developers
              building complex back-end applications. Nest.js is suitable for a
              wide range of applications, from small projects to
              enterprise-level solutions.
            </p>
          </Tab>

          <Tab
            key="explain"
            title={
              <div className="flex items-start text-lg group-data-[selected=true]:text-[#2d74c8] hover:text-[#2d74c8] text-primary  mx-3 ">
                <span>Explanation </span>
              </div>
            }
          >
            <h3 className="text-3xl">Some Random Code Explanation</h3>
            <Divider className="my-3" />
            <div className="flex flex-col gap-3 max-w-4xl">
              <h2 className="text-lg font-bold text-[#2d74c8]">
                Formatting and Displaying Dates
              </h2>
              <Snippet
                className="overflow-hidden overflow-x-scroll"
                variant="bordered"
              >
                <span>{`import { format } from "date-fns";`}</span>
                <span>{`format(new Date(), "dd MMMM, yyyy")`}</span>
                <span>{`// Example Output: ${format(
                  new Date(),
                  "dd MMMM, yyyy"
                )}`}</span>
              </Snippet>
              <p className="text-foreground-500">
                These code snippets demonstrate the usage of the `format`
                function from the "date-fns" package to format and display dates
                in a specific format. The first line imports the `format`
                function, and the following line uses it to format the current
                date. The format pattern "dd MMMM, yyyy" represents the day,
                month, and year in a specific format. "date-fns" is a
                widely-used JavaScript library for working with dates. In this
                code, we use the `format` function to format date values.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-4xl my-8">
              <h2 className="text-lg font-bold text-[#2d74c8]">
                Fetching Data Using Tanstack
              </h2>
              <Snippet
                className="overflow-hidden overflow-x-scroll"
                variant="bordered"
              >
                <span>{`import { useQuery } from "@tanstack/react-query";`}</span>
                <span>{`// Define a query function to fetch data`}</span>
                <span>{`const fetchUserData = async () => {...}`}</span>
                <span>{`const { data, error, isLoading } = useQuery("userData", fetchUserData);`}</span>
              </Snippet>
              <div className="text-foreground-500">
                In this section, we focus on using the "useQuery" function from
                "@tanstack/react-query" to fetch data. Here's a breakdown of
                what's happening:
                <ul className="list-decimal list-inside marker:text-[#2d74c8] mt-2 marker:font-bold">
                  <li>
                    We import the `useQuery` function from
                    "@tanstack/react-query." This function allows us to handle
                    data fetching operations, such as querying data from a
                    server or API.
                  </li>
                  <li>
                    We define a query function named `fetchUserData`. This
                    function describes how to fetch the data you need. You
                    should replace{`{...}`} with the actual code to fetch data
                    from your API or source. This function can be asynchronous
                    and should return the fetched data.
                  </li>
                  <li>
                    We use the `useQuery` hook with two arguments: a unique
                    query key (in this case, "userData") and the fetch function
                    (`fetchUserData`). It helps manage the loading state, data,
                    and errors related to the data fetching process. The result
                    is stored in the `data`, `error`, and `isLoading` variables.
                  </li>
                </ul>
                The key concept here is the "useQuery" function, which
                simplifies data retrieval and caching. By providing a unique
                query key and a fetch function, you can efficiently fetch data
                and have it automatically cached and invalidated as needed.
                "Query" is a fundamental concept when working with
                "@tanstack/react-query," making it easy to work with data in
                your React application.
              </div>
            </div>

            <div className="flex flex-col gap-3 max-w-4xl">
              <h2 className="text-lg font-bold text-[#2d74c8]">
                Post Data Using Tanstack
              </h2>
              <Snippet
                className="overflow-hidden overflow-x-scroll"
                variant="bordered"
              >
                <span>{`import { useMutation } from "@tanstack/react-query";`}</span>
                <span>{`// Define a mutation function to post data`}</span>
                <span>{`const postUserData = async (data) => {...}`}</span>
                <span>{`const mutation = useMutation(postUserData);`}</span>
              </Snippet>
              <div className="text-foreground-500">
                In this section, we'll focus on posting data using
                `@tanstack/react-query`. Here's an explanation:
                <ul className="list-decimal list-inside marker:text-[#2d74c8] mt-2 marker:font-bold ">
                  <li>
                    We import the `useMutation` function from
                    "@tanstack/react-query." This function allows us to handle
                    data mutation operations, such as posting data to a server
                    or performing other data mutation actions.
                  </li>
                  <li>
                    We define a mutation function called `postUserData`. This
                    function is responsible for sending data to a server or
                    performing a data mutation. You should replace{`{...}`} with
                    the actual code to post data in your application. This
                    function can take data as a parameter if needed.
                  </li>
                  <li>
                    We use the `useMutation` hook with the `postUserData`
                    function, creating a `mutation` object. This object contains
                    various properties and functions to manage the mutation
                    process, handle loading states, and respond to success or
                    failure. By using `useMutation`, you can easily manage data
                    posting operations in your React application, and
                    `@tanstack/react-query` will provide features for handling
                    retries, optimistic updates, and more, making it a powerful
                    tool for data management.
                  </li>
                </ul>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Blogs;
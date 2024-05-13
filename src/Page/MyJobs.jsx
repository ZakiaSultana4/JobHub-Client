/* eslint-disable react/prop-types */

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";

// import { ChevronDown } from "../../assets/icons/ChevronDown";
import { capitalize } from "../hooks/Capitalize";

import { columns } from "../hooks/Data";
import { Link } from "react-router-dom";
import { usePDF } from "react-to-pdf";

import Swal from "sweetalert2";
import { axiosSecure } from "../hooks/useExiosSecure";
// import Delete from "../dashboard/DeleteDialog";
// import { PlusIcon } from "../../assets/icons/Plus";

const INITIAL_VISIBLE_COLUMNS = [
  "title",
  "salary",
  "category",
  "status",
  "actions",
  "posted",
  "deadline",
];

export default function MyJobs({ jobs, mutate, isLoading }) {
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);
  const [jobs2, setJobs2] = useState([]);
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
        axiosSecure
          .delete(`/job/${id}`)
          .then((res) => {
            const filter = jobs.filter((f) => f._id !== id);
            setJobs2(filter);

            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
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
  const renderCell = React.useCallback(
    (item, columnKey) => {
      const jobs = item;
      const cellValue = jobs[columnKey];

      switch (columnKey) {
        case "title":
          return (
            <div className="">
              <User
                avatarProps={{
                  radius: "lg",
                  src: jobs?.logoUrl,
                  size: "sm",
                }}
              ></User>
              <p>{jobs?.Cname}</p>
              <p>{jobs?.title}</p>
            </div>
          );
        case "posted":
          return (
            <User
              avatarProps={{
                radius: "full",
                src: jobs.jobAdderPhoto,

                size: "sm",
              }}
              //   description={createdDate(job?.createdAt)}
              name={jobs?.jobAdderName}
            ></User>
          );
        case "salary":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm  capitalize">
                {jobs.MaximumSalary} - {jobs.MinimumSalary}
              </p>
            </div>
          );

        case "actions":
          return (
            <div className="flex gap-4">
              <Button
                size="sm"
                variant="solid"
                as={Link}
                to={"/job-update/" + item?._id}
                color="primary"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(item?._id)}
                size="sm"
                variant="solid"
                id={item?._id}
                className=" cursor-pointer"
                color="primary"
              >
                Delete
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [mutate]
  );

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between gap-3 ">
          <div className="div">
            <span className=" text-xl">Total My Jobs {jobs?.length}</span>
          </div>
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  //   endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Button onClick={() => toPDF()} color="primary">
              Download Summary
            </Button>
          </div>
        </div>
      </div>
    );
  }, [visibleColumns, jobs?.length, toPDF]);

  return (
    <div className=" bg-white shadow-lg mt-4">
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContentPlacement="outside"
        ref={targetRef}
        classNames={{
          wrapper: "max-h-fit",
        }}
        topContent={topContent}
        topContentPlacement="outside"
      >
        <TableHeader
          columns={headerColumns}
          className=" bg-slate-500 shadow-lg"
        >
          {(column) => (
            <TableColumn key={column.uid} align={"center"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody
          isLoading={isLoading}
          emptyContent={isLoading ? "Loading Jobs" : "No jobs found"}
          items={jobs ? jobs : []}
        >
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

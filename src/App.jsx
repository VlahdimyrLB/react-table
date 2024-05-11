import { useMemo, useState } from "react";
import sampledata from "./data.json";
import "./App.css";
import { useTable } from "react-table";

function App() {
  const data = useMemo(() => sampledata, []);
  const columns = useMemo(
    () => [
      {
        Header: "ID", //the title or head of table
        accessor: "id", //same name as the table column name
      },
      {
        Header: "Firstname",
        accessor: "first_name",
      },
      {
        Header: "Lastname",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
  );

  // fundamental functions needed to setup react-table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} key={column.id}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

    // CODE BELOW IS THE OLD VERSION IT CAUSE KEY PROP ERROR

    // <div className="App">
    //   <div className="container">
    //     <table {...getTableProps()}>
    //       <thead>
    //         {headerGroups.map((headerGroup) => (
    //           <tr {...headerGroup.getHeaderGroupProps()}>
    //             {headerGroup.headers.map((column) => (
    //               <th {...column.getHeaderProps()}>
    //                 {column.render("Header")}
    //               </th>
    //             ))}
    //           </tr>
    //         ))}
    //       </thead>
    //       <tbody {...getTableBodyProps()}>
    //         {rows.map((row) => {
    //           prepareRow(row);
    //           return (
    //             <tr {...row.getRowProps()}>
    //               {row.cells.map((cell) => (
    //                 <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
    //               ))}
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
}

export default App;

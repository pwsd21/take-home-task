import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Loading from "../loading/loading";
import classes from "./table.module.css";

const ReactTable = ({ headers, data, setTeamId, setShow }) => {
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    setTeamId(id);
    setShow(true);
  };

  return (
    <div>
      <h2 className={classes.heading}>NBA TEAMS</h2>
      <input
        type="search"
        className={classes.searchBar}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {data.length > 0 ? (
        <Table bordered hover>
          <thead className={classes.thead}>
            <tr>
              {headers?.map((header) => {
                return (
                  <th scope="col" key={header}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data
              .filter((ele) => ele.name.includes(value))
              .map((item, index) => {
                return (
                  <tr key={item.id} onClick={() => handleClick(item.id)}>
                    {headers.map((header, index) => (
                      <td key={index}>
                        <span>{item[header.toLowerCase()]}</span>
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ReactTable;

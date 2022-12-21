import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { sortingName } from "../../service/service";
import Loading from "../loading/loading";
import SortingDropDown from "../sortingDropdown/sortingDropdown";
import classes from "./table.module.css";

const ReactTable = ({ headers, data, setTeamId, setShow }) => {
  const [value, setValue] = useState("");
  const [tableData, setTableData] = useState(data);

  const handleClick = (id) => {
    setTeamId(id);
    setShow(true);
  };

  useEffect(() => {
    setTableData([...data]);
  }, [data]);

  const handleSelect = (e) => {
    const { value: optionValue } = e.target;
    const dropDownValues = Number(optionValue);
    if (dropDownValues === 0) {
      setTableData([...data]);
    } else if (dropDownValues === 1) {
      const sortByName = tableData.sort((a, b) => sortingName(a.name, b.name));
      setTableData([...sortByName]);
    } else if (dropDownValues === 2) {
      const sortByCity = tableData.sort((a, b) => sortingName(a.city, b.city));
      setTableData([...sortByCity]);
    } else if (dropDownValues === 3) {
      const sortByAbbreviation = tableData.sort((a, b) =>
        sortingName(a.abbreviation, b.abbreviation)
      );
      setTableData([...sortByAbbreviation]);
    } else if (dropDownValues === 4) {
      const sortByConference = tableData.sort((a, b) =>
        sortingName(a.conference, b.conference)
      );
      setTableData([...sortByConference]);
    } else if (dropDownValues === 5) {
      const sortByDivision = tableData.sort((a, b) =>
        sortingName(a.division, b.division)
      );
      setTableData([...sortByDivision]);
    }
  };

  return (
    <div>
      <h2 className={classes.heading}>NBA TEAMS</h2>
      <SortingDropDown
        value={value}
        setValue={setValue}
        handleSelect={handleSelect}
      />
      {tableData.length > 0 ? (
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
            {tableData
              .filter((ele) => ele.name.includes(value))
              ?.map((item) => {
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

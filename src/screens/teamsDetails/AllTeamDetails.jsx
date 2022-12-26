import React, { useEffect, useState } from "react";
import ReactTable from "../../components/table/table";
import { getNBAGameDetails, getNBATeamDetails } from "../../service/service";
import { HEADERS } from "../../helper";
import OffCanves from "../../components/offCanves/offCanves";
import classes from "./AllteamDetails.module.css";
import PaginationComponent from "../pagination/pagination";
import { ITEM_PER_PAGE, PAGE_SIZE } from "../../constants/constants";

let filteredGameDetails = {};

export const AllTeamsDetail = () => {
  const [teamDetails, setTeamDetails] = useState([]);
  const [gamesDetails, setGamesDetails] = useState([]);
  const [show, setShow] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const [page, setPage] = useState(1);
  const [color, setColor] = useState(null);

  filteredGameDetails = gamesDetails?.find(
    (item) => item.visitor_team.id === teamId
  );

  const fetchGamesDetails = async () => {
    const response = await getNBAGameDetails();
    setGamesDetails(response?.data);
  };

  const fetchTeamDetails = async () => {
    const response = await getNBATeamDetails(page, PAGE_SIZE);
    setTeamDetails(response?.data);
  };

  useEffect(() => {
    fetchTeamDetails();
    fetchGamesDetails();
  }, [page]);

  return (
    <div className={classes.table}>
      <ReactTable
        headers={HEADERS}
        setTeamId={setTeamId}
        setShow={setShow}
        data={teamDetails}
        color={color}
        setColor={setColor}
      />
      <PaginationComponent
        itemsCount={ITEM_PER_PAGE}
        itemsPerPage={PAGE_SIZE}
        currentPage={page}
        setCurrentPage={setPage}
        alwaysShown={false}
      />
      <OffCanves
        filteredGameDetails={filteredGameDetails}
        show={show}
        setShow={setShow}
        setColor={setColor}
      />
    </div>
  );
};

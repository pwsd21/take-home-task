import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./offCanves.module.css";

const OffCanves = ({ filteredGameDetails, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton className={classes.heading}>
        <Offcanvas.Title>
          {filteredGameDetails
            ? filteredGameDetails.visitor_team.name
            : "No data"}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {filteredGameDetails ? (
          <div>
            <div className={classes.side}>
              <p>Team Full Name :</p>{" "}
              <p>{filteredGameDetails.home_team.full_name}</p>
            </div>

            <p>Total Games in 2021 : {filteredGameDetails.id}</p>
            <h6>Random Game Details : </h6>
            <h6>Date : {filteredGameDetails.date}</h6>
            <h6>Home Team : {filteredGameDetails.visitor_team.name}</h6>
            <h6>Home Team Score : {filteredGameDetails.home_team_score}</h6>
            <h6>Visitor Team : {filteredGameDetails.home_team.name}</h6>
            <h6>
              Visitor Team Score : {filteredGameDetails.visitor_team_score}
            </h6>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default React.memo(OffCanves);

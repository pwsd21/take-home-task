import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanves = ({ filteredGameDetails, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          {filteredGameDetails
            ? filteredGameDetails.visitor_team.name
            : "No data"}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {filteredGameDetails ? (
          <div>
            <h4>{filteredGameDetails.home_team.full_name}</h4>
            <p>Total Games in 2021: {filteredGameDetails.id}</p>
            <h5>Random Game Details</h5>
            <p>{filteredGameDetails.date}</p>
            <p>{filteredGameDetails.visitor_team.name}</p>
            <h5>{filteredGameDetails.home_team_score}</h5>
            <p>{filteredGameDetails.home_team.name}</p>
            <h6>{filteredGameDetails.visitor_team_score}</h6>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default React.memo(OffCanves);

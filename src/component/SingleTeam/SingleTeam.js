import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

const SingleTeam = (props) => {
  const { strTeam, idTeam, strTeamBadge, strLeague2 } = props.team;
  const history = useHistory();
  const showDetails = (idTeam) => {
    const url = `/team/${idTeam}`;
    history.push(url);
  };
  return (
    <div className="col-md-3 my-3 ">
      <Card className="shadow p-3 mb-5 bg-body rounded">
        <Card.Img className="mt-4" variant="top" src={strTeamBadge} />
        <Card.Body >
          <Card.Title className="text-center text-info">{strTeam}</Card.Title>
          <Card.Title className="text-center text-primary">
            {strLeague2}
          </Card.Title>
          <div className="text-center">
            <button
              onClick={() => showDetails(idTeam)}
              type="button"
              class="btn btn-outline-secondary text-info"
            >
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleTeam;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import maleImg from "../Images/male.jpg";
import femaleImg from "../Images/female.png";


const TeamDetails = () => {
  
  const { idTeam } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetails(data.teams[0]));
  }, [idTeam]);
 //CONDITIONAL RENDERING
  let strTeam;
  let picture = strTeam ? <Card.Img variant="top" src={femaleImg} /> : <Card.Img variant="top" src={maleImg} /> ;

  return (
    <div className="container mt-5">
      <Image src={details.strTeamBanner} fluid />

      <div className="card bg-dark text-white mt-5">
        <img className="card-img" src={details.strTeamLogo } alt="Loading" />
        <div className="card-img-overlay">
          <h5 className="card-title">Logo</h5>
        </div>
      </div>


      <Card className="mt-5" style={{ width: "100%" }}>
        <Row className="no-gutters">
          <Col md={6} lg={6}>
            {picture}
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{details.strTeam}</Card.Title>
              <Card.Text>
                <h5 className="card-title mt-4">
                  
                  <FontAwesomeIcon icon={faHistory} /> {details.intFormedYear}
                </h5>
                <h5 className="card-title mt-4">

                  <FontAwesomeIcon icon={faFlag} /> {details.strCountry}
                </h5>
                <h5 className="card-title mt-4">
                  <FontAwesomeIcon icon={faFutbol} /> {details.strSport}
                </h5>
                <h5 className="card-title mt-4">
                  <FontAwesomeIcon icon={faMars} /> {details.strGender}
                </h5>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <div className="container mt-5 mb-5">
        <p className="text-danger fw-bold">{details.strDescriptionEN}</p>
      </div>
      <div className="container mt-5 mb-5">
        <p>{details.strDescriptionNO}</p>
      </div>
    </div>
  );
};

export default TeamDetails;

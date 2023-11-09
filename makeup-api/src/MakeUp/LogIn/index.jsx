import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const imagesColumn1 = [
  "https://i.pinimg.com/564x/05/c1/7b/05c17ba30e3dfd50a826a55b5890f1a0.jpg",
  
  
];

const imagesColumn2 = [
  "https://i.pinimg.com/564x/9e/ef/65/9eef65c5274bf20515549ade9a55d174.jpg",
 
];

const Login = () => {
  const navigate = useNavigate();
  const toLayout = () => {
    navigate("layout");
  };

  

  return (
    <div>
        <div className="card-header">
          <h1>LOGIN</h1>
          <button className="btn btn-dark btn-lg" onClick={toLayout}>
            HOME
          </button>
        </div>
        <div className="card-body">
        <Container fluid>
        <Row>
          {/* First Column */}
          <Col md={6}>

              {imagesColumn1.map((imageUrl, index) => (
                <Card key={index}>
                  <Card.Img variant="top" src={imageUrl} />
                 </Card>
              ))}
          </Col>
          {/* Second Column */}
          <Col md={6}>
        
              {imagesColumn2.map((imageUrl, index) => (
                <Card key={index}>
                  <Card.Img variant="top" src={imageUrl} />
                </Card>
              ))}
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Login;

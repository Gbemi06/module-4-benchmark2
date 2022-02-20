import { Row, Col } from "react-bootstrap";
import MySideBar from "./MySideBar";
import MyNavBar from "./MyNavBar";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <Row>
      <Col xs={2}>
        <Row>
          <MySideBar />
        </Row>
      </Col>
      <Col xs={9}>
        <MyNavBar />
        <HomeContent />
      </Col>
    </Row>
  );
};

export default Home;

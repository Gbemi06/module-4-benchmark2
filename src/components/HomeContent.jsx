import { Row, Container } from "react-bootstrap";

const HomeContent = () => {
  return (
    <>
      <Container fluid className="px-5">
        <Row className="ml-2">
          <h1 className="h1-main">Good morning</h1>
        </Row>
        <Row id="main-section-small"></Row>
      </Container>

      <Container fluid className="px-5 my-4">
        <div className="row ml-2">
          <h2 className="h2-main">Recently played</h2>
        </div>
        <div id="main-section-recent" className="row"></div>
      </Container>

      <Container fluid className="px-5 my-4">
        <Row className="ml-2">
          <h2 className="h2-main my-0">Shows to try</h2>
        </Row>
        <p className="ml-2 to-try-main">
          Podcasts we think you will get hooked on.
        </p>
        <Row id="main-section-to-try"></Row>
      </Container>
    </>
  );
};

export default HomeContent;

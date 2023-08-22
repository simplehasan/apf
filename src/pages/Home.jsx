import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PieChart from "../components/PieChart";

const Home = () => {
    return (
        <>
            <Container >
                <Row className="mb-3 mt-3">
                    <Col className="text-center">
                        <h1>Executive Summary</h1>
                    </Col>
                </Row>
                {/* Main Content */}
                <Row>
                    <Col>
                        <PieChart />
                    </Col>
                    <Col>
                        <PieChart />
                    </Col>
                    <Col>
                        <PieChart />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Home;
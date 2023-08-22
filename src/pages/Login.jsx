import { useContext, useState } from "react";
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";


const Login = () => {
    const [pass, setPass] = useState(false);
    const [theme] = useContext(ThemeContext);

    const togglePassword = () => {
        setPass(!pass)
    }
    return (
        <>
            <Container className="mt-3 mb-3 justify-content-center" >
                <Row >
                    <Col className="d-flex justify-content-center text-center">
                        <Card
                            // bg={theme === 'dark' ? "dark" : "light"}
                            // variant={theme === 'dark' ? "dark" : "light"}
                            className={theme === 'dark' ? "bg-dark text-light" : "bg-light text-dark"}
                        >
                            <Card.Body>
                                <Card.Text className={theme === 'dark' ? "text-light" : "text-dark"}>
                                    <h5>Login</h5>
                                </Card.Text>
                                <Row>
                                    <Col>
                                        <InputGroup className="mb-3">
                                            <Button variant="outline-secondary" disabled="true">NIP</Button>
                                            <FormControl
                                                type="text"
                                                name="nip"
                                                placeholder="Masukkan NIP anda"
                                                aria-label="Nomor Induk Pegawai"
                                                className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}
                                            />
                                        </InputGroup>


                                        <InputGroup className="mt-3">
                                            <Button variant="outline-secondary" disabled="true">Password</Button>
                                            <FormControl
                                                type={pass ? "text" : "password"}
                                                name="password"
                                                placeholder="Masukkan password anda"
                                                aria-label="Password"
                                                className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}
                                            />
                                            <Button variant="outline-secondary" onClick={togglePassword}>
                                                {
                                                    pass ? <BsEyeSlashFill /> : <BsEyeFill />
                                                }

                                            </Button>
                                        </InputGroup>
                                    </Col>

                                </Row>

                            </Card.Body>
                        </Card>

                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default Login;
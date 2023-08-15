import { useContext, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import links from "../data/links.json";
import { BsFillCloudMoonFill, BsFillCloudSunFill } from 'react-icons/bs';


const TopNav = () => {
    const [theme, setTheme] = useContext(ThemeContext)
    const location = useLocation();

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme("light");
            document.getElementById("body").className = "bg-light text-dark"
        } else {
            setTheme("dark");
            document.body.classList.className = "bg-dark text-light"
            document.getElementById("body").className = "bg-dark text-light"
        }

    }


    return (
        <>
            <Navbar variant='dark' expand="lg" sticky='top' bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to="/" className='navbar-brand'>
                        <img src="/pln.png" alt="app logo"
                            className="d-inline-block align-top" />
                        {' '}
                        <strong>APF</strong>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='me-auto'>
                            {
                                links.map((link, key) => {
                                    return (
                                        <Link className='nav-item' to={link.path} key={key} style={{ textDecoration: "none" }}>
                                            <div className={location.pathname === link.path ? "nav-link active" : "nav-link"}>
                                                {link.name}
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </Nav>
                        <Navbar.Text>
                            <Button variant="dark" onClick={toggleTheme}>
                                {


                                    theme === "dark" ?
                                        <>
                                            <BsFillCloudSunFill /> {" "}
                                            Light
                                        </>
                                        :
                                        <>
                                            <BsFillCloudMoonFill /> {" "}
                                            Dark
                                        </>
                                }
                            </Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNav;
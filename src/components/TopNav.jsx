import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../context/ThemeContext";


const TopNav = () => {
    const [theme, setTheme] = useContext(ThemeContext)


    const toggleTheme = (event) => {
        if (theme === 'dark') {
            setTheme("light");
            document.getElementById("body").className = "bg-light text-dark"
        } else {
            setTheme("dark");
            document.body.classList.add("bg-dark")
            document.getElementById("body").className = "bg-dark text-light"
        }

    }


    return (
        <>
            <Button variant="dark" onClick={toggleTheme}> Toggle Dark</Button>
        </>
    )
}

export default TopNav;
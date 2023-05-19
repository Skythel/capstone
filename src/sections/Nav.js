import { Link } from 'react-router-dom';
const links = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About",
        href: "/about"
    },
    {
        text: "Menu",
        href: "/menu"
    },
    {
        text: "Reservations",
        href: "/reservations"
    },
    {
        text: "Order Online",
        href: "/order"
    },
    {
        text: "Login",
        href: "/login"
    },
]

const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                {links.map((link) =>
                    <li key={link.text}><Link to={link.href}>{link.text}</Link></li>
                )}
                </ul>
            </nav>
        </>
    );
};
export default Nav;
const links = [
    {
        text: "Home",
        href: "./"
    },
    {
        text: "About",
        href: "./about"
    },
    {
        text: "Menu",
        href: "./menu"
    },
    {
        text: "Reservations",
        href: "./reservations"
    },
    {
        text: "Order Online",
        href: "./order"
    },
    {
        text: "Login",
        href: "./login"
    },
]

const Nav = () => {
    return (
        <nav>
            <ul>
            {
                links.map((link) => {
                    <li><a href={link.href}>{link.text}</a></li>
                })
            }
            </ul>
        </nav>
    );
}
export default Nav;
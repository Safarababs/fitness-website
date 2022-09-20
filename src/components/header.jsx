function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#feature">features</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#gallery">gallery</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#footer">footer</a></li>
                </ul>
            </nav>
            <div className="fas fa-bars"></div>
            <div className="logo">
                <a href="#"><h1><span>fit</span>ness</h1></a>
            </div>
        </header>
    )
}

export default Header;
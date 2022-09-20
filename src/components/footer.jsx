function Footer() {
    return (
        <section id="footer">
            <div className="footer-container">
                <div className="brand">
                    <div className="logo">
                        <a href="#"><h1><span>fit</span>ness</h1></a>
                    </div>

                    <div className="icons">
                        <a href="#" className="fab fa-facebook" data-text="facebook"></a>
                        <a href="#" className="fab fa-twitter" data-text="twitter"></a>
                        <a href="#" className="fab fa-github" data-text="git-hub"></a>
                        <a href="#" className="fa fa-brands fa-pinterest" data-text="piterest"></a>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="info">
                        <a href="#" className="fas fa-map-marker-alt" data-text="xyz address name"></a>
                        <a href="#" className="fas fa-envelope" data-text="example@gmail.com"></a>
                        <a href="#" className="fas fa-phone" data-text="+92000000000"></a>
                    </div>
                </div>
                <div className="letter">
                    <h1>newsletter</h1>
                    <p>submit your e-mail for latest updated</p>
                    <input type="email" placeholder="email"></input>
                    <input type="submit" placeholder="subscribe"></input>
                </div>
            </div>

            <h1 className="msg">© Copyright @ {new Date().getFullYear()} <span>mr. safar abbas</span> | all rights reserved!</h1>
        </section>
    )
}

export default Footer;
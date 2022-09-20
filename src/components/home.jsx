import shape from "./images/shape.png";

function Home() {
    return (
    <section id="home" >
        <h1>get fit don't quit</h1>
        <h3>- commit to be fit -</h3>
        <a href="#"><button>join us</button></a>


        <div className="icons">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-github"></a>
            <a href="#" className="fa fa-brands fa-pinterest"></a>
        </div>

        <div className="shape-image">
        <img src={shape} alt="shape not found" />
        </div>


    </section>
    )
}

export default Home;
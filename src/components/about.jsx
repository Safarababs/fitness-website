import pic1 from "./images/pic1.png";

function About(){
    return (
        <section id="about">
            <div className="image">
                <img src={pic1} alt="img not found" />
            </div>
            <div className="content">
                <h1>Why you should choose us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br><br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <h1>our gym includes</h1>

                <div className="buttons">
                    <a href="#"><button>training</button></a>
                    <a href="#"><button>exercise</button></a>
                    <a href="#"><button>bicycle</button></a>
                    <a href="#"><button>treadmill</button></a>
                    <a href="#"><button>dumbell</button></a>
                    <a href="#"><button>barbell</button></a>
                </div>
            </div>
        </section>
    )
}

export default About;
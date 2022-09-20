import trainer from "./images/trainer.jpg";
import heavy from "./images/heavy.jpg";
import eco from "./images/eco.jpg";

function Feature() {
    return (
        <section id="feature">

            <h1>feature</h1>

            <div class="card-container">

                <div class="card">
                    <img src={heavy} alt="" />
                    <div class="content">
                        <h1>heavy weights</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus blanditiis nihil exercitationem ipsum rerum eaque dolores quis laborum adipisci dignissimos!</p>
                        <a href="#"><button>learn more</button></a>
                    </div>
                </div>

                <div class="card">
                    <img src={trainer} alt="" />
                    <div class="content">
                        <h1>expert trainers</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus blanditiis nihil exercitationem ipsum rerum eaque dolores quis laborum adipisci dignissimos!</p>
                        <a href="#"><button>learn more</button></a>
                    </div>
                </div>

                <div class="card">
                    <img src={eco} alt="" />
                    <div class="content">
                        <h1>eco environment</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus blanditiis nihil exercitationem ipsum rerum eaque dolores quis laborum adipisci dignissimos!</p>
                        <a href="#"><button>learn more</button></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Feature;
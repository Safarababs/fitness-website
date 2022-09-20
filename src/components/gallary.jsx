import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

function Gallary() {
    return (
        <section id="gallery">

  <h1>our latest products</h1>

<div className="image-container">

  <div className="image">
    <img src={img1} alt="" />
    <div className="info">
      <a href="#"><button>view more!</button></a>
    </div>
  </div>

  <div className="image">
    <img src={img2} alt="" />
    <div className="info">
      <a href="#"><button>view more!</button></a>
    </div>
  </div>

  <div className="image">
    <img src={img3} alt="" />
    <div className="info">
      <a href="#"><button>view more!</button></a>
    </div>
  </div>

  <div className="image">
    <img src={img4} alt="" />
    <div className="info">
      <a href="#"><button>view more!</button></a>
    </div>
  </div>

  <div className="image">
    <img src={img5} alt="" />
    <div className="info">
      <a href="#"><button>view more!</button></a>
    </div>
  </div>

  <div className="image">
    <img src={img6} alt=""/>
    <div className="info">
      <a href="#"><button>view more!</button></a>
    </div>
  </div>

</div>

</section>
    )
}

export default Gallary;
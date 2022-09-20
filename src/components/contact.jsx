import man from "./images/man.png";

function Contact() {
    return (
        <section id="contact">
            <form action="">
                <h1>get in touch</h1>
                <input type="text" placeholder="full name"/>
                <input type="email" placeholder="e-mail"/>
                <input type="number" placeholder="phone"/>
                <textarea placeholder="message" cols="30" rows="10" />
                <input type="submit" value="send" />
         </form>

         <div className="image">
            <img src={man} alt="" />
         </div>
        </section>
    )
}

export default Contact;
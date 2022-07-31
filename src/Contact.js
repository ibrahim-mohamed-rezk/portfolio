import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';



function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dg8cinx', 'template_o4s3jee', form.current, 'u0Ys5BcSDq6ipysr4')
        .then((result) => {
            alert("message send");
        }, (error) => {
            alert("error tray agin later");
        });
    }


    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+201016547473</strong> or email <strong>ibrahimmo989800@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <form ref={form}>
                            <input type="text" className="contact name" placeholder="Your name *" name="user_name" />
                            <input type="text" className="contact email" placeholder="Your Email *" name="user_email" />
                            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                            <button onClick={sendEmail} className="btn contact pointer" type="submit">Submit</button>
                           </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

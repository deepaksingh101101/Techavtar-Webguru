import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        txtPhone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      
    const sendEmail = (e) => {
        e.preventDefault();
        Toast.fire({
            icon: "success",
            title: "Form Submitted successfully"
          });
        setIsSubmitting(true);
        emailjs.sendForm(
            "service_wcdntil",
            "template_n16n03c",
            e.target,
            "HZxQil0Oa_cw06NQc"
        )
        .then((result) => {
            setStateMessage('Message sent!');
           
  
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
        })
        .catch((error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
        });
        
        // Clears the form after sending the email
        e.target.reset();
        setFormData({
            from_name: '',
            from_email: '',
            txtPhone: '',
            message: ''
        });
    };

    return (
        <div className="outer_contact">
            <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                </div>
                <form onSubmit={sendEmail} method="post">
                    <h3 className='fw-semibold' style={{color: "white"}}>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group my-4">
                                <input type="text" required name="from_name" className="form-control" placeholder="Your Name *" value={formData.from_name} onChange={handleInputChange} />
                            </div>
                            <div className="form-group my-4">
                                <input type="email" required name="from_email" className="form-control" placeholder="Your Email *" value={formData.from_email} onChange={handleInputChange} />
                            </div>
                            <div className="form-group my-4">
                                <input type="number" required name="txtPhone" className="form-control" placeholder="Your Phone Number *" value={formData.txtPhone} onChange={handleInputChange} />
                            </div>
                            <div className="form-group my-4">
                                <input type="submit" required name="btnSubmit" className="btn btn-primary btnContact" value="Send Message" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group my-4">
                                <textarea name="message" onResize={false} className="form-control" placeholder="Your Message *" style={{width: "100%", height: "160px"}} value={formData.txtMsg} onChange={handleInputChange}></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {stateMessage && (
                <div className="message">
                    {stateMessage}
                </div>
            )}
        </div>
    );
}

export default Contact;


import './Contact.css'
function Contact() {
  return (
   <>
 <div className="outer_contact" style={{background:""}}>
 <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3 className='fw-semibold' style={{color:"white"}} >Drop Us a Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group my-4">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group my-4">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "160px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
 </div>
   </>
  );
}

export default Contact;

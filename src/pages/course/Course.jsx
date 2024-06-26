
import coursebf from  '../../assets/images/heading-bg.jpg'
import Header from '../../components/subheader/Header';






export default function Course() {
  return (
    <>
   
<Header/>
      {/* Heading Page */}
      <section className="heading-page header-text position-relative" id="top">
        <img src={coursebf} alt=''/>
        <div className="container position-absolute" style={{"bottom":"15%", left:"5%"}}>
          <div className="row">
            <div className="col-lg-12">
              <h6>Get all details</h6>
              <h2>Online Teaching and Learning Tools</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Meetings Page */}
      <section className="meetings-page" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$14.00</span>
                      </div>
                      <div className="date">
                        <h6>Nov <span>12</span></h6>
                      </div>
                      <a href="meeting-details.html">
                        <img src="assets/images/single-meeting.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="meeting-details.html">
                        <h4>Online Teaching and Learning Tools</h4>
                      </a>
                      <p>Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008, Brazil</p>
                      <p className="description">
                        This is an edu meeting HTML CSS template provided by <a href="https://templatemo.com/" target="_blank" rel="nofollow">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. If you need more free website templates like this one, please visit our website TemplateMo. Please tell your friends about our website. Thank you. If you want to get the latest collection of HTML CSS templates for your websites, you may visit <a rel="nofollow" href="https://www.toocss.com/" target="_blank">Too CSS website</a>. If you need a working contact form script, please visit <a href="https://templatemo.com/contact" target="_parent">our contact page</a> for more info.
                        <br/><br/>You are allowed to use this edu meeting CSS template for your school or university or business. You can feel free to modify or edit this layout. You are not allowed to redistribute the template ZIP file on any other template website. Please contact us for more information.
                      </p>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="hours">
                            <h5>Hours</h5>
                            <p>Monday - Friday: 07:00 AM - 13:00 PM<br/>Saturday- Sunday: 09:00 AM - 15:00 PM</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="location">
                            <h5>Location</h5>
                            <p>Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-008, Brazil</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="book-now">
                            <h5>Book Now</h5>
                            <p>010-020-0340<br/>090-080-0760</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="share">
                            <h5>Share:</h5>
                            <ul>
                              <li><a href="#">Facebook</a>,</li>
                              <li><a href="#">Twitter</a>,</li>
                              <li><a href="#">Linkedin</a>,</li>
                              <li><a href="#">Behance</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button-red">
                    <a href="meetings.html">Back To Meetings List</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <div className="footer">
        <p>
          Copyright © 2022 Edu Meeting Co., Ltd.
          <br/>
          Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a>
          <br/>
          Distributed By: <a href="https://themewagon.com" target="_blank" title="Build Better UI, Faster">ThemeWagon</a>
        </p>
      </div>
    </>
  );
}

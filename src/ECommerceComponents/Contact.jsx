import "./Contact.css";
import contact from "../components/about.webp";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Contact(props) {
  return (
    <>
      <div className="full_con">
        <div className="title_con">
          <p className="p1_">CONTACT</p>
          <p className="p2_">US</p>
          <p className="p3_"></p>
        </div>
        <div className="contact">
          <div className="con">
            <img src={contact} className="img_con" alt=""></img>
            <div className="dis_con">
              <div className="dis_in_con">
                <h3>Our Store</h3>
                <div className="ovf_con">
                  <p>290120 hayatganj lko Tanda</p>
                  <p>Raj nagar,C.P,India</p>
                </div>
                <div className="ovf_con">
                  <p>Tel:(+91)9925374910</p>
                  <p>Email:abcd@gmail.com</p>
                </div>
                <h3>Careers at Forever</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn_con">Explore Jobs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Contact;

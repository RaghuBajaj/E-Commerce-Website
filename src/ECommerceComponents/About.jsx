import about from "../components/about_img.png";
import "./About.css";
import WhyChoose from "./WhyChoose";
import Subscribe from './Subscribe'
import Footer from "./Footer";

function About(props) {
  return (<>
    <div className="full_abt">
      <div className="title_abt t1_abt">
        <p className="p1_">ABOUT</p>
        <p className="p2_">US</p>
        <p className="p3_"></p>
      </div>
      <div className="about">
        <div className="abt">
          <img src={about} className="img_abt" alt=""></img>
          <div className="dis_abt">
            <div className="dis_in_abt">
              <p>
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journy begin with
                a simple idea:to provide a platform where customers can easily
                discover,explore,and purchase a wide range of products from the
                comfart of their homes.
              </p>
              <p>
                Since our inception,we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference.From fashion and beauty to electronics and home
                essentials,we offer an extensive collection sourced from trusted
                brandsand suppliers.
              </p>
              <h3>Our Mission</h3>
              <p>
                Our mission at Forever is to empower customers with choice,
                convenience and confidence,We're dedicated to providing a
                seamless shopping experience that exceeds expectations,from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='title_abt t2_abt'>
        <p className='p1_'>WHY</p>
        <p className='p2_'>CHOOSE</p>
        <p className='p2_'>US</p>
        <p className='p3_'></p>
      </div>
    </div>
    <WhyChoose />
    <Subscribe/>
    <Footer/>
    </>
  );
}

export default About;

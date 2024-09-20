import "./Footer.css";
import logo from "../components/logo.png";

function Footer() {
  return (
    <div className="full_fo">
      <div className="f1_fo _fo">
        <img src={logo} className="img_fo" alt=""></img>
        <p className="f_fo p1_fo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure, id
          excepturi quasi natus ad vel. Ut qui debitis doloribus aut quas?
          Libero quo debitis quas aliquam, ad laboriosam maxime ipsam similique
          obcaecati! Sed, dolore!
        </p>
      </div>
      <div className="f2_fo _fo">
        <h3 className="h3_fo">COMPANY</h3>
        <div className="f_fo f2p_fo">
          <p className="pp_fo">Home</p>
          <p className="pp_fo">About us</p>
          <p className="pp_fo">Delivery</p>
          <p className="pp_fo">Privacy policy</p>
        </div>
      </div>
      <div className="f3_fo _fo">
        <h3 className="h3_fo">GET IN TOUCH</h3>
        <div className="f_fo">
          <p className="pp_fo">+91-928374651</p>
          <p className="pp_fo">abcd@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

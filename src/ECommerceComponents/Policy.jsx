import "./Policy.css";
import { assets } from "./assets";

function Policy() {
  return (
    <div className="full_pcy">
      <div className="component_pcy">
        <img src={assets.cross_icon} className="img_pcy" alt=""></img>
        <h4 className="h_pcy">Easy Exchange Policy</h4>
        <p className="p_pcy">We offer hassle exchange policy</p>
      </div>
      <div className="component_pcy">
        <img src={assets.quality_icon} className="img_pcy" alt=""></img>
        <h4 className="h_pcy">7 Days Return Policy</h4>
        <p className="p_pcy">WWe provide 7 days free return policy</p>
      </div>
      <div className="component_pcy">
        <img src={assets.support_img} className="img_pcy" alt=""></img>
        <h4 className="h_pcy">Best customer support</h4>
        <p className="p_pcy">we provide24/7 customer support</p>
      </div>
    </div>
  );
}

export default Policy;

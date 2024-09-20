import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="full_sub">
      <h3 className="h_sub">Subscribe now & get 20% off</h3>
      <p className="p_sub">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <div className="input_email_sub">
        <input
          type="text"
          placeholder="Enter your email"
          className="input_sub"
        ></input>
        <button className="btn_sub">SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default Subscribe;

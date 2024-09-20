import Footer from "./Footer";
import "./Profile.css";
import Subscribe from "./Subscribe";

function Profile() {
  return (
    <>
      <div className="full_pro">
        <div className="in_left_pro">
          <h3 className="h_left_pro">General</h3>
          <p className="p_left_pro">Email</p>
          <p className="p_left_pro">Password</p>
          <p className="p_left_pro">Billing</p>
          <p className="line_left_pro"></p>
          <p className="p_left_pro">Log out</p>
        </div>

        <div className="in_right">
          <div className="block_pro">
            <div className="d_in ">
              <h2 className="h_pro">Welcome back,</h2>
              <p className="hp_pro">
                Use the form below to update your profile.
              </p>
            </div>
            <button className="btn_pro">Save Profile</button>
          </div>

          <div className="block_pro">
            <div className="d_in">
              <p className="p_pro pp1_pro">First Name</p>
              <input
                className="input_pro  input1"
                type="text"
                placeholder="Enter first name"
              ></input>
            </div>
            <div className="d_in">
              <p className="p_pro pp1_pro">Last Name</p>
              <input
                className="input_pro input1"
                type="text"
                placeholder="Enter last name"
              ></input>
            </div>
          </div>

          <div className="d1_in">
            <p className="p_pro pp2_pro">Phone number</p>
            <input
              className="input_pro input2"
              type="text"
              placeholder="Enter phone number"
            ></input>
          </div>

          <div className="d1_in">
            <p className="p_pro pp2_pro">Email Address</p>
            <input
              className="input_pro input2"
              type="text"
              placeholder="Enter email id"
            ></input>
          </div>

          <div className="d1_in">
            <p className="p_pro pp2_pro">Password</p>
            <input
              className="input_pro input2"
              type="text"
              placeholder="Enter password"
            ></input>
          </div>

          <div className="d1_in">
            <p className="p_pro pp2_pro">Bio</p>
            <textarea
              className="input_pro input2 txtarea"
              itemType="text"
              placeholder="Enter your Bio"
            ></textarea>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Profile;

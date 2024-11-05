import React, { useCallback, useContext, useEffect, useState } from "react";
import "./Login.css";
import { PageContext } from "../context/context";

function Login() {
  const {setUser,allUsers,setAllUsers,navigate,setCartItems,setOrderItems}= useContext(PageContext);
  const [sign, setSign] = useState(true);
  const [onTry, setOnTry] = useState(false);
  const [userInfo, setUserInfo] = useState({
    Your_name: "",
    Mobile_number: "",
    Password: "",
    userCart:[],
    userOrder:[]
  });

  const initialInfo = useCallback(() => {
    const blank = {
      Your_name: "",
      Mobile_number: "",
      Password: "",
      userCart:[],
      userOrder:[]
    };
    setUserInfo(blank);
  }, []);
  
  const handleCreateAccount = () =>{
    if(userInfo.Your_name !=='' && userInfo.Mobile_number !=='' && userInfo.Password !== ''){
      setAllUsers((prev)=>{
        if(prev){
          return[...prev,userInfo];
        }
        else{
          return userInfo;
        }
      });
      setUser(userInfo);
      navigate('/Home');
    }
    else{
      alert('Please fill all the required fields!');
    }
  };
  const handleLogin = () =>{
    if(userInfo.Mobile_number !== '' && userInfo.Password !== ''){
      const account = allUsers.find((item)=>item.Mobile_number === userInfo.Mobile_number && item.Password === userInfo.Password);
      if(account){
        setUser(account); 
        setCartItems(account.userCart);
        setOrderItems(account.userOrder);
        navigate('/Home');
      }
      else{
        alert('Account dosent exesist!');
      }
    }
    else{
      alert('Please fill all the required fields!');
    }
  };

  const handleState=(e,setState,field)=> {
    setState((prev)=>({ ...prev , [field] : e.target.value}));
  };

  useEffect(() => {
    initialInfo();
    setOnTry(false);
  }, [initialInfo]);

  return (
    <div className="login">
      {sign === true && (
        <>
          <div className="log">
            <p className="lo_h">Create Account</p>
            <p className="line_log"></p>
          </div>
          <div className="login_box">
            <div className="lo_div">
              <p className="lo_p">Your name</p>
              <input
                type="text"
                placeholder="First and last name"
                className="lo_inp"
                onChange={(e)=>handleState(e,setUserInfo,"Your_name")}
              />
              {onTry === true && userInfo.Your_name === "" && (
                <p className="red">
                  <span>!</span> Name is required{" "}
                </p>
              )}
            </div>
            <div className="lo_div">
              <p className="lo_p">Mobile number</p>
              <input
                type="text"
                placeholder="Mobile number"
                className="lo_inp"
                onChange={(e)=>handleState(e,setUserInfo,"Mobile_number")}
              />
              {onTry === true && userInfo.Mobile_number === "" && (
                <p className="red">
                  <span>!</span> Mobile number is required{" "}
                </p>
              )}
            </div>
            <div className="lo_div">
              <p className="lo_p">Password</p>
              <input
                type="text"
                placeholder="At least 6 characters"
                className="lo_inp"
                onChange={(e)=>handleState(e,setUserInfo,"Password")}
              />
              {onTry === true && userInfo.Password === "" && (
                <p className="red">
                  <span>!</span> Password is required{" "}
                </p>
              )}
            </div>
            <div className="lo_dis">
              <p className="lo_dis_p">
                To verify your number, we will send you a text message with a
                temporary code. Message and data rates may apply.
              </p>
            </div>
            <div className="lo_div">
              <button
                type="button"
                className="lo_btn"
                onClick={() => {
                  handleCreateAccount();
                  setOnTry(true);
                }}
              >
                Verify mobile number
              </button>
            </div>
            <p className="lo_line"></p>
            <div className="lo_div">
              <p className="lo_dis_p">
                Already have an account?{" "}
                <span
                  className="lo_a1 blue_NOunderline_log"
                  onClick={() => {
                    setSign(false);
                  }}
                >
                  Sign in
                </span>
              </p>
            </div>
            <div className="lo_div-la">
              By creating an account or logging in,you agree to our{" "}
              <span className="lo_a blue_underline_log">
                {" "}
                Conditions of Use
              </span>{" "}
              and{" "}
              <span className="lo_a blue_underline_log">Privacy Policy</span>
            </div>
          </div>
        </>
      )}

      {sign === false && (
        <>
          <div className="log">
            <p className="lo_h">Sign in</p>
            <p className="line_log"></p>
          </div>
          <div className="login_box">
            <div className="lo_div">
              <p className="lo_p">Email or Mobile phone number</p>
              <input
                type="text"
                placeholder="Mobile number"
                className="lo_inp"
                onChange={(e)=>handleState(e,setUserInfo,"Mobile_number")}
              ></input>
              {onTry === true && userInfo.Mobile_number === "" && (
                <p className="red">
                  <span>!</span> Email or Mobile phone number is required
                </p>
              )}
            </div>
            <div className="lo_div">
              <p className="lo_p">Password</p>
              <input
                type="text"
                placeholder="At least 6 characters"
                className="lo_inp"
                onChange={(e)=>handleState(e,setUserInfo,"Password")}
              ></input>
              {onTry === true && userInfo.Password === "" && (
                <p className="red">
                  <span>!</span> Password is required
                </p>
              )}
            </div>
            <div className="lo_dis"></div>
            <div className="lo_div">
              <button
                type="button"
                className="lo_btn"
                onClick={() => {
                  handleLogin();
                  setOnTry(true);
                }}
              >
                Continue
              </button>
            </div>
            <p className="lo_line"></p>

            <div className="lo_div-la">
              By continuing, you agree to our{" "}
              <span className="lo_a blue_underline_log">
                {" "}
                Conditions of Use
              </span>{" "}
              and{" "}
              <span className="lo_a blue_underline_log">Privacy Notice.</span>
            </div>
          </div>
          <div className="new_">
            <p className="new_line"></p>
            <p className="new_p">New to our Site?</p>
            <p className="new_line"></p>
          </div>
          <button
            className="create"
            onClick={() => {
              setSign(true);
            }}
          >
            Create your account
          </button>
        </>
      )}
    </div>
  );
}

export default Login;

import React from "react";
import Button from "./Button";
import InputType from "./InputType";
import { useState } from "react";
import { Link } from "react-router-dom";
import {handleLogin,handleRegister} from "../../../services/authService";

const Form = ({ formType, fromTitle, formSubHeading,submitBtn }) => {
  const [formDetails, setformDetails] = useState({});

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [aboutus, setAboutus] = useState("");

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">
                {/* <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">CRM</span>
                  </a>
                </div> */}
                {/* End Logo */}
                <div className="card mb-3 mt-5">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        {fromTitle}
                      </h5>
                      <p className="text-center small">{formSubHeading}</p>
                    </div>

                    <form
                      className="row g-3 needs-validation"
                      noValidate=""
                      onSubmit={(e) => {
                        if (formType === "login")
                          return handleLogin(e, email, password);
                        else if (formType === "register")
                          return handleRegister(
                            e,
                            fname,
                            lname,
                            email,
                            password,
                            phone,
                            aboutus
                          );
                      }}
                    >
                      {/* Switch Statement */}

                      {(() => {
                        switch (true) {
                          case formType === "login": {
                            return (
                              <>
                                <InputType
                                  labelText={"Email"}
                                  lableFor={"yourEmail"}
                                  inputType={"email"}
                                  name={"email"}
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                ></InputType>
                                <InputType
                                  labelText={"Password"}
                                  lableFor={"yourPassword"}
                                  inputType={"password"}
                                  name={"password"}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                ></InputType>
                              </>
                            );
                          }
                          case formType === "register": {
                            return (
                              <>
                                <InputType
                                  labelText={"First Name"}
                                  lableFor={"yourFirstName"}
                                  inputType={"text"}
                                  name={"fname"}
                                  value={fname}
                                  onChange={(e) => setFname(e.target.value)}
                                ></InputType>
                                <InputType
                                  labelText={"Last Name"}
                                  lableFor={"yourLastName"}
                                  inputType={"text"}
                                  name={"lname"}
                                  value={lname}
                                  onChange={(e) => setLname(e.target.value)}
                                ></InputType>
                                <InputType
                                  labelText={"Email"}
                                  lableFor={"yourEmail"}
                                  inputType={"email"}
                                  name={"email"}
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                ></InputType>
                                <InputType
                                  labelText={"Password"}
                                  lableFor={"yourPassword"}
                                  inputType={"password"}
                                  name={"password"}
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                ></InputType>
                                <InputType
                                  labelText={"Phone"}
                                  lableFor={"yourPhone"}
                                  inputType={"text"}
                                  name={"phone"}
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                ></InputType>
                                <InputType
                                  labelText={"How did you know About Us"}
                                  lableFor={"aboutus"}
                                  inputType={"text"}
                                  name={"aboutus"}
                                  value={aboutus}
                                  onChange={(e) => setAboutus(e.target.value)}
                                ></InputType>
                              </>
                            );
                          }
                        }
                      })()}

                      <div className="col-12">
                      <button className="btn btn-primary" type="submit">
                       {submitBtn}
                      </button>
                      </div>
                      <div className="col-12">
                        {formType === "login" ? (
                          <p className="small mb-0">
                            Already have an account?{" "}
                            <Link to="/register">Sign up</Link>
                          </p>
                        ) : (
                          <p className="small mb-0">
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                          </p>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="credits">
                  Designed by <a href="/">BHUPENDRA</a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Form;

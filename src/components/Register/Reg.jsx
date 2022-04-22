import React, { useEffect, useState } from "react";
import "./Reg.css";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reg() {
  const [Name, setName] = useState("");
  const [Rollno, setRollno] = useState("");
  const [Contactno, setContactno] = useState("");
  const [Email, setEmail] = useState("");
  const [Branch, setBranch] = useState("");
  const [Year, setYear] = useState("");
  const [Gender, setGender] = useState("");
  const [Residence, setResidence] = useState("");

  var checkStatus = false;
  var checkStatusAll = false;
  const [formErrors, setFormErrors] = useState({});
  const [formErrorsEmail, setFormErrorsEmail] = useState({});
  const [formErrorsName, setformErrorsName] = useState({});
  const [formErrorsRoll, setformErrorsRoll] = useState({});
  const [formErrorsContactno, setformErrorsContactno] = useState({});
  const [formErrorsBranch, setformErrorsBranch] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formdata);
    }
  }, [
    formErrors,

    formErrorsBranch,
    formErrorsContactno,
    formErrorsRoll,
    isSubmit,
  ]);

  const handleFocusEmail = (e) => {
    setFocused(true);
    setFormErrorsEmail(validateEmail(Email));
  };

  const handleFocusName = (e) => {
    setFocused(true);
    setformErrorsName(validateName(Name));
  };

  const handleFocusRoll = (e) => {
    setFocused(true);
    setformErrorsRoll(validateRoll(Rollno));
  };

  const handleFocusContactno = (e) => {
    setFocused(true);
    setformErrorsContactno(validateContactno(Contactno));
  };

  const handleFocusBranch = (e) => {
    setFocused(true);
    setformErrorsBranch(validateBranch(Branch));
  };

  const submit = async (e) => {
    e.preventDefault();
    setformErrorsName(validateName(Name));
    setFormErrorsEmail(validateEmail(Email));
    setformErrorsContactno(validateContactno(Contactno));
    setformErrorsRoll(validateRoll(Rollno));
    setIsSubmit(true);

    if (
      Name &&
      Rollno &&
      Contactno &&
      Email &&
      Branch &&
      Year &&
      Gender &&
      Residence
    ) {
      const newEntry = {
        Name: Name,
        Rollno: Number(Rollno),
        Contactno: Number(Contactno),
        Email: Email,
        Branch: Branch,
        Year: Number(Year),
        Gender: Gender,
        Residence: Residence,
      };

      console.log(newEntry);
      axios
        .post(
          "https://nameless-citadel-14148.herokuapp.com/api/users/register",
          newEntry
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Enter Data in all Fields");
    }
  };

  const validateEmail = (value) => {
    const errors = {};
    let regex = new RegExp("[a-z0-9]+@akgec.ac.in");

    if (!value) {
      errors.Email = "Email is required!";
    } else if (!regex.test(value)) {
      errors.Email = "This is not a valid email format!";
    } else {
      checkStatus = true;
    }
    return errors;
  };

  const validateName = (value) => {
    const errors = {};
    let regex = new RegExp("^[A-Za-z ]{7,29}$");
    if (!value) {
      errors.Name = "Name is required!";
    } else if (!regex.test(value)) {
      errors.Name = "Name should only include alphabets";
    } else {
      checkStatusAll = true;
    }
    return errors;
  };
  const validateRoll = (value) => {
    const errors = {};
    let regex = new RegExp("[0-9]");
    if (!value) {
      errors.Rollno = "Roll number is required!";
    } else if (!regex.test(value)) {
      errors.Rollno = "Roll number should only be numeric";
    } else {
      checkStatusAll = true;
    }
    return errors;
  };

  // contact number validation

  const validateContactno = (value) => {
    const errors = {};
    let regex = new RegExp("^[0-9]{10}$");
    if (!value) {
      errors.Contactno = "Contact  number is required!";
    } else if (!regex.test(value)) {
      errors.Contactno = "Contact  number should only be numeric";
    } else {
      checkStatusAll = true;
    }
    return errors;
  };

  const validateBranch = (value) => {
    const errors = {};
    if (!value) {
      errors.Branch = "Branch is required!";
    } else {
      checkStatusAll = true;
    }
    return errors;
  };

  return (
    <>
      <div className="form_container">
        <div className="image_left"></div>
        <div className="image_right">
          <div className="heading">
            <span className="left_heading">Hey!</span>
            <span className="left_heading"> Get Yourself Registered</span>
          </div>
          <form className="input">
            <div className="input_container">
              <input
                type="text"
                className="input_field"
                placeholder="Name"
                name="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleFocusName}
                focused={focused.toString()}
              />

              <p className="email1">{formErrorsName.Name}</p>
            </div>
            <div className="input_container">
              <input
                type="text"
                className="input_field"
                placeholder="University Roll No."
                name="Rollno"
                value={Rollno}
                onChange={(e) => setRollno(e.target.value)}
                onBlur={handleFocusRoll}
                focused={focused.toString()}
              />

              <p className="email1">{formErrorsRoll.Rollno}</p>
            </div>
            <div className="input_container">
              <input
                type="text"
                className="input_field"
                placeholder="Contact No."
                name="Contactno"
                value={Contactno}
                onChange={(e) => setContactno(e.target.value)}
                onBlur={handleFocusContactno}
                focused={focused.toString()}
              />

              <p className="email1">{formErrorsContactno.Contactno}</p>
            </div>
            <div className="input_container">
              <input
                type="email"
                className="input_field emailinp"
                placeholder="Email: xyz@akgec.ac.in"
                name="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleFocusEmail}
                focused={focused.toString()}
              />

              <p className="email1">{formErrorsEmail.Email}</p>
            </div>
            <div className="input_container">
              <select
                className=" input_field"
                id="Branch"
                name="Branch"
                required
                value={Branch}
                onChange={(e) => setBranch(e.target.value)}
                onBlur={handleFocusBranch}
                focused={focused.toString()}
                placeholder="Branch"
              >
                <option value="null">Branch</option>
                <option>CSE</option>
                <option>CSE(DS)</option>
                <option>CSE(AI&ML)</option>
                <option>CS</option>
                <option>CS&IT</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EN</option>
                <option>ME</option>
                <option>CIVIL</option>
              </select>
            </div>
            <div className="input_container">
              <select
                className="input_field"
                name="Gender"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                onBlur={handleFocusName}
                focused={focused.toString()}
              >
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input_container">
              <select
                className="input_field "
                name="Year"
                value={Year}
                onChange={(e) => setYear(e.target.value)}
                onBlur={handleFocusName}
                focused={focused.toString()}
              >
                <option>Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
              <div className="justify">
                <div className="radio">
                  <span className="radio_text">Hosteler</span>
                  <input
                    type="radio"
                    className="form-check-input bg-blue "
                    name="Residence"
                    required
                    value="Hosteler"
                    onChange={(e) => setResidence(e.target.value)}
                  />
                </div>
                <div className="radio">
                  <span className="radio_text">Day-Scholar</span>
                  <input
                    type="radio"
                    className="form-check-input bg-blue "
                    name="Residence"
                    required
                    value="Day-Scholar"
                    onChange={(e) => setResidence(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="input_container">
              <button
                type="button"
                className="btn input_field"
                onClick={submit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Reg;

import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import $ from "jquery";
import dateFormat, { masks } from "dateformat";
import Swal from "sweetalert2";
export function AssistanceProject() {
  $("body").on("click", "#scr3", function () {
    navigate("/Login");
  });
  const [user, loggedIn] = useAuthState(auth);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    ID: "",
    date_of_birth: "",
    address: "",
    phone_number: "",
    email: "",
    referrer_name: "",
    referrer_proffesion: "",
    referrer_phone: "",
    referrer_email: "",
    framework_name: "",
    framework_field: "",
    framework_years: "",
    tuition: "",
    graduation_details: "",
    scholarships_details: "",
    full: "",
    partial: "",
    graduation: "",
    insurance_institute_allowance: "",
    insurance_institute_allowance_details: "",
    other: "",
    scholarship_details: "",
    timestamp: "",
    uid: "",
  });
  const handleChange = (e) => {
    if (e.target.name === "date_of_birth") {
      let date = dateFormat(e.target.value, "dd/mm/yyyy");
      setFormData({ ...formData, [e.target.name]: date });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const handleSelecetChange = (e) => {
    // if (e.target.value === false) {
    //   e.target.value = true;
    // }

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  function nav() {
    navigate("/Login");
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const docPage = () => {
    let flag = 0;
    for (const [key, value] of Object.entries(formData)) {
      if (`${value}` === "") {
        let newid = key + "1";
        let html = document.getElementById(newid).innerHTML;
        let error = "?????? " + html;
        const editedError = error.slice(0, -2);
        let id = "#" + key;
        $(id).attr("placeholder", editedError);
        var element = document.getElementById(key);
        element.scrollIntoView();
        flag = 1;
        break;
      }
      if (key === "scholarships_details") {
        break;
      }
    }
    if (flag === 0) {
      for (const [key, value] of Object.entries(formData)) {
        if (`${key}` === "ID" && value.length != 9) {
          Swal.fire("???????? ?????????? ???????? ??????????");
          flag = 1;
          break;
        }
        if (`${key}` === "email" && !validateEmail(value)) {
          Swal.fire("???????? ???????????? ???????? (?????????? ????????????)");
          flag = 1;
          break;
        }
        if (`${key}` === "referrer_email" && !validateEmail(value)) {
          Swal.fire("???????? ???????????? ???????? (???????? ????????)");
          flag = 1;
          break;
        }
      }
    }
    if (flag === 0) {
      const formRef = collection(db, "Candidates for habitant project");
      const uid = auth.currentUser.uid;
      if (uid != null)
        setDoc(doc(formRef, uid), {
          fname: formData.fname,
          lname: formData.lname,
          ID: formData.ID,
          date_of_birth: formData.date_of_birth,
          address: formData.address,
          framework_name: formData.framework_name,
          framework_field: formData.framework_field,
          framework_years: formData.framework_years,
          phone_number: formData.phone_number,
          email: formData.email,
          full: formData.full,
          partial: formData.partial,
          referrer_name: formData.referrer_name,
          referrer_proffesion: formData.referrer_proffesion,
          referrer_phone: formData.referrer_phone,
          referrer_email: formData.referrer_email,
          scholarships_details: formData.scholarships_details,
          graduation: formData.graduation,
          insurance_institute_allowance: formData.insurance_institute_allowance,
          insurance_institute_allowance_details:
            formData.insurance_institute_allowance_details,
          graduation_details: formData.graduation_details,
          other: formData.other,
          scholarship_details: formData.scholarship_details,
          tuition: formData.tuition,
          timestamp: serverTimestamp(),
          uid: auth.currentUser.uid,
        })
          .then(() => {
            // alert("success");
          })
          .catch((err) => {
            // alert("error");
          });
      navigate("/AssistanceProject/documents");
    }
  };
  if (!user) {
    return (
      <div className="loggedIn">
        <div className="allThePage">
          <div className="AllDetails">
            <section className="banner">
              <h1 id="difh1">???????????? ???????? ????????????</h1>
              {/* <p>Company Mission Statement goes here</p> */}
              <a id="scr3" className="btn-bgstroke">
                ???????????????? ??????
              </a>
            </section>
            <br />
            <ul className="tilesWrap">
              <li>
                <h2>01</h2>
                <p>?????????? ?????????? ?????? ?????????? ??????????????????</p>
              </li>
              <li>
                <h2>02</h2>
                <p>?????????? ?????????? ???????????????? ?????????????? ???? ??????????????/????</p>
              </li>
              <li>
                <h2>03</h2>
                <p>???????? ?????????? ?????????? ???? ???????????? ???????????? ???? ??????????????/????</p>
              </li>
              <li>
                <h2>04</h2>
                <p>
                  ?????????? ?????????? ?????????????? ???????????????????? ???? ?????????? ?????? ?????? ???????????? ??????????
                  ??????'
                </p>
              </li>
            </ul>
          </div>
          <br />
          <div className="SubmitRequest"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="allThePage">
      <div className="AllDetails">
        <section className="banner">
          <h1 id="difh1">???????????? ??????????</h1>
          {/* <p>Company Mission Statement goes here</p> */}
          <a href="#scr1" className="btn-bgstroke">
            ???????????? ??????
          </a>
        </section>
        <br />
        <ul className="tilesWrap">
          <li>
            <h2>01</h2>
            <p>?????????? ?????????? ?????? ?????????? ??????????????????</p>
          </li>
          <li>
            <h2>02</h2>
            <p>?????????? ?????????? ???????????????? ?????????????? ???? ??????????????/????</p>
          </li>
          <li>
            <h2>03</h2>
            <p>???????? ?????????? ?????????? ???? ???????????? ???????????? ???? ??????????????/????</p>
          </li>
          <li>
            <h2>04</h2>
            <p>
              ?????????? ?????????? ?????????????? ???????????????????? ???? ?????????? ?????? ?????? ???????????? ?????????? ??????'
            </p>
          </li>
        </ul>
      </div>
      <section className="banner2">
        {/* <p>Company Mission Statement goes here</p> */}
        <a href="#private" className="btn-bgstroke1">
          ?????????? ????????????
        </a>
        <a href="#social" className="btn-bgstroke1">
          ???????? ????????
        </a>
        <a href="#study" className="btn-bgstroke1">
          ??????????????
        </a>
        <a href="#general" className="btn-bgstroke1">
          ????????
        </a>
      </section>
      <div id="scr1" className="SubmitRequest">
        <br />
        <br />
        <form>
          <fieldset>
            <legend id="private" className="legendTitle">
              ?????????? ????????????
            </legend>

            <label id="fname1" htmlFor="fname">
              ???? ???????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="fname"
              name="fname"
              requierd
              value={formData.fname}
              onChange={(e) => handleChange(e)}
            />
            <label id="lname1" htmlFor="lname">
              ???? ?????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="lname"
              name="lname"
              required
              value={formData.lname}
              onChange={(e) => handleChange(e)}
            />
            <label id="ID1" htmlFor="ID">
              ?????????? ???????? :{" "}
            </label>
            <input
              className="input1"
              type="number"
              id="ID"
              name="ID"
              required
              value={formData.ID}
              onChange={(e) => handleChange(e)}
            />
            <label id="date_of_birth1" htmlFor="date_of_birth">
              ?????????? ????????:
            </label>
            <input
              className="input1"
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              required
              value={formData.date_of_birth}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />

            <label id="address1" htmlFor="address">
              {" "}
              ??????????:{" "}
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="input1"
              value={formData.address}
              onChange={(e) => handleChange(e)}
            />
            <label id="phone_number1" htmlFor="phone_number">
              {" "}
              ????????:{" "}
            </label>
            <input
              className="input1"
              type="number"
              id="phone_number"
              name="phone_number"
              required
              value={formData.phone_number}
              onChange={(e) => handleChange(e)}
            />
            <label id="email1" htmlFor="email">
              {" "}
              ???????? :{" "}
            </label>
            <input
              className="input1"
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
          </fieldset>
          <br />
          <br />

          <fieldset>
            <legend id="social" className="legendTitle">
              ???????? ????????
            </legend>

            <label id="referrer_name1" htmlFor="referrer_name">
              {" "}
              ???? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="referrer_name"
              name="referrer_name"
              required={true}
              value={formData.referrer_name}
              onChange={(e) => handleChange(e)}
            />
            <label id="referrer_proffesion1" htmlFor="referrer_proffesion">
              {" "}
              ?????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="referrer_proffesion"
              name="referrer_proffesion"
              required={true}
              value={formData.referrer_proffesion}
              onChange={(e) => handleChange(e)}
            />
            <label id="referrer_phone1" htmlFor="referrer_phone">
              {" "}
              ?????????? :{" "}
            </label>
            <input
              className="input1"
              type="number"
              id="referrer_phone"
              name="referrer_phone"
              required={true}
              value={formData.referrer_phone}
              onChange={(e) => handleChange(e)}
            />
            <label id="referrer_email1" htmlFor="referrer_email">
              {" "}
              ???????? :{" "}
            </label>
            <input
              className="input1"
              type="email"
              id="referrer_email"
              name="referrer_email"
              required={true}
              value={formData.referrer_email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
          </fieldset>
          <br />
          <br />

          <fieldset>
            <legend id="study" className="legendTitle">
              ??????????????
            </legend>
            <label id="framework_name1" htmlFor="framework_name">
              {" "}
              ???????? ?????????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="framework_name"
              name="framework_name"
              required={true}
              value={formData.framework_name}
              onChange={(e) => handleChange(e)}
            />
            <label id="framework_field1" htmlFor="framework_field">
              {" "}
              ???????? ?????????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="framework_field"
              name="framework_field"
              required={true}
              value={formData.framework_field}
              onChange={(e) => handleChange(e)}
            />
            <label id="framework_years1" htmlFor="framework_years">
              {" "}
              ???????? ???????? ?????????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="framework_years"
              name="framework_years"
              required={true}
              value={formData.framework_years}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label id="tuition1" htmlFor="tuition">
              {" "}
              ???????? ?????? ?????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="tuition"
              name="tuition"
              required={true}
              value={formData.tuition}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label htmlFor="graduation"> ???????? ?????????????? : </label>
            <select
              id="graduation"
              required
              className="select1"
              onChange={(e) => handleSelecetChange(e)}
            >
              <option value="" selected disabled hidden>
                ??????
              </option>
              <option id="full" value="?????????? ????????">
                ?????????? ????????{" "}
              </option>
              <option id="partial" value="?????????? ??????????">
                ?????????? ??????????{" "}
              </option>
              <option id="full" value="??????">
                ??????{" "}
              </option>
            </select>
            <label id="graduation_details1" htmlFor="graduation_details">
              {" "}
              ?????????? ?????????? ???????????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="graduation_details"
              name="graduation_details"
              value={formData.graduation_details}
              onChange={(e) => handleChange(e)}
            />

            <br />
            <br />
          </fieldset>
          <br />
          <br />

          <fieldset>
            <legend id="general" className="legendTitle">
              ????????
            </legend>
            <label htmlFor="other_schilarships">
              {" "}
              ?????? ?????????? ?????????? ???????????? ???????????? :{" "}
            </label>
            <select
              id="other_schilarships"
              className="select1"
              onChange={(e) => handleSelecetChange(e)}
            >
              <option value="" selected disabled hidden>
                ??????
              </option>
              <option id="other_schilarships" value="????">
                ????{" "}
              </option>
              <option id="not_other_schilarships" value="????">
                ????
              </option>
            </select>
            <label id="scholarships_details1" htmlFor="scholarships_details">
              {" "}
              ?????????? ?????????? ???????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="scholarships_details"
              name="scholarships_details"
              value={formData.scholarships_details}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label htmlFor="insurance_institute_allowance">
              ?????? ????????/?? ???????????? ???????????? ??????????/???????? ??????????????? :{" "}
            </label>
            <select
              id="insurance_institute_allowance"
              className="select1"
              onChange={(e) => handleSelecetChange(e)}
            >
              <option value="" selected disabled hidden>
                ??????
              </option>
              <option id="insurance_institute_allowance" value="????">
                ????{" "}
              </option>
              <option id="not_insurance_institute_allowance" value="????">
                ????
              </option>
              <option id="other">??????</option>
            </select>
            <label
              id="insurance_institute_allowance_details1"
              htmlFor="insurance_institute_allowance_details"
            >
              {" "}
              ?????????? ?????????? ?????????????? ???????????????? ???????????? ?????????? :{" "}
            </label>
            <input
              className="input1"
              type="text"
              id="insurance_institute_allowance_details"
              name="insurance_institute_allowance_details"
              value={formData.insurance_institute_allowance_details}
              onChange={(e) => handleChange(e)}
            />

            <br />
            <br />
          </fieldset>
          <br />
          <br />
        </form>
        <button className="button-55" onClick={docPage}>
          {" "}
          ??????
        </button>
      </div>
    </div>
  );
}

export default AssistanceProject;

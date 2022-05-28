import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import $ from "jquery";
import Swal from "sweetalert2";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const showData = await getDocs(
        collection(db, "Candidates for assistance project")
      );
      setData(showData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  async function getAssistanceData() {
    var assistanceData = [];
    const querySnapshot = await getDocs(
      collection(db, "Candidates for assistance project")
    );
    querySnapshot.forEach((doc) => {
      assistanceData.push(doc.data());
    });
    showAssistanceData(assistanceData);
    console.log(assistanceData);
  }
  function showAssistanceData(assistanceData) {
    let x = $("#data");
    x.html("");
    let src = "<div>";
    src +=
      "<table class='content-table' style='width:100%' id='tab'>" +
      "<tr>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>אימייל</th>" +
      "<th>הצג מידע מלא</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < assistanceData.length; i++) {
      console.log(i);
      $("#tab").append(
        $("<tr>")
          .append(
            $("<td>").append(
              assistanceData[i]["fname"] + " " + assistanceData[i]["lname"]
            )
          )
          .append($("<td>").append(assistanceData[i]["ID"]))
          .append($("<td>").append(assistanceData[i]["date_of_birth"]))
          .append($("<td>").append(assistanceData[i]["email"]))
          .append(
            $("<td>").append(
              "<button class='button-38' id='show" + [i] + "'>לחץ כאן</button>"
            )
          )
      );
      $("body").on("click", "#show" + [i], function () {
        showAssistData(assistanceData[i]["ID"], assistanceData);
      });
    }
  }
  function deleteUser(id) {
    deleteDoc(doc(db, "Candidates for assistance project", id));
  }
  async function getHabitantData() {
    var habitantData = [];
    const querySnapshot = await getDocs(
      collection(db, "Candidates for habitant project")
    );
    querySnapshot.forEach((doc) => {
      habitantData.push(doc.data());
    });
    showHabitantData(habitantData);
    console.log(habitantData);
  }
  function showHabitantData(habitantData) {
    let x = $("#data");
    x.html("");
    let src = "<div>";
    src +=
      "<table class='content-table' style='width:100%' id='tab'>" +
      "<tr>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>אימייל</th>" +
      "<th>הצג מידע מלא</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < habitantData.length; i++) {
      $("#tab").append(
        $("<tr>")
          .append(
            $("<td>").append(
              habitantData[i]["fname"] + " " + habitantData[i]["lname"]
            )
          )
          .append($("<td>").append(habitantData[i]["ID"]))
          .append($("<td>").append(habitantData[i]["date_of_birth"]))
          .append($("<td>").append(habitantData[i]["email"]))
          .append(
            $("<td>").append(
              "<button class='button-38' id='show" + [i] + "'>לחץ כאן</button>"
            )
          )
      );
      $("body").on("click", "#show" + [i], function () {
        showHabData(habitantData[i]["ID"], habitantData);
      });
    }
  }

  function showAssistData(id, data) {
    console.log(id);
    for (let i = 0; i < data.length; i++) {
      if (data[i]["ID"] == id) {
        let str = "<div>תז: " + data[i]["ID"] + "<br/>";
        str += "תאריך לידה: " + data[i]["date_of_birth"] + "<br/>";
        str += "כתובת: " + data[i]["address"] + "<br/>";
        str += "טלפון: " + data[i]["phone_number"] + "<br/>";
        str += "ארץ לידה: " + data[i]["born_country"] + "<br/>";
        str += "קופת חולים: " + data[i]["hmo"] + "<br/>";
        str += "רופא מטפל: " + data[i]["doctor"] + "<br/>";
        str += "סניף קופת חולים: " + data[i]["hmo_branch"] + "<br/>";
        str += "טלפון קופת חולים: " + data[i]["hmo_phone"] + "<br/>";
        str += "<br/><h3>פרטי גורם מפנה</h3><br/>";
        str += "שם ושם משפחה  : " + data[i]["referrer_name"] + "<br/>";
        str +=
          "תפקיד של גורם מפנה: " + data[i]["referrer_proffesion"] + "<br/>";
        str += "טלפון: " + data[i]["referrer_phone"] + "<br/>";
        str += "אימייל: " + data[i]["referrer_email"] + "<br/>";
        str += "<br/><h3>לימודים</h3><br/>";
        str += "מוסד: " + data[i]["framework_name"] + "<br/>";
        str += "כתובת המוסד: " + data[i]["framework_after_school"] + "<br/>";
        str += "מסגרת אחרי לימודים: " + data[i]["framework_address"] + "<br/>";
        str += "<br/><h3>שיוך ללשכה</h3><br/>";
        str += "שם הלשכה: " + data[i]["bureau_name"] + "<br/>";
        str += "העוס: " + data[i]["social_worker_name"] + "<br/>";
        str += "תפקיד: " + data[i]["social_worker_role"] + "<br/>";
        str += "טלפון: " + data[i]["social_worker_phone"] + "<br/>";
        str += "אימייל: " + data[i]["social_worker_email"] + "<br/>";
        str += "<br/><h3>רקע משפחתי</h3><br/>";
        str += "רקע משפחתי קצר: " + data[i]["family_background"] + "<br/>";
        str += "מצב ההורים: " + data[i]["parents_status"] + "<br/>";
        str += "מצב משפחתי: " + data[i]["family_status"] + "<br/>";
        str += "שם האם: " + data[i]["mother_name"] + "<br/>";
        str += "כתובת האם: " + data[i]["mother_address"] + "<br/>";
        str += "קשר עם האם: " + data[i]["connection_with_mother"] + "<br/>";
        str += "שם האב: " + data[i]["father_name"] + "<br/>";
        str += "כתובת האב: " + data[i]["father_address"] + "<br/>";
        str += "קשר עם האב: " + data[i]["connection_with_father"] + "<br/>";
        str += "</div>";
        Swal.fire({
          title: data[i]["fname"] + " " + data[i]["lname"],
          icon: "info",
          html: str,
          focusConfirm: false,
        });
      }
    }
  }

  function showHabData(id, data) {
    console.log(id);
    for (let i = 0; i < data.length; i++) {
      if (data[i]["ID"] == id) {
        let str = "<div>תז: " + data[i]["ID"] + "<br/>";
        str += "תאריך לידה: " + data[i]["date_of_birth"] + "<br/>";
        str += "כתובת: " + data[i]["address"] + "<br/>";
        str += "טלפון: " + data[i]["phone_number"] + "<br/>";
        str += "<br/><h3>פרטי גורם מפנה</h3><br/>";
        str += "שם ושם משפחה  : " + data[i]["referrer_name"] + "<br/>";
        str +=
          "תפקיד של גורם מפנה: " + data[i]["referrer_proffesion"] + "<br/>";
        str += "טלפון: " + data[i]["referrer_phone"] + "<br/>";
        str += "אימייל: " + data[i]["referrer_email"] + "<br/>";
        str += "<br/><h3>לימודים</h3><br/>";
        str += "מוסד: " + data[i]["framework_name"] + "<br/>";
        str += "תחום: " + data[i]["framework_field"] + "<br/>";
        str += "מספר שנות לימוד: " + data[i]["framework_years"] + "<br/>";
        str += "היקף שכר לימוד: " + data[i]["tuition"] + "<br/>";
        str += "</div>";
        Swal.fire({
          title: data[i]["fname"] + " " + data[i]["lname"],
          icon: "info",
          html: str,
          focusConfirm: false,
        });
      }
    }
  }
  async function getSearchData() {
    var search = [];
    const querySnapshot = await getDocs(
      collection(db, "Candidates for assistance project")
    );
    querySnapshot.forEach((doc) => {
      search.push(doc.data());
    });
    var search2 = [];
    const querySnapshot2 = await getDocs(
      collection(db, "Candidates for habitant project")
    );
    querySnapshot2.forEach((doc) => {
      search2.push(doc.data());
    });
    test(search, search2);
    console.log(search);
  }
  function searchCandidate(search, id, type) {
    let x = $("#data");
    x.html("");
    let src = "<div>";
    let found = false;
    src +=
      "<table class='content-table' style='width:100%' id='tab'>" +
      "<tr>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>אימייל</th>" +
      "<th>הצג מידע מלא</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < search.length; i++) {
      if (id == search[i]["ID"]) {
        $("#tab").append(
          $("<tr>")
            .append(
              $("<td>").append(search[i]["fname"] + " " + search[i]["lname"])
            )
            .append($("<td>").append(search[i]["ID"]))
            .append($("<td>").append(search[i]["date_of_birth"]))
            .append($("<td>").append(search[i]["email"]))
            .append(
              $("<td>").append(
                "<button class='button-38' id='show" +
                  [i] +
                  "'>לחץ כאן</button>"
              )
            )
        );
        found = true;
      }
      $("body").on("click", "#show" + [i], function () {
        if (type == 1) {
          showAssistData(search[i]["ID"], search);
        }
        if (type == 0) {
          showHabData(search[i]["ID"], search);
        }
      });
    }
    if (found == false) {
      Swal.fire({
        title: "שגיאה",
        icon: "error",
        html: "לא נמצא מועמד",
        focusConfirm: false,
      });
    }
  }
  function test(search, search2) {
    let str =
      "<label for='projects'>בחר פרויקט:</label><select name='projects' id='projects'>" +
      "<option id='habit' class='swal2-input' value='דיור'>דיור</option>" +
      "<option id='assit' class='swal2-input' value='הכוון'>הכוון</option>" +
      "</select><input type='text' id='id' class='swal2-input'></input>";
    Swal.fire({
      title: "הכנס תז",
      icon: "info",
      html: str,
      focusConfirm: false,
      preConfirm: () => {
        const projects = Swal.getPopup().querySelector("#projects").value;
        const id = Swal.getPopup().querySelector("#id").value;
        return {
          id: id,
          projects: projects,
        };
      },
    }).then((result) => {
      if (result.value.projects == "דיור") {
        searchCandidate(search, result.value.id, 1);
      } else {
        searchCandidate(search2, result.value.id, 0);
      }
    });
  }
  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tab");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        console.log(y);
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function sortTablebyDate() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tab");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/

        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  return (
    <div className="Admin">
      <h1>ניהול מידע</h1>
      <br />
      <div className="test">
        <button className="button-29" onClick={getHabitantData}>
          מידע על מועמדים לפרויקט הכוון
        </button>
        <button className="button-29" onClick={getAssistanceData}>
          מידע על מועמדים לפרויקט דיור
        </button>
        <button className="button-29" onClick={getSearchData}>
          חיפוש מועמד לפי ת"ז
        </button>
      </div>
      <div id="data"></div>
      <br />
      <button onClick={sortTable} className="button-38">
        מיין לפי שם
      </button>
      <button onClick={sortTablebyDate} className="button-38">
        מיין לפי תאריך
      </button>
    </div>
  );
};

export default Admin;

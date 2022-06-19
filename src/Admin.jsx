import React, { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  toDate,
} from "firebase/firestore";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import $ from "jquery";
import Swal from "sweetalert2";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import dateFormat, { masks } from "dateformat";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [data, setData] = useState([]);
  const [flagTwo, setFlagTwo] = useState(0);
  const [click, setClick] = useState(0);
  const [btn, setBtn] = useState(0);
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
    setBtn(1);
    var assistanceData = [];
    const querySnapshot = await getDocs(
      collection(db, "Candidates for assistance project")
    );
    querySnapshot.forEach((doc) => {
      assistanceData.push(doc.data());
    });
    showAssistanceData(assistanceData);
  }
  function showAssistanceData(assistanceData) {
    setClick(0);
    let x = $("#data");
    x.html("");
    let src = "<div>";
    src +=
      "<table class='content-table' style='width:100%' id='table-to-xls'>" +
      "<tr>" +
      "<th>תאריך הגשת הבקשה</th>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>אימייל</th>" +
      "<th>הצג מידע מלא</th>" +
      "<th>הורד קבצים</th>" +
      "<th>מחק בקשה</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < assistanceData.length; i++) {
      let date = assistanceData[i]["timestamp"].toDate();
      date = dateFormat(date, "dd/mm/yyyy");
      $("#table-to-xls").append(
        $("<tr>")
          .append($("<td>").append(date))
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
              "<button class='button-13' id='download" +
                [i] +
                "'>לחץ כאן</button>"
            )
          )
          .append(
            $("<td>").append(
              "<button class='button-13' id='down" + [i] + "'>לחץ כאן</button>"
            )
          )
          .append(
            $("<td>").append(
              "<button class='button-131' id='delete" +
                [i] +
                "'>לחץ כאן</button>"
            )
          )
      );
      $("body").on("click", "#down" + [i], function () {
        setFlagTwo(1);
        downloadData(assistanceData[i]["email"]);
      });
      $("body").on("click", "#download" + [i], function () {
        setClick(1);
        tohabExcel(assistanceData[i]["ID"], assistanceData);
      });
      $("body").on("click", "#delete" + [i], function () {
        deleteHabUser(assistanceData[i]["uid"]);
      });
    }
  }
  async function downloadData(email) {
    const listRef = ref(storage, email);
    // Create a child reference
    const res = await listAll(listRef);
    const requests = res.items.map((itemRef) =>
      getDownloadURL(ref(storage, itemRef))
    );
    const urls = await Promise.all(requests);
    console.log(urls);
    var toShow = "<div id = 'myimg'>";
    let index = 1;
    let flag = 0;
    urls.forEach((url) => {
      flag = 1;
      toShow +=
        " קובץ " +
        index +
        " " +
        "<a id='under' href='" +
        url +
        "'>" +
        "לחץ להורדה" +
        "<a>" +
        "<br/><br/>";
      index += 1;
    });
    if (flag === 1) {
      Swal.fire({
        html: toShow,
      });
    } else {
      Swal.fire("לא נמצאו קבצים");
    }
  }
  function deleteHabUser(id) {
    deleteDoc(doc(db, "Candidates for assistance project", id));
    Swal.fire("המשתמש נמחק בהצלחה");
  }
  function deleteAssistUser(id) {
    deleteDoc(doc(db, "Candidates for habitant project", id));
    Swal.fire("המשתמש נמחק בהצלחה");
  }
  async function getHabitantData() {
    setBtn(1);
    var habitantData = [];
    const querySnapshot = await getDocs(
      collection(db, "Candidates for habitant project")
    );
    querySnapshot.forEach((doc) => {
      habitantData.push(doc.data());
    });
    showHabitantData(habitantData);
  }
  function showHabitantData(habitantData) {
    setClick(0);
    let x = $("#data");
    x.html("");
    let src = "<div>";
    src +=
      "<table class='content-table' style='width:100%' id='table-to-xls'>" +
      "<tr>" +
      "<th>תאריך הגשת הבקשה</th>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>אימייל</th>" +
      "<th>הצג מידע מלא</th>" +
      "<th>הורד קבצים</th>" +
      "<th>מחק בקשה</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < habitantData.length; i++) {
      let date = habitantData[i]["timestamp"].toDate();
      date = dateFormat(date, "dd/mm/yyyy");
      $("#table-to-xls").append(
        $("<tr>")
          .append($("<td>").append(date))
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
              "<button class='button-13' id='download" +
                [i] +
                "'>לחץ כאן</button>"
            )
          )
          .append(
            $("<td>").append(
              "<button class='button-13' id='down" + [i] + "'>לחץ כאן</button>"
            )
          )
          .append(
            $("<td>").append(
              "<button class='button-131' id='delete" +
                [i] +
                "'>לחץ כאן</button>"
            )
          )
      );
      $("body").on("click", "#down" + [i], function () {
        setFlagTwo(1);
        downloadData(habitantData[i]["email"]);
      });
      $("body").on("click", "#download" + [i], function () {
        setClick(1);
        toExcel(habitantData[i]["ID"], habitantData);
      });
      $("body").on("click", "#delete" + [i], function () {
        deleteAssistUser(habitantData[i]["uid"]);
      });
    }
  }

  function showAssistData(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i]["ID"] === id) {
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
        // str += "<button class='button-38' id='assistDel'>מחק מועמד</button>";
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

  function toExcel(id, data) {
    let x = $("#data");
    x.html("");
    let src = "<div>";
    src +=
      "<ReactHTMLTableToExcel id='test-table-xls-button' className='download-table-xls-button' table='table-to-xls' filename='test' sheet='tablexls' buttonText='Download as XLS'/>" +
      "<table class='content-table' style='width:100%' id='table-to-xls'>" +
      "<tr>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>מספר טלפון</th>" +
      "<th>שם ושם משפחה של גורם מפנה</th>" +
      "<th>תפקיד של גורם מפנה</th>" +
      "<th>טלפון של גורם מפנה</th>" +
      "<th>אימייל של גורם מפנה</th>" +
      "<th>מוסד</th>" +
      "<th>תחום</th>" +
      "<th>מספר שנות לימוד</th>" +
      "<th>היקף שכר לימוד</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < data.length; i++) {
      if (data[i]["ID"] == id) {
        $("#table-to-xls").append(
          $("<tr>")
            .append($("<td>").append(data[i]["fname"] + " " + data[i]["lname"]))
            .append($("<td>").append(data[i]["ID"]))
            .append($("<td>").append(data[i]["date_of_birth"]))
            .append($("<td>").append(data[i]["phone_number"]))
            .append($("<td>").append(data[i]["referrer_name"]))
            .append($("<td>").append(data[i]["referrer_proffesion"]))
            .append($("<td>").append(data[i]["referrer_phone"]))
            .append($("<td>").append(data[i]["referrer_email"]))
            .append($("<td>").append(data[i]["framework_name"]))
            .append($("<td>").append(data[i]["framework_field"]))
            .append($("<td>").append(data[i]["framework_years"]))
            .append($("<td>").append(data[i]["tuition"]))
        );
      }
    }
  }

  function tohabExcel(id, data) {
    let x = $("#data");
    let medical = "";
    let drugs = "";
    let violence = "";
    let eating = "";
    let suicidal = "";
    let criminal = "";
    let learn = "";
    x.html("");
    let src = "<div>";
    src +=
      "<ReactHTMLTableToExcel id='test-table-xls-button' className='download-table-xls-button' table='table-to-xls' filename='test' sheet='tablexls' buttonText='Download as XLS'/>" +
      "<table class='content-table' style='width:100%' id='table-to-xls'>" +
      "<tr>" +
      "<th>תאריך הגשת בקשה</th>" +
      "<th>שם ושם משפחה</th>" +
      "<th>תעודת זהות</th>" +
      "<th>תאריך לידה</th>" +
      "<th>ארץ לידה</th>" +
      "<th>קופת חולים</th>" +
      "<th>רופא מטפל</th>" +
      "<th>סניף קופת חולים</th>" +
      "<th>טלפון קופת חולים</th>" +
      "<th>מסגרת נוכחית</th>" +
      "<th>שם המסגרת</th>" +
      "<th>כתובת המסגרת</th>" +
      "</tr>";
    x.append(src);
    for (let i = 0; i < data.length; i++) {
      let date = data[i]["timestamp"].toDate();
      date = dateFormat(date, "dd/mm/yyyy");
      if (data[i]["ID"] == id) {
        $("#table-to-xls").append(
          $("<tr>")
            .append($("<td>").append(date))
            .append($("<td>").append(data[i]["fname"] + " " + data[i]["lname"]))
            .append($("<td>").append(data[i]["ID"]))
            .append($("<td>").append(data[i]["date_of_birth"]))
            .append($("<td>").append(data[i]["born_country"]))
            .append($("<td>").append(data[i]["hmo"]))
            .append($("<td>").append(data[i]["doctor"]))
            .append($("<td>").append(data[i]["hmo_branch"]))
            .append($("<td>").append(data[i]["hmo_phone"]))
            .append($("<td>").append(data[i]["current_framework"]))
            .append($("<td>").append(data[i]["framework_name"]))
            .append($("<td>").append(data[i]["framework_address"]))
        );
        $("#table-to-xls").append(
          $("<tr>")
            .append($("<th>").append("מספר טלפון"))
            .append($("<th>").append("אימייל"))
            .append($("<th>").append("שם ושם משפחה של גורם מפנה"))
            .append($("<th>").append("תפקיד של גורם מפנה"))
            .append($("<th>").append("טלפון של גורם מפנה"))
            .append($("<th>").append("אימייל של גורם מפנה"))
            .append($("<th>").append("שם הלשכה"))
            .append($("<th>").append("שם העוס"))
            .append($("<th>").append("תפקיד העוס"))
            .append($("<th>").append("טלפון של העוס"))
            .append($("<th>").append("רקע משפחתי"))
            .append($("<th>").append("מצב ההורים"))
        );
        $("#table-to-xls").append(
          $("<tr>")
            .append($("<td>").append(data[i]["phone_number"]))
            .append($("<td>").append(data[i]["email"]))
            .append($("<td>").append(data[i]["referrer_name"]))
            .append($("<td>").append(data[i]["referrer_proffesion"]))
            .append($("<td>").append(data[i]["referrer_phone"]))
            .append($("<td>").append(data[i]["referrer_email"]))
            .append($("<td>").append(data[i]["bureau_name"]))
            .append($("<td>").append(data[i]["social_worker_name"]))
            .append($("<td>").append(data[i]["social_worker_role"]))
            .append($("<td>").append(data[i]["social_worker_phone"]))
            .append($("<td>").append(data[i]["family_background"]))
            .append($("<td>").append(data[i]["parents_status"]))
        );
        $("#table-to-xls").append(
          $("<tr>")
            .append($("<th>").append("מצב משפחתי"))
            .append($("<th>").append("שם האם"))
            .append($("<th>").append("כתובת האם"))
            .append($("<th>").append("שם האב"))
            .append($("<th>").append("כתובת האב"))
            .append($("<th>").append("בעיות רפואיות"))
            .append($("<th>").append("סמים ואלכוהול"))
            .append($("<th>").append("אירועים אלימים"))
            .append($("<th>").append("הפרעות אכילה"))
            .append($("<th>").append("נסיונות אובדניים"))
            .append($("<th>").append("רישום פלילי"))
            .append($("<th>").append("לקויות למידה"))
        );
        if (data[i]["medical_problem"]) {
          medical = "כן";
        } else {
          medical = "לא";
        }
        if (data[i]["drugs_and_alcohol"]) {
          drugs = "כן";
        } else {
          drugs = "לא";
        }
        if (data[i]["violent_incidents"]) {
          violence = "כן";
        } else {
          violence = "לא";
        }
        if (data[i]["eating_disorders"]) {
          eating = "כן";
        } else {
          eating = "לא";
        }
        if (data[i]["suicidal_attempts"]) {
          suicidal = "כן";
        } else {
          suicidal = "לא";
        }
        if (data[i]["criminal_record"]) {
          criminal = "כן";
        } else {
          criminal = "לא";
        }
        if (data[i]["criminal_record"]) {
          criminal = "כן";
        } else {
          criminal = "לא";
        }
        if (data[i]["learning_disabilities"]) {
          learn = "כן";
        } else {
          learn = "לא";
        }
        $("#table-to-xls").append(
          $("<tr>")
            .append($("<td>").append(data[i]["family_status"]))
            .append($("<td>").append(data[i]["mother_name"]))
            .append($("<td>").append(data[i]["mother_address"]))
            .append($("<td>").append(data[i]["father_name"]))
            .append($("<td>").append(data[i]["father_address"]))
            .append($("<td>").append(medical))
            .append($("<td>").append(drugs))
            .append($("<td>").append(violence))
            .append($("<td>").append(eating))
            .append($("<td>").append(suicidal))
            .append($("<td>").append(criminal))
            .append($("<td>").append(learn))
            .append($("<td>").append(data[i]["allowances"]))
        );
      }
    }
  }

  function showHabData(id, data) {
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
  }

  function searchCandidate(search, id, type) {
    setBtn(1);
    setClick(0);
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
      "<th>הורד קבצים</th>" +
      "<th>מחק בקשה</th>" +
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
                "<button class='button-13' id='download" +
                  [i] +
                  "'>לחץ כאן</button>"
              )
            )
            .append(
              $("<td>").append(
                "<button class='button-13' id='down" +
                  [i] +
                  "'>לחץ כאן</button>"
              )
            )
            .append(
              $("<td>").append(
                "<button class='button-131' id='delete" +
                  [i] +
                  "'>לחץ כאן</button>"
              )
            )
        );
        found = true;
      }
      $("body").on("click", "#down" + [i], function () {
        downloadData(search[i]["email"]);
      });
      $("body").on("click", "#download" + [i], function () {
        if (type === 1) {
          setClick(1);
          tohabExcel(search[i]["ID"], search);
        }
        if (type === 0) {
          setClick(1);
          toExcel(search[i]["ID"], search);
        }
      });
      $("body").on("click", "#download" + [i], function () {
        if (type === 1) {
          deleteHabUser(search[i]["uid"], search);
        }
        if (type === 0) {
          deleteAssistUser(search[i]["uid"], search);
        }
      });
    }
    if (found === false) {
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
      if (result.value.projects === "דיור") {
        searchCandidate(search, result.value.id, 1);
      } else {
        searchCandidate(search2, result.value.id, 0);
      }
    });
  }
  function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table-to-xls");
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
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
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
    var dates = [];
    table = document.getElementById("table-to-xls");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      dates = [];
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
        dates.push(x.innerHTML.toLowerCase());
        dates.push(y.innerHTML.toLowerCase());
        var a = x.innerHTML.toLowerCase();
        var b = y.innerHTML.toLowerCase();
        //check if the two rows should switch place:
        var aa = a.split("/").reverse().join(),
          bb = b.split("/").reverse().join();
        if (aa < bb) {
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
      <section className="banner">
        <h1 id="difh1">ניהול מידע</h1>
        {/* <p>Company Mission Statement goes here</p> */}
      </section>
      <br />
      <div className="test">
        <button className="button-17" onClick={getHabitantData}>
          מידע על מועמדים לפרויקט הכוון
        </button>
        <button className="button-17" onClick={getAssistanceData}>
          מידע על מועמדים לפרויקט דיור
        </button>
        <button className="button-17" onClick={getSearchData}>
          חיפוש מועמד לפי ת"ז
        </button>
      </div>
      <br />
      <br />
      {btn ? (
        <div>
          <button onClick={sortTable} className="button-13">
            מיין לפי שם
          </button>
          <button onClick={sortTablebyDate} className="button-13">
            מיין לפי תאריך
          </button>
        </div>
      ) : null}
      <br />
      {click ? (
        <div>
          <br />
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="button-68"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="הורד טבלה ↓"
          />
        </div>
      ) : null}
      <div id="data"></div>
      <div id="file-area"></div>
      <br />
    </div>
  );
};

export default Admin;

function validateName() {
    var name = document.getElementById("name").value;
  
    if (name == "") {
      document.getElementById("message1").innerHTML =
        "**Fill the Full Name please!";
      return false;
    } else if (!/^[a-zA-Z-' ]+$/.test(Form.name.value)) {
      document.getElementById("message1").innerHTML =
        "Only letters and white space allowed ";
      return false;
    } else {
      document.getElementById("message1").innerHTML = "";
    }
  }
  
  function validateUserName() {
    var userName = document.getElementById("username").value;
    if (userName == "") {
      document.getElementById("message2").innerHTML =
        "**Fill the username please!";
      return false;
    } else {
      document.getElementById("message2").innerHTML = "";
    }
  }
  function validateDate() {
    var birth = document.getElementById("birth").value;
  
    if (birth == "") {
      document.getElementById("message3").innerHTML =
        "**Fill the birth Date please!";
      return false;
    } else {
      document.getElementById("message3").innerHTML = "";
    }
  }
  // let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
  // if (/^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/.test(Form.birth.value)) {
  //     let operator = date.split('/');
  //     let datepart = [];
  //     if (operator.length > 1) {
  //         datepart = date.split('/');
  //     }
  //     let day = parseInt(datepart[0]);
  //     let month = parseInt(datepart[1]);
  //     let year = parseInt(datepart[2]);
  
  //     // Create a list of days of a month
  //     let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //     if (month == 1 || month > 2) {
  //         if (day > ListofDays[month - 1]) {
  //             //to check if the date is out of range
  //             document.getElementById("message3").innerHTML = "**Invalid Date format!";
  //             return false;
  //         }
  //     } else if (month == 2) {
  //         let leapYear = false;
  //         if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
  //         if ((leapYear == false) && (day >= 29)) {
  //            document.getElementById("message3").innerHTML = "**Invalid Date format!";
  //             return false;
  //         }
  //         else
  //             if ((leapYear == true) && (day > 29)) {
  //               document.getElementById("message3").innerHTML = "**Invalid Date format!";
  //                 return false;
  //             }
  //     }
  // } else {
  //   document.getElementById("message3").innerHTML = "**Invalid Date format!";
  //     return false;
  // }
  
  function validatePhone() {
    var phone = document.getElementById("phone").value;
    if (phone == "") {
      document.getElementById("message4").innerHTML =
        "**Fill the phone Number please!";
      return false;
    } else {
      document.getElementById("message4").innerHTML = "";
    }
  }
  // function showActors()
  // {
  //   var birth = document.getElementById("birth").value;
  //     <?php
  //           include "./api.php";
  //           $temp = new ApiCall();
  //           $temp->print_all_names('1-2-2002');
  //           ?>
  
  // }
  function validateAddress() {
    var address = document.getElementById("address").value;
  
    if (address == "") {
      document.getElementById("message5").innerHTML =
        "**Fill the Address please!";
      return false;
    } else {
      document.getElementById("message5").innerHTML = "";
    }
  }
  function validatePassword() {
    var pw = document.getElementById("pswd1").value;
  
    if (pw == "") {
      document.getElementById("message6").innerHTML =
        "**Fill the password please!";
      return false;
    } else if (
      pw.length < 8 ||
      pw.search(/(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])/) < 0 ||
      pw.search(/[0-9]/) < 0
    ) {
      document.getElementById("message6").innerHTML =
        "**this password is not valid please enter password at least 8 character with at least 1 number and 1 special character";
      return false;
    } else {
      document.getElementById("message6").innerHTML = "";
    }
  }
  function validateEmail() {
    var email = document.getElementById("email").value;
  
    if (email == "") {
      document.getElementById("message8").innerHTML = "**Fill the Email please!";
      return false;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Form.email.value)
    ) {
      alert("You have entered an invalid email address!");
      return false;
    } else {
      document.getElementById("message8").innerHTML = "";
    }
  }
  function validateConfirmPassword(form) {
    var confirmPass = document.getElementById("pswd2").value;
    if (confirmPass == "") {
      document.getElementById("message7").innerHTML =
        "**Fill the confirm password please!";
      return false;
    } else {
      document.getElementById("message7").innerHTML = "";
    }
  }
  function matchPassword(form) {
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    if (password != confirmpassword) {
      alert("Error! Password did not match.");
      return false;
    } else {
      alert("Password Match. Congratulations!");
      return true;
    }
  }
  
  // function to make request for api
  function showActors() {
    let val = document.getElementById("birth").value;
    const date = new Date(val);
    if (date === null) return;
    let burthDay = date.getDate();
    let burthMonth = date.getMonth() + 1;
    // instanciate an opject from xmlhttprequest class
    var myRequest = new XMLHttpRequest();
    //if request ready state change => call this funciont
    myRequest.onreadystatechange = function () {
      // if the Request is Finished and Response is Ready
      // if the Response Statuts is (OK) 200
      if (this.readyState === 4 && this.status === 200) {
        // Show the Response
        let res = this.responseText;
        document.querySelector(".actor-list").innerHTML = res;
      }
    };
    // get the content from api_res php page
    const requestUrl = `api_result.php?day=${burthDay}&month=${burthMonth}`;
    myRequest.open("GET", requestUrl, true);
    myRequest.send();
  }
  //funciont to show actors list
  function showActorList() {
    let show = document.querySelector(".actor-list").style.display;
    if (show !== "block") {
      document.querySelector(".actor-list").style.display = "block";
    } else {
      document.querySelector(".actor-list").style.display = "none";
    }
  }
  
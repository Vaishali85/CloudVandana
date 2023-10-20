
    /**********************************All Validation is here ********************************/

function validate() {

    /******************************** Frist Name***************************************/    
      let x = document.forms["SurveyForm"]["fname"].value;
      if (x == "") {
        alert("First name must be filled out");
        return false;
      }
    
      if (!/^[a-z A-z]*$/g.test(document.SurveyForm.fname.value)) {
            alert("Invalid characters for first name.");
            document.SurveyForm.fname.focus();
            document.getElementById('fname').value = '';
            return false;
        }
    /*********************************** Last Name******************************************/
         x = document.forms["SurveyForm"]["lname"].value;
      if (x == "") {
        alert("Last name must be filled out");
        return false;
      }
    
      if (!/^[a-z A-z]*$/g.test(document.SurveyForm.lname.value)) {
            alert("Invalid characters for last name");
            document.SurveyForm.lname.focus();
            document.getElementById('lname').value= '';
            return false;
        }
    
    /********************************* Email ******************/
          x = document.forms['SurveyForm']['email'].value;
        if (x == null || x == "") {
            alert("email id must be filled out");
            document.SurveyForm.email.focus();
            return false;
        }
    /**************************** Mobile No*************************************/
        x = document.forms['SurveyForm']['phone'].value;
        if (x == null || x == "") {
            alert("phone  no must be filled out");
            document.SurveyForm.phone.focus();
            return false;
        }
    
        if (!/^[0-9]*$/g.test(document.SurveyForm.phone.value)) {
            alert("Write only numbers for mobile number.");
            document.SurveyForm.phone.focus();
            document.getElementById('phone').value = '';
            return false;
        }
    
    }

    
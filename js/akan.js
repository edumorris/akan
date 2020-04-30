function viewInputs() {
    var uName = document.getElementById("userName").value;
    var uGender = document.getElementById("userGender").value;
    var dayBirth = document.getElementById("dayOfBirth").value;
    var monthBirth = document.getElementById("monthOfBirth").value;
    var yearBirth = document.getElementById("yearOfBirth").value;

    var dateOfBirth = dayBirth + "/" + monthBirth + "/" + yearBirth;

    var userData = [uName, uGender, dayBirth, monthBirth, yearBirth];

    return userData; //All input from the form can be accessed through this array.
}

function dayValidator() {
    var dayBirth = document.getElementById("dayOfBirth").value;
    if (dayBirth < 1 || dayBirth > 31) {
        alert("Enter a valid day");
        document.getElementById("dayOfBirth").focus();
    }
}

function monthValidator() {
    var monthBirth = document.getElementById("monthOfBirth").value;
    if (monthBirth < 1 || monthBirth > 12) {
        alert("Enter a valid month");
        document.getElementById("monthOfBirth").focus();
    }
}

function akanCalculator() {
    var userData = viewInputs();

    var yearOB = userData[4];
    var monthOB = userData[3];
    var dateOB = userData[2];

    var bornDate = yearOB + "-" + monthOB + "-" + dateOB;

    /*
    	Function accessed from StackOverflow url(https://stackoverflow.com/questions/5619202/converting-a-string-to-a-date-in-javascript)

    */

    var parts = bornDate.split('-');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    var myDateStr = mydate.toDateString();

    var dayOfWeek = myDateStr.slice(0, 3); //Returns day of the week

    var dateData = [myDateStr, dayOfWeek];
    return dateData;
}

function akanNameAssigner() {
    var dateData = akanCalculator();
    var dayData = dateData[1];
    var userData = viewInputs();

    var userGend = userData[1];

    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var akanName;

    if (userGend == "female") {
        switch (dayData) {
            case "Sun":
                akanName = femaleAkanNames[0];
                break;

            case "Mon":
                akanName = femaleAkanNames[1];
                break;

            case "Tue":
                akanName = femaleAkanNames[2];
                break;

            case "Wed":
                akanName = femaleAkanNames[3];
                break;

            case "Thu":
                akanName = femaleAkanNames[4];
                break;

            case "Fri":
                akanName = femaleAkanNames[5];
                break;

            case "Sat":
                akanName = femaleAkanNames[6];
                break;
        }
    } else if (userGend == "male") {
        switch (dayData) {
            case "Sun":
                akanName = maleAkanNames[0];
                break;

            case "Mon":
                akanName = maleAkanNames[1];
                break;

            case "Tue":
                akanName = maleAkanNames[2];
                break;

            case "Wed":
                akanName = maleAkanNames[3];
                break;

            case "Thu":
                akanName = maleAkanNames[4];
                break;

            case "Fri":
                akanName = maleAkanNames[5];
                break;

            case "Sat":
                akanName = maleAkanNames[6];
                break;
        }
    } else {
        alert("Kindly selected your gender!");
        document.getElementById("userGender").focus();
    }

    return akanName;
}
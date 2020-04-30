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
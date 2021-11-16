function form() {
    var name = document.forms["contactform"]["Name"];
    var email = document.forms["contactform"]["Email"];
    var phone = document.forms["contactform"]["mobilenumber"];
    var drop = document.forms["contactform"]["Destination"];
    

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
          "Please enter your mobile number.");
        phone.focus();
        return false;
    }


    if (drop.selectedIndex < 0) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    return true;
}

function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var email = document.forms["message-form"]["email"].value;
    var phoneNumber = document.forms["message-form"]["phone-number"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;

    if (name == "" || date == "" || gender == "" || messages == "" || email == "" || phoneNumber == "") {
        alert("Form Harus Di Isi Semua");
        return false;
    }

    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-email").innerText = email;
    document.getElementById("sender-phone-number").innerText = phoneNumber;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    return false;
}

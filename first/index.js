let uname, pass;

document.getElementById("submit").onclick = function() {
    uname = document.getElementById("myName").value;
    pass = document.getElementById("password").value;
    console.log(uname + " " + pass);
    document.getElementById("myH1").textContent="hello" + uname
};

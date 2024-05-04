function login(){
    var user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;

    if(user=="usuario" && pass=="contraseña" || user=="doctor1" && pass=="contra123"){
        window.location= "dashboard.html"
    }
}
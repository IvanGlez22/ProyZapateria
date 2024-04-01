const frmLogin = document.getElementById("frmLogin");

frmLogin.addEventListener("submit", function(event){
    //evita el envio del formulario sin que esten llenos
    event.preventDefault();    
    const correo = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const responsLogin = document.getElementById("responseLogin");
    responsLogin.textContent = "";
    //crear contenedor accesLogin y el div para bootstrap
    const accesLogin = document.createElement("div");
    accesLogin.setAttribute("role","alert");

    if (correo === "ivanchisco123@gmail.com" && password === "123"){
        accesLogin.textContent = "Datos correctos :D";
        accesLogin.classList.add("alert","alert-success");
        //se añade al div principal de respongelogin
        responsLogin.appendChild(accesLogin);
        window.location.href ="/src/pages/formulario.html"
       //para llevar al dashboard principal  window.location.href = "src/pages"
       //TIENE QUE ESTAR EN LA CARPETA PAGES!!!!!!!!!!!!!!!!!!!!
    }else{
        accesLogin.textContent = "Datos incorrectos :(";
        accesLogin.classList.add("alert", "alert-danger");
        responsLogin.appendChild(accesLogin);

        document.querySelector("#frmLogin").reset();
    }



});

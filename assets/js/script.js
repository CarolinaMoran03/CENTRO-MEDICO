var selectedRow= null;

function showAlert(message,className){
    const div=document.createElement("div");
    div.className= `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container= document.querySelector(".container");
    const main= document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(()=> document.querySelector(".alert").remove(), 3000);
}

function clearFields(){
    document.querySelector("#nombre").value="";
    document.querySelector("#apellido").value="";
    document.querySelector("#edad").value="";
    document.querySelector("#direccion").value="";
    document.querySelector("#telefono").value="";
    document.querySelector("#estado").value="";
    document.querySelector("#enfermedades").value="";
    document.querySelector("#historia").value="";
    document.querySelector("#fecha").value="";
}

document.querySelector("#student-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    const nombre=document.querySelector("#nombre").value;
    const apellido=document.querySelector("#apellido").value;
    const edad=document.querySelector("#edad").value;
    const direccion=document.querySelector("#direccion").value;
    const telefono=document.querySelector("#telefono").value;
    const estado=document.querySelector("#estado").value;
    const enfermedades=document.querySelector("#enfermedades").value;
    const historia=document.querySelector("#historia").value;
    const fecha=document.querySelector("#fecha").value;

    if(nombre == "" || apellido== "" || edad== "" || direccion== "" ||estado== "" ||telefono== "" || enfermedades=="" ||historia== "" ||fecha== ""){
        showAlert("Llene los campos", "danger");
    }
    else{
        if(selectedRow== null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML= `<td>${nombre}</td> <td>${apellido}</td> <td>${edad}</td> <td>${direccion}</td> <td>${telefono}</td>  <td>${estado}</td> <td>${enfermedades}</td> <td>${historia}</td> <td>${fecha}</td>  <td><a href="#" class="btn btn-warning btn-sm edit">Editar</a><a href="#" class="btn btn-danger btn-sm delete">Eliminar</a></td>`;

            
            list.appendChild(row);
            selectedRow=null;
            showAlert("Agregado","success");
        }
        else{
            selectedRow.children[0].textContent = nombre;
            selectedRow.children[1].textContent = apellido;
            selectedRow.children[2].textContent = edad;
            selectedRow.children[3].textContent = direccion;
            selectedRow.children[4].textContent = telefono;
            selectedRow.children[5].textContent = estado;
            selectedRow.children[6].textContent = enfermedades;
            selectedRow.children[7].textContent = historia;
            selectedRow.children[8].textContent = fecha;
            selectedRow=null;
            showAlert("Agregado","success");
        }
        clearFields();
    }
});


document.querySelector("#student-list").addEventListener("click",(e) =>{
    target= e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#nombre").value = selectedRow.children[0].textContent;
        document.querySelector("#apellido").value = selectedRow.children[1].textContent;
        document.querySelector("#edad").value = selectedRow.children[2].textContent;
        document.querySelector("#direccion").value = selectedRow.children[3].textContent;
        document.querySelector("#telefono").value = selectedRow.children[4].textContent;
        document.querySelector("#estado").value = selectedRow.children[5].textContent;
        document.querySelector("#enfermedades").value = selectedRow.children[6].textContent;
        document.querySelector("#historia").value = selectedRow.children[7].textContent;
        document.querySelector("#fecha").value = selectedRow.children[8].textContent;
        
    }
});


document.querySelector("#student-list").addEventListener("click",(e) =>{
    target= e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Eliminado", "danger");
    }
});
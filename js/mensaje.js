let mensajes = [];

    
    document.getElementById("fanForm").addEventListener("submit", function(event){
      event.preventDefault(); 

 
      let name = document.getElementById("nombre").value;
      let email = document.getElementById("email").value;
      let mensaje = document.getElementById("mensaje").value;

     if (name == ""||email==""|| mensaje ==""){
      alert("Completa los campos para enviar el mensaje")

     } else {  
      mensajes.push({ nombre: name, correo: email, mensaje: mensaje });

    
      actualizarTabla();

      
      this.reset();
     }
    });

  
    function actualizarTabla(){
      let tbody = document.getElementById("fanTable");
      tbody.innerHTML = ""; 

      mensajes.forEach((item,index) => {
        let fila = `<tr>
                      <td>${item.nombre}</td>
                      <td>${item.correo}</td>
                      <td>${item.mensaje}</td>
                      <td><button onclick="eliminarMensaje(${index})">Eliminar</button></td>
                    </tr>`;
        tbody.innerHTML += fila;
      });
    }
    function eliminarMensaje(index){
    let confimar = confirm("¿Estás seguro de que quieres eliminar este mensaje?");
    if (confimar) {
    mensajes.splice(index, 1); 
    actualizarTabla(); 
    } else {

            console.log('Cancelado');
        } 
      }


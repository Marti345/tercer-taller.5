const modal = document.getElementById("Modal1");
const modal2 = document.getElementById("Modal2");
const modal3 = document.getElementById("Modal3");
const modal4 = document.getElementById("Modal4");
const modal5 = document.getElementById("Modal5");
const openBtn = document.getElementById("openModal1");
const openBtn2 = document.getElementById("openModal2");
const openBtn3 = document.getElementById("openModal3");
const openBtn4 = document.getElementById("openModal4");
const openBtn5 = document.getElementById("openModal5");
const closeBtn = document.getElementById("closeModal");




  // Abrir modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex"; // mostramos usando flex
  });

 openBtn2.addEventListener("click", () => {
    modal2.style.display = "flex"; // mostramos usando flex
  });
   openBtn3.addEventListener("click", () => {
    modal3.style.display = "flex"; // mostramos usando flex
  });
   openBtn4.addEventListener("click", () => {
    modal4.style.display = "flex"; // mostramos usando flex
  });
   openBtn5.addEventListener("click", () => {
    modal5.style.display = "flex"; // mostramos usando flex
  });

  // Cerrar modal con botón "X"
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    
  });

  // Cerrar modal si se hace clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
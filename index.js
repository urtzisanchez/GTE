//+++++++++++++++++++++++++++++++++++++++++++++++++++
//  VAR CALLS

var openModal = document.querySelector(".p");
var openModals = document.querySelector(".s");
var openModalf = document.querySelector(".f");

var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".modal_close");

//+++++++++++++++++++++++++++++++++++++++++++++++++++
//  ARRAYS IMAGENES

var imagenesp = ["images/parents/3.png", "images/parents/4.png"];

var imageness = ["images/sisters/1.png", "images/sisters/13.png"];
var imagenesf = ["images/parents/1.png", "images/family/4.png"];

// MODAL PARENTS  +++++++++++++++++++++++++++++++++++++++++++++++++++

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");

  var imgp1 = document.querySelector("#img1");
  var imgp2 = document.querySelector("#img2");
  imgp1.src = imagenesp[1];
  imgp2.src = imagenesp[0];
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});

// MODAL SISTERS ++++++++++++++++++++++++++++++++++++++++++++++
openModals.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");

  var imgs1 = document.querySelector("#img1");
  var imgs2 = document.querySelector("#img2");
  imgs1.src = imageness[0];
  imgs2.src = imageness[1];
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});

// MODAL FAMILY ++++++++++++++++++++++++++++++++++++++++++++++++

openModalf.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");

  var imgf1 = document.querySelector("#img1");
  var imgf2 = document.querySelector("#img2");
  imgf1.src = imagenesf[0];
  imgf2.src = imagenesf[1];
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});

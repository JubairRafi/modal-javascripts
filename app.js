
const modalbtn =  document.querySelector(".modal-btn");
const modalOverlay =  document.querySelector(".modal-overlay");
const closebtn =  document.querySelector(".close-btn");

//events
modalbtn.addEventListener("click",function(){
  modalOverlay.classList.add('open-modal');
});
closebtn.addEventListener("click",()=>{
  modalOverlay.classList.remove('open-modal');
});

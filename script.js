function flashBody() {
  var element = document.body;
  element.classList.add("active");
  setTimeout(function(){
    element.classList.remove("active");
  }, 400);
}
document.addEventListener("click", flashBody);


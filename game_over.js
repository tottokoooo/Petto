function changeColor() {
  $("#start_button").css("color", "black");
}
function changeColorBack() {
  $("#start_button").css("color", "gray");
}

localStorage.removeItem("name");
localStorage.removeItem("type");
localStorage.removeItem("life");
localStorage.removeItem("age_second");
localStorage.removeItem("birth");

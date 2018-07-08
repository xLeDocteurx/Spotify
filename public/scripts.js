AUTH.do("check_auth", () => {
  let ucolor = JSON.parse(localStorage.getItem("user")).color;

  //   document.body.style.color = ucolor;
  let header = document.getElementById("nav-brand");
  header.style.backgroundColor = ucolor;
  // header.style.opacity = 0.6;
  let gradients = document.getElementsByClassName("gradient");
  for (let i =0; i < gradients.length; i++) {
  gradients[i].style.backgroundImage = `-webkit-linear-gradient(50deg, #ff4169 0, ${ucolor} 100%)`;
}
});

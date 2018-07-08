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

function updateColor () {
  let c1 = document.getElementById('color1').value;
  let c2 = document.getElementById('color2').value;

  let backg = document.getElementById('pick-background');

  backg.style.backgroundImage = `-webkit-linear-gradient(50deg, ${c1} 0, ${c2} 100%)`;
}
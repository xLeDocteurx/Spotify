AUTH.do("check_auth", () => {
  let ucolor = JSON.parse(localStorage.getItem("user")).color;

  //   document.body.style.color = ucolor;
  let header = document.getElementById("fixed-header");
  header.style.backgroundColor = ucolor;
  header.style.opacity = 0.6;
});

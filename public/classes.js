class AUTH {
  static do(evenement, fonction) {
    if (evenement == "co") {
      console.log("l'utilisateur veut se connecter");
      localStorage.setItem("user", JSON.stringify(fonction));
      window.location.replace("/");
    } else if (evenement == "disco") {
      console.log("l'utilisateur veut se déconnecter");
      localStorage.removeItem("user");
      location.reload();
    } else if (evenement == "check_auth") {
      if (localStorage.getItem("user")) {
        let noncos = document.getElementsByClassName("nonco");
        let forcos = document.getElementsByClassName("forco");
        for (let i = 0; i < noncos.length; i++) {
          noncos[i].style.display = "none";
        }
        for (let i = 0; i < forcos.length; i++) {
          forcos[i].style.display = "initial";
        }
        console.log(
          "utilisateur connecté nous allons éxécuter la fonction qu'a défini l'utilisateur :"
        );
        console.log(fonction);
        // fonction;
        // ou ?
        fonction();
        console.log("job done !");
      } else {
        let noncos = document.getElementsByClassName("nonco");
        let forcos = document.getElementsByClassName("forco");
        for (let i = 0; i < noncos.length; i++) {
          noncos[i].style.display = "initial";
        }
        for (let i = 0; i < forcos.length; i++) {
          forcos[i].style.display = "none";
        }
        console.log("utilisateur non connecté");
      }
    }
  }
}

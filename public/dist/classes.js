class AUTH{static do(e,l){if("co"==e)console.log("l'utilisateur veut se connecter"),localStorage.setItem("user",JSON.stringify(l)),window.location.replace("/");else if("disco"==e)console.log("l'utilisateur veut se déconnecter"),localStorage.removeItem("user"),location.reload();else if("check_auth"==e)if(localStorage.getItem("user")){let e=document.getElementsByClassName("nonco"),t=document.getElementsByClassName("forco");for(let l=0;l<e.length;l++)e[l].style.display="none";for(let e=0;e<t.length;e++)t[e].style.display="initial";arguments[1]?(console.log("utilisateur connecté nous allons éxécuter la fonction qu'a défini l'utilisateur :"),l()):console.log("l'utilisateur n'a pas défini de fonction avec la requette de vérification de la connection")}else{let e=document.getElementsByClassName("nonco"),l=document.getElementsByClassName("forco");for(let l=0;l<e.length;l++)e[l].style.display="initial";for(let e=0;e<l.length;e++)l[e].style.display="none";console.log("utilisateur non connecté")}}}
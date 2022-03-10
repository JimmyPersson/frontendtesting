function popUp(url){
    popUpWindow = window.open(url, 'popUpWindow',
    'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no, status=yes');
}

let btn = document.querySelector("img")

btn.addEventListener("click", () => {
    popUp("./mail.html");
});

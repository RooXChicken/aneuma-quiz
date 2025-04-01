const logo = document.getElementById("logo");

function onLoad() {
    let _aneuma = window.location.href.split("?")[1].split("=")[1];
    logo.src = `assets/aneumas/${_aneuma}.jpeg`;
}
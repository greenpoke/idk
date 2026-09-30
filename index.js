import {Links} from "./modules/links.js"

//what are YOU looking at

document.getElementById("UserAgent").innerText = navigator.userAgent;
if (navigator.userAgent == "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15" || window.location.hostname === "127.0.0.1"){
    document.getElementById("text1").innerText = "You cool twin"
    Object.entries(Links).forEach(([key, value]) => {
    const hlink = document.createElement("a");
    hlink.id = key
    hlink.href = value
    hlink.innerText = key
    hlink.class = "link-styled"
    hlink.style.display = "block";
    document.body.appendChild(hlink);
    console.log(key);
    console.log(value);
});
}else{
    document.getElementById("text1").innerText = "404 Site Not Found"
    document.getElementById("UserAgent").innerText = ""
}
console.log("Hi");
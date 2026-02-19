// console.log(document.querySelector("body").scrollTop);
document.querySelector(".go-up-icon").style = "display: none;";

document.addEventListener("scroll", function (){

    if(window.scrollY<350){
    document.querySelector(".go-up-icon").style = "display: none;";
    document.querySelector(".go-up-icon").classList.remove("emerge");
    document.querySelector(".go-up-icon").classList.add("fade");
} else{
    document.querySelector(".go-up-icon").style = "display: initial;";
    document.querySelector(".go-up-icon").classList.remove("fade");
    document.querySelector(".go-up-icon").classList.add("emerge");
        
}
})

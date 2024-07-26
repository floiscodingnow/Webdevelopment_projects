for(var i=0; i<document.querySelectorAll(".drum").length; i++) {

    document.getElementsByTagName("button")[i].addEventListener("click", handleEvent);

}


function handleEvent(){
    alert("I've got clicked");
}
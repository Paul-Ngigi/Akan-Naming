window.addEventListener("DOMContentLoaded",function(){
    console.log("Content loaded");

    const dateForm = document.querySelector("#dateForm");
    const nameTbody = document.querySelector("#nameTbody");

    dateForm.addEventListener("submit", function(event){
        event.preventDefault();
    })
});
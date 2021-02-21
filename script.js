window.addEventListener("DOMContentLoaded",function(){
    console.log("Content loaded");

    const dateForm = document.querySelector("#dateForm");
    const nameTbody = document.querySelector("#nameTbody");
    console.log("Form added",dateForm);
    console.log("Table body",nameTbody);

    dateForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Submitted")
    })
});
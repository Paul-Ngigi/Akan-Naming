window.addEventListener("DOMContentLoaded",function(){
    console.log("Content loaded");

    const dateForm = document.querySelector("#dateForm");
    const nameTbody = document.querySelector("#nameTbody");
    // console.log("Form added",dateForm);
    // console.log("Table body",nameTbody);

    dateForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Submitted")

        const gender = document.querySelector("#gender").value;
        // console.log("gender",gender);

        let dateInput = document.querySelector("#date").value;
        let dayofBirth = new Date(dateInput);
        dobDay = dayofBirth.getDay();
        dateInput = dobDay;
        // console.log(dateInput);

        let nameRow = document.createElement("tr");
        let nameData = document.createElement("td");

        nameRow.appendChild(nameData);

        nameTbody.appendChild(nameRow);

        let maleGender = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        let femaleGender = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    });
});
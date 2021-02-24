window.addEventListener("DOMContentLoaded",function(){
    console.log("Content loaded");
    let nameList = new Array();
    const dateForm = document.querySelector("#dateForm");
    const nameTbody = document.querySelector("#nameTbody");
    console.log("Form added",dateForm);
    // console.log("Table body",nameTbody);

    dateForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Submitted")

        const gender = document.querySelector("#gender").value;
        // console.log("gender",gender);

        let dateInput = document.querySelector("#date").value;
        let dayofBirth = new Date(dateInput);
        dobDay = dayofBirth.getDay();
        // dateInput = dobDay;
        // console.log(dobDay);

        let nameRow = document.createElement("tr");
        // let nameData = document.createElement("td");

        // nameRow.appendChild(nameData);
        namesData = document.createElement("td");
        nameTbody.appendChild(nameRow);

        let maleGender = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        let femaleGender = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        if (gender == "Male") { 
            nameList.push(maleGender[dobDay]);
            displayName();
        } else if(gender == "Female") {
            nameList.push(femaleGender[dobDay]);
            displayName();
        } else { 
            alert("Error!Please select your gender");
        }

        function displayName() { 
            nameList.forEach(function (name) {
                namesData.textContent = name;
                nameRow.appendChild(namesData);
                nameTbody.appendChild(nameRow);
            });
        }
    });
});
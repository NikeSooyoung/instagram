document.addEventListener("DOMContentLoaded",
    function(e){
        let nameEditButton = document.querySelector("#nameEditButton")
        let editName = document.querySelector("#editNameField")
        let okButton = document.querySelector("#okButton")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")
        
        nameEditButton.addEventListener("click",
            function(e){
                editName.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )
        
        okButton.addEventListener("click",
            function(e){
                nameHere.textContent = newName.value
                editName.style.display = "none"
                nameEditButton.style.display="inline"
            }
        )
    }
)
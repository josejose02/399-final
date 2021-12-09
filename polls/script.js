var data;
fetch("data.json")
.then(response => response.json())
.then(data => {
    
});


document.querySelector("#p-01").addEventListener("click", ()=>{
    console.log("Test");
});
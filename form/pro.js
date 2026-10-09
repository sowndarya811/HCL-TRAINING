document.getElementById("studentForm").addEventListener("submit",function(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    console.log(name,email);
});
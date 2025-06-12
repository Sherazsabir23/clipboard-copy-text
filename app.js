const copybtn = document.querySelector("#copybtn");


copybtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const inputValue = document.querySelector("#text").value;
    navigator.clipboard.writeText(inputValue)
    .then(()=>{
        alert("text has copied");
    }).catch((err)=>{
        alert("Something Went Wrong");
        console.log(err);
    })
})
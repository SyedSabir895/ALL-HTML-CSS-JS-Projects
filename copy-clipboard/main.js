const button = document.getElementById("copy");
const paragraph = document.getElementById("paragraph");
const message = document.getElementById("message");

function copyToClipboard(element){
    navigator.clipboard.writeText(element.textContent).then(()=>{
        message.textContent = "Copied to clipboard";
        message.classList.add("after-clicked");
    })

    .catch((err)=>{
        console.log("Unable to copy the data")
    })

    .finally(()=>{
        setTimeout(()=>{
            message.textContent = "";
            message.classList.remove("after-clicked");
        },2000)
    })

}



button.addEventListener("click",()=>copyToClipboard(paragraph));
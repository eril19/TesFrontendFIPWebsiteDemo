
function takePicture(value){
    localStorage.setItem('key',value)
    alert("Image Taken!")
    location.replace('./changePhoto.html')
}

function setPicture(value){
    localStorage.setItem('key',value)
    alert("Image have been set to profile!")
    location.replace('./index.html')
}


function checkImage(){
    var simpanButtonBG = document.getElementById('buttonSimpan')
    var simpanButton = document.getElementById('simpanButton')
    var Image = document.getElementById('displayCapture') 

    if(Image.style.backgroundImage == ""){
        simpanButton.style.color = "#757575" 
        simpanButtonBG.style.backgroundColor = "#E0E0E0"
        simpanButton.disabled = true
    }else{
        simpanButton.style.color = "white" 
        simpanButtonBG.style.backgroundColor = "#002984"
    }
}


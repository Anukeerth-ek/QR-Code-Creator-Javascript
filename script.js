
const qrCode = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= '
const imgBox = document.getElementById('img-box')
const qrimage = document.getElementById('qr-image')
const qrText = document.getElementById('qr-text')
document.getElementById('button').addEventListener('click',generateQr)
function generateQr(){
    if(qrText.value){
        qrimage.src = ' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example ' + qrText.value
    }
    
    else{
        qrText.classList.add('error')
    }
    imgBox.classList.remove("img-box")
    imgBox.classList.add("scale")
}
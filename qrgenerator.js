// QR GENERATOR
var QRtext = document.querySelector('#text');
var qrImage = document.querySelector('#qr-image');
var errorSpan = document.querySelector('#qr-image .error');
var img = document.querySelector('#img');

function generateQR()
{
    qrImage.style.display = 'block';
    if(QRtext.value.trim().length == 0){
        errorSpan.innerHTML = 'Masukkan kata / kalimat / url!';
        img.style.display = 'none';
    }else{
        img.style.display = 'block';
        errorSpan.innerHTML = '';
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=' + QRtext.value
    }
}
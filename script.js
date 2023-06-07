
var place = document.getElementById('qr_image')
const generateQRCode = (url, size1,size2,color) => {
    const qrcode = new QRCode(place, {
      text: url,
      width: size1,
      height: size2,
      colorDark : color,
    });
  };
function submit() {
    var url = document.getElementById('sitename').value
    var color = document.getElementById('col').value
    if (color==''){color='black'}
    if (url ==''){
        window.alert('you should first enter your site or item ... etc')
    }
    else{
        if(place.innerHTML !=''){
            window.alert('there is an QR you should remove it')
        }else{
            generateQRCode(url,300,300,color)
            document.getElementById('qr_content').style.display ='block'
        }
    }

document.getElementById('save_qr').addEventListener("click" , myfunction )
function myfunction(){
    var img = document.getElementById('qr_image')
    var srce = img.querySelector('img').src
    document.getElementById('save_qr').setAttribute("href",srce)
    document.getElementById('save_qr').setAttribute("download",'qrcode')
}
}
function remov_it(){
    place.innerHTML=''
    document.getElementById('qr_content').style.display ='none'
    document.getElementById('sitename').innerHTML =''
    url =''
}

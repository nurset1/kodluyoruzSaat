let fullName = prompt("Adınız Nedir?")


function dijitalSaat(){
    var suan = new Date()
    var saat = suan.getHours()
    var dk = suan.getMinutes()
    var sn = suan.getSeconds()
    
    saat = (saat<10)? "0"+saat:saat
    dk = (dk<10)? "0"+dk:dk
    sn = (sn<10)? "0"+sn:sn
    var gunler = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    var gun = gunler[suan.getDay()-1]
    var zaman = saat + ":" + dk + ":" + sn +" "+ gun
    var saat = document.getElementById("saat").innerHTML=zaman
    var kullanici = document.getElementById("name").innerHTML = fullName
   
    return saat,kullanici
}

setInterval(dijitalSaat, 1000)




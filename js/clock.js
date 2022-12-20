let clock = document.querySelector("#myClock")
let gunler =[
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
]
let aylar =[
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]
function format(pcsaat) {
var Saat = pcsaat.toString();
if (Saat.length == 1) {
return "0" + Saat;
} else {
return Saat;
}
}
function saatGuncelleme() { //Burada bilgisayarımızdan saati çekiyoruz.
var tarih = new Date();
var saat = tarih.getHours(); //Burada saati çekiyoruz.
var dakika = tarih.getMinutes(); //Burada dakikayı çekiyoruz.
var saniye = tarih.getSeconds(); //Burada saniyeyi çekiyoruz.
var gun = gunler[tarih.getDay()-1]; // Burada günü çekiyoruz
var ay =aylar[tarih.getMonth()] //Burada ayı çekiyoruz
var yil =tarih.getFullYear();
clock.textContent = format(saat) + ":" + format(dakika) + ":" + format(saniye) + " "+ format(gun)+" günü "+format(ay)+" ayı " +format(yil)+" yılı"; //Burada ekranımıza çıktımızı veriyoruz.
}
setInterval(saatGuncelleme, 1000);
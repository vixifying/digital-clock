let clock = document.getElementById("clock")

function showTime (){

    let date = new Date()
    let h = date.getHours() <10 ? `0 ${date.getHours()}` : date.getHours()
    let m = date.getMinutes() <10 ? `0${date.getMinutes()}` : date.getMinutes()
    let s = date.getSeconds()<10 ? `0${date.getSeconds()}` : date.getSeconds()
    let full = `${h >=12 ? 24 - h : h}:${m}:${s} ${h >=12 ? 'PM' : 'AM'}`
    clock.innerText = full
    setTimeout(() => showTime(), 1000);
}
showTime()
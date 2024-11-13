// Proses JavaScript untuk memulai animasi warna slider
function startSliderColorChange() {
    document.querySelector('.slider').style.animation = 'changeSliderColor 5s infinite';
}

// Menampilkan waktu real-time di dalam slider
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').innerText = 'Waktu Sekarang: ' + now.toLocaleTimeString();
}
setInterval(updateTime)

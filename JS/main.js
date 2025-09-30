// VIDEO - POMALEJŠÍ A PŘECHOD
const video = document.querySelector('.video-bg video');
video.playbackRate = 0.60;

video.addEventListener('timeupdate', () => {
    if(video.currentTime >= video.duration - 0.05){
        video.style.transition = 'opacity 0.05s linear';
        video.style.opacity = 0;
        setTimeout(() => {
            video.currentTime = 0;
            video.style.opacity = 1;
        }, 50);
    }
});

// MODAL - OTEVŘENÍ A ZAVŘENÍ MAPY
function openMap() {
    document.getElementById('modalMapa').style.display = "flex";
}

function closeMap() {
    document.getElementById('modalMapa').style.display = "none";
}

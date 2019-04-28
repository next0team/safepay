var index = 1,
    playlist = ['first_video.mp4', 'second_video.mp4', 'third_video.mp4'],
    video = document.getElementById('awesome_video');

video.addEventListener('ended', rotate_video, false);

function rotate_video() {
    video.setAttribute('src', playlist[index]);
    video.load();
    index++;
    if (index >= playlist.length) { index = 0; }
}
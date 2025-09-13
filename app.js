const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['/videos/video1.mp4´, ´/videos/video2.mp4´, ´/videos/video3.mp4'];

let index = 0;
nextButton.addEventListener('click', function() {
    index+= 1;
    video.src = movieList[index];

    if (index === 3){
        index = -1;
    }

})
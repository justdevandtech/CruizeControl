const songs = [
  {
    id: 1,
    desc: "cali",
    aud: "./musicFolder/cali-1171.mp3",
  },
  {
    id: 2,
    desc: "cancion-triste",
    aud: "./musicFolder/cancion-triste-1502.mp3",
  },
  {
    id: 3,
    desc: "dreamy-piano",
    aud: "./musicFolder/dreamy-piano-soft-sound-ambient-background-4049.mp3",
  },
  {
    id: 4,
    desc: "female-voice-and-electronica",
    aud: "./musicFolder/female-voice-and-electronica-2-3496.mp3",
  },
  {
    id: 5,
    desc: "hip-hop-lo-fi-4387",
    aud: "./musicFolder/hip-hop-lo-fi-4387.mp3",
  },
  {
    id: 6,
    desc: "mezhdunami-uncut-gems",
    aud: "./musicFolder/mezhdunami-uncut-gems-1198.mp3",
  },
  {
    id: 7,
    desc: "modular-ambient",
    aud: "./musicFolder/modular-ambient-04-792.mp3",
  },
  {
    id: 8,
    desc: "texting",
    aud: "./musicFolder/texting-audio.mp3",
  },
];

function musicApp() {
    let songItems = songs.map(song => {
      return `<div class="border shadow p-3 bg-light rounded" id="songsContainer">
         <div class="wrapper">
         <img  id="artistImg" src="img/vinyl.jpg" alt="">
         <div class="artistdecr mt-3">
         <h2>${
           song.aud[2].toUpperCase() +
           "#" +
           song.id +
           " " +
           song.aud.slice(9, 29)
         }...</h2>
         <p>${song.desc}</P>
         <audio src=${song.aud}></audio>
         <br/>
         
         </div>
         </div>
         <!-- wraper stop here -->
         <!-- visualization start here-->
         <div class="audioBar bg-secondary mx-auto mb-3 mt-2 rounded">
         <span class="audio_currentTime m-2 float-start">00</span>
         <div class="audio_progressBar rounded"></div>
          <span class="audio_duration m-2 float-end">00</span>
         </div>
         <!-- visualization stop here-->
         <button class="playBtn btn border border-success px-3"><i class="fas fa-play-circle"></i></button>
          <button class="pauseBtn btn border border-success px-3"><i class="fas fa-pause-circle"></i></button>
          <button class="border float-end border-success h-25 px-3"><i class="far fa-thumbs-up"></i><span>11111<span></button>
           <button class="comment border float-end border-success me-2 h-25 px-3"><i class="far fa-comments"></i></button>
          <hr>
         </div>
  `;
    });
    let musicUI = document.querySelector(".musicUI");
    musicUI.innerHTML = songItems;
for (let i = 0; i < songsContainer.length; i++) {
  let audio = songsContainer[i].querySelector("audio");
  let playBtn = songsContainer[i].querySelector(".playBtn");
  let pauseBtn = songsContainer[i].querySelector(".pauseBtn");
  let progressbar = songsContainer[i].querySelector(".audio_progressBar");
  let artistimg = songsContainer[i].querySelector("#artistImg");
  let audio_duration = songsContainer[i].querySelector(".audio_duration");
  let audio_currentTime = songsContainer[i].querySelector(".audio_currentTime");
  let audioBar = songsContainer[i].querySelector(".audioBar");
  audioBar.addEventListener('click', audioBarGetClick)

  audio.onloadedmetadata = function () {
    let audio_durationMinutes = parseInt(audio.duration/60);
  let audio_durationSeconds = parseInt(audio.duration%60);
  audio_duration.innerHTML = `${audio_durationMinutes}:${audio_durationSeconds}`
  };

  let audioBarSize = 350;
  
function audioBarGetClick(event) {
  let mouseX = event.pageX - audioBar.offsetLeft;
  let newTime = mouseX * audio.duration / audioBarSize;
  audio.currentTime = newTime;
  progressbar.style.width = mouseX + 'px';
}
  
  function pauseBtnFunc() {
    let paBtn = document.querySelectorAll(".pauseBtn");
    for (let pb = 0; pb < paBtn.length; pb++) {
      paBtn[pb].style.display = "none";
    }
  }

  function playBtnFunc() {
    let plaBtn = document.querySelectorAll(".playBtn");
    for (let pla = 0; pla < plaBtn.length; pla++) {
      plaBtn[pla].style.display = "block";
    }
  }

  /* ****************** */
  

  //Automatically display audio currentTime user click play button
  function audioTimeUpdate() {
    if (!audio.ended) {
       let audioTimeUpdate_durationMinutes = parseInt(audio.currentTime / 60);
       let audioTimeUpdate_durationSeconds = parseInt(audio.currentTime % 60);
       audio_currentTime.innerHTML = `${audioTimeUpdate_durationMinutes}:${audioTimeUpdate_durationSeconds}`;
       let size = parseInt(audio.currentTime * audioBarSize/audio.duration)
       progressbar.style.width = size + 'px';
    } else{
      audio_currentTime.innerHTML = 0.00;
    }
  }


/* ********************** */

  //Artist image rotate when user click playbtn but when another playbtn get clicked the prev. artist img keep rotating instead of to stop 4 de current one. When playbtn get clicked, this function is to check if the div already has a Artist image rotating class func. if ? "remove it" : "do nothing"
  function artist_Img() {
    let artist_Img = document.querySelectorAll("#artistImg");
    artist_Img.forEach(artistImgs => {
      artistImgs.classList.contains("rotate_aristeimg") ? artistImgs.classList.remove("rotate_aristeimg") : artistImgs.classList.add(/* nothing */);
    });
  }

  playBtn.addEventListener("click", () => {
    let aud = document.querySelectorAll("audio");
    for (let a = 0; a < aud.length; a++) {
      aud[a].pause();
      pauseBtnFunc(); // pause function calls here
      playBtnFunc(); // playbtn function calls here
      artist_Img(); // artistimg function calls here
    }
 
    setTimeout(() => {
      audio.play();
      artistimg.classList.add("rotate_aristeimg");
      audioUpdate = setInterval(audioTimeUpdate, 400); // calling the audioTimeUpdate func. here
     /*  setInterval(() => {
        audioTimeUpdate();
        let currentTime = Math.floor(audio.currentTime);
        progressbar.style.width = currentTime + "px";
      }, 500); */

      pauseBtn.style.display = "block";
      playBtn.style.display = "none";
    }, 100);

    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      artistimg.classList.remove("rotate_aristeimg");
      pauseBtnFunc();
      playBtnFunc();
    });
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
    artistimg.classList.remove("rotate_aristeimg");
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
  });
}


}
window.addEventListener("DOMContentLoaded", musicApp)



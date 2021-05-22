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
         <span class="showtime border text-center mx-auto h-25 p-2"></span>
         </div>
         </div>
         <span class="mb-3">
       
         
         </span>
         <button class="playBtn border border-success px-3"><i class="fas fa-play-circle"></i></button>
          <button class="pauseBtn border border-success px-3"><i class="fas fa-pause-circle"></i></button>
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
 

function pauseBtnFunc() {
    let paBtn = document.querySelectorAll('.pauseBtn');
    for (let pb = 0; pb < paBtn.length; pb++) {
      paBtn[pb].style.display = "none"
    }
}

function playBtnFunc() {
        let plaBtn = document.querySelectorAll(".playBtn");
        for (let pla = 0; pla < plaBtn.length; pla++) {
          plaBtn[pla].style.display = "block";
        }
}


 playBtn.addEventListener("click",()=>{

    if (audio.onplaying) {
        pauseBtn.style.display = 'block';
    }else{
        pauseBtn.style.display = 'none';
    }
     let aud = document.querySelectorAll('audio');
     for (let a = 0; a < aud.length; a++) {
         aud[a].pause();
         pauseBtnFunc();
         playBtnFunc(); 
     }

     setTimeout(() => {
         audio.play();
         pauseBtn.style.display = 'block';
         playBtn.style.display = 'none';
     }, 100);
 })

 pauseBtn.addEventListener('click', () => {
     audio.pause();
     playBtn.style.display = 'block'
     pauseBtn.style.display = 'none';
 })



}


}

musicApp();



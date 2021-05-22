const songs = [
    {
        id: 1,
        "desc": "Ginger",
        "aud": "./musics/Wizkid-ft-Burna-Boy-Ginger.mp3",
        "original_song": "https://audiomack.com/embed/song/wizkid/ginger?background=1&color=417505"
    },
     {
         id: 2,
        "desc": "Blessed",
        "aud": "./musics/Wizkid-ft-Damian-Marley-Blessed.mp3",
        "original_song": "https://audiomack.com/embed/song/wizkid/blessed?background=1&color=417505"
    },
     {
         id: 3,
        "desc": "Jowo",
        "aud": "./musics/Davido-Jowo.mp3",
        "original_song": "https://audiomack.com/embed/song/davido/jowo?background=1&color=417505"
    },
     {
         id: 4,
        "desc": "for you",
        "aud": "./musics/Teni-For-You-ft-Davido.mp3",
        "original_song": "https://audiomack.com/embed/song/tenientertainer/for-you?background=1"
    },
     {
         id: 5,
        "desc": "Piece in Me",
        "aud": "./musics/Wizkid-ft-Ella-Mai-Piece-Of-Me.mp3",
        "original_song": "https://audiomack.com/embed/song/wizkid/piece-of-me?background=1&color=417505"
    },
         {
         id: 6,
        "desc": "Longtime",
        "aud": "./musics/Wizkid-ft-Skepta-Longtime.mp3",
        "original_song": "https://audiomack.com/embed/song/wizkid/longtime?background=1&color=417505"
    },
         {
         id: 7,
        "desc": "True Love",
        "aud": "./musics/Wizkid-ft-Tay-Iwar-Projexx-True-Love.mp3",
        "original_song": "https://audiomack.com/embed/song/wizkid/true-love?background=1&color=417505"
    }   
]


function musicApp() {
    let songItems = songs.map(song => {
      return `<di id="songsContainer">
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



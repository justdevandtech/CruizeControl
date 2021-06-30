const songs = [
  {
    id: 1,
    song_title: "Ginger",
    artistname: "wizkid",
    aud: "./musics/Wizkid-ft-Burna-Boy-Ginger.mp3",
    original_song:
      "https://audiomack.com/embed/song/wizkid/ginger?background=1&color=417505",
  },
  {
    id: 2,
    song_title: "Blessed",
    artistname: "wizkid",
    aud: "./musics/Wizkid-ft-Damian-Marley-Blessed.mp3",
    original_song:
      "https://audiomack.com/embed/song/wizkid/blessed?background=1&color=417505",
  },
  {
    id: 3,
    song_title: "Jowo",
    artistname: "davido",
    aud: "./musics/Davido-Jowo.mp3",
    original_song:
      "https://audiomack.com/embed/song/davido/jowo?background=1&color=417505",
  },
  {
    id: 4,
    song_title: "for you",
    artistname: "Teni ft davido",
    aud: "./musics/Teni-For-You-ft-Davido.mp3",
    original_song:
      "https://audiomack.com/embed/song/tenientertainer/for-you?background=1",
  },
  {
    id: 5,
    song_title: "Piece in Me",
    artistname: "wizkid",
    aud: "./musics/Wizkid-ft-Ella-Mai-Piece-Of-Me.mp3",
    original_song:
      "https://audiomack.com/embed/song/wizkid/piece-of-me?background=1&color=417505",
  },
  {
    id: 6,
    song_title: "Longtime",
    artistname: "wizkid",
    aud: "./musics/Wizkid-ft-Skepta-Longtime.mp3",
    original_song:
      "https://audiomack.com/embed/song/wizkid/longtime?background=1&color=417505",
  },
  {
    id: 7,
    song_title: "True Love",
    artistname: "wizkid",
    aud: "./musics/Wizkid-ft-Tay-Iwar-Projexx-True-Love.mp3",
    original_song:
      "https://audiomack.com/embed/song/wizkid/true-love?background=1&color=417505",
  },
];

const loader_layout = document.querySelector(".loader_layout");
let barsongtitle = document.querySelector(".barsongtitle");
let barartistname = document.querySelector(".barartistname");
let baraudio = document.querySelector(".baraudio");

 let audioProgress_bar = document.querySelector(".audioProgress_bar");
 let progresBar_bar = document.querySelector(".progresBar_bar");


document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    setTimeout(() => {
      loader_layout.style.display = "none";
    }, 200);
  }
}; 

function musicApp() {
  let songsData = songs
    .map((song, index) => {
      let songsNum = index + 1;
      return `<div class="music_card bg-white p-3 rounded mb-3 mt-4">
           <div class="audioBox-container d-flex justify-content-between align-items-center">
                 <div class="artistProfile-div d-flex align-items-center ">
                 <span class="songsNum ms-0 me-2 mb-2 text-secondary">#${songsNum}</span>
                <div class="play_pauseBtns me-2">
                <span class="btn playbtn"><i class="fas fa-play"></i></span>
                <span class="btn pausebtn"><i class="fas fa-pause"></i></span>
                </div>
                 <audio src=${song.aud}></audio>
                <div class="artistprofile">
                     <h4 class="songtitle text-secondary">${song.song_title}</h4>
                    <p class="artistname">${song.artistname}</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
            <strong class="audioloader mx-3">Loading Audio...</strong>
            <div class="audioCurrentime"></div>
            <div class="progresBar rounded mx-3">
                <div class="audioProgress rounded"></div>
            </div>
            <div class="audioDuration ms-2">--.--</div>
            </div>
            <span class="border downloadbtn p-2 rounded">download</span>
            <span class="text-success downloadicon fs-5"><i class="fas fa-cloud-download-alt"></i></span>
            <div class="tagsToggler"><i class="fas fa-chevron-down"></i></div>
            </div>
           <div class="moreInfocontainer">
               <div class="moreInfobtns">
                   <span class="border btn px-2"><i class="fas fa-play me-1 text-success"></i>111</span>
                   <span class="border btn px-2"><i class="far fa-heart me-1 text-success"></i>222</span>
                   <span class="border btn px-2"><i class="far fa-bookmark text-success"></i></span>
                   <span class="border btn px-2"><i class="far fa-comment me-1 text-success"></i>56</span>
               </div>
           </div>
           <!-- more info stop here -->
        </div>`;
    })
    .join("");
  const audioBoxUI = document.querySelector(".audioBoxUI");
  audioBoxUI.innerHTML = songsData;

  let music_card = document.querySelectorAll(".music_card");

  for (let i = 0; i < music_card.length; i++) {
    let playbtn = music_card[i].querySelector(".playbtn");
    let pausebtn = music_card[i].querySelector(".pausebtn");
    let audio = music_card[i].querySelector("audio");
    let audioCurrentime = music_card[i].querySelector(".audioCurrentime");
    let audioDuration = music_card[i].querySelector(".audioDuration");
    let audioProgress = music_card[i].querySelector(".audioProgress");
    let progresBar = music_card[i].querySelector(".progresBar");
    let songtitle = music_card[i].querySelector(".songtitle");
    let artistname = music_card[i].querySelector(".artistname");
    let audioloader = music_card[i].querySelector(".audioloader");

    //display audio duration
    audio.onloadedmetadata = function () {
      let audio_durationMinutes = parseInt(audio.duration / 60);
      let audio_durationSeconds = parseInt(audio.duration % 60);
      audioDuration.innerHTML = `${audio_durationMinutes}:${audio_durationSeconds}`;
    };

    progresBar.addEventListener("click", audioProgressBarGetClick);
    function audioProgressBarGetClick(event) {
      let mouseX = event.pageX - progresBar.offsetLeft;
      let newTime = (mouseX * audio.duration) / audioBarSize;
      audio.currentTime = newTime;
      audioProgress.style.marginLeft = mouseX + "px";
    }

    //Automatically display audio currentTime when user click on play button
    function audioTimeUpdate() {
      if (!audio.ended) {
        let audioTimeUpdate_durationMinutes = parseInt(audio.currentTime / 60);
        let audioTimeUpdate_durationSeconds = parseInt(audio.currentTime % 60);
        audioCurrentime.innerHTML = `${audioTimeUpdate_durationMinutes}:${audioTimeUpdate_durationSeconds}`;
        let size = parseInt(
          (audio.currentTime * audioBarSize) / audio.duration
        );
        audioProgress.style.marginLeft = size + "px";
      } else {
        audioCurrentime.innerHTML = 0.0;
      }
    }
    /* **** */

    let audioBarSize = 350;

    function pauseBtnFunc() {
      let paBtn = document.querySelectorAll(".pausebtn");
      for (let pb = 0; pb < paBtn.length; pb++) {
        paBtn[pb].style.display = "none";
      }
    }

    function playBtnFunc() {
      let plaBtn = document.querySelectorAll(".playbtn");
      for (let pla = 0; pla < plaBtn.length; pla++) {
        plaBtn[pla].style.display = "block";
      }
    }

    playbtn.addEventListener("click", () => {
      let aud = document.querySelectorAll("audio");
      for (let i = 0; i < aud.length; i++) {
        aud[i].pause();
        pauseBtnFunc(); // pause function calls here
        playBtnFunc();
      }

      if (audio.duration) {
        audioloader.style.display = "none";
      } else {
        progresBar.style.display = "none";
        audioloader.style.display = "block";
      }

      audio.play();
      pausebtn.style.display = "block";
      playbtn.style.display = "none";
      setInterval(() => {
        audioTimeUpdate();
      }, 400);
      pausebtn.style.display = "block";
      playbtn.style.display = "none";

      barsongtitle.innerHTML = songtitle.textContent;
      barartistname.innerHTML = artistname.textContent;
      baraudio.src = audio.src;
      console.log(baraudio);

      audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        playbtn.style.display = "block";
        pausebtn.style.display = "none";
      });
    });
    /* playbtn stop here */

    pausebtn.addEventListener("click", () => {
      audio.pause();
      pausebtn.style.display = "none";
      playbtn.style.display = "block";
    });
  }
  //******** */

  let songIndex = 0;
   barsongtitle.innerHTML = songs[songIndex].song_title
   barartistname.innerHTML = songs[songIndex].artistname;
   baraudio.src = songs[songIndex].aud;
}

window.addEventListener("DOMContentLoaded", musicApp);



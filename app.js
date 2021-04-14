const music = [
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

const box = document.getElementById('box');
const poper = document.querySelector('.audiopopper');
const btns = document.querySelectorAll('button');
let bAudio = document.getElementById('b_audio');



window.addEventListener('load', () => {
    setTimeout(() => {
        app();
         let playbtn = box.querySelectorAll(".playBtn");
       playbtn.forEach((btns) => {
        btns.style.display = "block"
    })
    }, 100);
    /*  alert("Welcome to CruizeControl. Please kindly note that things posted here are for entertainment pureposes only, with vision to help our local artists promote their songs.") */
    
     poper.classList.remove('show') 
});


function app() {
    let songs = music.map((item) => {
         box.innerHTML += `<di id="cont">
         <div class="wrapper">
         <img  id="artistImg" src="img/vinyl.jpg" alt="">
         <div class="artistdecr mt-3">
         <h2>${item.aud[2].toUpperCase() + "#" + item.id + " " + item.aud.slice(9, 29)}...</h2>
         <p>${item.desc}</P>
         <audio src=${item.aud}></audio>
         <span class="showtime border text-center mx-auto h-25 p-2"></span>
         </div>
         </div>
         <span class="mb-3">
         <iframe class="rounded ifram"  src=${item.original_song} scrolling="no" width="100%" height="150" scrollbars="no" frameborder="0"></iframe>
         
         </span>
         <button class="playBtn border border-success px-3"><i class="fas fa-play-circle"></i></button>
          <button class="pauseBtn border border-success px-3"><i class="fas fa-pause-circle"></i></button>
          <button class="border float-end border-success h-25 px-3"><i class="far fa-thumbs-up"></i><span>11111<span></button>
           <button class="comment border float-end border-success me-2 h-25 px-3"><i class="far fa-comments"></i></button>
          <hr>
         </div>
         `   


    });

    const commentbtn = box.querySelectorAll('.comment');
    const audioFram = box.querySelectorAll('.ifram');
    const commentclosebtn = document.querySelectorAll('.commentclosebtn');
    commentbtn.forEach((Comments) => {
        Comments.addEventListener('click', () => {
            commentbox.classList.add('show')
        })
    });
    commentclosebtn.forEach((commentclose) => {
        commentclose.addEventListener('click', () => {
            commentbox.classList.remove('show')
        })
    })

    const cont = document.querySelectorAll('#cont');
    cont.forEach((tinz) => {
        let interV;
        const poper = document.querySelector('.audiopopper');
        /* const aud = tinz.querySelector('audio') */
        let artistimg = tinz.querySelector("#artistImg");
        let playBtn = tinz.querySelector('.playBtn');
        let pauseBtn = tinz.querySelector('.pauseBtn');
        let audioFram = tinz.querySelector('.ifram');
        
        
        pauseBtn.style.display = "none"
        playBtn.addEventListener('click', () => {

            cont.forEach((items) => {


                let count = 0;

                function songUpTime() {
                    count++;
                    showTime.innerText = count; 
                    if (count == 10 || count === 10) {
                        artistimg.classList.remove("rotate_aristeimg");
                         aud.pause(); 
                        clearInterval(interV);
                        count = 0;
                        aud.currentTime = 0;
                        playBtn.style.display = 'block';
                        pauseBtn.style.display = "none";
                        audioFram.style.display = "block"
                        
                       
                    }  
                }
                
                 function songTimeStamp() {
                  interV = setInterval(() => {
                         songUpTime();
                     }, 1000);
                 }

                const aud = items.querySelector('audio')
                let playBtn = items.querySelector('.playBtn');
                 let artistimg = items.querySelector("#artistImg");
                let showTime = items.querySelector('.showtime');
                let pauseBtn = items.querySelector('.pauseBtn');
                let playing = aud.play();
                if (items !== tinz || tinz !== items) {
                    count = 0;
                     aud.pause();
                     playBtn.style.display = 'block';
                      pauseBtn.style.display = "none";
                      artistimg.classList.remove("rotate_aristeimg");
                     aud.currentTime = 0;
                     showTime.innerText = ""
                     showTime.classList.remove('show');
                } if (playing !== undefined) {
                    playing.then( () => {
                    // Automatic playback started!
                    // Show playing UI.
                                  setTimeout(() => {
                                     // subsequent operations
                  console.log("done");
                             }, aud.duration * 1000);
                    })
                    .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.
                    console.log(error);
                    });
                    audioFram.style.display = "none"
                    poper.classList.add('show'); 
                    poper.innerHTML = "refresh your browser incase songs does not play";
                    setTimeout(() => {
                        poper.classList.remove('show')
                    }, 3000);
                    playBtn.style.display = 'none'
                    pauseBtn.style.display = "block"
                    artistimg.classList.add("rotate_aristeimg");
                    showTime.classList.add('show');
                    songTimeStamp();
                }
               /*  else {
                    aud.play();
                    audioFram.style.display = "none"
                    poper.classList.add('show'); 
                    poper.innerHTML = "refresh your browser incase songs does not play";
                    setTimeout(() => {
                        poper.classList.remove('show')
                    }, 3000);
                    playBtn.style.display = 'none'
                    pauseBtn.style.display = "block"
                    artistimg.classList.add("rotate_aristeimg");
                    showTime.classList.add('show');
                    songTimeStamp();
                } */
            });
           
        });
        pauseBtn.addEventListener('click', () => {
            aud.pause()
            playBtn.style.display = 'block';
            pauseBtn.style.display = "none";
            clearInterval(interV);
            artistimg.classList.remove("rotate_aristeimg");
        })

    });

   /*  //play, forward and backward songs func
    let songsIndex = 0;
    bAudio.src = music[songsIndex].aud;
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("play")) {
               bAudio.play()
            }else if (e.currentTarget.classList.contains('forward')) {
                bAudio.src = music[songsIndex].aud
                songsIndex++;
                bAudio.play();
                console.log(songsIndex);
            }else {
                songsIndex--;
                 bAudio.src = music[songsIndex].aud;
                 bAudio.play();
            }
        });
    })
 */
}
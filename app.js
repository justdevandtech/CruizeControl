const music = [
    {
        id: 1,
        "txt": "artist",
        "aud": "./musics/Wizkid-ft-Burna-Boy-Ginger.mp3"
    },
     {
         id: 2,
        "txt": "artist",
        "aud": "./musics/Wizkid-ft-Damian-Marley-Blessed.mp3"
    },
     {
         id: 3,
        "txt": "artist",
        "aud": "./musics/Wizkid-ft-Drake-Skepta-Ojuelegba-Remix-.mp3"
    },
     {
         id: 4,
        "txt": "artist",
        "aud": "./musics/Wizkid-ft-Ella-Mai-Piece-Of-Me.mp3"
    },
         {
         id: 5,
        "txt": "artist",
        "aud": "./musics/Wizkid-ft-Skepta-Longtime.mp3"
    },
         {
         id: 6,
        "txt": "artist",
        "aud": "./musics/Wizkid-ft-Tay-Iwar-Projexx-True-Love.mp3"
    }
      
      
]

const box = document.getElementById('box');
const poper = document.querySelector('.audiopopper');
const btns = document.querySelectorAll('button');
let bAudio = document.getElementById('b_audio');

/* 
btns.forEach((item) => {
    if (item.innerText == "") {
        if (item.classList.contains('play')) {
            item.innerText = "play"
        }else if (item.classList.contains('forward')) {
            item.innerText = '>>'
        }else{
            item.innerText = '<<'
        }
    }
});
 */


window.addEventListener('load', () => {
    app();
    let playbtn = box.querySelectorAll(".playBtn");
    playbtn.forEach((btns) => {
        btns.style.display = "block"
    })
});


function app() {
    let songs = music.map((item) => {
         box.innerHTML += `<di id="cont">
         <div class="wrapper">
         <img  id="artistImg" src="https://images.pexels.com/photos/1436141/pexels-photo-1436141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
         <div class="artistdecr mt-3">
         <h2>${item.aud[2].toUpperCase() + "#" + item.id + " " + item.aud.slice(9, 29)}...</h2>
         <p>${item.aud.toString().slice(9, 30)}...</P>
         <audio src=${item.aud}></audio>
         <div class="showtime border text-center w-25 mx-auto h-25 p-2 m-4"></div>
         </div>
         </div>
         <button class="playBtn border border-success px-3"><i class="fas fa-play-circle"></i></button>
          <button class="pauseBtn border border-success px-3"><i class="fas fa-pause-circle"></i></button>
          <button class="border float-end border-success h-25 px-3"><i class="far fa-thumbs-up"></i><span>11111<span></button>
           <button class="comment border float-end border-success me-2 h-25 px-3"><i class="far fa-comments"></i></button>
          <hr>
         </div>
         `   
    });

    const commentbtn = box.querySelectorAll('.comment');
    const commentbox = document.querySelector('.commentbox');
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
        const aud = tinz.querySelector('audio')
        let artistimg = tinz.querySelector("#artistImg");
        let playBtn = tinz.querySelector('.playBtn');
        let pauseBtn = tinz.querySelector('.pauseBtn');
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
                
                if (items !== tinz || tinz !== items) {
                    count = 0;
                     aud.pause();
                     playBtn.style.display = 'block';
                      pauseBtn.style.display = "none";
                      artistimg.classList.remove("rotate_aristeimg");
                     aud.currentTime = 0;
                     showTime.innerText = ""
                     showTime.classList.remove('show');
                } 
                else {
                    aud.play();
                    playBtn.style.display = 'none'
                    pauseBtn.style.display = "block"
                    artistimg.classList.add("rotate_aristeimg");
                    showTime.classList.add('show');
                    songTimeStamp();
                }
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

    //play, forward and backward songs func
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

}

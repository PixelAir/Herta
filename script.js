const song = document.getElementById("song");
const lyricsBox = document.getElementById("lyrics");

const lyrics = [
  { time: 0, text: "Tere liye ghar banaau" },
  { time: 4, text: "Deewaarein neele rang se sajaau" },
  { time: 8, text: "Neele phool laau tere liye" },
  { time: 12, text: "Khat likhu tere liye" },
  { time: 16, text: "Mai khuda me maanu nahi" },
  { time: 20, text: "Par maangu dua tere liye" }
];

let started = false;

document.body.addEventListener("click", () => {
  if (!started) {
    song.play();
    started = true;
  }
});

song.addEventListener("timeupdate", () => {
  const currentTime = song.currentTime;

  for (let i = lyrics.length - 1; i >= 0; i--) {
    if (currentTime >= lyrics[i].time) {
      lyricsBox.textContent = lyrics[i].text;
      break;
    }
  }
});

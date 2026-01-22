const lyricsData = [
  ["I wanna da-", 60],
  ["I wanna dance in the lights", 50],
  ["I wanna ro-", 80],
  ["I wanna rock your body", 80],
  ["I wanna go-", 80],
  ["I wanna go for a ride", 68],
  ["Hop in the music and", 70],
  ["Rock your body", 80],
  ["Rock that body", 69],
  ["come on, come on", 35],
  ["Rock that body", 50],
  ["(Rock your body)", 30],
  ["Rock that body", 49],
  ["come on, come on", 35],
  ["Rock that body", 80],
];

const lyricsBox = document.getElementById("lyrics");
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

async function typeLyrics() {
  lyricsBox.textContent = "";
  for (let [line, speed] of lyricsData) {
    for (let ch of line) {
      lyricsBox.textContent += ch;
      await new Promise(r => setTimeout(r, speed));
    }
    lyricsBox.textContent += "\n";
    await new Promise(r => setTimeout(r, 600));
  }
}

playBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play();
  playBtn.style.display = "none";
  typeLyrics();
});

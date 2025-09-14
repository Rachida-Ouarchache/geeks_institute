// 1
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}
// 2
const video1 = new Video("Learn JavaScript", "Alice", 120);
video1.watch();

const video2 = new Video("OOP Basics", "Bob", 300);
video2.watch();
// Bonus 1
const videosData = [
  { title: "JS Loops", uploader: "Charlie", time: 180 },
  { title: "CSS Grid", uploader: "Dana", time: 240 },
  { title: "HTML Basics", uploader: "Eve", time: 150 },
  { title: "Node.js Intro", uploader: "Frank", time: 210 },
  { title: "React Tutorial", uploader: "Grace", time: 360 }
];
// Bonus 2
const videoInstances = videosData.map(
  video => new Video(video.title, video.uploader, video.time)
);

videoInstances.forEach(video => video.watch());

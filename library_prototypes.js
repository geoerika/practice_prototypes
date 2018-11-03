// var library = {
//   tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },
//             t02: { id: "t02",
//                    name: "Model View Controller",
//                    artist: "James Dempsey",
//                    album: "WWDC 2003"},
//             t03: { id: "t03",
//                    name: "Four Thirty-Three",
//                    artist: "John Cage",
//                    album: "Woodstock 1952"}
//           },
//   playlists: { p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },
//                p02: { id: "p02",
//                       name: "Other Playlist",
//                       tracks: ["t03"]
//                     }
//              },

let Library = function(name, creator) {

  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

let Playlist = function(name) {

  this.name = name;
  this.tracks = [];
};

Object.defineProperty(Playlist.prototype,
                      "overallRating",
                      {get: function() {
                        let rating = 0;
                        this.tracks.forEach(track => {
                          rating += track.rating;
                        })
                        return rating / tracks.length;
                      }});

Object.defineProperty(Playlist.prototype,
                      "totalDuration",
                      {get: function() {
                        let duration = 0;
                        this.tracks.forEach(track => {
                          duration += track.duration;
                        })
                        return duration;
                      }});


let Track = function(title, rating, length) {

  this.title = title;
  this.rating = rating;
  this.length = length;
};

Playlist.prototype.addTrack = function (track) {

    this.tracks.unshift(track);
    console.log('this.tracks: ', this.tracks);
};

let track1 = new Track('I want to hold your hand', 3, 144);
let track2 = new Track('Shine on you crazy diamond', 5, 1560);
let track3 = new Track('Everything Now', 5, 303);

let myPlaylist = new Playlist('Erika');
myPlaylist.addTrack(track1);
myPlaylist.addTrack(track1);
myPlaylist.addTrack(track1);

console.log('track1: ', track1);
console.log('track2: ', track2);
console.log('track3: ', track3);

console.log("myPlaylist: ", myPlaylist);

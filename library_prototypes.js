// A music library implemented with JS prototypes

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

                        this.tracks.forEach((track) => {
                          rating += track.rating;
                        });

                        return Math.round((rating / this.tracks.length) * 10) / 10;
                      }});


Object.defineProperty(Playlist.prototype,
                      "totalDuration",
                      {get: function() {

                        let duration = 0;

                        this.tracks.forEach(track => {
                          duration += track.length;
                        })

                        return Math.round(duration / 60 * 10) / 10 + ' minutes';
                      }});


let Track = function(title, rating, length) {

  this.title = title;
  this.rating = rating;
  this.length = length;
};


Playlist.prototype.addTrack = function (track) {

  this.tracks.unshift(track);
};


Library.prototype.addPlaylist = function(playlist) {

  this.playlists.unshift(playlist);
}



let track1 = new Track('I want to hold your hand', 3, 144);
let track2 = new Track('Shine on you crazy diamond', 5, 1560);
let track3 = new Track('Everything Now', 5, 303);

let myPlaylist = new Playlist('Erika');
myPlaylist.addTrack(track1);
myPlaylist.addTrack(track2);
myPlaylist.addTrack(track3);

let myLibrary = new Library('Favourites', 'Erika');
myLibrary.addPlaylist(myPlaylist);


console.log('track1: ', track1);
console.log('track2: ', track2);
console.log('track3: ', track3);

console.log("myPlaylist: ", myPlaylist);
console.log("myPlaylist rating: ", `${myPlaylist.overallRating}`);
console.log("myPlaylist duration: ", `${myPlaylist.totalDuration}`);
console.log("myLibrary: ", myLibrary);

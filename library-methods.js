var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

             // FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    var newPlaylist = this.playlists;
    for (var pKey in newPlaylist) {
      var p = newPlaylist[pKey];
      console.log(p.id + ': ' + p.name + ' - ' + p.tracks.length + ' tracks');
    }
  },

//printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    var newTrackslist = this.tracks;
    for (var pKey in newTrackslist) {
      var track = newTrackslist[pKey];
      console.log(track.id + ': ' + track.name + ' by ' + track.artist + ' (' + track.album + ')');
    }
  },


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var p = this.playlists[playlistId];
    var ourTracks = this.tracks;
    console.log(p.id + ': ' + p.name + ' - ' + p.tracks.length + ' tracks');
    for(var i = 0; i < p.tracks.length; i++) {
      var t = ourTracks[p.tracks[i]];
      console.log(t.id + ': ' + t.name + ' by ' + t.artist + ' (' + t.album + ')');
    }
  },


// adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    return this.playlists;
  },


// generates a unique id
// (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

// adds a track to the library

  addTrack: function (name, artist, album) {
    var randomNum = this.uid();
    var newTrack = {};
    newTrack['id'] = randomNum;
    newTrack['name'] = name;
    newTrack['artist'] = artist;
    newTrack['album'] = album;
    this.tracks[randomNum] = newTrack;
    console.log(this);
  },

//addTrack('smokin frogs', 'aaron', 'pondTimes');




// adds a playlist to the library

  addPlaylist: function (name) {
    var randomNum = this.uid();
    var newPlay = {};
    newPlay['id'] = randomNum;
    newPlay['name'] = name;
    newPlay['tracks'] = [];
    this.playlists[randomNum] = newPlay;
    console.log(this);
  },


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {

  }
}


library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t01', 'p02')
console.log(library.playlists['p02']);
library.addTrack('smokin frogs', 'aaron', 'pondTimes');
console.log(library.tracks);
library.addPlaylist('Erika');
console.log(library.playlists);

/*
 Homework Assignment #1: Data Types
 Note : All the song information was taken from wikipedia
*/

// Song's name
var songName = "What a Wonderful World";

// About the artist
var artist = {
    fullName: 'Louis Daniel Armstrong',
    born: 'August 4, 1901',
    died: 'July 6, 1971',
    displayArtistInfo: function() {
        return this.fullName + " (born: " + this.born + " - died: " + this.died + ")";
    }
};

// Genre
var genre = ["Traditional pop", "Jazz"];

// Year the song was released in
var releaseYear = 1967;

// Type of release
var releaseType = 'single';

// Duration of the song in seconds
var durationInSeconds = 141;

// This Song was written by Bob Thiele and George David Weiss
var songWriters = ['Bob Thiele', 'George David Weiss'];

// The song was so popular
var isPopular = true;
function majorSuccess(){
    if (!isPopular) {
        return 'It wasn\'t a major success';
    }
    return 'It was a major success';
}

// Weekly charts (1967-68)
var chart = {
    'Australia': 29,
    'Austria(Ö3 Austria Top 40': 1,
    'Belgium (Ultratop 50 Flanders)': 6,
    'Denmark': 2,
    'Germany (Official German Charts)': 6,
    'Ireland' : 2,
    'Netherlands (Single Top 100)': 15,
    'Netherlands (MediaMarkt)': 14,
    'New Zealand': 15,
    'Norway (VG-lista)': 6,
    'Switzerland (Schweizer Hitparade)': 7,
    'UK Singles Chart': 1,
    'U.S. Billboard Hot 100': 116,
    'U.S. Adult Contemporary (Billboard)': 12
};

console.log(songName + " is a " + genre[0] + " / " + genre[1] + " song written by " + songWriters[0] + " and " + songWriters[1] + ".");
console.log("It was first recorded by " + artist.displayArtistInfo() + " and released in " + releaseYear + " as a " + releaseType + ".");
console.log(majorSuccess() + " in the united kingdom, reaching number one on the " + Object.getOwnPropertyNames(chart)[11] + ".");

console.log("---------------------------------------------------");

//list of attributes of the song
console.log("Name of the song: " + songName);
console.log("Artist: " + artist.fullName);
console.log("Genre: " + genre.join(" / "));
console.log("Release (year): " + releaseYear);
console.log("Type of release: " + releaseType);
console.log("Duration (in seconds): " + durationInSeconds);
console.log("The writer(s) of the song: " + songWriters.join(", "));
console.log(" Weekly charts (1967-68):\n", chart);

/*
What a Wonderful World is a Traditional pop / Jazz song written by Bob Thiele and George David Weiss.
It was first recorded by Louis Daniel Armstrong (born: August 4, 1901 - died: July 6, 1971) and released in 1967 as a single.
It was a major success in the united kingdom, reaching number one on the UK Singles Chart.
---------------------------------------------------
Name of the song: What a Wonderful World
Artist: Louis Daniel Armstrong
Genre: Traditional pop / Jazz
Release (year): 1967
Type of release: single
Duration (in seconds): 141
The writer(s) of the song: Bob Thiele, George David Weiss
 Weekly charts (1967-68):
 { Australia: 29,
  'Austria(Ö3 Austria Top 40': 1,
  'Belgium (Ultratop 50 Flanders)': 6,
  Denmark: 2,
  'Germany (Official German Charts)': 6,
  Ireland: 2,
  'Netherlands (Single Top 100)': 15,
  'Netherlands (MediaMarkt)': 14,
  'New Zealand': 15,
  'Norway (VG-lista)': 6,
  'Switzerland (Schweizer Hitparade)': 7,
  'UK Singles Chart': 1,
  'U.S. Billboard Hot 100': 116,
  'U.S. Adult Contemporary (Billboard)': 12 }
*/

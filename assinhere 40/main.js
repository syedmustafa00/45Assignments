// assigment 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Ahmed", "light");
console.log(album);
album = makeAlbum("Mustafa", "red wave");
console.log(album);
album = makeAlbum("Mohsin", "seenbreeze");
console.log(album);

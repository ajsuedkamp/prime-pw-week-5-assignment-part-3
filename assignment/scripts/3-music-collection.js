console.log('***** Music Collection *****')


//Create a variable `collection` that starts as an empty array.
let collection = [];

/**
 * @param title 
 * @param artist
 * @param yearPublished
 * 
 * @return new object containing the input parameters
 */

function addToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(album);
    return album;
}
console.log(addToCollection('Nevermind', 'Nirvana', '1991'));
console.log(addToCollection('Revolver', 'the Beatles', '1966'));
console.log(addToCollection('Abbey Road', 'the Beatles', '1969'));
console.log(addToCollection('Jagged Little Pill', 'Alanis Morissette', '1995'));
console.log(addToCollection('Evil Empire', 'Rage Against The Machine', '1996'));
console.log(addToCollection('Tragic Kingdom', 'No Doubt', '1995'));
console.table(collection);



//Test record collection
let testCollection = [
   { 
    title: 'Let Go',
    artist: 'Avril Lavigne',
    yearPublished: '2002',
   },
   {
    title: 'Toxicity',
    artist: 'System of a Down',
    yearPublished: '2001',
   }
]

//Add a function named `showCollection`.

/**
 * @param an array
 * 
 */

let albums = '';
function showCollection(array) {
    console.log('Number of albums in collection:', array.length);
    for(let albums of array) {
        console.log(albums.title + ' by ' + albums.artist + ' published in ' + albums.yearPublished);

    }
}
showCollection(collection);

console.log('--- Extra record collection to test function ---')
showCollection(testCollection);

// Add a function named `findByArtist`.

/**
 * @param artist as a string
 * loop through collection looking for matching artists  
 * push matches to matchingArtist array
 * @return matchingArtist array
 */

function findByArtist(artist) {
    let matchingArtist = [];
    let album = '';
    for (let album of collection) {
        if(album.artist === artist) {
            matchingArtist.push(album);
        }

     }
    return matchingArtist;
}
console.log(findByArtist('the Beatles'));
console.table(findByArtist('the Beatles'));
console.table(findByArtist('Alanis Morissette'));
console.table('Green Day');

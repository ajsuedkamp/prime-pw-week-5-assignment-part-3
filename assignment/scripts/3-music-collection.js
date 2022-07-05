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
    for (let albums of array) {
        console.log(albums.title + ' by ' + albums.artist + ' published in ' + albums.yearPublished);

    }
}
showCollection(collection);

console.log('--- Extra record collection to test function ---')
showCollection(testCollection);

// Add a function named `findByArtist`.

/**
 * @param {string} artist 
 * @param collectionInput
 * loop through collectionInput looking for matching artists  
 * push matches to matchingArtist array
 * @return matchingArtist array
 */

function findByArtist(artist, collectionInput) {
    let matchingArtist = [];

    for (let album of collectionInput) {
        if (album.artist === artist) {
            matchingArtist.push(album);
        }

    }
    return matchingArtist;
}
console.log(findByArtist('the Beatles', collection));
console.table(findByArtist('the Beatles', collection));
console.table(findByArtist('Alanis Morissette', collection));
console.log(findByArtist('Green Day', collection));
console.log(findByArtist('Avril Lavigne', testCollection));


/**
 * @param artist
 * @param yearPublished
 * @param collectionInput
 * 
 * @return array of items in collection matching all of search criteria
 * @return empty array
 */

function search(artist, yearPublished, collectionInput) {
    let searchResults = [];
    for (let albums of collectionInput) {
        if (albums.artist === artist && albums.yearPublished === yearPublished) {
            searchResults.push(albums);
        } else if (artist === '' || yearPublished === '') {
            return collectionInput
        }
    }
    return searchResults
}
console.log(search('Nirvana', '1991', collection));
console.log(search('the Beatles', '1969', collection));
console.log(search('Ray Charles', '1957', collection));
console.log(search('Alanis Morissette', '', collection));
console.log(search('System of a Down', '2001', testCollection));
console.log(search('', '1995', collection));


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
}
addToCollection('Nevermind', 'Nirvana', '1991');
addToCollection('Revolver', 'Beatles', '1966');
addToCollection('Abbey Road', 'Beatles', '1969');
addToCollection('Jagged Little Pill', 'Alanis Morissette', '1995');
addToCollection('Evil Empire', 'Rage Against The Machine', '1996');
addToCollection('Tragic Kingdom', 'No Doubt', '1995');
console.table(collection);



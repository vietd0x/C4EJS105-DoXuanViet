/*
Declare a variable named movie with an object value, containing the following properties:
● title, For example: ‘The dark night rises’
● year, For example: 2012
● rate, For example: 8.4
*/
let movie = {
    title : "The dark night rises",
    year : 2012,
    rate : 8.4,
};
// 2.1 Log all of 3 the properties of the movie object to the console using 2 different ways
console.log("___________2.2 Cach 1___________");
console.log(`${movie.title}, ${movie.year}, ${movie.rate}`);
console.log("___________2.2 Cach 2___________");
console.log(`${movie['title']}, ${movie['year']}, ${movie['rate']}`);
//________________2.3___________
//________________3.1___________
movie.rate = 8.7;
movie.rate += 0.5;
console.log("_____________3.2___________");
let properties_  = prompt("What u want to update");
let val = prompt("What is the update?");
movie[properties_] = val;
console.log(movie);

console.log("_____________4___________");
properties_  = prompt("What u want to update?");
if(movie[properties_] == null || movie[properties_] == undefined)
    alert(`'${properties_}' does not exist in our data, we will add new`);
val = prompt('Enter the new data');
movie[properties_] = val;
console.log(movie);

console.log("_____________5.1___________");
let movies = [
    {
        title: 'Doraemon',
        year: 2001,
        rate: 10,
    },
    {
        title: 'OnePiece',
        year: 2010,
        rate: 9.9,
    },
    {
        title: 'Boruto',
        year: 2019,
        rate: 8.4,
    }
]
console.log(movies);

console.log("_____________5.2___________");
console.log(movies[0].title);
console.log("_____________5.3___________");
console.log(movies[movies.length -1].title);
console.log("_____________5.4___________");
let n = movies.length;
for(let i = 0; i < n; i++)
    console.log(movies[i].title);
console.log("_____________5.5___________");
for(let i = 0; i < n; i++)
{
    console.log("____________________");
    console.log(movies[i].title);
    console.log(movies[i].year);
    console.log(movies[i].rate);
}
console.log("_____________5.6___________");
movies[n - 1].rate += 0.7;

console.log("_____________6.1___________");
let movie = {
    title: 'Attack on titans',
    year: 2013,
    rate: 8.8,
    character :  ['Eren', 'Armin', 'Mikasa'],
};
console.log(movie);
console.log("_____________6.2___________");
console.log(movie.title);
console.log(`Year: ${movie.year}`);
console.log(`Rate: ${movie.rate}`);
let str = movie.character.join(' ');
console.log('Cast: '+ str);

console.log("_____________7___________");
let movies = [
    {
        title: "Attack on titans",
        year: 2013,
        rate: 8.8,
        character: ['Eren', 'Armin', 'Mikasa'],
    },
    {
        title: 'Mind hunter',
        year: 2017,
        rate: 8.6,
        character: ['Holden', 'Bill'],
    },
    {
        title: 'Manhunt: Unabomber',
        year: 2017,
        rate: 8.1,
        character: 'Ted',
    }
]
let n = movies.length;
for(let i = 0; i < n; i++)
{
    console.log("____________________");
    console.log(movies[i].title);
    console.log(movies[i].year);
    if(Array.isArray(movies[i].character))
    {
        let str_char = movies[i].character.join('  ');
        console.log('Cast: '+ str_char);
    }
    else
    {
        console.log(`Cast: ${movies[i].character}`);
    }       
}
//_________count single char in bellow string___________________
const song_lyrics = "Staring out at the rain with a heavy heart Its the end of the world in my mind then your voice pulls me back like a wake-up call (call)Ive been looking for the answer somewhereI couldnt see that it was right thereBut now I know what I didnt knowBecause you live and breathe";
let char_count = {};
for(let char of song_lyrics)
{
    char = char.toLowerCase();
    if(char_count[char])
        char_count[char] ++;
    else
        char_count[char] = 1;
}
console.log(char_count);

//___________________Grouping with object_______________
const movies = [
    {
        title:'The dark knight',
        rate:8.4,
        genre:'Action',
    },
    {
        title:"Me before u",
        rate:8,
        genre:'Romance',
    },
    {
        title: 'Attack on Titans',
        rate: 8.4,
        genre: 'Anime',
        
    },
    {
        title:'Terminator',
        rate:'8.2',
        genre: 'Action',
    },
    {
        title: 'The diary',
        rate:8,
        genre:'Romance',
    },
]
let group_by_genre = {}
                        //updating...
for(let obj of movies)
{
    if(group_by_genre[obj.genre])
        group_by_genre[obj.genre].push(obj);
    else   
        group_by_genre[obj.genre] = [];
}
console.log(group_by_genre);
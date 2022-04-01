console.log("Welcome to Spotify");
//initialize the variables
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songsItems=Array.from(document.getElementsByClassName('songItem'));
//array of objects
let songs=[
    {songName:"Shape of You",filePath:"song/1.Mp3",coverPath:"covers/cover1.jpg"},
    {songName:"Sham",filePath:"song/2.Mp3",coverPath:"covers/cover2.jpg"},
    {songName:"Chup Gya Badal",filePath:"song/3.Mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Chand sifarish",filePath:"song/4.Mp3",coverPath:"covers/cover4.jpg"},
    {songName:"Iktara",filePath:"song/5.Mp3",coverPath:"covers/cover5.jpg"},
    {songName:"Nadan Parindey",filePath:"song/6.Mp3",coverPath:"covers/cover6.jpg"},
    {songName:"Kabira",filePath:"song/7.Mp3",coverPath:"covers/cover7.jpg"},
    {songName:"Pashmina",filePath:"song/8.Mp3",coverPath:"covers/cover8.jpg"},
    {songName:"Raatan Lambiyan",filePath:"song/9.Mp3",coverPath:"covers/cover9.jpg"},
]
songsItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play()

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();  
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();  
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listento events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;


})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play')
        
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlays();

songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');

audioElement.src=`song/${songIndex+1}.Mp3`;
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');

})
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.Mp3`;
    masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.Mp3`;
    masterSongName.innerText=songs[songIndex].songName;
     audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
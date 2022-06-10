const youtubeVideoList = [];
let myHtml = ``;

const mainEl = document.querySelector('main');
const deadliftBtn = document.getElementById('deadlift-btn');
const benchBtn = document.getElementById('bench-btn');
const squatBtn = document.getElementById('squat-btn');
const allBtn = document.getElementById('all-btn');


class YoutubeVideo {

    constructor(thumbnail, title, description, link, category){
        this.thumbnail = thumbnail,
        this.title = title,
        this.description = description,
        this.link = link
        this.category = category

        youtubeVideoList.push(this);
    }

};

new YoutubeVideo('https://i.ytimg.com/vi/f6kzL41YE5w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBa4mdGVz-f1cpaUrXyUVvTVTnEsg', 'How Is This Even Possible', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=f6kzL41YE5w&list=UU1x1g7_nq2ZcmtpdVZPITCA','deadlift');
new YoutubeVideo('https://i.ytimg.com/vi/61PVW65ig-I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDHJ3gDFQOeR2JyNjBXAz8_Ve8PwQ', "I'm Sure These Comments Will Be Nice To Her", 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=61PVW65ig-I&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=2','bench');
new YoutubeVideo('https://i.ytimg.com/vi/5DTNxgA_2kw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLApo6ozUZ64P5eXGYQdPgiiXyJCaQ', 'Did Taylors Butt Come Off The Bench?', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=5DTNxgA_2kw&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=3', 'bench');
new YoutubeVideo('https://i.ytimg.com/vi/F9RWcwAXW9I/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAVapUfcJeVXunBVIuQJmDEM7Uesw', 'When You Get ABSOLUTLY Violated On Squats', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=5DTNxgA_2kw&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=3', 'squat');
new YoutubeVideo('https://i.ytimg.com/vi/0dCM82ju9CA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCAZUZiYj8MF4f7Zl3GT0DD9QfJmA', 'This Is A DIRECT Attack On My Masculinity', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=5DTNxgA_2kw&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=3', 'bench');
new YoutubeVideo('https://i.ytimg.com/vi/Mc7P-cCNeU8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBYVPxydk3jwnmc-V7qIm2hJON34A', 'A World Record With An Unusual Stance', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=5DTNxgA_2kw&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=3', 'squat');
new YoutubeVideo('https://i.ytimg.com/vi/JAcSlj0ySLY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLArM1IfIA03xQFtfajF5GAlTaCkig', 'Every Time Julius Attempted 800 lbs', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=5DTNxgA_2kw&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=3', 'bench');
new YoutubeVideo('https://i.ytimg.com/vi/EmDN81LIFNE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB9hnIHgJRoIhhh8MdpoSrPv3XcFw', 'Some Light Reps On The Incline', 'Subscribe to the channel for more strength content!', 'https://www.youtube.com/watch?v=5DTNxgA_2kw&list=UU1x1g7_nq2ZcmtpdVZPITCA&index=3', 'bench');


//================================
//  Generate the html
//================================
youtubeVideoList.forEach(video => {
    myHtml += `
        <a href="${video.link}">
            <div class="${video.category} card" style="width: 18rem;">
                <img src="${video.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${video.title}</h5>
                <p class="card-text">${video.description}</p>
                </div>
            </div>
        <a>`
})


mainEl.innerHTML = myHtml

//================================
//  Category buttons
//================================

const deadliftVideosList = [...document.getElementsByClassName("deadlift")];
const benchVideosList = [...document.getElementsByClassName("bench")];
const squatVideosList = [...document.getElementsByClassName("squat")];
const youtubeVideoHtmlList = [...document.getElementsByClassName("card")];

const showDeadliftsVids = () => {

    deadliftVideosList.forEach(video => video.classList.remove('displayNone'));
    squatVideosList.forEach(video => video.classList.add('displayNone'));
    benchVideosList.forEach(video => video.classList.add('displayNone'));
    
}

const showBenchsVids = () => {

    benchVideosList.forEach(video => video.classList.remove('displayNone'));
    squatVideosList.forEach(video => video.classList.add('displayNone'));
    deadliftVideosList.forEach(video => video.classList.add('displayNone'));
    
}

const showSquatsVids = () => {

    squatVideosList.forEach(video => video.classList.remove('displayNone'));
    deadliftVideosList.forEach(video => video.classList.add('displayNone'));
    benchVideosList.forEach(video => video.classList.add('displayNone'));
    
}

const showAllVids = () => {

    squatVideosList.forEach(video => video.classList.remove('displayNone'));
    deadliftVideosList.forEach(video => video.classList.remove('displayNone'));
    benchVideosList.forEach(video => video.classList.remove('displayNone'));
    
}


deadliftBtn.addEventListener("click", showDeadliftsVids);
benchBtn.addEventListener("click", showBenchsVids);
squatBtn.addEventListener("click", showSquatsVids);
allBtn.addEventListener("click", showAllVids);


//================================
//  Search Bar
//================================

function myFunction() {
    // Declare variables
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const radioBtnCategory = document.getElementById('category')

    
    let txtValue = ''
  
    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < youtubeVideoHtmlList.length; i++) {
      const video = youtubeVideoHtmlList[i];
      console.log("VIDEO: ", video)

      if(radioBtnCategory.checked){
        txtValue = video.className.slice(0,-4) ;
      }else{
        txtValue = video.innerText
      }

      console.log("TEXT VALUE: ", txtValue)
      console.log("FILTER: ", filter)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        youtubeVideoHtmlList[i].style.display = "";
      } else {
        youtubeVideoHtmlList[i].style.display = "none";
      }
    }
  }

console.log("TOTO: ", youtubeVideoHtmlList[0])
  





const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'ADD-THE-KEY-FROM-YOUR-EMAIL-HERE'; //2
let url; //3
//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

        //1                     //2   
        searchForm.addEventListener('submit', fetchResults); 
        nextBtn.addEventListener('click', nextPage); //3
        previousBtn.addEventListener('click', previousPage); //3

        const searchForm = document.querySelector('form');

        function fetchResults(e){
            console.log(e);
        }

                            //1
function fetchResults(e) {
    console.log(e); //2
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
    console.log(url); //4
  }
  
  function nextPage(){
    console.log("Next button clicked");
  } //5
  
  function previousPage(){
    console.log("Next button clicked");
  } //5

  function fetchResults(e) {
    e.preventDefault(); //1
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;  
}

function fetchResults(e) {
    e.preventDefault();
  
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  
    //1
    fetch(url)
      .then(function(result) {
      console.log(result)
      return result.json(); //2
    }).then(function(json) {
        console.log(json); //3
    });
  }

  url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  //INSERT HERE  
    if(startDate.value !== '') {
        console.log(startDate.value)
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '') {
      url += '&end_date=' + endDate.value;
    };
  //END HERE
    fetch(url).then(function(result) {

        function fetchResults(e) {
            //previous code
            fetch(url).then(function(result) {
              return result.json();
            }).then(function(json) {
              displayResults(json); //1 & //3
            });
          }
          
          //2
          function displayResults(json) {
            console.log("DisplayResults", json); 
          };
const baseUrl = "https://api.unsplash.com/search/photos";
const key ='TDq6_NWDTanLnLxALe6wmH3-9H75vdSU2c-r7NwfBbc';
const secretKey ='-Svpjn5z6QY_KwqbhhzqxGeOlvjJ4zlh0ly-sctJgzI';
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');
let url;
let pageNumber = 0;
let displayNav = false;
let query = document.getElementById("search");
let photoContainer= document.querySelector('.photoContainer')

nextBtn.addEventListener('click', nextPage()); 
previousBtn.addEventListener('click', previousPage()); 

    // let url = baseUrl+'&query=' + query.value;
    function searchPhotos(){
      while (photoContainer.firstChild) {
        photoContainer.removeChild(photoContainer.firstChild); //1
  
    }
    url = `${baseUrl}?client_id=${key}&page=${pageNumber}&query=${query.value}`
    // url = `${baseUrl}?client_id=${key}&query=dog`
    console.log(url);
    fetch(url)
    .then(function (data){
      console.log(data);
      return data.json();
    })
    .then(function (data){
        console.log(data);
        if(data.length >= 10) {
          nav.style.display = 'block'; 
        } else {
          nav.style.display = 'none';
        }

        if(data.length === 0) {
          console.log("No results");
        } else {
          // for(let i = 0; i < data.length; i++) {
            data.results.forEach(photo => {
              // let result= `<img src="${photo.urls.thumb}">
              // <a href= "${photo.links.download}">`;
                      // $("#result").append(result);
              resultPhoto = document.createElement('img');
                resultPhoto.src = photo.urls.thumb
                // `<img src="${photo.urls.thumb}">
                // <a href= "${photo.links.download}">;`
              let clearfix = document.createElement('div');
                clearfix.setAttribute('class','clearfix');

           photoContainer.appendChild(resultPhoto);
           photoContainer.appendChild(clearfix);

          });
        }

        
    })
    }

    function nextPage() {
      pageNumber++; 
      searchPhotos();
      console.log("Page number:", pageNumber); //3
   };
   function previousPage() {
    if(pageNumber > 0) { 
      pageNumber--;
    } else {
      return; 
    }
    searchPhotos(); 
    console.log("Page:", pageNumber); 
  
  };
  
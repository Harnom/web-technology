//Photo Container
const cover = document.getElementById('coverPhotoContainer');

//New XMLHttpRequest
let = requestCover = new XMLHttpRequest();

//Access Key in a variable
let accessKey = '8a39fd919d37739d12eb34c353b9896ad8e89f1850771e9ed2c24bb528738a2a';
requestCover.open('GET', 'https://api.unsplash.com/photos/random/?client_id=' + accessKey, true);

requestCover.onLoad = function() {
  //Accessing JSON
  let data = JSON.parse(this.response);

  data.forEach(element => {
    const photo = document.createElement('img');
    photo.setAttribute('class', 'coverPhoto');
    photo.src = element.urls.regular;

    cover.appendChild(photo);
  });
}

requestCover.send();

const unsplash = require('unsplash-api');
unsplash.init('accessKey');

unsplash.searchPhotos('mountains', null, null, null, function(error, photo, link) {
  const cover = document.getElementById('coverPhotoContainer');
  const image = document.getElementById('img');
  image.setAttribute('class', 'coverPhoto');
  image.src = photo[0].urls.regular;
  cover.appendChild(image);

});

$(document).ready(function(){
    $("#search").click(function(){
        alert("The paragraph was clicked.");
    });
});

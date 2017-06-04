$(document).ready(function(){


  movie();

function movie(){
   allMovie();
}

     var responseId;



  $('.movie').on('submit', function(event){
      event.preventDefault();
      var movies = $('.movies').val();
        getMovie(movies);
  })

  $('.genreId').on('change',function(event){
      event.preventDefault();
      // var movies = $('.searching').val();
      var genre_id = $('#genre option:selected').text();
      console.log('gerne: ', genre_id)
        getMovie(genre_id);
  })

// $('#trailer').on('click', function(event){
//   var responseId =
//   getTrailors(responseId);
//  console.log('response: ', )
  // event.preventDefault();
  //
  // var id = $(this).attr('href');
  // console.log('ID: ', id);
//    //var youtuberesponse = getTrailers(id);
//    console.console.log('youtube: ');
// })

  $('.pop').on('click', function() {
  $('.imagepreview').attr('src', $(this).find('img').attr('src'));
  $('#imagemodal').show().html(uniqueId);
});

});

function allMovie(){
  var api_url = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=c1d2412e4b6a73bce280d933ff0dfc17';
      console.log('movies: ', api_url);
  var images = 'https://image.tmdb.org/t/p/w185';

    $.ajax({
      url: api_url,
      method: 'GET',
      datatype: 'JSON',
      data: {}
    }).done(function(response){
        console.log('response', response);
        var movie = response.results;

        for (var i=0, x=movie.length; i<x; i++) {
      // console.log('giphy: ', movieArray[i]);
      var results = movie[i].title;
      var result = movie[i].poster_path;
      var uniqueId = movie[i].id;
      // console.log('id:', uniqueId);
      responseId = uniqueId;
      console.log('response_ID:', responseId);
        var image = images + result;
      //  var link = document.getElementsByTagName('a');
        // link.setAttribute("id", uniqueId);

          $('.list').prepend([
          '<li class="col-sm-3">',
          '<h3>' + results + '</h3>',
          // '<a onclick="getTrailers(uniqueId)" href="'+onclick+'"'></a>
          '<a  id="'+uniqueId+'" onclick="getTrailors(this.id)" class="pop"  class="thumbnail"> <img src="' + image + '" /></a>',
          //'<a  onclick="getTrailors(responseId)" class="pop" id="trailer" class="thumbnail"> <img src="' + image + '" /></a>',
          '</li>'
        ].join(''));
          }
    }).fail(function(error){
      console.log('error', error);
    })
    .always(function(){
      console.log("I always work");
    })
    // '<a  href="http://api.themoviedb.org/3/movie/ '+uniqueId+ '/videos?api_key=c1d2412e4b6a73bce280d933ff0dfc17" class="pop" id="trailer" class="thumbnail"> <img src="' + image + '" /></a>',

    // function getTrailors() {
    //   console.log("enter");
    //   var uniqueId = 157336;
    //   var apiUrl = "http://api.themoviedb.org/3/movie/ "+uniqueId+ "/videos?api_key=c1d2412e4b6a73bce280d933ff0dfc17";
    //   console.log("formed",apiUrl );
    // }
}

function getTrailors(responseId) {

  console.log("responseId : ",responseId);
  console.log("enter");
  var id = responseId

  console.log('id:', responseId)
  // var uniqueId = 157336;
  var apiUrl = "http://api.themoviedb.org/3/movie/"+id+ "/videos?api_key=c1d2412e4b6a73bce280d933ff0dfc17";
  console.log("formed",apiUrl );
  $.ajax({
    url: apiUrl,
    method: 'GET',
    datatype: 'JSON',
    data: {}
  }).done(function(response){
    console.log('response: ', response);
    var key = response.results[0].key;
    var youtube = "http://www.youtube.com/watch?v=" + key;

// var URLsplit = youtube.split('/');
//
// var host = URLsplit[0] + "//" + URLsplit[2];
//
// var newURL = youtube.replace(host, '');
  window.open(youtube);

    console.log('key:', key);
    //return youtube;
  });
}

function getMovie(movies){
  var apiUrl = 'https://api.themoviedb.org/3/search/movie?query=',
      movies,
      api_key = '&api_key=c1d2412e4b6a73bce280d933ff0dfc17';
  var images = 'https://image.tmdb.org/t/p/w185';
  // var genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c1d2412e4b6a73bce280d933ff0dfc17';
  //var sortUrl = 'http://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&page=1&api_key=c1d2412e4b6a73bce280d933ff0dfc17'
  console.log('movies ', movies);


// https://api.themoviedb.org/3/search/movie/?query=split&api_key=c1d2412e4b6a73bce280d933ff0dfc17
// https://api.themoviedb.org/3/search/movie/?query=split&api_key=c1d2412e4b6a73bce280d933ff0dfc17
// http://api.themoviedb.org/3/search/movie?query=split&api_key=c1d2412e4b6a73bce280d933ff0dfc17
   $.ajax({
        url: apiUrl + movies + api_key,
        method: 'GET',
        datatype: 'JSON',
        data: {}
     }).done(function(response){
        console.log('response', response);
        // console.log('genre:', genrees);
        //   var genrees = genre.genres.name;

        var movieArray = response.results;


        for (var i=0, x=movieArray.length; i<x; i++) {
      // console.log('giphy: ', movieArray[i]);
      var results = movieArray[i].title;
      var result = movieArray[i].poster_path;
      var uniqueId = movieArray[i].id;
      // console.log('id:', uniqueId);
        var image = images + result;

          $('.list').prepend([
          '<li class="col-sm-3">',
          '<h3>' + results + '</h3>',
          '<a  id="'+uniqueId+'" onclick="getTrailors(this.id)"  class="pop" id="trailer" class="thumbnail"> <img src="' + image + '" /></a>',
          '</li>'
        ].join(''));
          }

          console.log(movieArray);


      })
      .fail(function(error){
        console.log('error', error);
      })
      .always(function(){
        console.log("I always work");
      })
 }

 function getMovies(genre_id){
   var apiUrl = 'https://api.themoviedb.org/3/genre/',
      genre_id,
       api_key = 'movies?api_key=c1d2412e4b6a73bce280d933ff0dfc17';
   var images = 'https://image.tmdb.org/t/p/w342';
   console.log('genreid: ', genre_id)

   $.ajax({
        url: apiUrl + genre_id + api_key,
        method: 'GET',
        datatype: 'JSON',
        data: {}
     }).done(function(response){
        console.log('response', response);
        var genreName = response.name;
      })
      .fail(function(error){
        console.log('error', error);
      })
      .always(function(){
        console.log("I always work");
      })
 }



 // function getTrailers(id){
 //   var apiUrl = 'http://api.themoviedb.org/3/movie/',
 //       id,
 //       api_key = 'videos?api_key=c1d2412e4b6a73bce280d933ff0dfc17';
 //   var images = 'https://image.tmdb.org/t/p/w342';
 //   console.log('genreid: ', genre_id)
 //
 //   $.ajax({
 //        url: apiUrl + id + api_key,
 //        method: 'GET',
 //        datatype: 'JSON',
 //        data: {}
 //     }).done(function(response){
 //        console.log('response', response);
 //        var genreName = response.name;
 //      })
 //      .fail(function(error){
 //        console.log('error', error);
 //      })
 //      .always(function(){
 //        console.log("I always work");
 //      })
 // }

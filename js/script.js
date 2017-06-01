$(document).ready(function(){


     allMovie();



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

$('a').on('click', function(event){
  event.preventDefault();
  
  var id = $(this).attr('href');
  console.log('ID: ', id);
   getTrailers(id);
})

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
        var image = images + result;

          $('.list').prepend([
          '<li class="col-sm-3">',
          '<h3>' + results + '</h3>',
          '<a  href="' + uniqueId + '" class="pop" class="thumbnail"> <img src="' + image + '" /></a>',
          '</li>'
        ].join(''));
          }
    }).fail(function(error){
      console.log('error', error);
    })
    .always(function(){
      console.log("I always work");
    })
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
          '<a  href="' + uniqueId + '" class="pop" class="thumbnail"><img src="' + image + '" /></a>',
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

 function getTrailers(id){
   var apiUrl = 'http://api.themoviedb.org/3/movie/',
       id,
       api_key = 'videos?api_key=c1d2412e4b6a73bce280d933ff0dfc17';
   var images = 'https://image.tmdb.org/t/p/w342';
   console.log('genreid: ', genre_id)

   $.ajax({
        url: apiUrl + id + api_key,
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

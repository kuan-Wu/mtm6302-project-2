var apiKey = "api_key=PsMAtqniuPe0v4pu7LDYIP1M4q0vOwbBisabOBXu";
var apiUrl = "https://api.nasa.gov/planetary/apod?" + apiKey;
var apiDateUrl = "https://api.nasa.gov/planetary/apod?"

$(document).ready(function(){

  $.ajax({
    url: apiUrl,
    success: function(response){

    },
    error: function(r){

    }
  });
  $("#submitButton").on("click",function(){
    const date = $("input").val();


    $.get(apiDateUrl + "date="+date+ "&"+ apiKey, function(response){
      $( ".podimage" ).add( "img" ).attr("src",response.hdurl);
      $(".large").attr("href", response.hdurl);

      $(".title").append(response.title);
        $(".date").append(response.date);
      $(".explanation").append(response.explanation);
      localStorage.setItem("data", response);

    })
  })
});

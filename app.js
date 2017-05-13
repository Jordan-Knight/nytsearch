    var key = "d769aed01f054bb3896d737ab3626813";
    var searchTerm = "";
    var startYear = 0;
    var endYear = 0;
    var results = 0;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=";
  $("#").on("click", function(){

      var searchTerm = $("#input").val();
      var queryURL = queryURL + searchTerm;
      var results = $("#inputRes").val();
      
        $.ajax({
            url : queryURL,
            method : "GET",
        }).done(function(response){
            var results = //number entered;
            for (i = 0; i < results; i ++){
                //append each article in the top results area
                console.log(response);
            }

        });
    });
    

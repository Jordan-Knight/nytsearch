    var key = "d769aed01f054bb3896d737ab3626813";
    var searchTerm = "";
    var startYear = 0;
    var endYear = 0;
    var results = 10;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=holland";
  $("#runSearch").on("click", function(event){

    var searchTerm = $("#input").val();
    var queryURL = queryURL + searchTerm;
    var results = $("#inputRes").val();
      
        $.ajax({
            url : queryURL,
            method : "GET",
        }).done(function(response){
        
            for (i = 0; i < results; i++){
                var article = $("<div class='article>");
                article.append("<h2>" + response.response.doc[i].snippet + "</h2>");
                $("#article-list").append(article);
            }


        });
    });
    

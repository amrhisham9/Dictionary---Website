
var searchBtn = $(".search-btn")
var searchInput = $(".search-in")
var errorIcon = $(".error-icon")

searchBtn.click(function(){

  if(searchInput.val() == ''){
    searchInput.addClass("wrong-search")
    searchBtn.css("background", "#f84d3a")
    errorIcon.css("display", "inline")

  }
  else{
    fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+searchInput.val(), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "5b30533715msh641ed2341ee6f5bp1162a4jsnfd82c0857346"
	}
})
.then((response) => response.json())
.then((data) => {
  const list = data.list[0];
  const def = list.definition;
  const sound = list.sound_urls[0];
  const exmp = list.example;
  console.log(data);

  var cleanExmp = exmp.replace(/[^a-zA-Z ]/g, "")
  console.log(cleanExmp);
  var cleanDef = def.replace(/[^a-zA-Z ]/g, "")
  console.log(cleanDef)
  $('.search-box').css("display", "none")
  $('.answer-box').css("display", "block")
  $('.answer-def').text("Definition: "+cleanDef)
  $('.answer-exmp').text("Example: "+cleanExmp)
})
.catch((error) => {
  console.error('Error:', error);
});



  }

  $('.answer-btn').click(function(){
    $('.search-box').css("display", "block")
    $('.answer-box').css("display", "none")
  })


})

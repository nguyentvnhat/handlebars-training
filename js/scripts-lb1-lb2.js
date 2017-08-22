var cast = {
	"characters": [
		{
			"name": "Nhat Nguyen",
			"actor": "Ruby Developer",
			"house": "Do Chieu Street",
			"location": "Vung Tau"
		},
		{
			"name": "Richard Nguyen",
			"actor": "PHP Developer",
			"house": "Aparment",
			"location": "Ho Chi Minh City"
		},
		{
			"name": "Jason Nguyen",
			"actor": "Web Developer",
			"house": "White House",
			"location": null
		},
		{
			"name": "Obama",
			"actor": "Goverment",
			"house": "White",
			"location": false
		}

	]
}

var castTest = {
	"characters": [
		"Richard Nguyen",
		"Richard",
		"Nhat Nguyen"
	]
}

$(document).ready(function(){
	var characterTemplate = $("#character-template").html();
	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	console.log(compiledCharacterTemplate(cast.characters[0]));

	$('.character-list-container').html(compiledCharacterTemplate(cast));
});
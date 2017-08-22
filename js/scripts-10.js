Handlebars.registerHelper("formatName", function(property1, property2){
	// Handlebars.SafeString allow user html type inside string
	return new Handlebars.SafeString("Hello my is name <strong>" + property1 + "</strong> and I live at "+ property2);
});

Handlebars.registerHelper("formatPhoneNumber", function(property){
	if(property) {
		var phone = property.toString();
		return "("+phone.substr(0,3)+") "+phone.substr(3,3)+"-"+phone.substr(6,4)
	} 
});


$(document).ready(function(){
	var characterTemplate = $("#character-template").html();
	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

	$.ajax("./data/cast.json").done(function(cast) {
		$('.character-list-container').html(compiledCharacterTemplate(cast));
	});

	// $.ajax("http://localhost:8000/omni/employer/list").done(function(user){
	// 	console.log(user);
	// });

});
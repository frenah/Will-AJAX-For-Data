//Does an AJAX using jQuery
function requestServerData(request)	{
	console.log($('.input-field').val());
	$.ajax({
		type: request,
		url: $('.input-field').val(),
		beforeSend: function()	{

		}
	}).done(function(data)	{
		console.log(data);
	}).fail(function()	{

	});
}

//On the click of #get, does a GET request
$(document).on('click', '#get', function() {
 	requestServerData('GET');
})

//On the click of #post, does a POST request
$(document).on('click', '#post', function() {
 	requestServerData('POST');
})
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



$(document).on('click', '#get', function() {
 	requestServerData('GET');
})

$(document).on('click', '#post', function() {
 	requestServerData('POST');
})
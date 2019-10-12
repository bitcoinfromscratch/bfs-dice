var $ = require('jquery')

$.get( "/translations/contact-page-content", function( data ) {
    $('#div_content').html(data);
});

$('#drpdwn_select_language').change( _ => {
    window.location.href = "/?lang="+$('#drpdwn_select_language').val()
})

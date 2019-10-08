
var $ = require('jquery')

$.get( "/translations/onetime-softwarewallet-content", function( data ) {
    $('#div_content').html(data);
});
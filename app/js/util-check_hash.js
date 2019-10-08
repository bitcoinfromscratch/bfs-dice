var $ = require('jquery')



$.get( "/translations/util-check-hash-content", function( data ) {
    $('#div_part_four_dest').html(data);
});
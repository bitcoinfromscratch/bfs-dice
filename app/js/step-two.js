var $ = require('jquery')



$.get( "/translations/step-two-content", function( data ) {
    $('#div_part_two_dest').html(data);
});

// $('#div_part_one_dest').html('<h2>coucou</h2>');
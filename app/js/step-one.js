var $ = require('jquery')



$.get( "/translations/step-one-content", function( data ) {
    $('#div_part_one_dest').html(data);
});

// $('#div_part_one_dest').html('<h2>coucou</h2>');
var $ = require('jquery')



$.get( "/translations/step-three-content", function( data ) {
    $('#div_part_three_dest').html(data);
});

// $('#div_part_one_dest').html('<h2>coucou</h2>');
var $ = require('jquery')



$.get( "/translations/contact-page-content", function( data ) {
    $('#div_content').html(data);
});

// $('#div_part_one_dest').html('<h2>coucou</h2>');
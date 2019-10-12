var $ = require('jquery')

if(localStorage.length < 2 && window.location.href.toString().indexOf('backtohome') <= 0){
    $('#div_modal').removeClass('modal-hidden')
    $('#div_modal').addClass('modal-visible')    
}

function hide_modal(){
    $('#div_modal').removeClass('modal-visible')
    $('#div_modal').addClass('modal-hidden')    
}

$('#btn_close_modal').click( _ => {
    hide_modal()
})

$('#btn_close_modal_and_forget').click( _ => {
    localStorage.setItem('dont_show_modal_1', 'true')
    hide_modal()
})

$.get( "/version", function(data) {
    $('#spn_main_page_footer_version_number').text(data)
})

$('#drpdwn_select_language').change( _ => {
    window.location.href = "/?lang="+$('#drpdwn_select_language').val()
})

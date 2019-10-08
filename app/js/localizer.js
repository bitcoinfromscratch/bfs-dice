
var $ = require('jquery')

$.get( "/translations/localized-content", function(data) {
    if($('.direction_aware').length && data.general.direction == "rtl")
    {
        $('.direction_aware').each(function() {
            $(this).addClass('rtl_lang')
        })
    }

    if($('#div_footer_more_info_section').length){
        $('#div_footer_more_info_section').css('text-align', data.general.direction == "rtl" ? 'left' : 'right')
    }

    if($('#spn_help_step_initial').length){
        $('#spn_help_step_initial').text(data.seed_gen.spn_help_step_initial)
        $('#div_help_step_dice_roll').text(data.seed_gen.div_help_step_dice_roll)
        $('#div_help_step_gen_computer_rndm').text(data.seed_gen.div_help_step_gen_computer_rndm)
        $('#div_help_step_success').text(data.seed_gen.div_help_step_success)
        $('#dice_roll_result').text(data.seed_gen.dice_roll_result)
        $('#div_help_warning').text(data.seed_gen.div_help_warning)
        $('#all_random_numbers').html(data.seed_gen.all_random_numbers)
        $('#private_key_text').text(data.seed_gen.private_key_text)
        $('#bip39_seed').html(data.seed_gen.bip39_seed)
        $('#spn_connection_state_error').html(data.seed_gen.spn_connection_state_error)
        $('#spn_seed_gen_consent_message').html(data.seed_gen.spn_seed_gen_consent_message)
        $('#spn_seed_gen_consent_continue').html(data.seed_gen.spn_seed_gen_consent_continue)
    }else{
        $('#spn_back_to_home_title').text(data.content_pages.spn_back_to_home_title)

        $('#spn_main_page_title').text(data.main_page.spn_main_page_title)
        $('#spn_main_page_desc').text(data.main_page.spn_main_page_desc)
        $('#spn_main_page_step_one_title').text(data.main_page.spn_main_page_step_one_title)
        $('#spn_main_page_step_one_desc').text(data.main_page.spn_main_page_step_one_desc)
        $('#spn_main_page_step_two_title').text(data.main_page.spn_main_page_step_two_title)
        $('#spn_main_page_step_two_desc').text(data.main_page.spn_main_page_step_two_desc)
        $('#spn_main_page_step_three_title').text(data.main_page.spn_main_page_step_three_title)
        $('#spn_main_page_step_three_desc').text(data.main_page.spn_main_page_step_three_desc)
        $('#spn_main_page_step_four_title').text(data.main_page.spn_main_page_step_four_title)
        $('#spn_main_page_step_four_desc').text(data.main_page.spn_main_page_step_four_desc)
        
        $('#spn_main_page_splash_first_section').html(data.main_page.spn_main_page_splash_first_section)
        $('#spn_main_page_splash_second_section').html(data.main_page.spn_main_page_splash_second_section)
        $('#spn_main_page_splash_third_section').html(data.main_page.spn_main_page_splash_third_section)
        $('#spn_main_page_splash_forth_section').html(data.main_page.spn_main_page_splash_forth_section)
        // $('#spn_main_page_splash_fifth_section').html(data.main_page.spn_main_page_splash_fifth_section)

        $('#btn_close_modal').html(data.main_page.btn_close_modal)
        $('#btn_close_modal_and_forget').html(data.main_page.btn_close_modal_and_forget)
        $('#spn_main_page_footer_message').text(data.main_page.spn_main_page_footer_message)

        $('#spn_main_page_check_hash_tutorial_title').html(data.main_page.spn_main_page_check_hash_tutorial_title)
        $('#spn_main_page_check_hash_tutorial_content_page_header').html(data.main_page.spn_main_page_check_hash_tutorial_content_page_header)
        $('#spn_main_page_more_information').html(data.main_page.spn_main_page_more_information)
        $('#spn_main_page_footer_twitter_handle').html(data.main_page.spn_main_page_footer_twitter_handle)
        $('#spn_main_page_more_information_content_page_header').html(data.main_page.spn_main_page_more_information_content_page_header)

    }
});

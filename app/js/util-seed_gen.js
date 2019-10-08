
const crypto = require('crypto').randomBytes
const bignumber = require('bignumber.js')
const bip39 = require('bip39')
var $ = require('jquery')

_dice_roll_is_enabled=false
function goto_dice_roll_step(){
    _dice_roll_is_enabled = true

    $('#div_help_step_initial').addClass('hidden')
    $('#div_help_step_dice_roll').removeClass('hidden')
    $('#div_dice_random_result').removeClass('fade-state')
    $('#div_five_set_dice').removeClass('fade-state')

    $('#dice_roll_input_1').removeAttr('disabled')
    $('#dice_roll_input_2').removeAttr('disabled')
    $('#dice_roll_input_3').removeAttr('disabled')
    $('#dice_roll_input_4').removeAttr('disabled')
    $('#dice_roll_input_5').removeAttr('disabled')
    $('#dice_roll_input_1').focus()
    $('#dice_1').css('cursor', 'pointer')
    $('#dice_2').css('cursor', 'pointer')
    $('#dice_3').css('cursor', 'pointer')
    $('#dice_4').css('cursor', 'pointer')
    $('#dice_5').css('cursor', 'pointer')      
}
function goto_gen_computer_rndm_step(){

    _dice_roll_is_enabled=false

    $('#div_five_set_dice').addClass('fade-state')
    $('#div_help_step_dice_roll').addClass('hidden')
    $('#div_help_step_gen_computer_rndm').removeClass('hidden')
    $('#div_gen_computer_random').removeClass('fade-state')
    $('#btn_generate_computer_random').removeAttr('disabled')

    $('#dice_roll_input_1').attr('disabled', true)
    $('#dice_roll_input_2').attr('disabled', true)
    $('#dice_roll_input_3').attr('disabled', true)
    $('#dice_roll_input_4').attr('disabled', true)
    $('#dice_roll_input_5').attr('disabled', true)
    $('#dice_1').css('cursor', 'default')
    $('#dice_2').css('cursor', 'default')
    $('#dice_3').css('cursor', 'default')
    $('#dice_4').css('cursor', 'default')
    $('#dice_5').css('cursor', 'default')

    $('#img_add_diceroll_round_data').css('cursor', 'default')

    
}
function goto_gen_mnemonic_step(){
    _dice_roll_is_enabled=false

    $('#div_help_step_gen_computer_rndm').addClass('hidden')
    $('#div_gen_computer_random').addClass('hidden')
    $('#div_pk_before_xor').removeClass('fade-state')
    $('#div_privatekey').removeClass('fade-state')
    $('#div_mnemonic').removeClass('fade-state')
    $('#div_help_step_gen_mnemonic_seed').removeClass('hidden')
    $('#div_dice_random_result').addClass('hidden')
    $('#div_help_danger_warning').removeClass('hidden')
    $('#bip39_seed_area').addClass('red-border')
}

var _privatekey_generated=false
var _diceroll_counter=0
function add_diceroll_round_data(){
    // validate before addition
    if( _privatekey_generated || 
        !$('#dice_roll_input_1').val() || $('#dice_roll_input_1').val() <= 0 && $('#dice_roll_input_1').val() >6
        || !$('#dice_roll_input_2').val() || $('#dice_roll_input_2').val() <= 0 || $('#dice_roll_input_2').val() >6
        || !$('#dice_roll_input_3').val() || $('#dice_roll_input_3').val() <= 0 || $('#dice_roll_input_3').val() >6
        || !$('#dice_roll_input_4').val() || $('#dice_roll_input_4').val() <= 0 || $('#dice_roll_input_4').val() >6
        || !$('#dice_roll_input_5').val() || $('#dice_roll_input_5').val() <= 0 || $('#dice_roll_input_5').val() >6            
    ){
        // input values are not correct OR private key has been already generated
        return
    }

    var prev_dicerolls = $('#dice_text_area').val()
    var current_round = 
        $('#dice_roll_input_1').val() + 
        $('#dice_roll_input_2').val() +
        $('#dice_roll_input_3').val() +
        $('#dice_roll_input_4').val() +
        $('#dice_roll_input_5').val()

    $('#dice_text_area').val(prev_dicerolls ? prev_dicerolls+" "+current_round : current_round)

    _diceroll_counter++
    $('#lbl_diceroll_counter').text(_diceroll_counter)

    $('#dice_roll_input_1').val('')
    $('#dice_roll_input_2').val('')
    $('#dice_roll_input_3').val('')
    $('#dice_roll_input_4').val('')
    $('#dice_roll_input_5').val('')
    $('#dice_1').attr('src', '/assets/images/yellow-dice0.png')
    $('#dice_2').attr('src', '/assets/images/yellow-dice0.png')
    $('#dice_3').attr('src', '/assets/images/yellow-dice0.png')
    $('#dice_4').attr('src', '/assets/images/yellow-dice0.png')
    $('#dice_5').attr('src', '/assets/images/yellow-dice0.png')
    $('#dice_roll_input_1').focus()

    if(_diceroll_counter == 2){
        goto_gen_computer_rndm_step()
    }

}

function rotate_dice(dice_position){
    if(!_dice_roll_is_enabled)
        return
    
    var current_val = $('#dice_roll_input_'+dice_position).val() ? parseInt($('#dice_roll_input_'+dice_position).val()) : 0
    current_val = current_val+1<=6 ? ++current_val : 1
    $('#dice_roll_input_'+dice_position).val(current_val)
    set_dice_number(dice_position, current_val)
}

function set_dice_number_by_input(dice_position){
    if($('#dice_roll_input_'+dice_position).val() && $('#dice_roll_input_'+dice_position).val() > 0 && $('#dice_roll_input_'+dice_position).val() <= 6){
        set_dice_number(dice_position, $('#dice_roll_input_'+dice_position).val())
    }else{
        set_dice_number(dice_position, '0')
    }
}

function set_dice_number(dice_position, selected_number){
    $('#dice_'+dice_position).attr('src', '/assets/images/yellow-dice'+selected_number+'.png')
}

function validate_dice_input(dice_position){
    if(!_privatekey_generated && $('#dice_roll_input_'+dice_position).val() > 0 && $('#dice_roll_input_'+dice_position).val() <= 6){
        return true
    }
    $('#dice_roll_input_'+dice_position).val('')
    return false
}

/// HANDLERS ///
$('#img_go_to_dice_roll_step').click( _=>{
    goto_dice_roll_step()
})
$('#img_add_diceroll_round_data').click( _ => {
    add_diceroll_round_data()
})
$('#btn_generate_computer_random').click( _ => {
    // replace this with actual dice roll results
    $('#gen_seed_spinner').css('visibility', 'visible')
    $('#btn_generate_computer_random').attr('disabled', 'true')
    window.setTimeout( _ => {
        generate_seed('1315303353531224310345305053111405015122034155010522421052213052515034505250300031402250122545340342')
    }, 7000)
})

function generate_seed(dice_entropy){
    // validate dice values
    crypto(32, function (err, resp) {
        if (!err) {
            // disable the generate button and add spinner to it
            $('#btn_generate_computer_random').attr('disabled', 'true')

            var random_bytes_hex = resp.toString('hex')
            var dice_roll_hex = bignumber(dice_entropy, 6).toString(16)

            var xored_array = new Array()
            var randombyte_buff = new Buffer.from(random_bytes_hex, 'hex')
            var diceroll_buff = new Buffer.from(dice_roll_hex, 'hex')

            for (var i = 0; i < randombyte_buff.length; i++) {
                xored_array.push(diceroll_buff[i] ^ randombyte_buff[i])
            }

            var xored_array_binary = new Buffer.from(xored_array)
            if(xored_array_binary.length == 32 && bignumber(xored_array_binary.toString('hex'), 16).toString(16).length == 64){
                $('#all_random_numbers_area').text('DICE: '+dice_roll_hex + '\n' + 'RNDM: ' + random_bytes_hex)
                $('#privatekey_text_area').val(bignumber(xored_array_binary.toString('hex'), 16).toString(16))
                $('#bip39_seed_area').text(bip39.entropyToMnemonic(bignumber(xored_array_binary.toString('hex'), 16).toString(16)))
    
                _privatekey_generated=true
                goto_gen_mnemonic_step()
            }else{
                $('#gen_seed_spinner').css('visibility', 'visible')
                window.setTimeout( _ => {
                    generate_seed(dice_entropy)
                }, 3500)
            }
        } else {
            // We are here because of the exception at /dev/random generation
            alert("An unexptected error occured while generating\nthe /dev/random entropy. Please try again.")
        }
    })
}

// rotate dice number on click
$('#dice_1').click( _ => {
    rotate_dice(1)
})
$('#dice_2').click( _ => {
    rotate_dice(2)
})
$('#dice_3').click( _ => {
    rotate_dice(3)
})
$('#dice_4').click( _ => {
    rotate_dice(4)
})
$('#dice_5').click( _ => {
    rotate_dice(5)
})
$('#dice_6').click( _ => {
    rotate_dice(6)
})

// consent
$('#btn_seed_gen_consent_continue').click( _ => {
    $('#div_seed_gen_consent_splash').removeClass('modal-visible')
    $('#div_seed_gen_consent_splash').addClass('modal-hidden')
})

// DICE input grab and validation
$('#dice_roll_input_1').keyup( _=>{
    if(validate_dice_input(1)){
        set_dice_number_by_input(1)
        $('#dice_roll_input_2').focus()
    }
})
$('#dice_roll_input_2').keyup( _=>{
    if(validate_dice_input(2)){
        set_dice_number_by_input(2)
        $('#dice_roll_input_3').focus()
    }
})
$('#dice_roll_input_3').keyup( _=>{
    if(validate_dice_input(3)){
        set_dice_number_by_input(3)
        $('#dice_roll_input_4').focus()
    }
})
$('#dice_roll_input_4').keyup( _=>{
    if(validate_dice_input(4)){
        set_dice_number_by_input(4)
        $('#dice_roll_input_5').focus()
    }
})
$('#dice_roll_input_5').keyup( _=>{
    if(validate_dice_input(5)){
        set_dice_number_by_input(5)
    }
})

/*
window.setInterval( _ => {
    check_connection_status()
}, 3000)

function check_connection_status(){
    if(window.navigator.onLine){
        $('#div_connection_detected').removeClass('modal-hidden')
        $('#div_connection_detected').addClass('modal-visible')
    }
}
check_connection_status()
*/

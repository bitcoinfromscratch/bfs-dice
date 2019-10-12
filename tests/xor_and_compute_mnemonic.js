
const bignumber = require('bignumber.js')
const bip39 = require('bip39')

module.exports = function compute_mnemonic(dice_roll, entropy) {
    var dice_roll_hex = bignumber(dice_roll.replace(/ /g,"").replace(/6/g,"0"), 6).toString(16)
    var random_bytes_hex = entropy

    var xored_array = new Array()
    var randombyte_buff = new Buffer.from(random_bytes_hex, 'hex')
    var diceroll_buff = new Buffer.from(dice_roll_hex, 'hex')

    for (var i = 0; i < randombyte_buff.length; i++) {
        xored_array.push(diceroll_buff[i] ^ randombyte_buff[i])
    }

    var xored_array_binary = new Buffer.from(xored_array)
    return bip39.entropyToMnemonic(xored_array_binary.toString('hex'))
}
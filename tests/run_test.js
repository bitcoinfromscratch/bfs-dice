
const assert = require('assert')
const mnemonic_generator = require('./xor_and_compute_mnemonic.js')

const dice_roll = [
    "51233 44221 66664 23356 66112 16361 24523 22413 35436 31223 43156 15316 24643 62261 26314 14143 16436 32351 14246 23235",
    "24214 33341 21666 42615 33213 25432 65556 41623 52613 55622 63642 53153 23336 26224 22464 46146 62635 13451 13222 14651",
    "53441 23556 56224 41116 11555 23442 11656 46252 55321 42123 12312 65335 15241 14115 43412 26452 31442 24265 44364 14666"
]
const dice_roll_hex = [ // echo 'obase=16;ibase=6; '$dice | bc (shell script)
    "4ED34CE2CB7D90FAD36BB20390647555EB4AB184E404486AFA679FE286035470",
    "2914BEED2475BE0F2909CF5658BC72CB412D6C0F30495529EC6DF52D07FCAE1C",
    "54B80E08CFEBA5B4143097D16C668367C046B68B8E1A316D5B257521A5C37427"
]
const dev_random = [ 
    "9311afdb2aa3be0caa18eb11ef326291ef9c7a55a5524d9015b4d0bf203edf86",
    "36ca03e29ed373c34e52e7262a9a5fc15c429e913145595f0c65c757dfe82a67",
    "9775ec91f3cafff984633c290b5b8a285938cfa4973c17a3f471025786701495"
]
const xor_dice_n_random = [ // python2.7 ./glacierscript.py (glacier protocol)
    "ddc2e339e1de2ef6797359127f5617c404d6cbd1415605faefd34f5da63d8bf6",
    "1fdebd0fbaa6cdcc675b287072262d0a1d6ff29e010c0c76e008327ad814847b",
    "c3cde2993c215a4d9053abf8673d094f997e792f192626ceaf54777623b360b2"
]
const bip39_mnemonic = [ // https://iancoleman.io/bip39/#english (bip39-mnemonic-converter)
    "tape blade solar senior title kite total hen bar wide magnet marine estate grass eagle client album student visit pact surprise burst cool shaft",
    "cabin vote dumb inspire holiday tower output govern idea muffin mercy before street welcome job canoe arrest require acoustic gossip pulse apart ball idle",
    "sense humor play joke between chat donor install wear delay drastic palace obey develop round cave chat install steak upon giraffe super lizard erase"
]

describe('mnemonic_generator', function () {
    it('returns calculated mnemonic words', function () {
        var result = mnemonic_generator(dice_roll[0], dev_random[0])
        assert.equal(result, bip39_mnemonic[0], 'mnemonic words does not match');
    });
});

describe('mnemonic_generator', function () {
    it('returns calculated mnemonic words', function () {
        var result = mnemonic_generator(dice_roll[1], dev_random[1])
        assert.equal(result, bip39_mnemonic[1], 'mnemonic words does not match');
    });
});

describe('mnemonic_generator', function () {
    it('returns calculated mnemonic words', function () {
        var result = mnemonic_generator(dice_roll[2], dev_random[2])
        assert.equal(result, bip39_mnemonic[2], 'mnemonic words does not match');
    });
});

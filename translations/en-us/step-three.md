**We should store the private key in an offline and safe cold wallet and Electrum bitcoin wallet has this feature.**

**Prerequisites:**
* You should have generated your bitcoin mnemonic words either with your prefered wallet or the dice tool in this application
* You know how to work with Electrum wallet. if you don't learn how to work with it first
* You have downloaded and verified Electrum's signature for your prefered OS
* You can work with virtualized instance of windows-10 in virtual box or any other virtualization service. (here the screenshots are win10 other OS's are fine too)

**win10 setting on virtual box**
If you don't know how to do these settings, go to youtube and learn first and then continue with tutorial
* after win10 installation is complete, shut it down and got the Network settings of virtual box and disable the network. this machine holds our private key so it should be offline
* start the guest again and install "VBoxGuestAdditions" on the guest (win10)
* in virtual box make the "share clipboard" bidirectional
* we need a shared folder between the host and guest to copy the Electrum installer. later you can remove this shared folder to increase security

**So, we have:**
* a host system which is connected to the internet. a guest (virtualized) system which has neighter lan nor internet connection and is completely offline
* a veried Electrum installer which is copied into the guest system (via the shared folder)
* shared clipboard between host and guest system (you can test it with notepad)
* you have the mnemonic words prepared and ready

---

<div class="alert alert-warning font-weight-bold" role="alert" style="font-size:1em;">
Make sure you practice this process and master it first on bitcoin testnet before going to mainnet. at the end of this tutorial there is a screenshot on how to open Electrum on testnet in windows. for other OS's it is similar.
</div>

---

<div class="step-three-section-header">
Electrum installation on the offline system (guest)
</div>


<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/installation_start.png">
    <div class="step-three-screenshot-notes">click install with the default setting</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/installation_complete.png">
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_firstrun_connection.png">
    <div class="step-three-screenshot-notes">This is the offline system so it doesn't matter which option to chose. continue with the default</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_name.png">
    <div class="step-three-screenshot-notes">The wallet name on the cold wallet can start with the COLD prefix</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_type.png">
    <div class="step-three-screenshot-notes">Electrum provides various types of wallets and services. here we want to create a Standard wallet</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_keystore.png">
    <div class="step-three-screenshot-notes">We want to import our generated mnemonic words into this wallet. That's why it should be offline.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_seed.png">
    <div class="step-three-screenshot-notes">Electrum wallet helps you enter the mnemonic words. After completion click on the Options button and select "BIP39 seed". you should see the "BIP39 (checksum: ok) message</div>
    <div class="step-three-screenshot-notes" style="color:red;">
        The Electrum warning is important here. Electrum doesn't support bip39 generation but it supports importing of them via the Options button. that is why it shows that warning. If Electrum stops supporting the BIP39 seeds there are other compatible wallets.
    </div>     
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_derivation_path.png">
    <div class="step-three-screenshot-notes">
        Here we should select the address type for the wallet. legacy addresses start with 1. p2sh-segwit addresses start with 3 and native segwit addresses start with bc1. native segwit is the best option but not all exchanges support it so you can select the p2sh-segwit for now.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_walletpassword.png">
    <div class="step-three-screenshot-notes">
        This password has nothing to do with your private key. Electrum will encrypt your wallet with this password and if you forget this password, you just need to create the wallet again and import your mnemonic. if an adversary knows your password and has your Electrum wallet file they can retrieve your bitcoin private key.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_history_tab.png">
    <div class="step-three-screenshot-notes">
        Electrum installation is completed on the offline system. you can verify the offline state by the red indicator at the bottom right of the Electrum window.
    </div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_view_addresses.png">
    <div class="step-three-screenshot-notes">
        Show Addresses menu will show you the addresses tab. no matter how many wallets you create with your mnemonic words, you should always see the same addresses. So the addresses are a very good measure to verify successfull mnemonic imports.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_addresses_tab.png">
    <div class="step-three-screenshot-notes">
        In the Addresses tab you can see your first 20-25 addresses.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_receive.png">
    <div class="step-three-screenshot-notes">
        If you want to receive to any of this addresses you can copy it or go to Receive tab.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_get_walletinfo.png">
    <div class="step-three-screenshot-notes">
        To get the xpub and create the watching-only wallet, we need to get the wallet information.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_walletinfo_xpub.png">
    <div class="step-three-screenshot-notes">
        the xpub is a special key which allows us create a watching only wallet on the host system. watching only wallet means it can create bitcoin transactions and knows our balance but it can not sign the transactions.
    </div>    
</div>

---

<div class="step-three-section-header">
Electrum installation on the host which is connected to the internet
</div>


<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_firstrun_connection.png">
    <div class="step-three-screenshot-notes">Install it on the host with default setting again</div>
    <div class="step-three-screenshot-notes">
        Here it asks to which Electrum server you want to connect. Electrum servers are public and anyone can connect to them. privacy wise it is very important but for now we need them to get information about the bitcoin network. Select Auto connect and continue.
    </div>
    <div class="step-three-screenshot-notes">You can enable dark theme after the installation completes</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_name.png">
    <div class="step-three-screenshot-notes">This wallet is on the host system and is connected. so we can have the word HOT prefix for the wallet file</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_type.png">
    <div class="step-three-screenshot-notes">
        Again select the Standard option
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_keystore.png">
    <div class="step-three-screenshot-notes">
        Here we don't want to import the mnemonic words since this system is online. what we do is we use the xpub key to create a watching only wallet. watching only wallet can show us our bitcoin balance and address balance but can not sign bitcoin transaction and send bitcoin.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_add_masterkey.png">
    <div class="step-three-screenshot-notes">
        copy the xpub from the offline system (cold wallet) here
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_walletpassword.png">
    <div class="step-three-screenshot-notes">
        This password is the same as before. it has nothing to do with your private key. Electrum uses this to encrypt your wallet file. if an adversary has this password they can retrieve your xpub and know your balances but can not take your bitcoin since xpub keys can not sign bitcoin transactions.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_addresses_tab.png">
    <div class="step-three-screenshot-notes">
        Your HOT-wallet installation is complete. you should go to the addresses tab and check the addresses with your COLD-wallet. they should be the same. all of them should match. Your HOT-wallet as you send/receive bitcoin will have more addresses then your COLD-wallet but the first 20 addresses should match. as you see on the top of the Electrum wallet form you will see the Watching-only which means this is your hot wallet.
    </div>    
</div>

---

<div class="step-three-section-header">
Sending bitcoin:
</div>


<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_send_tab.png">
    <div class="step-three-screenshot-notes">
        If you want to send bitcoin to an address your HOT-wallet should prepare the transaction and send from your balance to the address you want to send. but as mentioned several times, your HOT-wallet can not sign the transactions. go to the send tab and fill the address you want to send bitcoin to, then you see there is no Send button because this wallet has no private key to sign the transaction. we need to copy this transaction to the COLD-wallet and sign it there.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_txinfo_form.png">
    <div class="step-three-screenshot-notes">
        Click on the Preview button and you will see this form which is a summary of the input and output of the transaction. this transaction needs to be signed to be valid. click on Copy button to copy the transaction into your clipboard.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_loadtx_fromtext.png">
    <div class="step-three-screenshot-notes">
        Now in the guest offline system load a transaction from text
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_paste_tx_rawtx.png">
    <div class="step-three-screenshot-notes">copy the transaction text there and click Load transaction button</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_review_tx_form.png">
    <div class="step-three-screenshot-notes">
        You will see the same summary windows that you saw in the HOT-wallet before. Now click on the Sign button to sign the transaction.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_sign_rawtx.png">
    <div class="step-three-screenshot-notes">
        Electrum asks for your password. enter the COLD-wallet password.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_copy_rawtx.png">
    <div class="step-three-screenshot-notes">
        Your transaction is signed successfully but the guest and COLD-wallet have no internet to broadcast the transaction to the bitcoin network. click on copy button to copy the transaction to your clipboard.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_loadtx_fromtext.png">
    <div class="step-three-screenshot-notes">Tell Electrum you want to load a transaction from text</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_paste_tx_rawtx.png">
    <div class="step-three-screenshot-notes">
        copy your transaction here and click Load transaction button.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_review_tx.png">
    <div class="step-three-screenshot-notes">
        This is your last chance to verify the amount and address. if everything is correct click on the Broadcast button.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_broadcast_tx.png">
    <div class="step-three-screenshot-notes">
        Electrum will broadcast your transaction and show you the transaction id. since the HOT-wallet is connected, it can monitor the transaction and number of confirmation for us.
    </div>    
</div>

---

<div class="step-three-section-header">
Change Electrum shortcut to run testnet on win10:
</div>

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/windows_shortcut_testnet.png">
    <div class="step-three-screenshot-notes">
        In the target textbox and where the text is ending add --testnet. when you open Electrum you should see Electrum Testnet at the top of the form in the title bar.
    </div>    
</div>

---

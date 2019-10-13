
You have heard this or that bitcoin wallet is secure. but what it means to be a **secure** bitcoin wallet? to answer this question we need to go back. even before even generating the bitcoin private key and its addresses


Bitcoin uses public cryptography. in this cryptographic scheme we need two keys. one of them is like the public address and the other is the secret key. something like e-mail. you have a secret password and a public email address. you give your public email address to everyone to receive email from but you keep your secred password to yourself. if you want to read your emails or you want to send an email you need that secret password. This is failry the same in bitcoin. you have a public bitcoin address and a private key. everyone can send you bitcoin to your bitcoin address but to spend it you need the private key. That is why we protect our private key.

When we use a bitcoin wallet to generate a bitcoin private key, the wallet should generate a random number and create the private key based on that number. but the question is how we ensure that wallet will choose a globally random number for us? what happens if somebody else has the same number? This is where we introduce another concept in mathematics and it is called **"entropy"**. when you request a random number from your operation system it will pick one from the pool of entropy which it has collected. what is the pool of entropy? when you type on your keyboard or move your mouse on the screen these are perfect source of entropy for your operating system and it collects them in a pool.

This is a 256bit random number and can be used as a bitcoin private key:

<div dir="ltr" class="text-center mb-4 font-weight-bold">
    <code>39BD194E3B989D612E6ED5BF485BAE130D53F5F532F29585E98ECD298282A5C3</code>
</div>

**But how we can write and memorize this?**  
This is true, writing and storing these 64 characters is not a easy task. the solution to this problem is a standard which has 2048 words and we can convert the private key to 24 words from them. So as you may have seen before bitconi wallets generate the private key as a form of 24 (sometimes 12) words and they tell you to write them and store them somewhere safe. those words are called mnemonic words. Those mnemonic words are exactly the same as the private key but in a different form and wise versa. if you convert your mnemonic words to your private key 10,000 times, you will get to the same private key every time.

These are the mnemonic words which are generated from the above private key. The order is important.
<div dir="ltr" class="text-left mb-4 font-weight-bold px-5 mx-5">
    <code>defy trip fatal jaguar mean rack rifle survey satisfy drift twist champion steel wife state furnace night consider glove olympic oblige donor novel left</code>
</div>

**How we can trust our bitcoin wallet to generate secure(random) private keys?**  
If they are open source we should review the method they have used for their random number generation, and if they are not we just have to trust them.

___
##### **We learned the randomness of the bitconi private key is very important and randomness needs entropy**
___

**How to generate secure(random) bitcoin private keys?**  
We need to look for entropy beyound simply what the hardware or software wallets provides for us. A very simple way to generate high entropy is using dice. Using unbiased dices we can generate secure random numbers. Unbiased dices doesn't have round edges and usually casinos use them.

**How to generate bitconi private key with dice?**  
"Step One" dice tool of this application uses two sources of entropy and mix them together and generate the private key and mnemonic words. One source of entropy is dice and the other is the computer itself. In cryptography when we combine two entropies together, the output has more entropy than each inputs. This method is used in the Glacier protocol. For more information click on the Glacier icon in the main page.
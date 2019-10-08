**کیف‌پول بیت‌کوین الکترام از قدیمی‌ترین و خوشنام‌ترین کیف‌پول‌های بیت‌کوینه که اگر به روش درست ازش استفاده بشه از درجه امنیت بالایی برخورداره. قبل از هرچیز دوباره تکرار می‌شه که حتما همه مطالب این بخش رو بخونید تا با دانش کافی اقدام به استفاده از الکترام کنید و از بیت‌کوینتون محافظت کنید.**

**این راهنما فرض رو بر این می‌گذاره که شما:**
* کلید خصوصی (کلمه‌های BIP39 mnemonic) بیت‌کوینتون رو ساختید. حالا یا با ابزار استفاده از تاس یا یک کیف‌پول نرم/سخت افزاری که خودتون دارید
* بطور کلی کار کردن با الکترام رو بلدین - اگر بلد نیستید از یوتوب یاد بگیرید
* نرم‌‌افزار الکترام رو برای سیستم عامل موردنظرتون دانلود کردید و امضای دیجیتال اون رو چک کردید
* بلدید با ‌virtual machine کار کنید و یک ویندوز-۱۰ تحت virtual-box یا حالا هر نرم‌افزار virtualization دیگه‌ای بالا آوردید

**تنظیمات لازم بعد از تصب ویندوز-۱۰ روی virtual-box:**  
(هرجا مشکلی بود از یوتوب یاد بگیرید باید چکار کنید. این تنظیمات خیلی ساده هستن و راحت می‌تونید انجامشون بدید)
* بعد از نصب کامل ویندوز-۱۰ اون رو خاموش کنید و از تنظیمات virtual-box به قسمت Network برید و کلا اون رو غیرفعال کنید (کلید خصوصی ما روی اونه پس باید همیشه آفلاین باشه)
* دوباره ویندوز روی vm رو روشن کنید و بعد از اینکه کامل بالا اومد VBoxGuestAdditions رو نصب کنید
* از تنظیمات virtual-box مورد shared clipboard رو به حالت bidirectional تنظیم کنید.
* باید از طریق ‌virtual-box یک فولدر رو با ویندوز vm به اشتراک بگذارید تا بتونید فایل نصب الکترام رو به ویندوز روی vm بدید. (بعد از کپی فایل نصب الکترام روی vm می‌تونید این فولدر اشتراکی رو حذف کنید)

**تا اینجا شما باید:**
* یک سیستم متصل به اینترنت داشته باشید که روش با استفاده از نرم‌افزار virtual-box یک ویندوز تحت vm بالا آوردید که آفلاینه.
* فایل نصب الکترام رو از نظر اصالت بررسی کردید و داخل ویندوز vm (که آفلاینه) کپی کردید
* clipboard سیستم شما و ویندوز روی vm به اشتراک گذاشته شدن و می‌تونید یک متن رو از notepad بصورت دوطرفه کپی پیست کنید.
* کلمه‌های mnemonic رو کنار دستتون آماده دارید

---

<div class="alert alert-warning font-weight-bold" role="alert" style="font-size:1em;">
حتما قبل از اینکه روی شبکه اصلی بیت‌کوین کار کنید یک بار روی شبکه تست‌نت روش کار رو تست کنید و تا مطمئن نشدید روی شبکه اصلی نرید. پایین تر توضیح داده شده که چطور الکترام رو با شبکه تست تست‌نت بیت‌کوین بالا بیارید
</div>

<div style="border:solid 2px red;border-radius:5px;padding:7px;background-color:#FCDEDE;">

**کلیات روش کار:**
اینجا روش کار توضیح داده میشه. اونهایی که با الکترام کار کردن ممکنه همین توضیح کوتاه براشون کفایت کنه. اگر توضیحات بیشتری لازم بود عکسهای پایین رو ببینید. اگر راهنمای پایین براتون نامفهوم بود یعنی شما نیاز به اطلاعات اولیه دارید و باید از اینترنت یا دوستاتون در حد استفاده از الکترام یاد بگیرید و بعد دوباره برگردید.

ما یک کلید خصوصی بیت‌کوین ساختیم که مهم‌ترین و حیاتی ترین قسمت کار با بیت‌کوینه. هرکس اون کلید رو داشته باشه اختیار بیت‌کوینها دست اونه. پس اصلا منطقی نیست اون کلید رو روی سیستمی بگذاریم که به اینترنت وصله. چون کلی ویروس و بدافزار توی سیستم ما هست که میتونه کلید خصوصی ما رو بدزده. پس کاری که باید بکنیم اینه که کلید خصوصیمونو توی یک سیستم بگذاریم که آفلاینه. تا اینجا ما تونستیم از کلید خصوصیمون خیلی خوب مراقبت کنیم اما یک مشکلی پیش میاد و اون مشکل اینه که اگر ما به اینترنت و شبکه بیت‌کوین وصل نباشیم چطور میخوایم بفهمیم بیت‌کوینهایی که به آدرسهای ما ارسال کردن چندتا کانفرم دارن؟ یا اصلا چقدر بیت‌کوین توی کیف پول ما هست؟

این مشکل رو با استفاده از ۲سیستم حل می‌کنیم. یک سیستم به اینترنت و شبکه بیت‌کوین وصله و یکی دیگه هست که کلید خصوصی ما داخلشه و آفلاینه. حالا فقط یک مشکل دیگه هست که باید حل کنیم. اگر قراره یکی از کیف‌پول ها به اینترنت وصل باشه چه فرقی می‌کنه اگر بخوایم کلید خصوصیمونو واردش کنیم؟ این مشکل رو با استفاده کردن از یک کلید مخصوص حل میکنیم. وقتی توی سیستم آفلاین کلید خصوصیمونو وارد می کنیم، کیف پول الکترام قابلیتی داره که به ما یک کلید بخصوص از روی کلید خصوصی تولید کنه که این کلید ویژگی جالبی داره. وقتی این کلید رو بجای کلید خصوصی وارد الکترام کنیم، کیف پول الکترام می‌تونه از آدرسها و دارایی بیت‌کوین ما خبر داشته باشه ولی نمی تونه اونها رو جابجا/ارسال کنه.

پس روش کار ما اینطوریه که دریافت و رصد دارایی و آدرسهامونو روی سیستمی که به اینترنت وصله انجام میدیم و هروقت خواستیم تراکنش ارسال بیت‌کوینمون رو sign کنیم باید تراکنش رو به سیستم vm که آفلاینه ببریم و کار sign رو اونجا انجام بدیم. برای همینه که بالاتر گفته شده باید clipboard شما بین این دوسیستم به اشتراک گذاشته بشه.

پس ما باید الکترام رو دوجا نصب کنیم: یکبار روی سیستم آفلاین و یکبار دیگه روی سیستم آنلاین. توی عکسهای آموزش پایین سیستم آنلاین به حالت dark درومده تا تفاوت رو راحت تر ببینید.

‌**حتما قبل از اینکه روی شبکه اصلی بیت‌کوین این کار رو انجام بدید، قبلش روی شبکه تست‌نت بیت‌کوین چندبار تا زمانی که مطمئن شدید یاد گرفتید تست کنید. انتهای این صفحه آموزش داده شده که چطوری می‌تونید shortcut ویندوز رو تغییر بدید تا الکترام روی تست‌نت بالا بیاد. توضیحات این روش توی سایت الکترام هم هست.**

</div>

---

<div class="step-three-section-header">
نصب الکترام روی سیستم vm آفلاین:
</div>


<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/installation_start.png">
    <div class="step-three-screenshot-notes">با تنظیمات پیش فرض نصب کنید</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/installation_complete.png">
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_firstrun_connection.png">
    <div class="step-three-screenshot-notes">چون این سیستم آفلاینه این انتخاب اهمیتی نداره. بذارید همون حالت پیش فرض بمونه.</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_name.png">
    <div class="step-three-screenshot-notes">یه اسم بامعنی برای کیف پولتون بذارید. چون این روی سیستم آفلاین داره ساخته میشه بهتره کلمه cold رو بهش اضافه کرد تا از روی اسمش معلوم بشه.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_type.png">
    <div class="step-three-screenshot-notes">الکترام انواع مختلفی از سرویسها و کیف‌پول‌ها رو پشتیبانی/فراهم می‌کنه ولی ما اینجا می‌خوایم یک کیف‌پول استاندارد بسازیم</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_keystore.png">
    <div class="step-three-screenshot-notes">ما کلید خصوصی (یا همون کلمات mnemonic) رو ساختیم و حالا میخوایم توی این سیستم آفلاین اونها رو وارد کنیم. درواقع دلیل اصلی ساختن vm و آفلاین بودن اون اینه که کلید خصوصی بیت‌کوینمونو می‌خوایم داخلش نگهداری کنیم.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_seed.png">
    <div class="step-three-screenshot-notes">اینجا باید کلمات کلید خصوصی رو وارد کنید و می بینید که بهتون کمک می کنه وارد کنید. حالا اگر خیلی پارانویا دارید می‌تویند از onscreen keyboard ویندوز استفاده کنید. بعد از اینکه کلمات رو وارد کردید روی دکمه Options کلیک کنید و گزینه دوم: BIP39 seed رو بزنید تا الکترام بفهمه شما براساس اون استاندارد کلید خصوصیتونو وارد کردید. درنهایت باید کنار اون دکمه عبارت BIP39 checksum: ok رو ببینید.</div>
    <div class="step-three-screenshot-notes" style="color:red;">
        الکترام یک هشدار توی این صفحه به ما نشون می‌ده که باید بدونید چیه. الکترام به دلایلی که از حوصله اینجا خارجه به صورت پیش‌فرض کلمات mnemonic رو با استاندارد BIP39 تولید نمی‌کنه. ولی از راه دکمه Options از اونها پشتیبانی می‌کنه. اگر یک روزی الکترام از استاندارد BIP39 پشتیبانی نکرد باید از کیف‌پول‌هایی که از این استاندارد پشتیبانی می‌کنن (قبلا از چندتاشون اسم برده شده) استفاده کرد. بخاطر نفوذ و گسترش استاندارد BIP39 و کاربران اون به احتمال زیاد اون روز هیچوقت نخواهد رسید.
    </div>     
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_derivation_path.png">
    <div class="step-three-screenshot-notes">این مرحله شما تعیین میکنید که آدرسهای شما چه ورژنی باشن. legacy آدرسهایی هستن که با عدد ۱ شروع میشن. p2sh-segwit آدرسهایی هستن که با سگویت سازگاری دارن و با عدد ۳ شروع میشن. native segwit هم آدرسهایی هستن که فول سگویت هستن و با bc1 شروع میشن. پیشنهاد من دومیه چون بعضی از صرافیها هنوز از سومی پشتیبانی نمیکنن.
    </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_cold_wallet_walletpassword.png">
    <div class="step-three-screenshot-notes">این پسورد ربطی به کلید خصوصی بیت‌کوین شما نداره ولی مهمه. الکترام با این پسورد فایل کیف‌پول شما رو رمزگذاری میکنه. اگر پسورد نگذارید هرکس به vm شما دسترسی داشته باشه می‌تونه به کلید خصوصی شما برسه و بیت‌کوینهاتون رو حتما از دست میدید. اما اگر این پسورد رو فراموش کنید اتفاقی نمیفته چون فقط کافیه یک کیف پول دیگه بسازید و اطلاعات کلید خصوصی و موارد دیگه ای که بالاتر دیدید رو وارد کنید و یک کیف پول جدید بسازید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_history_tab.png">
    <div class="step-three-screenshot-notes">کار نصب الکترام روی سیستم آفلاین تموم شد. حتما باید ببینید که وضعیت شبکه الکترام در حالت آفلاینه و نشانگر قرمز رو پایین صفحه ببینید.</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_view_addresses.png">
    <div class="step-three-screenshot-notes">برای دیدن آدرسهای کیف پول منوی show addresses رو بزنید. دیدن آدرسها کمک زیادی میکنه که مطمئن باشید کلید خصوصیتونو درست وارد کردید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_addresses_tab.png">
    <div class="step-three-screenshot-notes">لیست ۲۰-۲۵ آدرس اولتونو میتونید اینجا ببینید. این آدرسها اینجا کاربردی ندارن چون این کیف پول شما فقط برای sign کردن تراکنشها استفاده میشه ولی همونطور که بالا گفته شد آدرسها کمک میکنن شما مطمئن بشید کیف پول درستی رو باز کردید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_receive.png">
    <div class="step-three-screenshot-notes">اگر خواستید بیت‌کوین به این کیف‌پول منتقل کنید می‌تونید از همون آدرس ها بردارید یا به این صفحه بیاید و آدرسی که بهتون میده رو استفاده کنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_get_walletinfo.png">
    <div class="step-three-screenshot-notes">برای اینکه بتونیم این آدرسها و مقدار بیتکوینی که داریم رو بصورت watching-only روی سیستمی که به اینترنت وصله ببینیم باید یک کلید عمومی از کیف پولمون داشته باشیم که بتونه آدرسهای ما رو تولید کنه. این کلید عمومی نمیتونه تراکنشهای خرج کردن یا ارسال بیتکوین ما رو sign کنه پس میتونیم با خیال راحت اون رو توی الکترامی که به اینترنت دسترسی داره وارد کنیم. </div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_walletinfo_xpub.png">
    <div class="step-three-screenshot-notes">این کلید xpub رو همینجا نگه دارید تا جلوتر ببینیم کجا باید وارد بشه. اگر کسی غیر از شما این کلید رو داشته باشه نمیتونه بیت کوینهای شما رو خرج کنه ولی میتونه ببینه شما چقدر توی این کیف‌پول‌تون بیت‌کوین دارید.</div>    
</div>

---

<div class="step-three-section-header">
نصب الکترام روی سیستم متصل به اینترنت:
</div>


<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_firstrun_connection.png">
    <div class="step-three-screenshot-notes">همونطور که روی سیستم آفلاین نصب کردید اینجا هم نصبش کنید و بازش کنید</div>
    <div class="step-three-screenshot-notes">اینجا از شما می‌پرسه که میخواید به سرور خودتون وصل بشید یا به سرورهای عمومی الکترام. این موضوع بعدا از نظر پرایوسی مهم میشه ولی الان حالت auto connect رو انتخاب کنید</div>
    <div class="step-three-screenshot-notes">تم دارک رو بعد از تمام شدن نصب می تونید توی تنظیمات فعال کنید</div>
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_name.png">
    <div class="step-three-screenshot-notes">با توجه به اینکه این کیف‌پول به اینترنت وصله، میشه کلمه hot رو به اسم والت اضافه کرد.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_type.png">
    <div class="step-three-screenshot-notes">اینجا هم مثل کیف‌پول قبلی می‌پرسه چه نوعی از کیف‌پول می‌خوایم بسازیم و مدل standard رو انتخاب کنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_keystore.png">
    <div class="step-three-screenshot-notes">اینجا مورد Use a master key رو انتخاب می‌کنیم تا با وارد کردن کلید xpub این کیف‌پول تبدیل به حالت watching-only بشه. یعنی نتونه تراکنش های ارسال بیت‌کوین ما رو sign کنه ولی بتونه آدرس ها مقداری که بیت‌کوین داریم رو به ما نشون بده.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_add_masterkey.png">
    <div class="step-three-screenshot-notes">کلید xpub که بالاتر وقتی داشتیم روی vm الکترام نصب می‌کردیم رو اینجا کپی کنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/create_hot_wallet_walletpassword.png">
    <div class="step-three-screenshot-notes">این پسورد ربطی به کلید خصوصی شما نداره. این یک پسوردیه که شما انتخاب می‌کنید تا الکترام فایل کیف‌پول شما رو با این پسورد رمزگذاری کنه. اگر پسورد نگذارید هرکس به کامپیوتر شما دسترسی داشته باشه میتونه xpub شما رو ببینه و از بیت‌کوین‌های شما سردربیاره ولی نمیتونه خرجشون کنه.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_addresses_tab.png">
    <div class="step-three-screenshot-notes">کیف پول آنلاین شما درست شده. حالا به بخش Addresses برید و باید مطمئن بشید که آدرسهایی که اینجا می‌بینید عینا با آدرسهایی که توی والت سیستم آفلاین می‌بینید باشه. این خیلی مهمه. دو-سه تا آدرس رو بصورت رندوم چک کنید و مطمئن بشید که آدرسها مطابقت دارن. برای واریز بیت‌کوین به این کیف‌پول قبلا صحبت شده، فقط کافیه یکی از این آدرسها رو به صرافی یا کسی بدید که براتون به اون آدرس ارسال کنه و بیاد توی کیف‌پولتون. دقت کنید اون بالا نوشته watching-only یعنی این کیف‌پول از کلید خصوصی شما اطلاعی نداره و فقط از موجودی بیت‌کوین و آدرسهای شما خبر داره.</div>    
</div>

---

<div class="step-three-section-header">
ارسال بیت‌کوین:
</div>


<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_send_tab.png">
    <div class="step-three-screenshot-notes">اگر بخواید بیت‌کوین از این کیف‌پول برای کسی ارسال کنید باید از الکترام سیستمی که به اینترنت وصله بخواید براتون یک تراکنش درست کنه. و از بیت‌کوین های شما به اندازه ای که شما می‌خواید به اون آدرس بفرسته. کیف پول الکترام شما با توجه به اطلاعاتی که از مقادیر بیت‌کوین شما و آدرسهای شما داره می‌تونه اینکار رو انجام بده. پس به قسمت send برید و آدرسی که می‌خواید براش بیت‌کوین ارسال کنید رو بزنید. تنها چیزی که می‌بینید فرق کرده اینه که دیگه شما گزینه send رو نمی‌بینید. چون این کیف‌پول شما کلید خصوصی نداره و بلد نیست تراکنش رو sign کنه. کاری که باید بکنیم اینه که باید تراکنش رو ببریم به سیستم vm که آفلاینه و اونجا تراکنش رو sign کنیم.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_txinfo_form.png">
    <div class="step-three-screenshot-notes">وقتی روی دکمه preview کلیک کنید می‌بینید که این صفحه باز میشه و اطلاعات دقیقتری از بیت‌کوینهایی که قراره توی این تراکنش وارد بشن و آدرسی که میخواید بهش ارسال کنید بهتون نشون می‌ده. اینجا هم آپشن send نداره و کاری که باید بکنید اینه که روی دکمه copy کلیک کنید تا این تراکنش توی clipboard شما ذخیره بشه.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_loadtx_fromtext.png">
    <div class="step-three-screenshot-notes">حالا باید برید روی سیستم vm آفلاین و اونجا به التکرام بگین که می‌خواین یک تراکنش رو واردش کنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_paste_tx_rawtx.png">
    <div class="step-three-screenshot-notes">تراکنش داخل clipboard شماست و باید اونجا کپی کنیدش و دکمه load transaction رو بزنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_review_tx_form.png">
    <div class="step-three-screenshot-notes">دوباره همون صفحه ای رو می‌بینید که توی الکترام سیستم متصل به اینترنتتون دیده بودید. ورودی و خروجی و آدرس گیرنده و مقدار رو بررسی کنید و حالا دکمه sign رو بزنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_sign_rawtx.png">
    <div class="step-three-screenshot-notes">اینجاست که الکترام پسوردی که برای محافظت از کیف‌پول داده بودید رو ازتون می‌خواد. پسورد رو بزنید. اگر خواستید با onscreen keyboard</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/cold_wallet_copy_rawtx.png">
    <div class="step-three-screenshot-notes">تراکنش شما با موفقیت sign شده ولی این سیستم اینترنت نداره تا بتونه این تراکنش رو به شبکه بیت‌کوین ارسال کنه. پس باید همون کاری که کردیم حالا دوباره برعکس انحام بدیم و این تراکنش sign شده رو به الکترامی که به اینترنت دسترسی داره برسونیم. روی دکمه copy کلیک کنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_loadtx_fromtext.png">
    <div class="step-three-screenshot-notes">آوردن پنجره کپی تراکنش</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_paste_tx_rawtx.png">
    <div class="step-three-screenshot-notes">تراکنشی که توی clipboard شماست رو اینجا کپی کنید و load transaction رو بزنید.</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_review_tx.png">
    <div class="step-three-screenshot-notes">برای آخرین بار تراکنش رو از همه نظر بررسی کنید</div>    
</div>

---

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/hot_wallet_broadcast_tx.png">
    <div class="step-three-screenshot-notes">روی دکمه broadcast کلیک کنید. اگر همه مراحل کار رو درست انجام داده باشید الکترام تراکنش شما رو با موفقیت به شبکه بیت‌کوین ارسال می کنه و txid اون رو به شما نشون میده.</div>    
</div>

---

<div class="step-three-section-header">
تنظیم shortcut الکترام برای باز شدن در حالت testnet:
</div>

<div class="step-three_electrum-screenshot-container">
    <img class="step-three-electrum-screenshots" src="/assets/screenshots/electrum-screenshots/windows_shortcut_testnet.png">
    <div class="step-three-screenshot-notes">در قسمت target و بعد از جایی که نوشته تمام شده عینا شبیه به عکس کلمه testnet-- رو اضافه کنید. بعد از باز کردن الکترام حتما چک کنید بالای صفحه نوشته شده باشه:‌ Electrum Testnet</div>    
</div>

---

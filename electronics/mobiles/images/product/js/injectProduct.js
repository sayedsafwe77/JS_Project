var item=document.getElementsByClassName('photo');
var desc=document.getElementsByClassName('descriptions');
var price=document.getElementsByClassName('price');
var product=document.getElementById("productName");
var id=localStorage.getItem('id');
if(id=='mobilesamsung')
{
item[0].setAttribute('src','../samsung/samsung1.jpg');
item[1].setAttribute('src','../samsung/samsung2.jpg');
item[1].setAttribute('src','../samsung/samsung3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
The Samsung Galaxy A10s Dual-SIM mobile phone delivers an outstanding<br>\
performance, even when handling heavy-duty tasks. It is driven by a highly<br>\
advanced Octa-Core processor that gives it incredible power for delivering<br>\
a flawless performance. Thanks to 2GB RAM, you can flip through menus,<br>\
switch between applications or browser tabs, without experiencing any lags.<br>\ This smartphone<br>\
</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
The Samsung Galaxy A10s Dual-SIM mobile phone delivers an outstanding<br>\
performance, even when handling heavy-duty tasks. It is driven by a highly<br>\
advanced Octa-Core processor that gives it incredible power for delivering<br>\
a flawless performance. Thanks to 2GB RAM, you can flip through menus,<br>\
switch between applications or browser tabs, without experiencing any lags.<br>\ This smartphone<br>\
</pre>';
price[0].textContent='1,777.00 EGP';
price[1].textContent='1,999.00 EGP';
product.textContent='Samsung Galaxy A10s Dual SIM';
}
else if(id=='mobileApple')
{
item[0].setAttribute('src','../apple/apple1.jpg');
item[1].setAttribute('src','../apple/apple2.jpg');
item[2].setAttribute('src','../apple/apple3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
The Apple iPhone Xs Max smartphone offers the best of both, technology and style.<br>\
This Apple smartphone with the 6.5inch Super Retina OLED display delivers images <br>\
that keep you glued to the screen for long. With wide color gamut and True Tone feature,<br>\
this Apple smartphone delivers images that are pleasing to the eye. The 12MP rear and 7MP <br>\
front camera let you click photos and record 4K<br>\</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
The Apple iPhone Xs Max smartphone offers the best of both, technology and style.<br>\
This Apple smartphone with the 6.5inch Super Retina OLED display delivers images <br>\
that keep you glued to the screen for long. With wide color gamut and True Tone feature,<br>\
this Apple smartphone delivers images that are pleasing to the eye. The 12MP rear and 7MP <br>\
front camera let you click photos and record 4K<br>\
</pre>';
price[0].textContent='13,333.00 EGP';
price[1].textContent='';
product.textContent='Apple Iphone XS Max With Facetime';
}
else if(id=='mobileoppo')
{
item[0].setAttribute('src','../oppo/oppo1.jpg');
item[1].setAttribute('src','../oppo/oppo2.jpg');
item[2].setAttribute('src','../oppo/oppo3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand<br>\
OPPO<br>\
NETWORK<br>\
Technology: GSM / HSPA / LTE<br>\
2G bands: GSM 850 / 900 / 1800 / 1900 - SIM 1 and SIM 2<br>\
3G bands: HSDPA 850 / 900 / 2100<br>\
4G bands: 1, 3, 5, 7, 8, 38, 40, 41<br>\
Speed: HSPA, LTE-A<br>\
BODY<br>\
Dimensions: 160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)<br>\
Weight: 170 g (6.00 oz)<br>\
SIM: Dual SIM (Nano-SIM, dual stand-by)<br>\
DISPLAY<br>\
Type: AMOLED capacitive touchscreen, 16M colors<br>\</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand<br>\
OPPO<br>\
NETWORK<br>\
Technology: GSM / HSPA / LTE<br>\
2G bands: GSM 850 / 900 / 1800 / 1900 - SIM 1 and SIM 2<br>\
3G bands: HSDPA 850 / 900 / 2100<br>\
4G bands: 1, 3, 5, 7, 8, 38, 40, 41<br>\
Speed: HSPA, LTE-A<br>\
BODY<br>\
Dimensions: 160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)<br>\
Weight: 170 g (6.00 oz)<br>\
SIM: Dual SIM (Nano-SIM, dual stand-by)<br>\
DISPLAY<br>\
Type: AMOLED capacitive touchscreen, 16M colors<br>\
</pre>';
price[0].textContent='4,385.00 EGP';
price[1].textContent='4,750.00 EGP';
product.textContent='OPPO Reno3 Dual SIM Mobile';
}
else if(id=='mobilereno')
{
item[0].setAttribute('src','../realme/realme1.jpg');
item[1].setAttribute('src','../realme/realme2.jpg');
item[2].setAttribute('src','../realme/realme3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;"><br>\
Brand<br>\
REAL ME<br>\
NETWORK<br>\
Technology: GSM / HSPA / LTE<br>\
2G bands: GSM 850 / 900 / 1800 / 1900 - SIM 1 and SIM 2<br>\
3G bands: HSDPA 850 / 900 / 2100<br>\
4G bands: 1, 3, 5, 7, 8, 38, 40, 41<br>\
Speed: HSPA, LTE-A<br>\
BODY<br>\
Dimensions: 160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)<br>\
Weight: 170 g (6.00 oz)<br>\
SIM: Dual SIM (Nano-SIM, dual stand-by)<br>\
DISPLAY<br>\
Type: AMOLED capacitive touchscreen, 16M colors<br>\
</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand<br>\
REAL ME<br>\
NETWORK<br>\
Technology: GSM / HSPA / LTE<br>\
2G bands: GSM 850 / 900 / 1800 / 1900 - SIM 1 and SIM 2<br>\
3G bands: HSDPA 850 / 900 / 2100<br>\
4G bands: 1, 3, 5, 7, 8, 38, 40, 41<br>\
Speed: HSPA, LTE-A<br>\
BODY<br>\
Dimensions: 160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)<br>\
Weight: 170 g (6.00 oz)<br>\
SIM: Dual SIM (Nano-SIM, dual stand-by)<br>\
DISPLAY<br>\
Type: AMOLED capacitive touchscreen, 16M colors<br>\</pre>';
price[0].textContent='4,788.47 EGP';
price[1].textContent='4,790.47 EGP';
product.textContent='Real me 7 Dual SIM';
}


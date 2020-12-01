var item=document.getElementsByClassName('photo');
var desc=document.getElementsByClassName('descriptions');
var price=document.getElementsByClassName('price');
var product=document.getElementById("productName");
var id=localStorage.getItem('id');
if(id=='tvsamsung')
{
item[0].setAttribute('src','../samsung/samsung1.jpg');
item[1].setAttribute('src','../samsung/samsung2.jpg');
item[2].setAttribute('src','../samsung/samsung3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand : samsung<br>\
Hardware Platform : windows<br>\
Color : Black<br>\
Operating System Type : Windows 10<br>\
Hard Disk Capacity : 256 GB<br>\
Screen Size Range : 15 - 15.9 inches<br>\
Processor Type : Intel Core i5-9300H<br>\
USB : USB 3.1<br>\
Hard Disk Interface : PCIe & Serial ATA<br>\
Display Size (Inch) : 15.6 inches<br>\
Memory Card Reader : No<br>\
RAM Size : 8 GB<br>\
Processor Family : Intel Core i5<br>\
Number of Processor Core : Quad Core<br>\
Video Controller<br>\
</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand : samsung<br>\
Hardware Platform : windows<br>\
Color : Black<br>\
Operating System Type : Windows 10<br>\
Hard Disk Capacity : 256 GB<br>\
Screen Size Range : 15 - 15.9 inches<br>\
Processor Type : Intel Core i5-9300H<br>\
USB : USB 3.1<br>\
Hard Disk Interface : PCIe & Serial ATA<br>\
Display Size (Inch) : 15.6 inches<br>\
Memory Card Reader : No<br>\
RAM Size : 8 GB<br>\
Processor Family : Intel Core i5<br>\
Number of Processor Core : Quad Core<br>\
Video Controller<br>\
</pre>';
price[0].textContent='$15,444.00';
price[1].textContent='$16,999.00';
product.textContent='samsung 52 inch smart tv';
}
else if(id=='tvLG')
{
item[0].setAttribute('src','../LG/LG1.jpg');
item[1].setAttribute('src','../LG/LG2.jpg');
item[2].setAttribute('src','../LG/LG3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand : LG<br>\
Hardware Platform : linux<br>\
Color : Silver<br>\
Operating System Type : Ubuntu<br>\
Hard Disk Capacity : 1.256 TB<br>\
Screen Size Range : 15 - 15.9 inches<br>\
Processor Type : Core i7 (10th Generation)<br>\
USB : USB 2.0 & 3.0 & 3.1<br>\
Hard Disk Interface : PCIe & Serial ATA<br>\
Display Size (Inch) : 15.6 inches<br>\
Memory Card Reader : No<br>\
RAM Size : 8 GB<br>\
Processor Family : Intel Core i7<br>\
Number of Processor Core : Quad\
</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand : LG<br>\
Hardware Platform : linux<br>\
Color : Silver<br>\
Operating System Type : Ubuntu<br>\
Hard Disk Capacity : 1.256 TB<br>\
Screen Size Range : 15 - 15.9 inches<br>\
Processor Type : Core i7 (10th Generation)<br>\
USB : USB 2.0 & 3.0 & 3.1<br>\
Hard Disk Interface : PCIe & Serial ATA<br>\
Display Size (Inch) : 15.6 inches<br>\
Memory Card Reader : No<br>\
RAM Size : 8 GB<br>\
Processor Family : Intel Core i7<br>\
Number of Processor Core : Quad\
</pre>';
price[0].textContent='$15,999.00';
price[1].textContent='$18,000.00';
product.textContent='LG 52 inch smart tv';
}
else if(id=='tvtornado')
{
item[0].setAttribute('src','../tornado/tornado1.jpg');
item[1].setAttribute('src','../tornado/tornado2.jpg');
item[2].setAttribute('src','../tornado/tornado3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand : tornado<br>\
Hardware Platform : DOS<br>\
Color : Black<br>\
Operating System Type : DOS<br>\
Hard Disk Capacity : 1 TB<br>\
Screen Size Range : 15 - 15.9 Inch<br>\
Processor Type : Core i7 (9th Generation)<br>\
USB : USB 2.0 & 3.0 & 3.1<br>\
Hard Disk Interface : ATA<br>\
Display Size (Inch) : 15.6 Inch<br>\
Memory Card Reader : Yes<br>\
RAM Size : 16 GB<br>\
Processor Family : Intel 9th Generation Core i7<br>\
Number of Processor Core : Hexa Core<br>\
Video<br>\
</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Brand : tornado<br>\
Hardware Platform : DOS<br>\
Color : Black<br>\
Operating System Type : DOS<br>\
Hard Disk Capacity : 1 TB<br>\
Screen Size Range : 15 - 15.9 Inch<br>\
Processor Type : Core i7 (9th Generation)<br>\
USB : USB 2.0 & 3.0 & 3.1<br>\
Hard Disk Interface : ATA<br>\
Display Size (Inch) : 15.6 Inch<br>\
Memory Card Reader : Yes<br>\
RAM Size : 16 GB<br>\
Processor Family : Intel 9th Generation Core i7<br>\
Number of Processor Core : Hexa Core<br>\
Video<br>\
</pre>';
price[0].textContent='$18,500.00';
price[1].textContent='$21,999.00';
product.textContent='tornado 52 inch smart tv';
}
else if(id=='tvtoshiba')
{
item[0].setAttribute('src','../toshiba/toshiba1.jpg');
item[1].setAttribute('src','../toshiba/toshiba2.jpg');
item[2].setAttribute('src','../toshiba/toshiba3.jpg');
desc[0].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;"><br>\
Experience the best of gaming and portability with the toshiba GX701GXR ROG-Zephyrus-S <br>\
toshiba. The sleek and robust frame of the laptop offers superior<br>\
durability. The precision-engineered device packs in exceptional technology<br>\
within its slim design, allowing you to carry the laptop everywhere you go. <br>\
This ASUS ROG-Zephyrus-S gaming\
</pre>';
desc[1].innerHTML=
'<pre style="color: blue ;text-align: left;font-weight: bold;font-size: 1.2em;">\
Experience the best of gaming and portability with the toshiba GX701GXR ROG-Zephyrus-S <br>\
toshiba. The sleek and robust frame of the laptop offers superior<br>\
durability. The precision-engineered device packs in exceptional technology<br>\
within its slim design, allowing you to carry the laptop everywhere you go. <br>\
This ASUS ROG-Zephyrus-S gaming\</pre>';
price[0].textContent='$49,999.00';
price[1].textContent='$63,354.00';
product.textContent='toshiba 52 inch smart tv';
}


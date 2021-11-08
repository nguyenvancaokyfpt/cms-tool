// ==UserScript==
// @name         Tool 10 điểm MAE101 - Practice Test 3
// @namespace    nguyenvancaoky.me
// @version      0.1
// @description  :)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @author       Nguyễn Văn Cao Kỳ
// @match        https://cmshn.fpt.edu.vn/*
// @icon         https://animehay.site/themes/img/favicon.ico
// ==/UserScript==

appendMenu();
appendFunc();

function appendMenu(){
    var divBlock = `<div style="z-index: 99999;position: absolute;right: 8px;bottom: 8px;width: 230px;height: 35px;background-color: #d9dde8;border-radius: 6px;" id="menu"><p style=" font-size: 13px; color: #000000; padding: 8px 10px; text-align: center; " id="log">Tool by <a href="https://www.facebook.com/NguyenVanCaoKy" style="text-decoration: none">Nguyễn Văn Cao Kỳ</a></p></div>`;
    $("body").append(divBlock);
}
function appendFunc(){
    var func = document.createElement("script");
    func.innerHTML = `var _0xb9d3=["\x6B\x65\x79\x64\x6F\x77\x6E","\x63\x6F\x64\x65","\x4B\x65\x79\x58","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x47\x45\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x65\x73\x65\x6E\x74\x61\x74\x69\x6F\x6E\x2E\x6E\x67\x75\x79\x65\x6E\x76\x61\x6E\x63\x61\x6F\x6B\x79\x2E\x6D\x65\x2F\x64\x61\x74\x61\x2E\x70\x68\x70","\x61\x6C\x6C\x44\x61\x74\x61","\x61\x6A\x61\x78","\x2E\x71\x75\x65","\x71\x75\x65\x73\x74\x69\x6F\x6E","","\x72\x65\x70\x6C\x61\x63\x65","\x74\x65\x78\x74","\x2E\x71\x74\x65\x78\x74","\x66\x69\x6E\x64","\x70\x75\x73\x68","\x65\x61\x63\x68","\x2E\x61\x6E\x73\x77\x65\x72\x20\x6C\x61\x62\x65\x6C","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x54\x68\x65\x63\x6F\x72\x72\x65\x63\x74\x61\x6E\x73\x77\x65\x72\x69\x73","\x61\x6E\x73\x77\x65\x72","\x41","\x42","\x43","\x44","\x45","\x46","\x43\xE2\x75\x20\x6E\xE0\x79\x20\x74\u1EF1\x20\x6C\xE0\x6D\x20\u0111\x69\x2E"];document[_0xb9d3[3]](_0xb9d3[0],function(_0x725ax1){if(_0x725ax1[_0xb9d3[1]]== _0xb9d3[2]){run()}});function run(){$[_0xb9d3[7]]({async:!1,type:_0xb9d3[4],url:_0xb9d3[5],success:function(_0x725ax3){document[_0xb9d3[6]]= _0x725ax3}});let _0x725ax4=$(_0xb9d3[8]);let _0x725ax5= new Array();$(_0x725ax4)[_0xb9d3[16]](function(_0x725ax6,_0x725ax7){var _0x725ax3= new Object();_0x725ax3[_0xb9d3[9]]= $(this)[_0xb9d3[14]](_0xb9d3[13])[_0xb9d3[12]]()[_0xb9d3[11]](/[^a-zA-Z0-9-]+/g,_0xb9d3[10]);_0x725ax5[_0xb9d3[15]](_0x725ax3)});let _0x725ax8=$(_0xb9d3[17]);let _0x725ax9= new Array();$(_0x725ax8)[_0xb9d3[16]](function(_0x725ax6,_0x725ax7){var _0x725ax3=$(this)[_0xb9d3[12]]()[_0xb9d3[11]](/[^a-zA-Z0-9-]+/g,_0xb9d3[10])[_0xb9d3[18]](1);_0x725ax9[_0xb9d3[15]](_0x725ax3)});var _0x725axa=!1;$(document[_0xb9d3[6]])[_0xb9d3[16]](function(_0x725ax6,_0x725ax7){if(_0x725ax5[0][_0xb9d3[9]]== this[_0xb9d3[9]]){_0x725axa= this[_0xb9d3[20]][_0xb9d3[11]](_0xb9d3[19],_0xb9d3[10])}});if(_0x725axa){var _0x725axb=!1;$(_0x725ax9)[_0xb9d3[16]](function(_0x725ax6,_0x725ax7){if(this== _0x725axa){_0x725axb= _0x725ax6}});switch(_0x725axb){case 0:pos_text= _0xb9d3[21];break;case 1:pos_text= _0xb9d3[22];break;case 2:pos_text= _0xb9d3[23];break;case 3:pos_text= _0xb9d3[24];break;case 4:pos_text= _0xb9d3[25];break;case 5:pos_text= _0xb9d3[26];break;default:pos_text= _0x725axb};alert(pos_text)}else {alert(_0xb9d3[27])}}`;
    $("body").append(func);
    console.log('INJECTED HACK ----> OK')
}

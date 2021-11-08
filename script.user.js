// ==UserScript==
// @name         Tool 10 điểm MAE101 - Practice Test 3
// @namespace    nguyenvancaoky.me
// @version      1.0
// @description  :)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @author       Nguyễn Văn Cao Kỳ
// @match        https://cmshn.fpt.edu.vn/*
// @icon         https://animehay.site/themes/img/favicon.ico
// @updateURL    https://github.com/nguyenvancaokyfpt/cmsfpt-tool/raw/main/script.user.js
// @downloadURL  https://github.com/nguyenvancaokyfpt/cmsfpt-tool/raw/main/script.user.js
// @license      MIT
// ==/UserScript==

appendMenu();
appendFunc();

function appendMenu(){
    var divBlock = `<div style="z-index: 99999;position: absolute;right: 8px;bottom: 8px;width: 230px;height: 35px;background-color: #d9dde8;border-radius: 6px;" id="menu"><p style=" font-size: 13px; color: #000000; padding: 8px 10px; text-align: center; " id="log">Tool by <a href="https://www.facebook.com/NguyenVanCaoKy" style="text-decoration: none">Nguyễn Văn Cao Kỳ</a></p></div>`;
    $("body").append(divBlock);
}
function appendFunc(){
    var func = document.createElement("script");
    func.innerHTML = `var _0xfd77=["\x6B\x65\x79\x64\x6F\x77\x6E","\x63\x6F\x64\x65","\x4B\x65\x79\x58","\x4B\x65\x79\x5A","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x2E\x71\x75\x65","\x71\x75\x65\x73\x74\x69\x6F\x6E","","\x72\x65\x70\x6C\x61\x63\x65","\x74\x65\x78\x74","\x2E\x71\x74\x65\x78\x74","\x66\x69\x6E\x64","\x61\x6E\x73\x77\x65\x72","\x2E\x72\x69\x67\x68\x74\x61\x6E\x73\x77\x65\x72","\x70\x75\x73\x68","\x65\x61\x63\x68","\x50\x4F\x53\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x65\x73\x65\x6E\x74\x61\x74\x69\x6F\x6E\x2E\x6E\x67\x75\x79\x65\x6E\x76\x61\x6E\x63\x61\x6F\x6B\x79\x2E\x6D\x65\x2F\x3F\x61\x63\x74\x69\x6F\x6E\x3D\x69\x6E\x73\x65\x72\x74","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x6D\x65\x73\x73\x61\x67\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x6A\x73\x6F\x6E","\x61\x6A\x61\x78","\x47\x45\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x65\x73\x65\x6E\x74\x61\x74\x69\x6F\x6E\x2E\x6E\x67\x75\x79\x65\x6E\x76\x61\x6E\x63\x61\x6F\x6B\x79\x2E\x6D\x65\x2F\x3F\x61\x63\x74\x69\x6F\x6E\x3D\x73\x65\x6C\x65\x63\x74","\x61\x6C\x6C\x44\x61\x74\x61","\x2E\x61\x6E\x73\x77\x65\x72\x20\x6C\x61\x62\x65\x6C","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x54\x68\x65\x63\x6F\x72\x72\x65\x63\x74\x61\x6E\x73\x77\x65\x72\x69\x73","\x41","\x42","\x43","\x44","\x45","\x46","\x43\xE2\x75\x20\x6E\xE0\x79\x20\x74\u1EF1\x20\x6C\xE0\x6D\x20\u0111\x69\x2E"];document[_0xfd77[4]](_0xfd77[0],function(_0xe3c4x1){if(_0xe3c4x1[_0xfd77[1]]== _0xfd77[2]){run()};if(_0xe3c4x1[_0xfd77[1]]== _0xfd77[3]){upload()}});function upload(){let _0xe3c4x3=$(_0xfd77[5]);let _0xe3c4x4= new Array();$(_0xe3c4x3)[_0xfd77[15]](function(_0xe3c4x5,_0xe3c4x6){var _0xe3c4x7= new Object();_0xe3c4x7[_0xfd77[6]]= $(this)[_0xfd77[11]](_0xfd77[10])[_0xfd77[9]]()[_0xfd77[8]](/[^a-zA-Z0-9-]+/g,_0xfd77[7]);_0xe3c4x7[_0xfd77[12]]= $(this)[_0xfd77[11]](_0xfd77[13])[_0xfd77[9]]()[_0xfd77[8]](/[^a-zA-Z0-9-]+/g,_0xfd77[7]);_0xe3c4x4[_0xfd77[14]](_0xe3c4x7)});$[_0xfd77[22]]({type:_0xfd77[16],url:_0xfd77[17],data:JSON[_0xfd77[18]](_0xe3c4x4),success:function(_0xe3c4x7){alert(_0xe3c4x7[_0xfd77[19]])},contentType:_0xfd77[20],dataType:_0xfd77[21]})}function run(){$[_0xfd77[22]]({async:!1,type:_0xfd77[23],url:_0xfd77[24],success:function(_0xe3c4x7){document[_0xfd77[25]]= _0xe3c4x7}});let _0xe3c4x9=$(_0xfd77[5]);let _0xe3c4xa= new Array();$(_0xe3c4x9)[_0xfd77[15]](function(_0xe3c4x5,_0xe3c4x6){var _0xe3c4x7= new Object();_0xe3c4x7[_0xfd77[6]]= $(this)[_0xfd77[11]](_0xfd77[10])[_0xfd77[9]]()[_0xfd77[8]](/[^a-zA-Z0-9-]+/g,_0xfd77[7]);_0xe3c4xa[_0xfd77[14]](_0xe3c4x7)});let _0xe3c4xb=$(_0xfd77[26]);let _0xe3c4xc= new Array();$(_0xe3c4xb)[_0xfd77[15]](function(_0xe3c4x5,_0xe3c4x6){var _0xe3c4x7=$(this)[_0xfd77[9]]()[_0xfd77[8]](/[^a-zA-Z0-9-]+/g,_0xfd77[7])[_0xfd77[27]](1);_0xe3c4xc[_0xfd77[14]](_0xe3c4x7)});var _0xe3c4xd=!1;$(document[_0xfd77[25]])[_0xfd77[15]](function(_0xe3c4x5,_0xe3c4x6){if(_0xe3c4xa[0][_0xfd77[6]]== this[_0xfd77[6]]){_0xe3c4xd= this[_0xfd77[12]][_0xfd77[8]](_0xfd77[28],_0xfd77[7])}});if(_0xe3c4xd){var _0xe3c4xe=!1;$(_0xe3c4xc)[_0xfd77[15]](function(_0xe3c4x5,_0xe3c4x6){if(this== _0xe3c4xd){_0xe3c4xe= _0xe3c4x5}});switch(_0xe3c4xe){case 0:pos_text= _0xfd77[29];break;case 1:pos_text= _0xfd77[30];break;case 2:pos_text= _0xfd77[31];break;case 3:pos_text= _0xfd77[32];break;case 4:pos_text= _0xfd77[33];break;case 5:pos_text= _0xfd77[34];break;default:pos_text= _0xe3c4xe};alert(pos_text)}else {alert(_0xfd77[35])}}`;
    $("body").append(func);
    console.log('INJECTED HACK ----> OK')
}

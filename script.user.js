// ==UserScript==
// @name         Tool CMSFPT
// @namespace    nguyenvancaoky.me
// @version      2.0
// @description  :)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @author       Nguyễn Văn Cao Kỳ
// @match        *cmshn.fpt.edu.vn/*
// @match        *online.hitu.edu.vn/*
// @icon         https://animehay.club/themes/img/favicon.ico
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
    func.innerHTML = `var _0x566aae=_0x4450;function _0x656d(){var _0x5b31df=['\x4f\x48\x67\x50\x68','\x67\x56\x52\x72\x69','\x35\x35\x35\x39\x35\x39\x34\x6d\x56\x46\x47\x50\x6d','\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70','\x52\x4c\x65\x4c\x68','\x70\x70\x4a\x68\x77','\x23\x64\x72\x6f\x70\x64\x6f\x77\x6e\x2d','\x4b\x68\u00f4\x6e\x67\x20\x63\u00f3\x20\x63','\x69\x6e\x66\x6f','\x50\x4f\x53\x54','\x6a\x73\x6f\x6e','\x47\x78\x7a\x53\x43','\x6d\x75\x6c\x74\x69\x70\x61\x72\x74\x2f','\x65\x61\x63\x68','\x22\x72\x69\x67\x68\x74\x61\x6e\x73\x77','\x64\x6f\x6e\x65','\x48\x76\x77\x45\x68','\x55\x54\x6a\x44\x7a','\x74\x65\x78\x74\x2e\x6d\x72\x2d\x31','\x4d\x6d\x70\x49\x69','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x74\x65\x78\x74','\x66\x6f\x72\x6d\x2d\x64\x61\x74\x61','\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x6d\x65\x74\x68\x6f\x64','\x56\x7a\x52\x65\x54','\x63\x6e\x61\x73\x52','\x41\x73\x48\x76\x62','\x6c\x6f\x67','\x6d\x59\x61\x56\x69','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x2e\x71\x75\x65','\x6f\x46\x6a\x64\x54','\x4f\x68\x7a\x72\x53','\x6c\x4f\x6b\x62\x77','\x62\x51\x66\x4c\x76','\x7a\x71\x58\x62\x50','\x34\x38\x39\x36\x38\x6f\x74\x4d\x52\x4c\x72','\x5a\x45\x70\x66\x44','\x4d\x44\x52\x46\x72','\x68\x63\x4f\x51\x6d','\x44\x4c\x6d\x44\x61','\x71\x50\x46\x52\x75','\x31\x33\x35\x39\x33\x36\x35\x34\x78\x44\x69\x71\x4d\x65','\x73\x67\x78\x69\x7a','\x76\x3e\x3c\x2f\x64\x69\x76\x3e','\x65\x72\x72\x6f\x72','\x54\x75\x57\x6b\x44','\x74\x61\x62\x6c\x65','\x61\x4e\x43\x6f\x54','\x35\x31\x37\x33\x36\x38\x5a\x42\x61\x67\x43\x62','\x61\x70\x70\x65\x6e\x64','\x4f\x72\x67\x64\x6b','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x4b\x65\x79\x5a','\x58\x6a\x43\x64\x79','\x56\x5a\x79\x42\x51','\x51\x43\x6f\x61\x4e','\x62\x4e\x72\x52\x57','\x6d\x69\x6d\x65\x54\x79\x70\x65','\x6c\x5a\x78\x50\x65','\x6d\x54\x4c\x61\x6b','\x61\x6e\x73\x77\x65\x72','\x59\x43\x7a\x61\x73','\x4b\x65\x79\x58','\x4e\x6e\x51\x7a\x76','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x39\x39\x32\x30\x31\x33\x75\x74\x48\x76\x68\x48','\x78\x6c\x6b\x53\x76','\x42\x76\x54\x66\x78','\x70\x72\x6f\x63\x65\x73\x73\x44\x61\x74','\x6d\x65\x73\x73\x61\x67\x65','\x69\x79\x43\x69\x66','\x2e\x6e\x67\x75\x79\x65\x6e\x76\x61\x6e','\x77\x61\x72\x6e','\x73\x74\x61\x74\x75\x73','\x63\x6f\x64\x65','\x70\x61\x72\x73\x65\x46\x72\x6f\x6d\x53','\x68\x74\x6d\x6c','\x51\x75\x53\x58\x59','\x59\x7a\x41\x42\x6f','\x72\x49\x6a\x57\x62','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x4c\x74\x72\x47\x6d','\x63\x74\x69\x6f\x6e\x3d\x73\x65\x61\x72','\x57\x63\x74\x78\x4d','\x42\x6d\x73\x63\x6c','\x52\x78\x62\x46\x79','\x6f\x71\x73\x44\x73','\x35\x4c\x70\x79\x57\x61\x4e','\x63\x46\x68\x5a\x58','\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e','\x66\x69\x6e\x64','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x57\x50\x63\x73\x63','\x4a\x4e\x51\x5a\x61','\x61\x70\x70\x6c\x79','\x61\x6a\x61\x78','\x72\x78\x74\x46\x59','\x44\x66\x48\x6f\x67','\x73\x65\x61\x72\x63\x68','\x62\x69\x6e\x64','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x47\x77\x6d\x67\x5a','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x56\x4e\x4a\x52\x43','\x37\x31\x32\x36\x35\x38\x44\x4c\x4a\x7a\x67\x44','\x2e\x71\x74\x65\x78\x74','\x70\x75\x73\x68','\x74\x72\x61\x63\x65','\x6f\x54\x49\x49\x5a','\x64\x61\x74\x61','\x2e\x72\x69\x67\x68\x74\x61\x6e\x73\x77','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x68\x61\x73\x68\x43\x6f\x64\x65','\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69','\x73\x74\x65\x6e\x65\x72','\x57\x74\x67\x65\x4e','\x41\x41\x56\x58\x48','\x79\x5a\x62\x7a\x77','\x49\x69\x4d\x59\x79','\x37\x63\x75\x7a\x78\x6e\x46','\x42\x54\x54\x76\x66','\x5a\x73\x74\x49\x68','\x6c\x65\x6e\x67\x74\x68','\x77\x73\x66\x58\x63','\x61\x72\x66\x69\x78\x22\x3e\x3c\x64\x69','\x31\x39\x30\x38\x32\x34\x38\x50\x54\x42\x45\x54\x49','\x4f\x48\x69\x53\x72','\x72\x56\x58\x79\x68','\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x66','\x71\x75\x65\x73\x74\x69\x6f\x6e','\x33\x30\x47\x66\x4a\x4f\x53\x70','\x57\x6a\x7a\x71\x6b','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72','\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61','\x55\x64\x67\x76\x71','\x33\x36\x30\x44\x79\x6a\x43\x4b\x6b','\x70\x61\x72\x73\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f','\x75\x74\x63\x6f\x6d\x65\x20\x63\x6c\x65','\x72\x65\x6d\x6f\x76\x65','\x69\x58\x55\x54\x6b','\x6e\x2f\x6a\x73\x6f\x6e','\x66\x46\x62\x74\x6f','\x2e\x61\x62\x6c\x6f\x63\x6b','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x63\x6f\x6e\x73\x6f\x6c\x65','\x56\x67\x7a\x65\x6b'];_0x656d=function(){return _0x5b31df;};return _0x656d();}function _0x4450(_0x2536da,_0x4206b8){var _0x656d4b=_0x656d();return _0x4450=function(_0x445035,_0x31e150){_0x445035=_0x445035-(-0x1c0a+0x6ee*0x4+-0x1*-0x1fd);var _0x15dd25=_0x656d4b[_0x445035];return _0x15dd25;},_0x4450(_0x2536da,_0x4206b8);}(function(_0x4bef96,_0xc4179){var _0x14db84=_0x4450,_0x212359=_0x4450,_0x5b4459=_0x4450,_0x5e3305=_0x4450,_0x1b8034=_0x4bef96();while(!![]){try{var _0x2d163b=-parseInt(_0x14db84(0x1f2))/(0x1935+0x13bb*-0x1+0x1d3*-0x3)+parseInt(_0x14db84(0x22a))/(0xd6a+-0x2*0x503+0x362*-0x1)+parseInt(_0x212359(0x1b3))/(0x1*0x2223+-0x1*0x1b8d+-0x693)*(-parseInt(_0x5e3305(0x1e5))/(0xea9+-0x2340+-0x149b*-0x1))+-parseInt(_0x5e3305(0x219))/(-0xf1+0x1*0x2287+-0x2191*0x1)*(-parseInt(_0x5b4459(0x1c1))/(-0x8f+0x20*-0x2+0xd5))+parseInt(_0x5e3305(0x239))/(-0x1b20+-0x24b5*0x1+0x3fdc)*(-parseInt(_0x212359(0x23f))/(-0x8eb+0xfd*-0x3+-0x7a*-0x19))+parseInt(_0x212359(0x1eb))/(-0xb5b+0xcd5+-0x171)+parseInt(_0x5b4459(0x1ad))/(0x26ad+0x49*0x3e+-0x3851*0x1)*(parseInt(_0x212359(0x203))/(-0x2ea*0xd+-0x1*-0x1ec7+-0x7a*-0xf));if(_0x2d163b===_0xc4179)break;else _0x1b8034['push'](_0x1b8034['shift']());}catch(_0x289c60){_0x1b8034['push'](_0x1b8034['shift']());}}}(_0x656d,-0x170c17+0xf4fb6+-0x148981*-0x1));var _0x4206b8=(function(){var _0x2e83f4=_0x4450,_0x4328f3=_0x4450,_0x2e7f02=_0x4450,_0x5939d3=_0x4450,_0x2e4e95={'\x52\x78\x62\x46\x79':function(_0x28b935,_0x5ec801){return _0x28b935!==_0x5ec801;},'\x41\x73\x48\x76\x62':_0x2e83f4(0x211),'\x42\x54\x54\x76\x66':function(_0x17933c,_0x1b678e){return _0x17933c(_0x1b678e);},'\x4d\x6d\x70\x49\x69':_0x2e83f4(0x231)+_0x2e83f4(0x1de),'\x41\x41\x56\x58\x48':_0x2e83f4(0x202)+_0x2e7f02(0x21d)+_0x4328f3(0x1af)+'\x20\x29','\x57\x63\x74\x78\x4d':function(_0x58c156,_0xc645f){return _0x58c156===_0xc645f;},'\x58\x59\x4d\x69\x67':'\x73\x6d\x74\x43\x76'},_0x23a8fe=!![];return function(_0x593366,_0x564083){var _0x2102d7=_0x5939d3,_0x55992c=_0x4328f3,_0x50306e=_0x5939d3,_0x173e24=_0x2e83f4,_0x32ea1f={'\x79\x5a\x62\x7a\x77':function(_0x1002a1,_0x21795c){var _0x21d5ee=_0x4450;return _0x2e4e95[_0x21d5ee(0x23a)](_0x1002a1,_0x21795c);},'\x78\x52\x6d\x4b\x56':function(_0x24f217,_0x495a77){return _0x24f217+_0x495a77;},'\x79\x4e\x78\x73\x53':_0x2e4e95[_0x2102d7(0x1d2)],'\x59\x43\x7a\x61\x73':_0x2e4e95[_0x55992c(0x236)]};if(_0x2e4e95[_0x50306e(0x215)](_0x2102d7(0x1ae),_0x2e4e95['\x58\x59\x4d\x69\x67']))_0x45c090=_0x32ea1f[_0x55992c(0x237)](_0x22a74b,_0x32ea1f['\x78\x52\x6d\x4b\x56'](_0x32ea1f['\x79\x4e\x78\x73\x53'],_0x32ea1f[_0x173e24(0x1ff)])+'\x29\x3b')();else{var _0x3afb03=_0x23a8fe?function(){var _0x3000f5=_0x55992c,_0xcde9e2=_0x2102d7,_0x50d2ca=_0x2102d7,_0xfa1278=_0x50306e;if(_0x2e4e95[_0x3000f5(0x217)](_0x2e4e95[_0x3000f5(0x1db)],_0x2e4e95[_0x50d2ca(0x1db)])){var _0x584ee9=_0x529cab[_0x50d2ca(0x220)](_0x159e63,arguments);return _0x318b45=null,_0x584ee9;}else{if(_0x564083){var _0x57b644=_0x564083[_0xcde9e2(0x220)](_0x593366,arguments);return _0x564083=null,_0x57b644;}}}:function(){};return _0x23a8fe=![],_0x3afb03;}};}()),_0x2536da=_0x4206b8(this,function(){var _0x558181=_0x4450,_0x112159=_0x4450,_0x2be9b0=_0x4450,_0x3f91ca=_0x4450,_0x5324c0={};_0x5324c0[_0x558181(0x241)]=_0x112159(0x1d7)+'\x2b\x24';var _0x23f120=_0x5324c0;return _0x2536da[_0x558181(0x226)]()[_0x112159(0x224)](_0x23f120[_0x558181(0x241)])[_0x2be9b0(0x226)]()[_0x558181(0x1bc)+'\x72'](_0x2536da)[_0x2be9b0(0x224)](_0x558181(0x1d7)+'\x2b\x24');});_0x2536da();var _0x510228=(function(){var _0x9b536e=_0x4450,_0x47f355=_0x4450,_0x3f145c=_0x4450,_0x399082=_0x4450,_0x37feef={'\x56\x4e\x4a\x52\x43':function(_0x5da0fd,_0x26d2d){return _0x5da0fd(_0x26d2d);},'\x62\x4e\x72\x52\x57':_0x9b536e(0x230)+'\x65\x72','\x51\x6b\x54\x78\x54':_0x9b536e(0x22b),'\x63\x6e\x61\x73\x52':function(_0x133159,_0xfd36c9){return _0x133159!==_0xfd36c9;},'\x4f\x48\x67\x50\x68':'\x71\x6d\x5a\x51\x71','\x6e\x4e\x57\x68\x57':function(_0x53791e,_0x11a8e0){return _0x53791e(_0x11a8e0);},'\x69\x79\x43\x69\x66':_0x9b536e(0x1df),'\x70\x47\x4e\x6e\x65':function(_0x1b246a,_0x49e3c0){return _0x1b246a(_0x49e3c0);},'\x4f\x72\x67\x64\x6b':_0x9b536e(0x1c8),'\x6d\x72\x45\x6d\x7a':_0x9b536e(0x1b5)+_0x9b536e(0x1b9),'\x44\x66\x48\x6f\x67':_0x399082(0x1c9)},_0x26e3d5=!![];return function(_0x1cbf9e,_0x3ab51f){var _0x5ccd28=_0x399082,_0x2c7376=_0x399082,_0x570d36=_0x47f355,_0x362054=_0x47f355,_0x20a9cf={'\x6c\x69\x5a\x41\x62':function(_0x4dc0b7,_0x392a27){return _0x37feef['\x6e\x4e\x57\x68\x57'](_0x4dc0b7,_0x392a27);},'\x42\x76\x54\x66\x78':_0x37feef[_0x5ccd28(0x208)],'\x49\x69\x4d\x59\x79':function(_0x57c254,_0x42b5d0){return _0x37feef['\x70\x47\x4e\x6e\x65'](_0x57c254,_0x42b5d0);},'\x55\x64\x67\x76\x71':_0x37feef[_0x2c7376(0x1f4)],'\x71\x50\x46\x52\x75':_0x5ccd28(0x1b0)+_0x362054(0x21b)+_0x362054(0x209)+'\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69'+_0x570d36(0x1b1)+'\x63\x74\x69\x6f\x6e\x3d\x69\x6e\x73\x65'+'\x72\x74','\x56\x7a\x52\x65\x54':_0x37feef['\x6d\x72\x45\x6d\x7a'],'\x4f\x64\x6f\x6a\x6d':_0x37feef[_0x570d36(0x223)]},_0x52e748=_0x26e3d5?function(){var _0xb87e7f=_0x570d36,_0x315872=_0x2c7376,_0x34c6a2=_0x362054,_0xe16949=_0x2c7376,_0x47e3f8={'\x56\x5a\x79\x42\x51':function(_0x55a822,_0x1c5cc8){var _0x296005=_0x4450;return _0x37feef[_0x296005(0x229)](_0x55a822,_0x1c5cc8);},'\x4a\x4e\x51\x5a\x61':_0x37feef[_0xb87e7f(0x1fa)],'\x6f\x54\x49\x49\x5a':_0x37feef['\x51\x6b\x54\x78\x54'],'\x72\x78\x74\x46\x59':function(_0x3b7520,_0x11bc7b){return _0x37feef['\x56\x4e\x4a\x52\x43'](_0x3b7520,_0x11bc7b);}};if(_0x37feef[_0xb87e7f(0x1da)](_0x37feef[_0x315872(0x1bf)],_0x37feef[_0x315872(0x1bf)])){let _0x57c94c=_0x20a9cf['\x6c\x69\x5a\x41\x62'](_0x4f9acc,_0x20a9cf[_0xe16949(0x205)]),_0xd55341=new _0x5f15fc();_0x20a9cf[_0xe16949(0x238)](_0x1efb28,_0x57c94c)[_0xe16949(0x1cc)](function(_0x2b1c4f,_0xf7758d){var _0x2e38aa=_0xe16949,_0x3feb60=_0xb87e7f,_0x5802de=_0xb87e7f,_0x488056=_0x34c6a2,_0x559a22=new _0xc6c1e0();_0x559a22[_0x2e38aa(0x1ac)]=_0x47e3f8[_0x2e38aa(0x1f8)](_0x2e6f54,this)['\x66\x69\x6e\x64'](_0x2e38aa(0x22b))[_0x3feb60(0x20e)](),_0x559a22[_0x5802de(0x1fe)]=_0x47e3f8[_0x2e38aa(0x1f8)](_0x28e526,this)[_0x2e38aa(0x21c)](_0x47e3f8[_0x2e38aa(0x21f)])[_0x488056(0x20e)](),_0x559a22[_0x2e38aa(0x232)]=_0x47e3f8[_0x3feb60(0x1f8)](_0x429a09,_0x47e3f8[_0x2e38aa(0x1f8)](_0xd4fc4c,this)[_0x3feb60(0x21c)](_0x47e3f8[_0x2e38aa(0x22e)])[_0x3feb60(0x1d4)]()),_0x559a22['\x75\x73\x65\x72']=_0x47e3f8[_0x5802de(0x222)](_0x44d8d5,_0x3feb60(0x1c5)+'\x31\x20\x3e\x20\x73\x70\x61\x6e\x20\x3e'+'\x20\x73\x70\x61\x6e\x2e\x75\x73\x65\x72'+'\x74\x65\x78\x74\x2e\x6d\x72\x2d\x31')[_0x3feb60(0x1d4)](),null!=_0x559a22['\x61\x6e\x73\x77\x65\x72']&&_0xd55341['\x70\x75\x73\x68'](_0x559a22);}),_0x71e72c[_0xe16949(0x1dc)](_0xd55341),_0x2593f3[_0xe16949(0x221)]({'\x74\x79\x70\x65':_0x20a9cf[_0xe16949(0x1b2)],'\x75\x72\x6c':_0x20a9cf[_0xe16949(0x1ea)],'\x64\x61\x74\x61':_0x5307fa[_0x34c6a2(0x1d3)](_0xd55341),'\x73\x75\x63\x63\x65\x73\x73':function(_0x12256b){var _0x56ac73=_0xb87e7f;_0x5ab2ca(_0x12256b[_0x56ac73(0x207)]),_0x2add78['\x6c\x6f\x67'](_0x12256b);},'\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70\x65':_0x20a9cf[_0xb87e7f(0x1d9)],'\x64\x61\x74\x61\x54\x79\x70\x65':_0x20a9cf['\x4f\x64\x6f\x6a\x6d']});}else{if(_0x3ab51f){var _0x248d90=_0x3ab51f[_0x34c6a2(0x220)](_0x1cbf9e,arguments);return _0x3ab51f=null,_0x248d90;}}}:function(){};return _0x26e3d5=![],_0x52e748;};}()),_0x5f05fc=_0x510228(this,function(){var _0x2f7ba5=_0x4450,_0x559860=_0x4450,_0x172638=_0x4450,_0x5d8552=_0x4450,_0x34a692={'\x6e\x53\x45\x64\x55':'\x59\x69\x6b\x53\x49','\x52\x4c\x65\x4c\x68':function(_0x4d4e67,_0x134c36){return _0x4d4e67(_0x134c36);},'\x49\x4d\x52\x6a\x73':function(_0x23b8da,_0xc96efe){return _0x23b8da+_0xc96efe;},'\x6c\x5a\x78\x50\x65':_0x2f7ba5(0x231)+_0x559860(0x1de),'\x57\x74\x67\x65\x4e':_0x559860(0x202)+_0x2f7ba5(0x21d)+_0x172638(0x1af)+'\x20\x29','\x4e\x6e\x51\x7a\x76':function(_0x35a9bc){return _0x35a9bc();},'\x48\x76\x77\x45\x68':_0x5d8552(0x1dc),'\x63\x6a\x58\x47\x68':_0x559860(0x20a),'\x6c\x4f\x6b\x62\x77':_0x172638(0x1c7),'\x55\x54\x6a\x44\x7a':_0x172638(0x212),'\x4f\x68\x7a\x72\x53':_0x2f7ba5(0x22d),'\x73\x67\x78\x69\x7a':function(_0x18ab5f,_0x3eda29){return _0x18ab5f<_0x3eda29;}},_0x12ac03=function(){var _0x265455=_0x2f7ba5,_0x53e320=_0x5d8552,_0x406255=_0x559860,_0x28e701=_0x559860;if(_0x265455(0x1ca)===_0x34a692['\x6e\x53\x45\x64\x55']){var _0x474ed0=_0x40cf86?function(){var _0x1a336f=_0x265455;if(_0x452248){var _0x31c273=_0xe9c2a4[_0x1a336f(0x220)](_0x3923b6,arguments);return _0x576995=null,_0x31c273;}}:function(){};return _0x27bd31=![],_0x474ed0;}else{var _0x35a9b4;try{_0x35a9b4=_0x34a692[_0x265455(0x1c3)](Function,_0x34a692['\x49\x4d\x52\x6a\x73'](_0x34a692[_0x265455(0x1fc)],_0x34a692[_0x53e320(0x235)])+'\x29\x3b')();}catch(_0x395ece){_0x35a9b4=window;}return _0x35a9b4;}},_0xfcc764=_0x34a692[_0x559860(0x201)](_0x12ac03),_0x5d8e27=_0xfcc764[_0x559860(0x1bd)]=_0xfcc764[_0x559860(0x1bd)]||{},_0x468a2a=[_0x34a692[_0x2f7ba5(0x1cf)],_0x34a692['\x63\x6a\x58\x47\x68'],_0x34a692[_0x2f7ba5(0x1e2)],_0x5d8552(0x1ee),_0x34a692[_0x5d8552(0x1d0)],_0x172638(0x1f0),_0x34a692[_0x2f7ba5(0x1e1)]];for(var _0x2f1e31=0x21cf+0x1*-0x2237+-0x34*-0x2;_0x34a692[_0x2f7ba5(0x1ec)](_0x2f1e31,_0x468a2a[_0x172638(0x23c)]);_0x2f1e31++){var _0x30fab0=_0x510228[_0x5d8552(0x1bc)+'\x72'][_0x2f7ba5(0x1f5)][_0x2f7ba5(0x225)](_0x510228),_0x272696=_0x468a2a[_0x2f1e31],_0x4023fa=_0x5d8e27[_0x272696]||_0x30fab0;_0x30fab0['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f']=_0x510228[_0x5d8552(0x225)](_0x510228),_0x30fab0[_0x2f7ba5(0x226)]=_0x4023fa[_0x172638(0x226)]['\x62\x69\x6e\x64'](_0x4023fa),_0x5d8e27[_0x272696]=_0x30fab0;}});_0x5f05fc();function upload(){var _0x19bee5=_0x4450,_0x37158b=_0x4450,_0x86c4e5=_0x4450,_0x13195c=_0x4450,_0x38b487={'\x5a\x73\x74\x49\x68':_0x19bee5(0x22b),'\x69\x58\x55\x54\x6b':function(_0x33c0a8,_0x27d98c){return _0x33c0a8(_0x27d98c);},'\x61\x4e\x43\x6f\x54':function(_0x383606,_0xc167ed){return _0x383606(_0xc167ed);},'\x4f\x48\x69\x53\x72':function(_0x55b006,_0x29b6bb){return _0x55b006(_0x29b6bb);},'\x54\x75\x57\x6b\x44':_0x37158b(0x1df),'\x54\x45\x71\x56\x42':_0x37158b(0x1c8),'\x70\x70\x4a\x68\x77':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f'+_0x37158b(0x1b9),'\x56\x67\x7a\x65\x6b':_0x19bee5(0x1c9)};let _0x1fd449=_0x38b487[_0x19bee5(0x240)]($,_0x38b487[_0x19bee5(0x1ef)]),_0x2dc849=new Array();_0x38b487[_0x37158b(0x240)]($,_0x1fd449)[_0x37158b(0x1cc)](function(_0x214fa6,_0x3c8ed2){var _0x102148=_0x13195c,_0x1b9f2e=_0x37158b,_0x38ccc9=_0x19bee5,_0x11754c=_0x86c4e5,_0x33bc54=new Object();_0x33bc54[_0x102148(0x1ac)]=$(this)[_0x102148(0x21c)](_0x38b487[_0x38ccc9(0x23b)])[_0x102148(0x20e)](),_0x33bc54[_0x11754c(0x1fe)]=_0x38b487[_0x11754c(0x1b8)]($,this)[_0x38ccc9(0x21c)]('\x2e\x72\x69\x67\x68\x74\x61\x6e\x73\x77'+'\x65\x72')[_0x102148(0x20e)](),_0x33bc54[_0x1b9f2e(0x232)]=_0x38b487[_0x1b9f2e(0x1b8)](hashCode,_0x38b487['\x69\x58\x55\x54\x6b']($,this)['\x66\x69\x6e\x64'](_0x38b487[_0x38ccc9(0x23b)])[_0x102148(0x1d4)]()),_0x33bc54['\x75\x73\x65\x72']=_0x38b487[_0x1b9f2e(0x1f1)]($,_0x102148(0x1c5)+'\x31\x20\x3e\x20\x73\x70\x61\x6e\x20\x3e'+'\x20\x73\x70\x61\x6e\x2e\x75\x73\x65\x72'+_0x1b9f2e(0x1d1))[_0x1b9f2e(0x1d4)](),null!=_0x33bc54[_0x11754c(0x1fe)]&&_0x2dc849[_0x1b9f2e(0x22c)](_0x33bc54);}),console[_0x86c4e5(0x1dc)](_0x2dc849),$[_0x86c4e5(0x221)]({'\x74\x79\x70\x65':_0x38b487['\x54\x45\x71\x56\x42'],'\x75\x72\x6c':_0x37158b(0x1b0)+_0x13195c(0x21b)+_0x13195c(0x209)+_0x19bee5(0x233)+'\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61'+'\x63\x74\x69\x6f\x6e\x3d\x69\x6e\x73\x65'+'\x72\x74','\x64\x61\x74\x61':JSON[_0x13195c(0x1d3)](_0x2dc849),'\x73\x75\x63\x63\x65\x73\x73':function(_0x505e02){var _0x5452b0=_0x19bee5;alert(_0x505e02[_0x5452b0(0x207)]),console['\x6c\x6f\x67'](_0x505e02);},'\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70\x65':_0x38b487[_0x13195c(0x1c4)],'\x64\x61\x74\x61\x54\x79\x70\x65':_0x38b487[_0x19bee5(0x1be)]});}function hashCode(_0x266024){var _0x29245b=_0x4450,_0x46a618=_0x4450,_0x5e94ba=_0x4450,_0x4d6a08=_0x4450,_0x22a395={};_0x22a395[_0x29245b(0x1e6)]=function(_0x42816a,_0x1850a4){return _0x42816a===_0x1850a4;},_0x22a395['\x66\x46\x62\x74\x6f']=function(_0x599db1,_0x5d4014){return _0x599db1+_0x5d4014;};var _0x474da3=_0x22a395,_0x54087a,_0x543085=-0x3*-0x8ea+0x17dc+0x11*-0x2fa;if(_0x474da3['\x5a\x45\x70\x66\x44'](-0x30e*-0x8+-0x1aff+0x28f,_0x266024[_0x29245b(0x23c)]))return _0x543085;for(_0x54087a=-0x229+0x240d+-0x21e4;_0x54087a<_0x266024[_0x29245b(0x23c)];_0x54087a++)_0x543085=_0x474da3[_0x46a618(0x1ba)]((_0x543085<<-0x1*0x19fb+-0x961+0x3*0xbcb)-_0x543085,_0x266024[_0x4d6a08(0x228)](_0x54087a)),_0x543085|=0x1b30+-0x29c*0xa+-0x118;return _0x543085;}function htmlDecode(_0x5c74a6){var _0x4b2d20=_0x4450,_0x1f36c5=_0x4450,_0x1e4453=_0x4450,_0x75a309={};_0x75a309[_0x4b2d20(0x204)]='\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c';var _0x299598=_0x75a309;return new DOMParser()[_0x4b2d20(0x20d)+'\x74\x72\x69\x6e\x67'](_0x5c74a6,_0x299598[_0x1e4453(0x204)])['\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c'+'\x65\x6d\x65\x6e\x74']['\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e'+'\x74'];}function run(){var _0xbb6fed=_0x4450,_0x51873f=_0x4450,_0x1cbc80=_0x4450,_0x742ad8=_0x4450,_0x30df4c={'\x64\x62\x4b\x42\x62':function(_0x37b2f2,_0x5517c7){return _0x37b2f2(_0x5517c7);},'\x4d\x44\x52\x46\x72':function(_0x205e6a,_0x2bf72a){return _0x205e6a+_0x2bf72a;},'\x73\x58\x70\x75\x42':function(_0x1fb1d7,_0x3d2f06){return _0x1fb1d7(_0x3d2f06);},'\x6f\x46\x6a\x64\x54':_0xbb6fed(0x1bb),'\x62\x51\x66\x4c\x76':function(_0x1949ab,_0x546c40){return _0x1949ab+_0x546c40;},'\x57\x50\x63\x73\x63':'\x3c\x64\x69\x76\x20\x69\x64\x3d\x22','\x77\x73\x66\x58\x63':function(_0x2cabec,_0x4d05c9){return _0x2cabec(_0x4d05c9);},'\x58\x6a\x43\x64\x79':'\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69'+_0xbb6fed(0x1ed),'\x6d\x59\x61\x56\x69':function(_0x29af96,_0x566c9e){return _0x29af96===_0x566c9e;},'\x67\x56\x52\x72\x69':'\x49\x79\x78\x51\x47','\x7a\x71\x58\x62\x50':_0xbb6fed(0x1fd),'\x59\x7a\x41\x42\x6f':function(_0x45f1f4,_0x2f4077){return _0x45f1f4(_0x2f4077);},'\x44\x4c\x6d\x44\x61':_0x742ad8(0x1c6)+'\u00e2\x75\x20\x74\x72\u1ea3\x20\x6c\u1edd\x69','\x6f\x71\x73\x44\x73':_0xbb6fed(0x1b0)+'\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e'+'\x2e\x6e\x67\x75\x79\x65\x6e\x76\x61\x6e'+_0xbb6fed(0x233)+_0x742ad8(0x1b1)+_0xbb6fed(0x214)+'\x63\x68','\x4c\x74\x72\x47\x6d':_0xbb6fed(0x1c8),'\x63\x46\x68\x5a\x58':_0x742ad8(0x1cb)+_0x51873f(0x1d5),'\x6b\x42\x52\x63\x65':function(_0x5364d3,_0x5c4a4a){return _0x5364d3(_0x5c4a4a);},'\x42\x6d\x73\x63\x6c':'\x2e\x71\x75\x65','\x47\x77\x6d\x67\x5a':function(_0x328285,_0x2acf99){return _0x328285(_0x2acf99);}};let _0x5e2de3=_0x30df4c['\x6b\x42\x52\x63\x65']($,_0x30df4c[_0xbb6fed(0x216)]);_0x30df4c[_0x1cbc80(0x227)]($,_0x5e2de3)[_0x51873f(0x1cc)](function(_0x171b6e,_0x45635d){var _0x31506d=_0x1cbc80,_0x1b2412=_0xbb6fed,_0x4669f1=_0x1cbc80,_0x3622dc=_0x742ad8;if(_0x30df4c[_0x31506d(0x1dd)](_0x30df4c[_0x31506d(0x1c0)],_0x30df4c[_0x4669f1(0x1e4)])){var _0x3e9728=_0x33181f[_0x1b2412(0x220)](_0x299564,arguments);return _0x347374=null,_0x3e9728;}else{let _0x579189=hashCode(_0x30df4c[_0x1b2412(0x210)]($,this)[_0x31506d(0x21c)](_0x3622dc(0x22b))[_0x31506d(0x1d4)]());var _0xd3e36=_0x30df4c[_0x1b2412(0x1e9)],_0x1c707a=new FormData();_0x1c707a['\x61\x70\x70\x65\x6e\x64']('\x71',_0x579189);var _0x33ee7d={};_0x33ee7d['\x75\x72\x6c']=_0x30df4c[_0x1b2412(0x218)],_0x33ee7d[_0x3622dc(0x1d8)]=_0x30df4c[_0x1b2412(0x213)],_0x33ee7d['\x74\x69\x6d\x65\x6f\x75\x74']=0x0,_0x33ee7d[_0x3622dc(0x206)+'\x61']=!(0x20de+-0x156e+-0xb6f),_0x33ee7d[_0x31506d(0x1fb)]=_0x30df4c[_0x1b2412(0x21a)],_0x33ee7d[_0x31506d(0x1c2)+'\x65']=!(0x235+-0xc3f+0xa0b),_0x33ee7d[_0x4669f1(0x22f)]=_0x1c707a;var _0x299478=_0x33ee7d;let _0x5ec166=this;$[_0x3622dc(0x221)](_0x299478)[_0x1b2412(0x1ce)](function(_0x12bb95){var _0x16a91d=_0x1b2412,_0x1f896a=_0x1b2412,_0x4d118d=_0x3622dc,_0xe076ec=_0x4669f1;'\x73\x75\x63\x63\x65\x73\x73'==JSON['\x70\x61\x72\x73\x65'](_0x12bb95)[_0x16a91d(0x20b)]&&(_0xd3e36=JSON[_0x1f896a(0x1b4)](_0x12bb95)[_0x16a91d(0x22f)][0xadf+0x1e71+0x295*-0x10][_0x1f896a(0x1fe)]),_0x30df4c['\x64\x62\x4b\x42\x62']($,_0x30df4c[_0x4d118d(0x1e7)]('\x23',_0x579189))[_0x16a91d(0x1b7)](),_0x30df4c['\x73\x58\x70\x75\x42']($,_0x5ec166)[_0x16a91d(0x21c)](_0x30df4c[_0x4d118d(0x1e0)])[_0x16a91d(0x1f3)](_0x30df4c[_0x16a91d(0x1e3)](_0x30df4c[_0x1f896a(0x1e3)](_0x30df4c['\x62\x51\x66\x4c\x76'](_0x30df4c['\x62\x51\x66\x4c\x76'](_0x30df4c[_0x1f896a(0x21e)],_0x579189),'\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6f'+_0x1f896a(0x1b6)+_0x1f896a(0x23e)+_0xe076ec(0x1ab)+'\x65\x65\x64\x62\x61\x63\x6b\x22\x3e\x3c'+_0xe076ec(0x1d6)+_0x1f896a(0x1cd)+'\x65\x72\x22\x3e'),_0x30df4c[_0xe076ec(0x23d)](htmlDecode,_0xd3e36)),_0x30df4c[_0x16a91d(0x1f7)])),console[_0x1f896a(0x1dc)](_0x12bb95);});}});}document['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69'+_0x566aae(0x234)]('\x6b\x65\x79\x64\x6f\x77\x6e',function(_0x482454){var _0x22cd92=_0x566aae,_0x1ff48e=_0x566aae,_0x294cbb=_0x566aae,_0x590c66=_0x566aae,_0x485e24={'\x51\x75\x53\x58\x59':function(_0x35c94a,_0x4ad37d){return _0x35c94a==_0x4ad37d;},'\x63\x6f\x69\x59\x55':_0x22cd92(0x200),'\x51\x43\x6f\x61\x4e':function(_0x129411){return _0x129411();},'\x68\x63\x4f\x51\x6d':function(_0x5ddd48){return _0x5ddd48();}};_0x485e24[_0x1ff48e(0x20f)](_0x485e24['\x63\x6f\x69\x59\x55'],_0x482454[_0x22cd92(0x20c)])&&_0x485e24[_0x294cbb(0x1f9)](run),_0x485e24[_0x1ff48e(0x20f)](_0x22cd92(0x1f6),_0x482454['\x63\x6f\x64\x65'])&&_0x485e24[_0x22cd92(0x1e8)](upload);});`;
    $("body").append(func);
    console.log('INJECTED HACK ----> OK')
}


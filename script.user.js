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
    func.innerHTML = `var _0x135ff7=_0x3a72,_0x2568e8=_0x3a72;(function(_0x4ba7ea,_0x4ec995){var _0x46eb6e=_0x3a72,_0x5c0ef6=_0x3a72,_0x1043e9=_0x3a72,_0x52f80d=_0x3a72,_0x3f4682=_0x4ba7ea();while(!![]){try{var _0x202c75=-parseInt(_0x46eb6e(0x224))/(0x3*-0x44+0x3*0x494+0x1*-0xcef)*(parseInt(_0x5c0ef6(0x22f))/(-0x1*0x18e1+0xfa5+0x93e))+-parseInt(_0x46eb6e(0x208))/(-0x23f9+0x59c+0x6*0x510)*(-parseInt(_0x5c0ef6(0x24e))/(0xacd+-0x2238+0x176f))+-parseInt(_0x46eb6e(0x1c7))/(-0xc2*-0x16+-0x3*0x12b+-0xd26)+parseInt(_0x5c0ef6(0x246))/(-0x127e+-0x1866+-0x3*-0xe4e)*(parseInt(_0x5c0ef6(0x1d8))/(0x1093*0x2+0xce9+-0x2e08))+-parseInt(_0x5c0ef6(0x1bd))/(-0x780+-0x1*-0xdfa+-0x672)+parseInt(_0x46eb6e(0x1e0))/(-0x2*-0x8+0x106e+-0x1075)*(-parseInt(_0x5c0ef6(0x1f1))/(0x17*-0x4+-0x4*-0x7b3+-0x1*0x1e66))+parseInt(_0x5c0ef6(0x214))/(0x4*-0x8ea+0x3d*-0x9f+0x4996);if(_0x202c75===_0x4ec995)break;else _0x3f4682['push'](_0x3f4682['shift']());}catch(_0xaae84f){_0x3f4682['push'](_0x3f4682['shift']());}}}(_0x3f4b,0x9*-0x1d72+0x2007a+0xc67f));var _0x1e7090=(function(){var _0x87619d=!![];return function(_0x24f2b5,_0x3e1edc){var _0x44142d=_0x87619d?function(){var _0x26fd19=_0x3a72;if(_0x3e1edc){var _0x10711b=_0x3e1edc[_0x26fd19(0x1e7)](_0x24f2b5,arguments);return _0x3e1edc=null,_0x10711b;}}:function(){};return _0x87619d=![],_0x44142d;};}()),_0x2f1f04=_0x1e7090(this,function(){var _0x5e49dc=_0x3a72,_0x229e97=_0x3a72,_0x4cf6d2=_0x3a72,_0x17d1dc=_0x3a72,_0x3d7267={};_0x3d7267['\x55\x63\x51\x77\x50']=_0x5e49dc(0x241)+'\x2b\x24';var _0x513984=_0x3d7267;return _0x2f1f04[_0x5e49dc(0x217)]()[_0x5e49dc(0x1cc)](_0x513984['\x55\x63\x51\x77\x50'])[_0x17d1dc(0x217)]()[_0x17d1dc(0x1ff)+'\x72'](_0x2f1f04)[_0x4cf6d2(0x1cc)](_0x513984[_0x17d1dc(0x21d)]);});_0x2f1f04();var _0x5eefaa=(function(){var _0x439adc=_0x3a72,_0x54a44d=_0x3a72,_0x58443d=_0x3a72,_0x1b012e={'\x6e\x56\x58\x4f\x4a':function(_0x4a73df,_0x5a4d2d){return _0x4a73df==_0x5a4d2d;},'\x57\x43\x65\x64\x53':'\x4b\x65\x79\x58','\x75\x65\x7a\x71\x54':function(_0x403591){return _0x403591();},'\x71\x5a\x76\x42\x57':function(_0x25c20c,_0x146aab){return _0x25c20c===_0x146aab;},'\x4e\x44\x79\x69\x42':_0x439adc(0x1ee),'\x41\x45\x6b\x55\x6f':function(_0x177352,_0x13fca7){return _0x177352!==_0x13fca7;},'\x5a\x4f\x6d\x46\x6f':_0x439adc(0x1f0),'\x73\x56\x42\x79\x5a':_0x54a44d(0x251)},_0x5efb1e=!![];return function(_0x2b84d8,_0x19c914){var _0x3ad326=_0x5efb1e?function(){var _0x2b85b9=_0x3a72,_0x25b144=_0x3a72,_0x1c0aa6=_0x3a72,_0x18b1a7=_0x3a72,_0x34e792={'\x79\x6f\x67\x6c\x57':function(_0x535bbe,_0x4224a8){var _0x474709=_0x3a72;return _0x1b012e[_0x474709(0x1b8)](_0x535bbe,_0x4224a8);},'\x65\x48\x74\x44\x64':_0x1b012e[_0x2b85b9(0x1ca)],'\x51\x66\x63\x5a\x63':function(_0x332991){return _0x1b012e['\x75\x65\x7a\x71\x54'](_0x332991);}};if(_0x1b012e[_0x2b85b9(0x237)](_0x1b012e[_0x25b144(0x1c5)],_0x1b012e['\x4e\x44\x79\x69\x42'])){if(_0x19c914){if(_0x1b012e[_0x18b1a7(0x231)](_0x1b012e['\x5a\x4f\x6d\x46\x6f'],_0x1b012e[_0x2b85b9(0x1dd)])){var _0x14295b=_0x19c914[_0x25b144(0x1e7)](_0x2b84d8,arguments);return _0x19c914=null,_0x14295b;}else{if(_0x2e78e2){var _0xe4c7fd=_0x2f0782[_0x2b85b9(0x1e7)](_0x3610ad,arguments);return _0x9e8d01=null,_0xe4c7fd;}}}}else _0x34e792[_0x25b144(0x21c)](_0x713ddf[_0x2b85b9(0x243)],_0x34e792[_0x25b144(0x1b9)])&&_0x34e792[_0x1c0aa6(0x252)](_0x3b8d6d),_0x34e792[_0x18b1a7(0x21c)](_0x4c67a9[_0x18b1a7(0x243)],_0x2b85b9(0x245))&&_0x485d86();}:function(){};return _0x5efb1e=![],_0x3ad326;};}()),_0x5bf5ce=_0x5eefaa(this,function(){var _0x1123cf=_0x3a72,_0x10d53f=_0x3a72,_0x592972=_0x3a72,_0x1836c2=_0x3a72,_0x31af5c={'\x58\x7a\x56\x4c\x5a':_0x1123cf(0x23f)+'\x65\x72','\x47\x56\x6d\x70\x4c':function(_0x276078,_0x4abc3b){return _0x276078(_0x4abc3b);},'\x6f\x46\x65\x4f\x58':_0x1123cf(0x1da)+_0x592972(0x1d5),'\x4e\x76\x52\x6e\x42':function(_0x5988aa,_0x5095d7){return _0x5988aa!=_0x5095d7;},'\x62\x78\x42\x68\x56':function(_0x4a0d20,_0x5add22){return _0x4a0d20(_0x5add22);},'\x6c\x75\x54\x6f\x77':'\x6d\x65\x73\x73\x61\x67\x65','\x56\x54\x4a\x58\x67':_0x10d53f(0x1ec),'\x77\x6d\x4b\x79\x66':_0x1123cf(0x234)+'\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e'+_0x1123cf(0x227)+'\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69'+_0x10d53f(0x1e2)+_0x1123cf(0x232)+'\x72\x74','\x4e\x53\x51\x4d\x74':_0x1123cf(0x1c6),'\x55\x65\x7a\x77\x59':function(_0x7f9280,_0x58203a){return _0x7f9280!==_0x58203a;},'\x41\x64\x47\x4d\x48':'\x67\x6e\x42\x66\x69','\x78\x79\x6d\x55\x56':function(_0x33c7ba,_0x1a9462){return _0x33c7ba+_0x1a9462;},'\x51\x7a\x57\x79\x53':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+_0x1123cf(0x238),'\x6e\x51\x77\x55\x76':'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75'+_0x592972(0x261)+_0x592972(0x260)+'\x20\x29','\x45\x64\x44\x4f\x55':_0x592972(0x1e9),'\x55\x4f\x45\x75\x52':_0x1836c2(0x22e),'\x53\x48\x77\x78\x77':_0x10d53f(0x25e),'\x6f\x63\x4b\x42\x4c':function(_0x23ab05,_0x39ea52){return _0x23ab05<_0x39ea52;},'\x4f\x6a\x4e\x4d\x63':'\x31\x7c\x33\x7c\x34\x7c\x32\x7c\x35\x7c'+'\x30'},_0x417c6f=function(){var _0x3813d2=_0x592972,_0x36f453=_0x10d53f,_0x45ea36=_0x10d53f,_0x5a11ff=_0x1836c2,_0x26b964={'\x5a\x59\x59\x74\x67':function(_0x55af7e,_0x2ed74e){return _0x55af7e(_0x2ed74e);},'\x75\x58\x4f\x4b\x4e':_0x31af5c[_0x3813d2(0x1e5)],'\x47\x51\x56\x46\x6e':function(_0x5d5c08,_0xefc83){var _0xd9286=_0x3813d2;return _0x31af5c[_0xd9286(0x262)](_0x5d5c08,_0xefc83);},'\x54\x78\x58\x6c\x55':_0x31af5c[_0x36f453(0x22a)],'\x68\x4f\x50\x63\x6a':function(_0x5c219c,_0x4e22cb){return _0x31af5c['\x4e\x76\x52\x6e\x42'](_0x5c219c,_0x4e22cb);},'\x77\x45\x41\x69\x53':function(_0x1e4135,_0x982f0){var _0x2f38ff=_0x3813d2;return _0x31af5c[_0x2f38ff(0x213)](_0x1e4135,_0x982f0);},'\x4c\x78\x6c\x68\x50':_0x31af5c[_0x45ea36(0x1f9)],'\x51\x59\x64\x73\x77':function(_0x3e9711,_0x371502){var _0x5c9cba=_0x45ea36;return _0x31af5c[_0x5c9cba(0x213)](_0x3e9711,_0x371502);},'\x4b\x4a\x63\x77\x4e':_0x5a11ff(0x256),'\x4e\x46\x6a\x46\x70':_0x31af5c[_0x45ea36(0x225)],'\x53\x74\x54\x78\x62':_0x31af5c[_0x36f453(0x1cd)],'\x51\x5a\x51\x4d\x44':_0x31af5c[_0x3813d2(0x211)]},_0x250b15;try{if(_0x31af5c['\x55\x65\x7a\x77\x59'](_0x36f453(0x229),_0x31af5c[_0x36f453(0x223)]))_0x250b15=Function(_0x31af5c[_0x5a11ff(0x25b)](_0x31af5c[_0x36f453(0x25b)](_0x31af5c[_0x5a11ff(0x1dc)],_0x31af5c[_0x45ea36(0x20e)]),'\x29\x3b'))();else{var _0x1117e3={'\x4e\x43\x65\x73\x73':function(_0x2c7048,_0x17322c){var _0x22197e=_0x5a11ff;return _0x26b964[_0x22197e(0x236)](_0x2c7048,_0x17322c);},'\x44\x6a\x64\x70\x4f':_0x26b964[_0x3813d2(0x1fb)],'\x77\x48\x75\x5a\x6c':function(_0x4bb315,_0x457ebb){return _0x26b964['\x47\x51\x56\x46\x6e'](_0x4bb315,_0x457ebb);},'\x49\x57\x4f\x73\x6d':function(_0x24a11d,_0x2d2e7b){return _0x26b964['\x47\x51\x56\x46\x6e'](_0x24a11d,_0x2d2e7b);},'\x6a\x61\x54\x7a\x4c':_0x26b964[_0x45ea36(0x1c8)],'\x75\x61\x4b\x67\x58':function(_0xda94f9,_0x1c0675){var _0x4c823e=_0x5a11ff;return _0x26b964[_0x4c823e(0x22d)](_0xda94f9,_0x1c0675);},'\x45\x66\x57\x6d\x43':function(_0x492988,_0x11677c){var _0x285fcb=_0x45ea36;return _0x26b964[_0x285fcb(0x25a)](_0x492988,_0x11677c);},'\x67\x73\x66\x4d\x63':_0x26b964[_0x45ea36(0x24d)]};let _0x27d7c4=_0x26b964[_0x45ea36(0x1bc)](_0x220a71,_0x26b964[_0x45ea36(0x1e4)]),_0x27a2ea=new _0x5256c0();_0x26b964[_0x36f453(0x1bc)](_0x114f69,_0x27d7c4)['\x65\x61\x63\x68'](function(_0x102be3,_0x308551){var _0x1b5147=_0x45ea36,_0x51146c=_0x36f453,_0x53f34d=_0x3813d2,_0x81f282=_0x3813d2,_0x3f7856=new _0x35dc6e();_0x3f7856['\x71\x75\x65\x73\x74\x69\x6f\x6e']=_0x1117e3[_0x1b5147(0x1d4)](_0x8ad3c9,this)[_0x1b5147(0x1bf)](_0x51146c(0x1d9))['\x68\x74\x6d\x6c'](),_0x3f7856[_0x51146c(0x1be)]=_0x1117e3[_0x53f34d(0x1d4)](_0x5f19f3,this)[_0x53f34d(0x1bf)](_0x1117e3[_0x53f34d(0x20d)])['\x68\x74\x6d\x6c'](),_0x3f7856['\x68\x61\x73\x68\x43\x6f\x64\x65']=_0x5207aa(_0x1117e3[_0x51146c(0x1c1)](_0x314983,this)[_0x81f282(0x1bf)](_0x51146c(0x1d9))[_0x1b5147(0x1c3)]()),_0x3f7856[_0x1b5147(0x1ef)]=_0x1117e3[_0x51146c(0x255)](_0x86cfe9,_0x1117e3[_0x1b5147(0x1db)])['\x74\x65\x78\x74'](),_0x1117e3[_0x51146c(0x1d2)](_0x3f7856[_0x53f34d(0x1be)],_0x3a9f7c)&&_0x27a2ea['\x70\x75\x73\x68'](_0x3f7856);}),_0x5ac000[_0x5a11ff(0x253)](_0x27a2ea),_0x199771['\x61\x6a\x61\x78']({'\x74\x79\x70\x65':_0x26b964[_0x3813d2(0x248)],'\x75\x72\x6c':_0x26b964[_0x45ea36(0x1b7)],'\x64\x61\x74\x61':_0x1a0517[_0x36f453(0x1f8)](_0x27a2ea),'\x73\x75\x63\x63\x65\x73\x73':function(_0x3aa157){var _0x343bda=_0x3813d2;_0x1117e3[_0x343bda(0x1d3)](_0x2e63b1,_0x3aa157[_0x1117e3['\x67\x73\x66\x4d\x63']]),_0x5cf47e['\x6c\x6f\x67'](_0x3aa157);},'\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70\x65':'\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f'+'\x6e\x2f\x6a\x73\x6f\x6e','\x64\x61\x74\x61\x54\x79\x70\x65':_0x26b964[_0x45ea36(0x1f4)]});}}catch(_0x3852e5){_0x250b15=window;}return _0x250b15;},_0x4ccad1=_0x417c6f(),_0x566a94=_0x4ccad1[_0x10d53f(0x200)]=_0x4ccad1[_0x1836c2(0x200)]||{},_0x51aaff=[_0x1836c2(0x253),_0x31af5c['\x45\x64\x44\x4f\x55'],_0x10d53f(0x1f5),_0x31af5c[_0x1123cf(0x206)],_0x1123cf(0x21a),_0x1123cf(0x1d7),_0x31af5c[_0x1836c2(0x264)]];for(var _0x287d76=-0x1*0x176c+-0x122+-0x382*-0x7;_0x31af5c[_0x592972(0x1fe)](_0x287d76,_0x51aaff[_0x1836c2(0x1f3)]);_0x287d76++){var _0x452461=_0x31af5c[_0x592972(0x1e3)][_0x10d53f(0x235)]('\x7c'),_0x2ed9e9=-0x1d4b+-0x2200+0x1eb*0x21;while(!![]){switch(_0x452461[_0x2ed9e9++]){case'\x30':_0x566a94[_0x4760f1]=_0x2cff5f;continue;case'\x31':var _0x2cff5f=_0x5eefaa[_0x592972(0x1ff)+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x1123cf(0x242)](_0x5eefaa);continue;case'\x32':_0x2cff5f[_0x1123cf(0x249)]=_0x5eefaa['\x62\x69\x6e\x64'](_0x5eefaa);continue;case'\x33':var _0x4760f1=_0x51aaff[_0x287d76];continue;case'\x34':var _0x426895=_0x566a94[_0x4760f1]||_0x2cff5f;continue;case'\x35':_0x2cff5f[_0x1123cf(0x217)]=_0x426895['\x74\x6f\x53\x74\x72\x69\x6e\x67'][_0x1836c2(0x242)](_0x426895);continue;}break;}}});_0x5bf5ce(),document[_0x135ff7(0x228)+_0x2568e8(0x219)]('\x6b\x65\x79\x64\x6f\x77\x6e',function(_0x32c240){var _0x49da17=_0x2568e8,_0x548c79=_0x135ff7,_0x20f443=_0x2568e8,_0x11e818=_0x2568e8,_0x433ea7={'\x48\x47\x78\x53\x7a':function(_0x5c949a,_0x566e97){return _0x5c949a==_0x566e97;},'\x52\x6f\x4f\x50\x50':_0x49da17(0x1c9),'\x46\x7a\x6a\x4e\x6b':function(_0x1036a3,_0x12afee){return _0x1036a3!==_0x12afee;},'\x4c\x78\x63\x61\x65':function(_0x40495d){return _0x40495d();},'\x69\x44\x79\x76\x4b':_0x49da17(0x245)};if(_0x433ea7[_0x49da17(0x201)](_0x32c240[_0x49da17(0x243)],_0x433ea7[_0x49da17(0x222)])){if(_0x433ea7[_0x11e818(0x226)]('\x4b\x74\x42\x58\x71',_0x20f443(0x204))){var _0x51570d=_0x57abfd?function(){var _0x53d88b=_0x20f443;if(_0xc234c4){var _0x394362=_0x2c77a5[_0x53d88b(0x1e7)](_0xd573ff,arguments);return _0x21b9e7=null,_0x394362;}}:function(){};return _0x3cd276=![],_0x51570d;}else _0x433ea7[_0x11e818(0x1de)](run);}_0x433ea7[_0x548c79(0x201)](_0x32c240[_0x548c79(0x243)],_0x433ea7[_0x548c79(0x205)])&&_0x433ea7[_0x20f443(0x1de)](upload);});function upload(){var _0x213b11=_0x2568e8,_0x475d85=_0x135ff7,_0x3273ea=_0x2568e8,_0x2984f7=_0x2568e8,_0x1371b7={'\x54\x7a\x74\x6b\x79':_0x213b11(0x1cb)+'\x30','\x53\x46\x76\x62\x41':function(_0x26082d,_0x5874b2){return _0x26082d!=_0x5874b2;},'\x54\x4e\x72\x71\x4f':_0x475d85(0x1da)+_0x3273ea(0x1d5),'\x70\x69\x73\x6f\x46':function(_0x19485b,_0x25edc3){return _0x19485b(_0x25edc3);},'\x5a\x43\x52\x44\x53':_0x3273ea(0x1d9),'\x42\x6c\x51\x4c\x76':function(_0x5903f0,_0x38eda3){return _0x5903f0(_0x38eda3);},'\x56\x50\x57\x48\x4b':_0x213b11(0x21e),'\x41\x67\x6b\x52\x58':function(_0x507009,_0x243b0d){return _0x507009(_0x243b0d);},'\x7a\x4e\x46\x45\x4d':'\x2e\x71\x75\x65','\x70\x64\x6f\x62\x59':function(_0x2ff1bc,_0x4672ac){return _0x2ff1bc(_0x4672ac);},'\x57\x46\x59\x54\x54':_0x3273ea(0x234)+_0x213b11(0x221)+_0x213b11(0x227)+_0x2984f7(0x23c)+'\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61'+_0x213b11(0x232)+'\x72\x74','\x7a\x64\x71\x76\x64':'\x6a\x73\x6f\x6e'};let _0x215fb9=_0x1371b7['\x41\x67\x6b\x52\x58']($,_0x1371b7[_0x213b11(0x25d)]),_0x52eba5=new Array();_0x1371b7[_0x475d85(0x24c)]($,_0x215fb9)[_0x475d85(0x218)](function(_0x165b71,_0x13036b){var _0x3e2bee=_0x213b11,_0x2b2cbc=_0x213b11,_0x2c2f70=_0x475d85,_0x394cf2=_0x2984f7,_0x211406=_0x1371b7[_0x3e2bee(0x239)][_0x3e2bee(0x235)]('\x7c'),_0x223cb5=-0x19d0+0x663+0x136d;while(!![]){switch(_0x211406[_0x223cb5++]){case'\x30':_0x1371b7[_0x3e2bee(0x1ea)](_0x3d5d0c[_0x2b2cbc(0x1be)],undefined)&&_0x52eba5[_0x2b2cbc(0x1c2)](_0x3d5d0c);continue;case'\x31':_0x3d5d0c[_0x394cf2(0x1ef)]=$(_0x1371b7[_0x3e2bee(0x23d)])[_0x3e2bee(0x1c3)]();continue;case'\x32':_0x3d5d0c[_0x394cf2(0x1be)]=_0x1371b7['\x70\x69\x73\x6f\x46']($,this)[_0x394cf2(0x1bf)](_0x394cf2(0x23f)+'\x65\x72')['\x68\x74\x6d\x6c']();continue;case'\x33':_0x3d5d0c['\x71\x75\x65\x73\x74\x69\x6f\x6e']=_0x1371b7[_0x2c2f70(0x1ed)]($,this)[_0x394cf2(0x1bf)](_0x1371b7[_0x2c2f70(0x1ba)])[_0x2c2f70(0x21b)]();continue;case'\x34':_0x3d5d0c['\x68\x61\x73\x68\x43\x6f\x64\x65']=_0x1371b7[_0x2c2f70(0x1ed)](hashCode,_0x1371b7[_0x3e2bee(0x216)]($,this)[_0x2b2cbc(0x1bf)](_0x394cf2(0x1d9))[_0x3e2bee(0x1c3)]());continue;case'\x35':var _0x3d5d0c=new Object();continue;}break;}}),console[_0x475d85(0x253)](_0x52eba5),$[_0x2984f7(0x210)]({'\x74\x79\x70\x65':_0x2984f7(0x1ec),'\x75\x72\x6c':_0x1371b7[_0x213b11(0x1d6)],'\x64\x61\x74\x61':JSON[_0x2984f7(0x1f8)](_0x52eba5),'\x73\x75\x63\x63\x65\x73\x73':function(_0x5014cb){var _0xe31d47=_0x213b11,_0x272181=_0x3273ea,_0xb0ba8b=_0x2984f7;_0x1371b7[_0xe31d47(0x216)](alert,_0x5014cb[_0x1371b7[_0xe31d47(0x230)]]),console[_0xb0ba8b(0x253)](_0x5014cb);},'\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70\x65':_0x3273ea(0x233)+'\x6e\x2f\x6a\x73\x6f\x6e','\x64\x61\x74\x61\x54\x79\x70\x65':_0x1371b7['\x7a\x64\x71\x76\x64']});}function _0x3f4b(){var _0xd6c4f0=['\x39\x68\x54\x72\x4a\x6b\x52','\x4a\x4f\x77\x4e\x46','\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61','\x4f\x6a\x4e\x4d\x63','\x4b\x4a\x63\x77\x4e','\x58\x7a\x56\x4c\x5a','\x76\x3e\x3c\x2f\x64\x69\x76\x3e','\x61\x70\x70\x6c\x79','\x59\x61\x64\x55\x74','\x77\x61\x72\x6e','\x53\x46\x76\x62\x41','\x74\x69\x6d\x65\x6f\x75\x74','\x50\x4f\x53\x54','\x70\x69\x73\x6f\x46','\x66\x4b\x66\x62\x44','\x75\x73\x65\x72','\x5a\x6e\x78\x70\x6f','\x31\x30\x30\x36\x39\x33\x30\x49\x56\x77\x67\x4e\x7a','\x74\x78\x6c\x4f\x4e','\x6c\x65\x6e\x67\x74\x68','\x51\x5a\x51\x4d\x44','\x69\x6e\x66\x6f','\x70\x61\x72\x73\x65\x46\x72\x6f\x6d\x53','\x70\x61\x72\x73\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6c\x75\x54\x6f\x77','\x74\x72\x69\x6e\x67','\x75\x58\x4f\x4b\x4e','\x6e\x66\x66\x56\x67','\x63\x51\x58\x4c\x42','\x6f\x63\x4b\x42\x4c','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x63\x6f\x6e\x73\x6f\x6c\x65','\x48\x47\x78\x53\x7a','\x64\x61\x74\x61','\x65\x72\x22\x3e','\x4b\x74\x42\x58\x71','\x69\x44\x79\x76\x4b','\x55\x4f\x45\x75\x52','\x75\x72\x6c','\x36\x4e\x68\x43\x6a\x74\x48','\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x6f','\x63\x6f\x6e\x74\x65\x6e\x74\x54\x79\x70','\x4e\x5a\x50\x49\x76','\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e','\x44\x6a\x64\x70\x4f','\x6e\x51\x77\x55\x76','\x49\x6a\x51\x48\x79','\x61\x6a\x61\x78','\x4e\x53\x51\x4d\x74','\x78\x72\x70\x77\x76','\x62\x78\x42\x68\x56','\x37\x33\x33\x31\x39\x37\x33\x4d\x76\x72\x71\x79\x62','\x79\x57\x62\x62\x71','\x42\x6c\x51\x4c\x76','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x65\x61\x63\x68','\x73\x74\x65\x6e\x65\x72','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x68\x74\x6d\x6c','\x79\x6f\x67\x6c\x57','\x55\x63\x51\x77\x50','\x6d\x65\x73\x73\x61\x67\x65','\x76\x74\x45\x74\x72','\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c','\x65\x73\x65\x6e\x74\x61\x74\x69\x6f\x6e','\x52\x6f\x4f\x50\x50','\x41\x64\x47\x4d\x48','\x31\x34\x30\x31\x63\x42\x73\x49\x67\x7a','\x56\x54\x4a\x58\x67','\x46\x7a\x6a\x4e\x6b','\x2e\x6e\x67\x75\x79\x65\x6e\x76\x61\x6e','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69','\x6d\x4f\x46\x51\x70','\x6f\x46\x65\x4f\x58','\x70\x72\x6f\x63\x65\x73\x73\x44\x61\x74','\x70\x48\x54\x73\x54','\x68\x4f\x50\x63\x6a','\x65\x72\x72\x6f\x72','\x33\x31\x30\x73\x47\x53\x50\x47\x71','\x56\x50\x57\x48\x4b','\x41\x45\x6b\x55\x6f','\x63\x74\x69\x6f\x6e\x3d\x69\x6e\x73\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72','\x73\x70\x6c\x69\x74','\x5a\x59\x59\x74\x67','\x71\x5a\x76\x42\x57','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x54\x7a\x74\x6b\x79','\x3c\x64\x69\x76\x20\x69\x64\x3d\x22','\x6d\x75\x6c\x74\x69\x70\x61\x72\x74\x2f','\x63\x61\x6f\x6b\x79\x2e\x6d\x65\x2f\x69','\x54\x4e\x72\x71\x4f','\x78\x75\x6a\x6a\x5a','\x2e\x72\x69\x67\x68\x74\x61\x6e\x73\x77','\x65\x6d\x65\x6e\x74','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x62\x69\x6e\x64','\x63\x6f\x64\x65','\x75\x74\x63\x6f\x6d\x65\x20\x63\x6c\x65','\x4b\x65\x79\x5a','\x39\x34\x38\x44\x44\x79\x6a\x4c\x70','\x66\x6f\x72\x6d\x2d\x64\x61\x74\x61','\x4e\x46\x6a\x46\x70','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x41\x47\x66\x6b\x4d','\x6d\x75\x76\x77\x46','\x70\x64\x6f\x62\x59','\x4c\x78\x6c\x68\x50','\x31\x32\x30\x37\x36\x75\x76\x42\x4f\x74\x49','\x48\x7a\x65\x66\x54','\x3c\x2f\x64\x69\x76\x3e\x3c\x2f\x64\x69','\x71\x47\x77\x6f\x79','\x51\x66\x63\x5a\x63','\x6c\x6f\x67','\x73\x74\x61\x74\x75\x73','\x49\x57\x4f\x73\x6d','\x2e\x71\x75\x65','\x63\x43\x42\x5a\x66','\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c','\x55\x78\x63\x46\x4a','\x77\x45\x41\x69\x53','\x78\x79\x6d\x55\x56','\x76\x6c\x57\x6e\x43','\x7a\x4e\x46\x45\x4d','\x74\x72\x61\x63\x65','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x47\x56\x6d\x70\x4c','\x53\x53\x44\x51\x71','\x53\x48\x77\x78\x77','\x63\x74\x69\x6f\x6e\x3d\x73\x65\x61\x72','\x53\x74\x54\x78\x62','\x6e\x56\x58\x4f\x4a','\x65\x48\x74\x44\x64','\x5a\x43\x52\x44\x53','\x67\x4c\x49\x59\x58','\x51\x59\x64\x73\x77','\x31\x37\x32\x36\x31\x37\x36\x52\x47\x59\x46\x77\x51','\x61\x6e\x73\x77\x65\x72','\x66\x69\x6e\x64','\x4e\x6e\x62\x4d\x4b','\x77\x48\x75\x5a\x6c','\x70\x75\x73\x68','\x74\x65\x78\x74','\x64\x69\x76\x20\x63\x6c\x61\x73\x73\x3d','\x4e\x44\x79\x69\x42','\x6a\x73\x6f\x6e','\x32\x34\x38\x37\x39\x30\x6e\x6a\x41\x74\x67\x67','\x54\x78\x58\x6c\x55','\x4b\x65\x79\x58','\x57\x43\x65\x64\x53','\x35\x7c\x33\x7c\x32\x7c\x34\x7c\x31\x7c','\x73\x65\x61\x72\x63\x68','\x77\x6d\x4b\x79\x66','\x41\x65\x6d\x42\x4c','\x61\x70\x70\x65\x6e\x64','\x52\x6e\x4e\x63\x65','\x61\x72\x66\x69\x78\x22\x3e\x3c\x64\x69','\x75\x61\x4b\x67\x58','\x45\x66\x57\x6d\x43','\x4e\x43\x65\x73\x73','\x6d\x72\x2d\x31','\x57\x46\x59\x54\x54','\x74\x61\x62\x6c\x65','\x31\x31\x30\x36\x49\x4f\x67\x69\x7a\x5a','\x2e\x71\x74\x65\x78\x74','\x2e\x75\x73\x65\x72\x74\x65\x78\x74\x2e','\x6a\x61\x54\x7a\x4c','\x51\x7a\x57\x79\x53','\x73\x56\x42\x79\x5a','\x4c\x78\x63\x61\x65','\x64\x6a\x47\x44\x6a'];_0x3f4b=function(){return _0xd6c4f0;};return _0x3f4b();}function hashCode(_0x7ccbb6){var _0x4bd014=_0x2568e8,_0x25e20e=_0x135ff7,_0x38bbc=_0x135ff7,_0xc3673e=_0x135ff7,_0xd1f31f={};_0xd1f31f[_0x4bd014(0x1ce)]=function(_0x313a4f,_0x1003d5){return _0x313a4f===_0x1003d5;},_0xd1f31f[_0x4bd014(0x259)]=function(_0x1379eb,_0x2aeb6d){return _0x1379eb<_0x2aeb6d;},_0xd1f31f[_0x25e20e(0x1fd)]=function(_0x352e89,_0x4b2e72){return _0x352e89+_0x4b2e72;},_0xd1f31f[_0x38bbc(0x263)]=function(_0xd21ce4,_0x13d16c){return _0xd21ce4-_0x13d16c;};var _0x3d0661=_0xd1f31f,_0x47ae9c=0x1884+-0x5e1+0x16f*-0xd,_0xc59058,_0xc383a2;if(_0x3d0661[_0x25e20e(0x1ce)](_0x7ccbb6['\x6c\x65\x6e\x67\x74\x68'],0x206+0x2*0x449+-0xa98))return _0x47ae9c;for(_0xc59058=0x2323*-0x1+0x7*-0x44a+-0x4129*-0x1;_0x3d0661[_0x4bd014(0x259)](_0xc59058,_0x7ccbb6[_0x4bd014(0x1f3)]);_0xc59058++){_0xc383a2=_0x7ccbb6[_0x25e20e(0x25f)](_0xc59058),_0x47ae9c=_0x3d0661['\x63\x51\x58\x4c\x42'](_0x3d0661[_0x4bd014(0x263)](_0x47ae9c<<0x18ef*-0x1+0x629*-0x1+0x3*0xa5f,_0x47ae9c),_0xc383a2),_0x47ae9c|=-0xc77+0xe47+0x3a*-0x8;}return _0x47ae9c;};function htmlDecode(_0x202f1f){var _0x496e86=_0x135ff7,_0x31d3d5=_0x135ff7,_0x1269f6=_0x2568e8,_0x1e59aa=_0x135ff7,_0x46c9d7={};_0x46c9d7[_0x496e86(0x25c)]=_0x496e86(0x220);var _0x2d925b=_0x46c9d7,_0x252aa2=new DOMParser()[_0x31d3d5(0x1f6)+_0x31d3d5(0x1fa)](_0x202f1f,_0x2d925b['\x76\x6c\x57\x6e\x43']);return _0x252aa2[_0x1e59aa(0x258)+_0x31d3d5(0x240)][_0x1e59aa(0x20c)+'\x74'];}function _0x3a72(_0x2f1f04,_0x1e7090){var _0x3f4bc3=_0x3f4b();return _0x3a72=function(_0x3a726e,_0x36786b){_0x3a726e=_0x3a726e-(0x508*-0x3+0x943*0x3+-0xafa);var _0x55a211=_0x3f4bc3[_0x3a726e];return _0x55a211;},_0x3a72(_0x2f1f04,_0x1e7090);}function run(){var _0x516636=_0x2568e8,_0x2eb2e6=_0x135ff7,_0x46c458=_0x135ff7,_0xbe8b62=_0x135ff7,_0x403cdf={'\x67\x4c\x49\x59\x58':_0x516636(0x254),'\x48\x4b\x75\x47\x46':'\x73\x75\x63\x63\x65\x73\x73','\x78\x75\x6a\x6a\x5a':_0x2eb2e6(0x202),'\x78\x72\x70\x77\x76':'\x61\x6e\x73\x77\x65\x72','\x4e\x6e\x62\x4d\x4b':function(_0x100d24,_0x4d04ea){return _0x100d24(_0x4d04ea);},'\x4e\x5a\x50\x49\x76':function(_0x1448e6,_0x44193d){return _0x1448e6+_0x44193d;},'\x59\x61\x64\x55\x74':'\x2e\x61\x62\x6c\x6f\x63\x6b','\x4b\x46\x44\x50\x79':_0x516636(0x23a),'\x48\x7a\x65\x66\x54':function(_0x274d30,_0x4971c0){return _0x274d30(_0x4971c0);},'\x6d\x75\x76\x77\x46':_0xbe8b62(0x1d9),'\x64\x6a\x47\x44\x6a':'\x4b\x68\u00f4\x6e\x67\x20\x63\u00f3\x20\x63'+'\u00e2\x75\x20\x74\x72\u1ea3\x20\x6c\u1edd\x69','\x52\x53\x67\x41\x59':'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72'+_0x46c458(0x221)+_0xbe8b62(0x227)+_0x516636(0x23c)+'\x6e\x64\x65\x78\x2e\x70\x68\x70\x3f\x61'+_0x46c458(0x265)+'\x63\x68','\x63\x43\x42\x5a\x66':'\x50\x4f\x53\x54','\x42\x4c\x50\x54\x4e':_0x46c458(0x23b)+_0x2eb2e6(0x247),'\x49\x6a\x51\x48\x79':_0x2eb2e6(0x256)};let _0x549212=$(_0x403cdf[_0x46c458(0x20f)]);$(_0x549212)['\x65\x61\x63\x68'](function(_0x107bf1,_0x502a52){var _0x2e04c9=_0xbe8b62,_0x15d474=_0x46c458,_0xa0a16c=_0x2eb2e6,_0x52200d=_0xbe8b62,_0x31932c={'\x70\x48\x54\x73\x54':function(_0x1970f7,_0x37e147){return _0x1970f7==_0x37e147;},'\x6e\x66\x66\x56\x67':_0x403cdf[_0x2e04c9(0x1bb)],'\x74\x78\x6c\x4f\x4e':_0x403cdf['\x48\x4b\x75\x47\x46'],'\x4e\x57\x69\x79\x58':_0x403cdf[_0x15d474(0x23e)],'\x4d\x78\x56\x73\x43':_0x403cdf[_0xa0a16c(0x212)],'\x41\x47\x66\x6b\x4d':function(_0xb90b38,_0x4c290c){var _0xfe6fca=_0x2e04c9;return _0x403cdf[_0xfe6fca(0x1c0)](_0xb90b38,_0x4c290c);},'\x76\x74\x45\x74\x72':function(_0x15fd73,_0x3df2dd){var _0x20f7a1=_0x15d474;return _0x403cdf[_0x20f7a1(0x20b)](_0x15fd73,_0x3df2dd);},'\x4a\x4f\x77\x4e\x46':_0x403cdf[_0x52200d(0x1e8)],'\x79\x57\x62\x62\x71':_0x403cdf['\x4b\x46\x44\x50\x79'],'\x52\x6e\x4e\x63\x65':function(_0x2fda62,_0x158f1f){var _0x5779e2=_0x2e04c9;return _0x403cdf[_0x5779e2(0x24f)](_0x2fda62,_0x158f1f);},'\x46\x61\x61\x57\x56':_0x15d474(0x250)+_0x52200d(0x1e6)};let _0x1dc495=$(this)['\x66\x69\x6e\x64'](_0x403cdf[_0x52200d(0x24b)])[_0xa0a16c(0x1c3)](),_0x53f7c7=_0x403cdf[_0x52200d(0x24f)](hashCode,_0x1dc495);var _0x375e45=_0x403cdf[_0xa0a16c(0x1df)],_0x21d501=new FormData();_0x21d501[_0xa0a16c(0x1cf)]('\x71',_0x53f7c7);var _0x23d0f0={};_0x23d0f0[_0xa0a16c(0x207)]=_0x403cdf['\x52\x53\x67\x41\x59'],_0x23d0f0['\x6d\x65\x74\x68\x6f\x64']=_0x403cdf[_0x2e04c9(0x257)],_0x23d0f0[_0x2e04c9(0x1eb)]=0x0,_0x23d0f0[_0x52200d(0x22b)+'\x61']=![],_0x23d0f0['\x6d\x69\x6d\x65\x54\x79\x70\x65']=_0x403cdf['\x42\x4c\x50\x54\x4e'],_0x23d0f0[_0x15d474(0x20a)+'\x65']=![],_0x23d0f0['\x64\x61\x74\x61']=_0x21d501;var _0x1bf11f=_0x23d0f0;let _0x13656c=this;$[_0x52200d(0x210)](_0x1bf11f)['\x64\x6f\x6e\x65'](function(_0x575593){var _0x3b6cd3=_0x52200d,_0x34d175=_0xa0a16c,_0x889852=_0x52200d,_0x3f8931=_0x15d474;_0x31932c[_0x3b6cd3(0x22c)](JSON[_0x3b6cd3(0x1f7)](_0x575593)[_0x31932c[_0x34d175(0x1fc)]],_0x31932c[_0x3f8931(0x1f2)])&&(_0x375e45=JSON[_0x3b6cd3(0x1f7)](_0x575593)[_0x31932c['\x4e\x57\x69\x79\x58']][-0xb*0xdc+-0x6*-0xb+0x932][_0x31932c['\x4d\x78\x56\x73\x43']]),_0x31932c[_0x889852(0x24a)]($,_0x31932c[_0x3f8931(0x21f)]('\x23',_0x53f7c7))['\x72\x65\x6d\x6f\x76\x65'](),$(_0x13656c)['\x66\x69\x6e\x64'](_0x31932c[_0x3f8931(0x1e1)])[_0x3b6cd3(0x1cf)](_0x31932c['\x76\x74\x45\x74\x72'](_0x31932c[_0x889852(0x21f)](_0x31932c[_0x3f8931(0x215)]+_0x53f7c7,_0x34d175(0x209)+_0x34d175(0x244)+_0x34d175(0x1d1)+'\x76\x20\x63\x6c\x61\x73\x73\x3d\x22\x66'+'\x65\x65\x64\x62\x61\x63\x6b\x22\x3e\x3c'+_0x889852(0x1c4)+'\x22\x72\x69\x67\x68\x74\x61\x6e\x73\x77'+_0x3b6cd3(0x203))+_0x31932c[_0x3f8931(0x1d0)](htmlDecode,_0x375e45),_0x31932c['\x46\x61\x61\x57\x56'])),console[_0x3b6cd3(0x253)](_0x575593);});});}`;
    $("body").append(func);
    console.log('INJECTED HACK ----> OK')
}


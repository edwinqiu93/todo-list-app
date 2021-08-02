"use strict";

function isMobile() {
	const ua = navigator.userAgent.toLocaleLowerCase();
	const pf = navigator.platform.toLocaleLowerCase();
	const isAndroid = (/android/i).test(ua) || ((/iPhone|iPod|iPad/i).test(ua) && (/linux/i).test(pf)) || (/ucweb.*linux/i.test(ua));
	const isIOS = (/iPhone|iPod|iPad/i).test(ua) && !isAndroid;
	const isWinPhone = (/Windows Phone|ZuneWP7/i).test(ua);
	const mobileType = {
		pc: !isAndroid && !isIOS && !isWinPhone,
		ios: isIOS,
		android: isAndroid,
		winPhone: isWinPhone,
	};
	return mobileType;
}

module.exports = isMobile;

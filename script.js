//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
	const info = getbrowserInfo();
	const ele = document.getElementById("browser-info");
	ele.textContent = `You are using  ${info.name}  version  ${info.version}`;
});
function getbrowserInfo()
{
	const user_info = navigator.userAgent;
	const browser = navigator.appName;
	const versionNo = navigator.appVersion;

	return{
		name:browser,
		version:versionNo
	};
}

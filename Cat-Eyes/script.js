var pupil1 = document.getElementById("pupil1");
var pupil = document.getElementById("pupil");
document.onmousemove = function () {
	var a = event.clientX * 100 / window.innerWidth + "%";
	var b = event.clientY * 100 / window.innerHeight + "%";
	pupil1.style.left = a;
	pupil1.style.top = b;
	pupil1.style.transform = "translate(-" + a + ",-" + b + ")";
	pupil.style.left = a;
	pupil.style.top = b;
	pupil.style.transform = "translate(-" + a + ",-" + b + ")"
};
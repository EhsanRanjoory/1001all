function ChangeBG(BGFileNum){
	var LoadImage = new Image();
	LoadImage.src = "style/b" + BGFileNum + ".jpg";
	C1Obj = document.getElementById("c1");
	C1Obj.style.backgroundImage = "url(style/b" + BGFileNum + ".jpg)";
	return;
}
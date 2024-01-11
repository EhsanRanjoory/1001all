var Site={"List":
[
{"FaName":"هزارویک کتاب","EnName":"1001ketab.ir","URL":"http://1001ketab.ir/home"}
,
{"FaName":"شرکت هزارویک کتاب","EnName":"1001ketab.co.ir","URL":"http://1001ketab.co.ir"}
,
{"FaName":"هزارویک سوفا","EnName":"1001sofa.ir","URL":"http://1001sofa.ir"}
]
};
const Lower=0;
const Upper=3;  //Site.List[].lenth;
Index = Lower;
function Plus(){
	Index++;
	if(Index >= Upper)
		Index = Lower;
	CenterLogoObj = document.getElementById("centerlogo");
	CenterLogoObj.href = Site.List[Index].URL;
	CenterLogoObj.innerHTML = Site.List[Index].EnName + "<br />" + Site.List[Index].FaName;
	return;
}
function Minos(){
	Index--;
	if(Index < Lower)
		Index = Upper-1;
	CenterLogoObj = document.getElementById("centerlogo");
	CenterLogoObj.href = Site.List[Index].URL;
	CenterLogoObj.innerHTML = Site.List[Index].EnName + "<br />" + Site.List[Index].FaName;
	return;
}
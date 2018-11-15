function calcWindowSize(){w=window.innerWidth,h=window.innerHeight}function addTransform(event){var x=event.clientX,y=event.clientY,wrapperWidth=wrapper.offsetWidth,wrapperHeight=wrapper.offsetHeight,wrapperX=x-(w-wrapperWidth)/2,wrapperPx=2*(wrapperX/wrapperWidth*100-50),wrapperY=y-(h-wrapperHeight)/2,wrapperPy=2*(wrapperY/wrapperHeight*100-50);wrapper.style.transform="rotateY("+wrapperPx/10+"deg) rotateX("+wrapperPy/-10+"deg)",document.getElementById("exposure").style.transform="translate("+wrapperPx/-7+"px, "+wrapperPy/-7+"px)",document.getElementById("depth-1").style.transform="translate("+wrapperPx/-5+"px, "+wrapperPy/-6+"px)",document.getElementById("depth-2").style.transform="translate("+wrapperPx/-4+"px, "+wrapperPy/-5+"px)",document.getElementById("depth-3").style.transform="translate("+wrapperPx/-3+"px, "+wrapperPy/-4+"px)",document.getElementById("depth-4").style.transform="translate("+wrapperPx/-2+"px, "+wrapperPy/-3+"px)",document.getElementById("gloss").style.opacity=wrapperPy/-100}function clearTransform(){document.getElementById("double-exposure-wrapper").style.transform="none",document.getElementById("exposure").style.transform="none",document.getElementById("depth-1").style.transform="none",document.getElementById("depth-2").style.transform="none",document.getElementById("depth-3").style.transform="none",document.getElementById("depth-4").style.transform="none",document.getElementById("gloss").style.opacity=0}function handleOrientation(event){var x=event.beta,y=event.gamma;x/=.9,y/=.9,x>100&&(x=100),-50>x&&(x=-50),document.getElementById("exposure").style.transform="translate("+y/-3.5+"px, "+x/-3.5+"px)",document.getElementById("depth-1").style.transform="translate("+y/-2.5+"px, "+x/-3+"px)",document.getElementById("depth-2").style.transform="translate("+y/-2+"px, "+x/-2.5+"px)",document.getElementById("depth-3").style.transform="translate("+y/-1.5+"px, "+x/-2+"px)",document.getElementById("depth-4").style.transform="translate("+y/-1+"px, "+x/-1.5+"px)"}var w=window.innerWidth,h=window.innerHeight,wrapper=document.getElementById("double-exposure-wrapper");window.onresize=calcWindowSize,window.onload=calcWindowSize;var output=document.querySelector(".output");window.addEventListener("deviceorientation",handleOrientation);
var e2 = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],["some students like to study in the night","at night some students like to study"],["John and Mary went to church","Mary and John went to church"],["John went to church after eating","after eating John went to church","John after eating went to church"],["did he go to market","he did go to market"],["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],["John goes to the library and studies","John studies and goes to the library"],["John ate an apple so did she","she ate an apple so did John"],["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var e1 = ["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]
var h2 = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var h1=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]


$("#ff").hide();
$("#c").hide();
$("#cs").hide();
$("#w").hide();
$("#gs").hide();


function display(a) {
	
	if(a == "eng"){
		document.getElementById("sm").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br>"
		document.getElementById("sm1").innerHTML ="<i>(select the buttons in proper order)</i>"
		es1()
	}
	else if(a == "hin"){
		document.getElementById("sm").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br>"
		document.getElementById("sm1").innerHTML ="<i>(select the buttons in proper order)</i>"
		hs1()
	}
	else{
		alert("Select language");
	}
}
function es1() {
	
	var a = Math.floor(Math.random()*e1.length);
var b =e1[a];
var c = s(b);
	button(c);
}

function hs1() {
	
	var a1 = Math.floor(Math.random()*h1.length);
var b1 = h1[a1];
var c1 = s(b1);
	button(c1);
}
function s(n) {
	
	var na = n.split(' ');                      
  for(var i=0 ; i<=na.length-1 ; ++i) {
    var j = Math.floor(Math.random()*na.length);      
    var temp = na[i];            
    na[i] = na[j];
    na[j] = temp;
  }
  string = na.join(' ');                
  return string;                        
}
function button(n) {
	    var count =0;
        function b() {
	    document.getElementById("ss").innerHTML = " "
	    var na = n.split(" ")
	    for( var i = 0; i <= na.length-1; i++) {
    var button = document.createElement("button");
     button.innerHTML = na[i];
     count++;
     button.className += "ps"
     var c = document.getElementById("ss");
     c.appendChild(button);
 }
}

 b();
 var ct=count;
 function a(){
 	document.getElementById("ff").innerHTML = null;
 	document.getElementById("cs").innerHTML = null;
 	var ct1 =0;
 	var st = " "
    $(".ps").click(function(){
 	      var x = $(this).text();
 		  document.getElementById("cs").innerHTML += x + " ";
			$(this).hide();
			ct1 = ct1+1;
			document.getElementById("sm2").innerHTML += x + " ";
			document.getElementById("fs").innerHTML = "<br>"+"<b>Formed Sentence</b>"+"<i>(after selection)</i>"+"<br>";
			$("#ff").show();
			document.getElementById("ff").innerHTML = "Re-form the sentence"
			st =st+x+" "
			count(st)
				
			

     })
     document.getElementById("sm2").innerHTML = " "
     document.getElementById("fs").innerHTML = " "
     document.getElementById("rm").innerHTML = " "
     document.getElementById("w").innerHTML = " "
     $("#ff").hide();
     $("#c").hide();
     $("#gs").hide()
     $("#cms").hide();
     $("#ff").click(function(){
		$("#sm2").hide();
		$("#fs").hide();
		$("#ff").hide();
		$("#c").hide();
		$("#gs").hide();
		$("#cms").hide();

		b();
		a();
		$("#sm2").show();
		$("#fs").show();
})
      function count(n){
				if(ct == ct1){
					$("#c").show();
					var cn1 = 0;
					$("#c").click(function(){
						var ind = document.getElementById("select").selectedIndex;
						var val = document.getElementById("select")[ind].value;
						var s11 = n.trim();	
						if(val == "eng"){
						for (var i = 0; i < 10; i++) {
							for (var j = 0; j < e2[i].length; j++) {
								if(s11 == e2[i][j]){
									cn1++;
								}
							}
						}
						if(cn1 == 1){
							$("#rm").show()
							$("#w").hide();
							document.getElementById("rm").innerHTML = "Right answer!!!"
							$("#c").click(function(){
								$("#w").hide();
								$("#gs").hide()
								$("#cms").hide()
						})
						
						$("#gs").show();
						$("#cms").show();
						}
						else{
							$("#w").show();
							document.getElementById("w").innerHTML = "Wrong answer!!!"
							$("#gs").show();
							$("#ff").click(function(){
								document.getElementById("gs").innerHTML = "Get Correct Senctence"
							})
							dis();
							csen(s11)
						}
      		    }
			    else{
						for (var i = 0; i < 7; i++) {
							for (var j = 0; j < h2[i].length; j++) {
								if(s11 == h2[i][j]){
									cn1++;
								}
							}
						}
						if(cn1 == 1){
							$("#rm").show()
							document.getElementById("gs").innerHTML = null;
							document.getElementById("rm").innerHTML = "Right answer!!"
							$("#gs").hide();
							$("#cms").hide();
							$("#w").hide();
							$("#c").click(function(){
								$("#w").hide();
								$("#gs").hide();

							})
						}
						else{
							$("#w").show();
							document.getElementById("w").innerHTML = "Wrong answer!!"
							$("#gs").show();
							$("ff").click(function(){       
							       document.getElementById("gs").innerHTML= "Get Correct Answer"
						})
							dis();
							csen(s11)
						}
					
					}
				})
				

				}
				function csen(s){
				$("#gs").click(function(){
						var sp =s.split(" ");
						var arr = sp;
						var count = 0;
						var ind = document.getElementById("select").selectedIndex;
						var val = document.getElementById("select")[ind].value;
						if(val == "eng"){
							for (var j = 0; j < 10; j++) {
								for(var i = 0;i < arr.length;i++){
									if(e1[j].search(arr[i]) >= 0){
										count++;
									}
								}
								if(count != arr.length){
									count = 0;
								}
								else if(count == arr.length){
									var v = j;
									var s11 = e2[v];
									document.getElementById("cms").innerHTML = " "
									for(var k = 0;k < s11.length;k++){
										document.getElementById("cms").innerHTML += s11[k]+"<br>"
									}
									break;
								}
							}
						}
						if(val == "hin"){
							for (var j = 0; j < 7; j++) {
								for(var i = 0;i < arr.length;i++){
									if(h1[j].search(arr[i]) >= 0){
										count++;
									}
								}
								if(count != arr.length){
									count = 0;
								}
								if(count == arr.length){
									var v1 = j;
									var s2 = h2[v1];
									document.getElementById("cms").innerHTML = " "
									for(var k = 0;k < s2.length;k++){
										document.getElementById("cms").innerHTML += s2[k]+"<br>"
									}
									break;
								}
							}
						}
				})
			}
				function dis(){
					        $("#gs").click(function(){
								$("#cms").show()
								document.getElementById("gs").innerHTML = "Hide the correct Sentence"
								h();

								function h(){
									if(document.getElementById("gs").innerHTML == "Hide the correct Sentence"){
											$("#gs").click(function(){
											$("#cms").hide();
											document.getElementById("gs").innerHTML="Get Answers"
											s();
										})
										}
								}
							    function s(){
										if(document.getElementById("gs").innerHTML == "Get Answers"){
											$("#gs").click(function(){
											$("#cms").show();
											document.getElementById("gs").innerHTML = "Hide the correct Sentence"
											h();
									})
								}
									}
							})
				
			}
			}
     }
     a();
}
let askMyAge = prompt("Hello, let's guess my age !");

if (askMyAge < 16) {
    document.write("Nope! That was a good guess. <br><br> Check console for some clues");
    console.log("Here are some possiblities: \n 16, 17, 18, 19");
  
}else if(askMyAge == 16 || askMyAge == 18 ){
	document.write("Not bad ! That was a close guess. <br><br> Check console for some clues");
	console.log("Here are some possiblities: \n 16, 17, 18, 19");
	
}else if(askMyAge == 17){
	document.write("Great! You made it! Yes, I'm 17! <br><br> Thank you for your time.");
	console.log("Congratulations! You made it!");

}else if(askMyAge > 18){
    document.write("Nope! That was a good guess. <br><br> Check console for some clues");
    console.log("Here are some possiblities: \n 16, 17, 18, 19");
    
}else{
	document.write("You might have typed different data types. Please type <strong>only Numbers</strong>.");
}
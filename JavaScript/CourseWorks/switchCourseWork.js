var quizQuest;
	quizQuest = prompt(" Odd One Out! \n #Soccer     #Tennis \n #Badminton     #Boxing \n You don't need to add # in writing answer.");
	switch(quizQuest){
		case "Soccer":
		     document.write("Your answer is wrong! Try again!");
		     break;
		case "Tennis":
		     document.write("Your answer is wrong! Try again!");
		     break;
		case "Badminton":
		     document.write("Your answer is wrong! Try again!");
		     break;
		case "Boxing":
		     document.write("Your answer is right! Congrats!");
		     break;
		default:
		     document.write("You might have written the one which doesn't include in the list. <br> Try again!");

	}
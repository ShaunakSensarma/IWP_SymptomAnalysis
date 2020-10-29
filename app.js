function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++)
		{
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML="Question "+currentQuestionNumber +" of "+quiz.questions.length;

};

function showScores()
{
	var gameOverHtml="<h1> Thank you for filling this</h1>"
	gameOverHtml+="<h2 id='score'>Our suggestion is kindly consult a \n Chest Specialist</h2>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;


};

var questions=[
	new Question("How many hours sleep are you having per day?",["4 hrs","6 hrs","8 hrs","10+ hrs"],"8 hrs"),
	new Question("Number of known comorbidites?",["None","0-1","2","3+"],"None"),
	new Question("Any symptoms?",["cough","fever","sneeze","none"],"none"),
	new Question("Have you travelled to any country recently?",["None","within 15 days","within 1 month","within 3 months"],"None"),
	new Question("Oxygen level percentage in oximeter?",["Don't have","90+","75+","below 75"],"Don't have"),
];
var quiz=new Quiz(questions);
populate();
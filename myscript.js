var responses = [
  'Reply hazy, try again.',
  'Ask again later',
  'Better not tell you now.',
  'Cannot predict now',
  'Absolutely',
  'Answer Unclear Ask Later',
  'Cannot Foretell Now',
  'Cant Say Now',
  'Chances Arent Good',
  'Consult Me Later',
  'Dont Bet On It',
  'Focus And Ask Again',
  'Indications Say Yes',
  'Looks Like Yes',
  'No',
  'No Doubt About It',
  'Positively',
  'Prospect Good',
  'So It Shall Be',
  'The Stars Say No',
  'Unlikely',
  'Very Likely',
  'Yes',
  'You can count on it',
]

function newResponses(){
  var randomNumber = Math.floor(Math.random() * (responses.length));

  let x = document.forms["form_question"]["question"].value;
    if (x === ""){
      alert("Please type a question to receive an answer.");
        return false;

    } else{
      document.getElementById('response-display').innerHTML = responses[randomNumber];

    }  

  var form_question = document.getElementById('form_question');
  form_question.reset()

  
  
}

// - Prototypal pattern of object creation

let questionMethod = {
  isAnswerCorrect : function (index) {
    return index === correctAnswerIndex;
  },
  getCorrectAnswer : function  (){
    return options[correctAnswerIndex];
  }
}

function quiz (title, options, correctAnswerIndex) {
    let question = Object.create(questionMethod)
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;

    return question;
  }

// Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)


function Quiz(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

Quiz.prototype = {
  isAnswerCorrect : function(index) {
    return index === this.correctAnswerIndex;
  },
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex];
  }
}

// - Create using class

class quiz {
  constructor (title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index) {
    return index === this.correctAnswerIndex;
  }
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex];
  }
}
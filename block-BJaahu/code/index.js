let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;


function isAnswerCorrect(index) {
    return index === correctAnswerIndex;
}

function getCorrectAnswer (){
    return options[correctAnswerIndex];
}

// - Prototypal pattern of object creation

let quiz = {
    title : 'Where is the capital of Jordan',
    options : ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex : 1,
    isAnswerCorrect(index) {
      return index === quiz.correctAnswerIndex;
    },
    getCorrectAnswer(){
      return quiz.options[quiz.correctAnswerIndex];
    }
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
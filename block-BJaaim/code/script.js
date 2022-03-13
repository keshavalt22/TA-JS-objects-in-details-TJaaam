class Question{
    constructor(title, options = [], correctAns){
        this.title = title;
        this.options = options;
        this.correctAns = correctAns;
    }
    getCorrectAnswer(correctAns) {
        return this.options[correctAns];
    }
}
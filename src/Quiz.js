import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

  constructor(props){
    super(props)
    this.state = {quiz_position: 1}

  }

//Replaced the return with an actual Component instead of actual values
  render(){
    return(
    <div>
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
    </div>
  )
  }

}

export default Quiz

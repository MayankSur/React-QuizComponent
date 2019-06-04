import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')

class Quiz extends Component {

  constructor(props){
    super(props)
    this.state = {quiz_position: 1}

  }

  ShowNextQuestion(){
    this.setState((state) => {
      return {quiz_position: state.quiz_position + 1}
    })
  }
//Replaced the return with an actual Component instead of actual values
  render(){
    const isQuizEnd = ((quizData.quiz_questions.length) === (this.state.quiz_position-1))
    return(
    <div>
    {isQuizEnd ? <QuizEnd /> :
      <QuizQuestion ShowNextQuestionHandler={this.ShowNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position-1]}/>
      }
    </div>

  )
  }

}

export default Quiz

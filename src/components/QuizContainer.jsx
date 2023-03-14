import React, { useState, useEffect } from 'react';
import '../css/Main.css';
import FinalScorePage from './FinalScorePage';
import { Questions } from './Questions';
import QuizeOptions from './quizeOptions';
import AOS from 'aos';

export default function QuizeContainer() {
    AOS.init();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setselectedAnswer] = useState('');
    const [score, setscore] = useState(0)
    const [wrongAnswers, setwrongAnswers] = useState(0)
    const AnswerChecker = (selectedAnswer, correctAnswer) => {

        if (selectedAnswer === correctAnswer) {
            setscore(score + 1)

            
        } else {
           
            setwrongAnswers(wrongAnswers + 1)
        }
        if (selectedAnswer !== '') {
            setActiveQuestion(activeQuestion + 1)

        }


    }

    useEffect(() => {

        AnswerChecker(selectedAnswer, questions[activeQuestion].correct)

    }, [selectedAnswer])









    const questions = Questions;


    return (
        <div className="centerChild">
            <div data-aos="fade-down" data-aos-easing="linear"
                data-aos-duration="600" className="card shadow pt-3 pb-4" style={{ width: '50rem', }}>
                <div className="card-body">

                    {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                    {questions.length > activeQuestion ? <div>  <h5 className="card-title mb-4 between"> <span> Quiz {activeQuestion + 1}/{questions.length} </span>       </h5><p className="card-text"> Q : {questions[activeQuestion].question}</p>
                        <QuizeOptions selectedAnswer={setselectedAnswer} options={questions[activeQuestion].options}></QuizeOptions> </div> : <FinalScorePage score={score} wrongAnswers={wrongAnswers - 1}></FinalScorePage>}
                </div>
            </div>
        </div>
    )
}

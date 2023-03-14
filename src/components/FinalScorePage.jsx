import React from 'react';
import Aos from 'aos';

export default function FinalScorePage(props) {
    Aos.init()
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="400" className="text-center scoreCard py-5">
            <h6 className='d-flex justify-content-center'>

                <div>Your Score :</div> <b className='mx-3'> {props.score} </b>
            </h6>
            <h6 className='d-flex justify-content-center'>

                <div>Wrong Answers :</div> <b className='mx-3'> {props.wrongAnswers} </b>
            </h6>
        </div>
    )
}

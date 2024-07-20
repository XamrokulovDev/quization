import React, { useContext, useState } from 'react';
import { userContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Js = () => {
    const { javascript } = useContext(userContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswerClick = (answer) => {
        const currentQuestion = javascript[currentIndex];
        const isCorrect = answer === currentQuestion.correct_answer;

        setAnswers(prevAnswers => [
            ...prevAnswers,
            { question: currentQuestion.question, answer, isCorrect }
        ]);

        if (currentIndex + 1 < javascript.length) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const getScorePercentage = () => {
        const correctAnswers = answers.filter(answer => answer.isCorrect).length;
        const totalQuestions = javascript.length;
        return Math.round((correctAnswers / totalQuestions) * 100);
    };

    const getCorrectAnswersCount = () => {
        return answers.filter(answer => answer.isCorrect).length;
    };

    if (!javascript || javascript.length === 0) return <p>No questions available.</p>;

    if (showResult) {
        return (
            <div className="w-[85vw] h-[100vh] flex items-center justify-center">
              <div className="w-[350px] max-md:w-full backdrop-blur-lg bg-[#eeeeee9b] overflow-hidden rounded-2xl relative p-5">
                <h1 className='text-gray-700 pb-3 text-xl font-bold'>Natija</h1>
                <p className='text-gray-700 p-1 text-md font-medium'>To'g'ri javoblar soni: {getCorrectAnswersCount()} / {javascript.length}</p>
                <p className='text-gray-700 p-1 text-md font-medium'>To'g'ri javoblar foizi: {getScorePercentage()}%</p>
                <button className='w-full bg-green-500 py-1 text-white rounded-md mt-5'><NavLink to={"/home"}>Qayta boshlash</NavLink></button>
              </div>
            </div>
        );
    }

    const currentQuestion = javascript[currentIndex];

    return (
        <div className="h-[100vh] max-md:w-[85vw] flex items-center justify-center">
          <motion.div 
            className="w-[350px] max-md:w-full backdrop-blur-lg bg-[#f7f7f791] overflow-hidden rounded-2xl p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className='pb-4 text-xl font-bold'>{currentQuestion.question}</h1>
            <ul className='flex flex-col gap-1'>
              <li onClick={() => handleAnswerClick(currentQuestion.answer_1)} className="cursor-pointer text-md font-medium">
                  {currentQuestion.answer_1}
              </li>
              <li onClick={() => handleAnswerClick(currentQuestion.answer_2)} className="cursor-pointer text-md font-medium">
                  {currentQuestion.answer_2}
              </li>
              <li onClick={() => handleAnswerClick(currentQuestion.answer_3)} className="cursor-pointer text-md font-medium">
                  {currentQuestion.answer_3}
              </li>
              <li onClick={() => handleAnswerClick(currentQuestion.answer_4)} className="cursor-pointer text-md font-medium">
                  {currentQuestion.answer_4}
              </li>
            </ul>
          </motion.div>
        </div>
    );
};

export default Js;

import { useEffect, useState } from "react";
import ContentQuizz from "../content/ContentQuizz";
import "../scss/Quizz.scss";

const Quizz = () => {
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        const newQuestions = ContentQuizz();
        setQuestions(newQuestions);
    }, []);

    const handleAnswerChange = (answer) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = answer;
        setUserAnswers(newAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            calculateScore();
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const calculateScore = () => {
        let finalScore = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                finalScore++;
            }
        });

        setScore(finalScore);
        return <h1>Your final score is: {score}</h1>;
    };

    if (questions.length === 0) {
        return <h1>.....Loading</h1>;
    }

    const HandleReset = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setUserAnswers([]);
    }

    if (currentQuestionIndex >= questions.length) {
        return <div className="FinalScore">
            <h1>Your final score is: {score}</h1>
            <button onClick={() => HandleReset()}>Restart</button>
        </div >
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="appQuizz">
            <div className="quizz">
                <h2>Question {currentQuestion.questionID}</h2>
                <p>{currentQuestion.question}</p>

                {currentQuestion.answers.map((answer, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            name={`question-${currentQuestion.questionID}`}
                            value={answer}
                            checked={userAnswers[currentQuestionIndex] === answer}
                            onChange={() => handleAnswerChange(answer)}
                        />
                        {answer}
                    </div>
                ))}
                <button onClick={handleNextQuestion}>
                    {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
                </button>

            </div>
        </div>
    );
};

export default Quizz
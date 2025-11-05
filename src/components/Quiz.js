import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is your primary skin concern?",
      options: [
        "Dark spots and hyperpigmentation",
        "Dull and uneven skin tone",
        "Dry and dehydrated skin",
        "Oily and acne-prone skin",
        "Aging and fine lines"
      ]
    },
    {
      id: 2,
      question: "How would you describe your current skin tone?",
      options: [
        "Very fair",
        "Fair",
        "Medium",
        "Olive",
        "Dark"
      ]
    },
    {
      id: 3,
      question: "What is your skin type?",
      options: [
        "Dry",
        "Oily",
        "Combination",
        "Normal",
        "Sensitive"
      ]
    },
    {
      id: 4,
      question: "How often do you currently use skincare products?",
      options: [
        "Daily - I have a complete routine",
        "A few times a week",
        "Occasionally",
        "Rarely",
        "Never - I'm new to skincare"
      ]
    },
    {
      id: 5,
      question: "What results are you hoping to achieve?",
      options: [
        "Brighter, more radiant skin",
        "Even out skin tone",
        "Reduce dark spots",
        "Improve overall skin texture",
        "All of the above"
      ]
    },
    {
      id: 6,
      question: "How much time can you dedicate to skincare daily?",
      options: [
        "5-10 minutes",
        "10-15 minutes",
        "15-30 minutes",
        "30+ minutes",
        "I prefer minimal routine"
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    const answerValues = Object.values(answers);
    
    if (answerValues.includes("Dark spots and hyperpigmentation") || 
        answerValues.includes("Reduce dark spots")) {
      return {
        title: "Perfect Match!",
        description: "Our GlowSkin Brightening Cream is specifically formulated to target dark spots and hyperpigmentation. With natural brightening agents, it will help fade dark spots while providing deep hydration.",
        recommendation: "Use twice daily - morning and evening. Apply to clean skin and follow with sunscreen during the day."
      };
    } else if (answerValues.includes("Dull and uneven skin tone") || 
               answerValues.includes("Brighter, more radiant skin")) {
      return {
        title: "Great Choice!",
        description: "Our cream is perfect for brightening dull skin and creating a more even, radiant complexion. The vitamin C and natural extracts will give you that healthy glow.",
        recommendation: "Use daily for best results. Apply in the morning for a fresh start to your day."
      };
    } else {
      return {
        title: "Excellent Fit!",
        description: "Our GlowSkin Brightening Cream is suitable for all skin types and concerns. It will help improve your overall skin health while providing the brightening benefits you're looking for.",
        recommendation: "Start with once daily application and increase to twice daily as your skin adjusts."
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <section id="quiz" className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="quiz-container text-center">
                <div className="mb-4">
                  <i className="fas fa-sparkles text-warning" style={{fontSize: '3rem'}}></i>
                </div>
                <h2 className="mb-4">{recommendation.title}</h2>
                <p className="lead mb-4">{recommendation.description}</p>
                <div className="alert alert-info">
                  <h6><i className="fas fa-lightbulb me-2"></i>Recommended Usage:</h6>
                  <p className="mb-0">{recommendation.recommendation}</p>
                </div>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Shop Now
                  </button>
                  <button 
                    className="btn btn-outline-primary btn-lg"
                    onClick={restartQuiz}
                  >
                    <i className="fas fa-redo me-2"></i>
                    Retake Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Skin Analysis Quiz</h2>
            <p className="section-subtitle">
              Answer a few questions to get personalized recommendations for your skin
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="quiz-container">
              <div className="quiz-progress">
                <div 
                  className="quiz-progress-bar" 
                  style={{width: `${progress}%`}}
                ></div>
              </div>
              
              <div className="text-center mb-4">
                <span className="badge bg-primary">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              
              <h3 className="quiz-question">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`quiz-option ${
                      answers[questions[currentQuestion].id] === option ? 'selected' : ''
                    }`}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <div className={`option-circle ${
                          answers[questions[currentQuestion].id] === option ? 'selected' : ''
                        }`}>
                          {answers[questions[currentQuestion].id] === option && (
                            <i className="fas fa-check"></i>
                          )}
                        </div>
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="quiz-navigation">
                <button 
                  className="btn btn-outline-secondary"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Previous
                </button>
                
                <button 
                  className="btn btn-primary"
                  onClick={nextQuestion}
                  disabled={!answers[questions[currentQuestion].id]}
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                  <i className="fas fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .option-circle {
          width: 24px;
          height: 24px;
          border: 2px solid #ddd;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .option-circle.selected {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Quiz;

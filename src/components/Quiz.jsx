import { useState } from "react";
import Intro from "./Intro";
import QuizQuestions from "./QuizQuestions";
import Results from "./Results";

const Quiz = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});
  const [isDemo, setIsDemo] = useState(false);

  const handleShowQuiz = () => setShowIntro(false);

  const handleShowResults = (finalResults, demoMode) => {
    setResults(finalResults);
    setIsDemo(demoMode);
    setShowResults(true);
  };

  return (
    <div className="container mx-auto p-8">
      {showIntro && <Intro onStart={handleShowQuiz} />}
      {!showIntro && !showResults && (
        <QuizQuestions onQuizComplete={handleShowResults} />
      )}
      {showResults && <Results results={results} isDemo={isDemo} />}
    </div>
  );
};

export default Quiz;
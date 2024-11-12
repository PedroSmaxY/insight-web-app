import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const internalQuestions = {
  dominancia: [
    "Você se considera uma pessoa competitiva?",
    "Você gosta de tomar decisões rapidamente?",
    "Você prefere liderar do que ser liderado?",
    "Você é orientado para resultados?",
    "Você se sente confortável em assumir riscos?",
  ],
  influencia: [
    "Você gosta de conversar com diferentes tipos de pessoas?",
    "Você prefere trabalhar em grupo do que sozinho?",
    "Você gosta de persuadir os outros?",
    "Você prefere inspirar as pessoas em vez de seguir regras?",
    "Você gosta de ser o centro das atenções?",
  ],
  estabilidade: [
    "Você prefere um ambiente de trabalho previsível?",
    "Você evita mudanças rápidas?",
    "Você é uma pessoa paciente?",
    "Você prefere seguir um ritmo constante no trabalho?",
    "Você prefere resolver conflitos de forma pacífica?",
  ],
  conformidade: [
    "Você presta atenção aos detalhes?",
    "Você gosta de seguir regras e procedimentos?",
    "Você se considera uma pessoa analítica?",
    "Você é rigoroso ao seguir padrões estabelecidos?",
    "Você prefere trabalhar com dados e fatos?",
  ],
};

const QuizQuestions = ({ onQuizComplete }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [perfil, setPerfil] = useState("dominancia");
  const [useInternalQuestions, setUseInternalQuestions] = useState(false);

  const fetchQuestion = useCallback(
    async (perfil, num) => {
      if (useInternalQuestions) {
        setQuestion(internalQuestions[perfil][num - 1]);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/questions/${perfil}/${num}/`
        );
        setQuestion(response.data.question);
      } catch (error) {
        console.error("Erro ao buscar a pergunta:", error);
        setUseInternalQuestions(true);
        setQuestion(internalQuestions[perfil][num - 1]);
      }
    },
    [useInternalQuestions]
  );

  useEffect(() => {
    fetchQuestion(perfil, currentQuestion);
  }, [perfil, currentQuestion, fetchQuestion]);

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      setSelectedAnswer(null);

      if (currentQuestion < 5) {
        setCurrentQuestion((prev) => prev + 1);
      } else if (perfil === "dominancia") {
        setPerfil("influencia");
        setCurrentQuestion(1);
      } else if (perfil === "influencia") {
        setPerfil("estabilidade");
        setCurrentQuestion(1);
      } else if (perfil === "estabilidade") {
        setPerfil("conformidade");
        setCurrentQuestion(1);
      } else {
        submitAnswers();
      }
    }
  };

  const submitAnswers = async () => {
    if (useInternalQuestions) {
      const fallbackResults = {
        dominancia: "Dominância moderada",
        influencia: "Influência alta",
        estabilidade: "Estabilidade baixa",
        conformidade: "Conformidade moderada",
      };
      onQuizComplete(fallbackResults);
    } else {
      try {
        const response = await axios.post(
          `http://localhost:8000/api/v1/diagnostic/complete/`,
          {
            dominancia: answers.slice(0, 5),
            influencia: answers.slice(5, 10),
            estabilidade: answers.slice(10, 15),
            conformidade: answers.slice(15, 20),
          }
        );
        onQuizComplete(response.data);
      } catch (error) {
        console.error("Erro ao enviar respostas:", error);
      }
    }
  };

  return (
    <div className="quiz-container bg-white shadow-lg rounded-lg max-w-2xl w-full mx-auto p-8">
      {useInternalQuestions && (
        <div className="mb-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p>
            Conectando ao modo offline: usando perguntas e respostas internas.
          </p>
        </div>
      )}
      <div className="mb-4">
        <p className="text-xl font-medium text-center">{question}</p>
      </div>
      <ul className="space-y-2 mb-4">
        {[5, 4, 3, 2, 1].map((value, index) => (
          <li key={index}>
            <input
              type="radio"
              id={`option${value}`}
              name="answer"
              value={value}
              checked={selectedAnswer === value}
              onChange={() => setSelectedAnswer(value)}
              className="hidden"
            />
            <label
              htmlFor={`option${value}`}
              className={`block p-4 rounded-lg cursor-pointer ${
                selectedAnswer === value
                  ? "bg-purple-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-purple-100"
              }`}
            >
              {
                [
                  "Concordo bastante",
                  "Concordo",
                  "Neutro",
                  "Discordo",
                  "Discordo bastante",
                ][5 - value]
              }
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
        className={`w-full py-2 px-4 rounded-lg text-white  ${
          selectedAnswer
            ? "bg-purple-600 hover:bg-purple-700"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Próxima Pergunta
      </button>
    </div>
  );
};

QuizQuestions.propTypes = {
  onQuizComplete: PropTypes.func.isRequired,
};

export default QuizQuestions;

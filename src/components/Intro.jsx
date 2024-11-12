import PropTypes from "prop-types";

const Intro = ({ onStart }) => {
  return (
    <div className="intro-container bg-white shadow-lg rounded-lg max-w-2xl w-full mx-auto p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Bem-vindo ao Insight Web App
      </h2>
      <p className="text-lg mb-6">
        Este quiz foi projetado para ajudar você a entender melhor suas
        tendências e características pessoais. Responda a uma série de perguntas
        simples e receba um diagnóstico com base em seu perfil de personalidade.
      </p>
      <p className="text-sm text-gray-600 mb-6">
        Desenvolvido por: Lucas Amaral, Pedro Henrique da Silva Novais, Pedro
        Henrique Nascimento Carvalho, Victor Jacques.
      </p>
      <p className="text-sm text-gray-600 mb-6">
        Desenvolvido para a matéria de Sistemas Especialistas, ministrada pelo
        professor Denis Gonçalves Cople.
      </p>
      <button
        onClick={onStart}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
      >
        Iniciar Quiz
      </button>
    </div>
  );
};

Intro.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Intro;

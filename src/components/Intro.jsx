import PropTypes from "prop-types";

const Intro = ({ onStart }) => {
  return (
    <div className="intro-container bg-white max-w-2xl w-full mx-auto p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        &#10024; Bem-vindo ao Insight Web App &#10024;
      </h2>
      <p className="text-lg mb-6 text-justify">
        Este quiz foi projetado para ajudar você a entender melhor suas
        tendências e características pessoais. Responda a uma série de perguntas
        simples e receba um diagnóstico com base em seu perfil de personalidade.
      </p>
      <p className="text-sm text-gray-600 mb-6">
        Desenvolvido por: Lucas Amaral, Pedro Henrique da Silva Novais, Pedro
        Henrique Nascimento Carvalho e Victor Jacques.
      </p>
      <p className="text-sm text-gray-600 mb-6">
        Projeto desenvolvido para atender as exigências da matéria de Sistemas
        Especialistas da Universidade Veiga de Almeida, ministrada pelo
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

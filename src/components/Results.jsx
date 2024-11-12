import PropTypes from "prop-types";

const Results = ({ results }) => {
  return (
    <div className="results-container bg-white shadow-md rounded-xl max-w-2xl w-full mx-auto p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Seu Resultado</h2>
      {Object.keys(results).map((perfil) => (
        <p key={perfil} className="text-lg">
          <strong>{perfil.charAt(0).toUpperCase() + perfil.slice(1)}:</strong>{" "}
          {results[perfil]}
        </p>
      ))}
      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
      >
        Refazer Quiz
      </button>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object.isRequired,
};

export default Results;

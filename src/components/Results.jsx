import PropTypes from "prop-types";

const Results = ({ results, isDemo }) => {
  return (
    <div className="results-container bg-white shadow-md rounded-xl max-w-2xl w-full mx-auto p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Seu Resultado</h2>
      {Object.keys(results).map((perfil) => (
        <p key={perfil} className="text-lg">
          <strong>{perfil.charAt(0).toUpperCase() + perfil.slice(1)}:</strong>{" "}
          {results[perfil]}
        </p>
      ))}
      {isDemo && (
        <p className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          Nota: Estes resultados são apenas de demonstração, pois o programa não
          estava conectado à API.
        </p>
      )}
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
  isDemo: PropTypes.bool,
};

export default Results;

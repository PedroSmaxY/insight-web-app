import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-purple-500 text-white py-6 text-center">
        <h1 className="text-3xl font-semibold">Quiz de Personalidade</h1>
        <p className="text-lg">
          Descubra mais sobre sua personalidade com este quiz de 5 minutos!
        </p>
      </header>
      <Quiz />
      <footer className="bg-purple-500 text-white py-4 text-center mt-auto">
        <p className="text-sm text-gray-200">
          Desenvolvido por Lucas Amaral, Pedro Novais, Pedro Carvalho, Victor
          Jacques © 2024
        </p>
      </footer>
    </div>
  );
}

export default App;

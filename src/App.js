import './App.css';
import FirstComponent from './Components/FirstComponent';
import PropsComponent from './Components/PropsComponent';
function App() {
  const nome = "matheus"
  const minhaURL = "https://github.com/Velinu"
  return (
    <div className="App">
        <h2>Alterando JSX</h2>
        <h1>{nome}</h1>
        <a href={minhaURL}>
          <button>
            testando link
          </button>
        </a>

        
        <FirstComponent />
        <PropsComponent nome="Pedro" />
        <PropsComponent nome={nome} />
    </div>
  );
}

export default App;

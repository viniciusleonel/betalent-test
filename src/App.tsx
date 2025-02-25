import "./App.css";
import Header from "./components/Header.tsx";
import SearchBar from "./components/SearchBar.tsx";
import Table from "./components/Table.tsx";

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
              <div className="title-search">
                <h1>Funcionários</h1>
                <SearchBar />
              </div>
              <Table />
            </main>
        </>
    );
}

export default App;

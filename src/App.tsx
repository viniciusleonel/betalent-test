import { useState } from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import SearchBar from "./components/SearchBar.tsx";
import Table from "./components/Table.tsx";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
              <div className="title-search">
                <h1>Funcionários</h1>
                <SearchBar onSearch={setSearchTerm} />
              </div>
              <Table searchTerm={searchTerm}/>
            </main>
        </>
    );
}

export default App;

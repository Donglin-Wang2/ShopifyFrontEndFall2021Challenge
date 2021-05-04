import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ResultCard from "./ResultCard.js";
import NominationCard from "./NominationCard.js";

const apiKey = "41425b78";

function App() {
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [nominations, setNomination] = useState([]);

	const fetchFilms = async () => {
		if (query) {
			const result = await axios.get(
                `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
            );
			console.log(result.data)
            if (!result.data.Error) {
                setSearchResult(result.data.Search);
            } else {
                setSearchResult([]);
            }
		}
	}

    return (
        <div className="App">
            <div className="container">
                <h1 className="title is-1">Movie Nominator</h1>
				<div className="searchbar mb-4">
					<input
						className="input is-large"
						type="text"
						placeholder="Large input"
						onChange={(e) => setQuery(e.target.value)}
						onKeyPress={
							(e) => {
								if (e.key === 'Enter') {
									fetchFilms()
								}
							}
						}
					/>
					<button className="button is-large" onClick={fetchFilms}>Search</button>
				</div>
                <div className="columns board">
                    <div className="column">
                        {searchResult.map((ele) => (
                            <ResultCard
                                film={ele}
                                key={ele.imdbID}
                                setNomination={setNomination}
								nominations={nominations}
                            />
                        ))}
                    </div>
                    <div className="column">
						{nominations.map((ele) => (
                            <NominationCard
                                film={ele}
                                key={ele.imdbID}
                                setNomination={setNomination}
								nominations={nominations}
                            />
                        ))}
					</div>
                </div>
            </div>
        </div>
    );
}

export default App;

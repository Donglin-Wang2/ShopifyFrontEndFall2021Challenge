import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ResultCard from "./ResultCard.js";
import NominationCard from "./NominationCard.js";

const apiKey = "41425b78";

function App() {
    let storedNominations = localStorage.getItem("nominations");
    const [query, setQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [nominations, setNomination] = useState(
        storedNominations ? JSON.parse(storedNominations) : []
    );
    const [err, setErr] = useState("");

    const fetchFilms = async () => {
        if (query) {
            const result = await axios.get(
                `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
            );
            console.log(result.data);
            if (!result.data.Error) {
                setSearchResult(result.data.Search);
            } else {
                setErr(result.data.Error);
                setSearchResult([]);
            }
        } else {
            setErr(null);
            setSearchResult([]);
        }
    };

    useEffect(() => {
        localStorage.setItem("nominations", JSON.stringify(nominations));
    }, [nominations]);

    return (
        <div className="App">
            {nominations.length >= 5 ? (
                <div class="notification is-danger is-light">
                    You already have 5 nominations. Please narror your options!
                </div>
            ) : (
                <div></div>
            )}
            <div className="container">
                <h1 className="title is-1 mt-4">Movie Nominator 🏆</h1>
                <div className="searchbar mb-4">
                    <input
                        className="input is-large"
                        type="text"
                        placeholder="Large input"
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                fetchFilms();
                            }
                        }}
                    />
                    <button className="button is-large" onClick={fetchFilms}>
                        Search
                    </button>
                </div>
                <div className="columns board">
                    <div className="column">
                        <h3 className="title is-3 has-text-centered">
                            Search Results
                        </h3>
                        {searchResult.length === 0 ? (
                            <h5 className="title is-5 has-text-centered">
                                {err
                                    ? err
                                    : "Type in the serach bar to search for movies ☝️"}
                            </h5>
                        ) : (
                            searchResult.map((ele) => (
                                <ResultCard
                                    film={ele}
                                    key={ele.imdbID}
                                    setNomination={setNomination}
                                    nominations={nominations}
                                />
                            ))
                        )}
                    </div>
                    <div className="column">
                        <h3 className="title is-3 has-text-centered">
                            Nominations
                        </h3>
                        {nominations.length === 0 ? (
                            <h5 className="title is-5 has-text-centered">
                                You haven't nominated any movie
                            </h5>
                        ) : (
                            nominations.map((ele) => (
                                <NominationCard
                                    film={ele}
                                    key={ele.imdbID}
                                    setNomination={setNomination}
                                    nominations={nominations}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

import React from "react";

export default function ResultCard({ film, nominations, setNomination }) {
    let img = "";
    if (film.Poster === "N/A") {
        img = "./placeholder-image.png";
    } else {
        img = film.Poster;
    }

    const isNominated = () => {
        return nominations.some((ele) => ele.imdbID === film.imdbID);
    };
    const updateNomination = () => {
        if (!isNominated()) {
            let newNominations = [...nominations, film];
            setNomination(newNominations);
        }
    };

    return (
        <div className="result-card">
            <div className="result-card__img">
                <img src={img} alt="Placeholder"/>
            </div>
            <div className="result-card__info">
                <p className="title is-5 mb-1">{film.Title}</p>
                <p>
                    <strong>Year: </strong>
                    {film.Year}
                </p>
            </div>
            <div className="result-card__btn">
                {isNominated() ? (
                    <button className="button" disabled>
                        Nominate
                    </button>
                ) : (
                    <button
                        className="button"
                        onClick={() => updateNomination()}
                    >
                        Nominate
                    </button>
                )}
            </div>
        </div>
    );
}

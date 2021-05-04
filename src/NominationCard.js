import React from "react";

export default function NominationCard({ film, nominations, setNomination }) {
    let img = "";
    if (film.Poster === "N/A") {
        img = "./placeholder-image.png";
    } else {
        img = film.Poster;
    }
    const getIdx = () => {
        return nominations.find((ele) => ele.imdbID === film.imdbID);
    };
    const updateNomination = () => {
        let newNominations = [...nominations];
        let idx = getIdx();
        newNominations.splice(idx, 1);
        setNomination(newNominations);
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
                <button
                    className="button has-background-color-warn"
                    onClick={() => updateNomination(film.imbdID)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

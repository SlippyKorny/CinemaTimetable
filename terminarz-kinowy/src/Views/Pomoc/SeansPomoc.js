import React, { Component } from 'react'

export class SeansPomoc extends Component {
    render() {
        return (
            <div>
                <h1>Pomoc Seans</h1>
                <h2>Spis</h2>
                <p>Spis to sekcja wypisująca wszystkie zarejestrowane seanse. Posiada ona także kontrolki przenoszące do sekcji edytuj seans oraz usuń seans.</p>
                <h2>Dodaj Seans</h2>
                <p>Dodaj seans to sekcja w której można dodać nowe seansy.</p>
                <h2>Edytuj Seans</h2>
                <p>Sekcja umożliwiająca szybką edycję istniejącego już seansu.</p>
            </div>
        )
    }
}

export default SeansPomoc

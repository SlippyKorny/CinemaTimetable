import React, { Component } from 'react'

export class Pomoc extends Component {
    render() {
        return (
            <div>
                <h1>Pomoc</h1>
                <hr/><br/><br/>
                <h1>Pomoc kino</h1><br/>
                <h2>Spis</h2>
                <p>Spis to sekcja wypisująca wszystkie dostępne kina. Posiada ona także kontrolki przenoszące do sekcji edytuj kino oraz usuń kino.</p>
                <h2>Dodaj Kino</h2>
                <p>Dodaj Kino to sekcja w której można dodać nowe kino.</p>
                <h2>Edytuj Kino</h2>
                <p>Sekcja umożliwiająca szybką edycję istniejącego już kina.</p>
                <hr/><br/><br/>
                <h1>Pomoc Seans</h1><br/>
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

export default Pomoc

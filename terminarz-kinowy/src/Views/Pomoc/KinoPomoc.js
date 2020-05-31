import React, { Component } from 'react'

export class KinoPomoc extends Component {
    render() {
        return (
            <div>
                <h1>Pomoc kino</h1>
                <h2>Spis</h2>
                <p>Spis to sekcja wypisująca wszystkie dostępne kina. Posiada ona także kontrolki przenoszące do sekcji edytuj kino oraz usuń kino.</p>
                <h2>Dodaj Kino</h2>
                <p>Dodaj Kino to sekcja w której można dodać nowe kino.</p>
                <h2>Edytuj Kino</h2>
                <p>Sekcja umożliwiająca szybką edycję istniejącego już kina.</p>
            </div>
        )
    }
}

export default KinoPomoc

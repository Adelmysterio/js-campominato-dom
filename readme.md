<!-- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. -->

creo una funzione getRandomInt che generi un numero randomico compreso tra 2 numeri


all'interno della funzione createGame
    inizializzo una varibile score
    inizializzo un array vuoto bombs
    seleziono elemento score nel dom
    creo un ciclo while che aggiunga un un numero compreso tra 1 e slot all array fino a che non e' lungo 16
        se il numero generato non e' gia' all'interno dell'array lo aggiungo altrimenti continua
    aggiungo condizione all'event listener 
    se il contenuto dello span e' uguale ad un numero contenuto in bombs allora aggiungo una classe bombs elemento article 
    altrimenti aggiungo active e aggiungo + 1 al contenuto di score



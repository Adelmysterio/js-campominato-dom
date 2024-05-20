<!--! Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. -->

dichiaro una costante che selezioni la section grid in html
creo un ciclo for con indice massimo 100
    creo un elemento article
    appendo article alla grid
    creo un elemento span
    appendo lo span al article
    appendo l indice come contenuto dello span
    selezione article e creo un event listener che risponda al click
        che aggiunga una classe active al article
        stampo il contenuto di span
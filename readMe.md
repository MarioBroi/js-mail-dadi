# Instructions

- Mail:
    - Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere. 
    - Stampa un messaggio appropriato sull’esito del controllo.

- Gioco dei dadi:
    - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
    - Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Steps

- Mail:
    - Ask the email to the user
    - IF the email is on our list
        - Print "You can join"
    - ELSE 
        - Print "You are not registered"

- Gioco dei dadi:
    - Generate a random number from 1 to 6 for user and npc
    - IF the number of the user is bigger then the number of the npc
        - print for user: "You win"
    - Else
        - print for user: "You lose"

### Tools

- const / let
- prompt
- log
- for
- if / else
- Math.Random ()
function DisableNextButton(btnId) {
    document.getElementById(btnId).disabled = 'true';
}

function numbering (number)
{
    for(let i = 0; i < 5; i++ )
    {
        retu
    }

}

function clickhandler(buttonClick, listsInUl, playerInnerText) {

    document.getElementById(buttonClick).addEventListener('click',function(){

        const addlist = document.getElementById(listsInUl);
        const li = document.createElement('li');
        const name = document.getElementById(playerInnerText);
        const playerNAme = name.innerText;
        li.innerText = playerNAme;
        console.log(addlist.getElementsByTagName('li'));

        if (addlist.getElementsByTagName('li').length < 5 ) {
            
            addlist.appendChild(li);

        }

        DisableNextButton('button-messi');
    
    })

}

clickhandler('button-messi', 'list-five', 'playernameMessi');
clickhandler('button-ramos', 'list-five', 'playernameRamos');
clickhandler('button-hakimi', 'list-five', 'playernameHakimi');
clickhandler('button-Donnarumma', 'list-five', 'playernameDonnarumma');
clickhandler('button-kurzawa', 'list-five', 'playernameKurzawa');
clickhandler('button-paredes', 'list-five', 'playernameParedes');
clickhandler('button-marquinhos', 'list-five', 'playernameMarquinhos');
clickhandler('button-verratti', 'list-five', 'playernameVerratti');
clickhandler('button-neymar', 'list-five', 'playernameNeymar');
clickhandler('button-mbappe', 'list-five', 'playernameMbappe');
clickhandler('button-sanches', 'list-five', 'playernameSanches');
clickhandler('button-vitinha', 'list-five', 'playernameVitinha');


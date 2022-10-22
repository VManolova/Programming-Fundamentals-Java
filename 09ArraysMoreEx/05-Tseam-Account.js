function gameManagment(info) {
    let i = 0;
    let games = info[i].split(' ');
    i++;

    let prompt = info[i].split(' ');
    let command = prompt[0];
    let vgame = prompt[1];
    i++;

    while (command != 'Play!') {
        switch (command) {
            case 'Install':
                if (!games.includes(vgame)) {
                    games.push(vgame);
                }
                break;
            case 'Uninstall':
                if (games.includes(vgame)) {
                    let index = games.indexOf(vgame);
                    games.splice(index, 1);
                }
                break;
            case 'Update':
                if (games.includes(vgame)) {
                    let index = games.indexOf(vgame);
                    let removed = games.splice(index, 1);
                    games.push(removed);
                }
                break;
            case 'Expansion':
                let gameExpansion = vgame.split('-');
                if (games.includes(gameExpansion[0])) {
                    let indexGame = games.indexOf(gameExpansion[0]);
                    let expansion = gameExpansion.join(':');
                    games.splice(indexGame + 1, 0, expansion);
                }
                break;
        }
        prompt = info[i].split(' ');
        command = prompt[0];
        vgame = prompt[1];
        i++;
    }

    console.log(games.join(' '));
}

gameManagment
    (['CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!'
    ])
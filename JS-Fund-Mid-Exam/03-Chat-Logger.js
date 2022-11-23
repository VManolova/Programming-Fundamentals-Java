function chatApp(info) {
    let chatStr = info.shift();
    let chat = [];


    while (chatStr != 'end') {
        let chatArr = chatStr.split(' ');
        let command = chatArr.shift();
        let message = chatArr.shift();
        chatStr = info.shift();

        switch (command) {
            case 'Chat':
                chat.push(message);
                break;
            case 'Delete':
                if (chat.includes(message)) {
                    let ind = chat.indexOf(message);
                    chat.splice(ind, 1);
                }
                break;
            case 'Edit':
                let editedVersion = chatArr.shift();
                if (chat.includes(message)) {
                    let ind = chat.indexOf(message);
                    chat.splice(ind, 1, editedVersion);
                }
                break;
            case 'Pin':
                if (chat.includes(message)) {
                    let ind = chat.indexOf(message);
                    let pin = chat.splice(ind, 1);
                    chat.push(pin)
                }
                break;
            case 'Spam':
                chat.push(message);
                for (let i = 0; i < chatArr.length; i++) {
                    let msg = chatArr[i];
                    chat.push(msg);
                }
                break;
        }
    }

    console.log(chat.join('\n'));

}

chatApp(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);

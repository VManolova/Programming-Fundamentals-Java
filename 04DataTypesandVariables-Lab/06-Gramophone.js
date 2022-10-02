function numRotations(bandName,albumName,songName){
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotationsNum = Math.ceil(songDuration/2.5);
    console.log(`The plate was rotated ${rotationsNum} times.`);
}

numRotations("NCT","질주", "2 Baddies");
numRotations('Black Sabbath', 'Paranoid', 
'War Pigs')
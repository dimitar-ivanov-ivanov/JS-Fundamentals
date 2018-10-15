function nowPlaying(arr){
    let artist = arr[1];
    let track = arr[0];
    let duration = arr[2];
    console.log(`Now Playing: ${artist} - ${track} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);
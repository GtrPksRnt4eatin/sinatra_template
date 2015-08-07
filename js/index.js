function successCallback(stream) {
    var audioContext = new webkitAudioContext();

    // Create an AudioNode from the stream.
    var mediaStreamSource = audioContext.createMediaStreamSource( stream );

    // Connect it to the destination to hear yourself (or any other node for processing!)
    mediaStreamSource.connect( audioContext.destination );
}

function errorCallback() {
    console.log("The following error occurred: " + err);
}

window.onload = function() {
  navigator.webkitGetUserMedia( {audio:true}, successCallback, errorCallback );
}
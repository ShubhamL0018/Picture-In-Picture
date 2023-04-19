const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        // Catch Error Here
        console.log('whoops, erroe here: ', error);
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disableed = true;
    // start picture in picture 
    await videoElement.requestPictureInPicture();
    // reset button
    button.disableed = false;
});

// on load 
selectMediaStream();
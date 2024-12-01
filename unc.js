// Function to ask for permissions for audio and video (Source ChatGPT)
function playback() {
    // Request permission to play audio and video
    const videoPromise = myVideo.play();
    const audio = document.querySelector('audio'); // Reference the audio element

    // If video permission is granted, play the video
    if (videoPromise !== undefined) {
        videoPromise.catch(() => {
            console.log('Video play permission denied');
        });
    }

    // If audio permission is granted, play the audio
    if (audio) {
        audio.play().catch(() => {
            console.log('Audio play permission denied');
        });
    }
} //Mostly GPT's code ^
// This top bit up here was a headache ^, GPT did save the day though with snippets of code :) (I'm terrible at JS)
// Wait for user interaction to ask for permissions and start playback
document.body.addEventListener('click', () => {
    playback();
});

// Countdown until I become UNC status
function updateTimer() {
    const targetDate = new Date("2024-12-07T00:00:00Z"); // GMT for the 7th
    const now = new Date(); // Current date and time
    const diff = targetDate - now; // Calculates the target date to the current by the milliseconds

    // If the countdown is finished, display a message
    if (diff <= 0) {
        document.getElementById("timer").innerText = "My UNC Status Achieved, I can't wait to start balding and experience back pain!";
        return;
    }

    // Countdown
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const milliseconds = diff % 1000; //Added in for dramatic effect

    // Format the time in GMT (British Time)
    const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;

    // Update the timer text
    document.getElementById("timer").innerText = formattedTime;
}

// Update the timer every 10 milliseconds for precision
setInterval(updateTimer, 5); // Not sure if putting it as instant will cause lag, so 5ms delay should be A-Okay :D
updateTimer(); // To keep it looking RESPONSIVE

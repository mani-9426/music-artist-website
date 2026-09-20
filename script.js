// Play song message
function playSong(songName) {

    const player = document.getElementById("player");

    player.innerHTML =
        "🎧 Now Playing: <strong>" + songName + "</strong> &nbsp; ▶️";
}


// Search songs
function searchSongs() {

    const search =
        document.getElementById("songSearch").value.toLowerCase();

    const songs =
        document.querySelectorAll(".song");

    songs.forEach(function(song) {

        const songName =
            song.innerText.toLowerCase();

        if (songName.includes(search)) {
            song.style.display = "block";
        } else {
            song.style.display = "none";
        }

    });
}


// About button
function showMessage() {

    alert(
        "Aira is an independent music artist passionate about creating meaningful music."
    );
}


// Contact form
function sendMessage() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Thank you, " + name + "! Your message has been received.");

    }
}
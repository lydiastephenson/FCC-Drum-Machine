$(() => {

    const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

    const playAudio = (key) => {
        let audio = document.getElementById(key);
        audio.play();
    }

    const updateDisplay = (e) => {
        $("#display").text($(e).attr("id"));
    }

    $(".drum-pad").on("click", (e) => {
        let key = $(e.target).text().trim();
        updateDisplay(e.target);
        playAudio(key);
    });

    $("body").on("keyup", (e) => {
        let key = e.key.toUpperCase();
        if (keys.includes(key)) {
            let element = $(document.getElementById(key)).parent()[0];
            updateDisplay(element);
            playAudio(key);
        }
    });
});
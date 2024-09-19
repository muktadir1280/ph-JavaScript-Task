< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > JS DOM Summary < /title> < /
head > <
    body >
    <
    h1 > Final DOM Event Handlers < /h1> <
h3 id = "handler-status" > Default Text < /h3> <
p id = "input-text-display" > Default Input text < /p> <
input id = "input-field"
type = "text" >
    <
    button id = "btn-update" > Update < /button> <
br >
    <
    br >
    <
    button onclick = "handleOnClick()" > Handle Event by Add onclick Function < /button> <
button id = "event-listener" > Handle event by addEventListener < /button> <
script >
    function handleOnClick() {
        const handlerStatus = document.getElementById('handler-status');
        handlerStatus.innerText = 'Handled by function attached on onclick attribute';
    }
    // option 2
document.getElementById('event-listener').addEventListener('click', function() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add Event listener button'
})

// option 2: recap
document.getElementById('btn-update').addEventListener('click', function() {
        const inputField = document.getElementById('input-field');
        const inputText = inputField.value;

        const p = document.getElementById('input-text-display');
        p.innerText = inputText;
        inputField.value = '';
    }) <
    /script> < /
body > <
    /html>
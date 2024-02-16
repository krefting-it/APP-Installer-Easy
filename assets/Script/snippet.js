function copyText() {
    fetch('snippet.txt')
    .then(response => response.text())
    .then(text => {
        navigator.clipboard.writeText(text)
        .then(() => {
            alert('Text wurde in die Zwischenablage kopiert!');
        })
        .catch(err => {
            console.error('Fehler beim Kopieren des Textes: ', err);
            alert('Fehler beim Kopieren des Textes!');
        });
    })
    .catch(err => {
        console.error('Fehler beim Lesen der Datei: ', err);
        alert('Fehler beim Lesen der Datei!');
    });
}
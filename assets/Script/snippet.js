     document.getElementById('copyButton').addEventListener('click', function() {
            var codeToCopy = '<a href=""><button>Download</button></a>';
            navigator.clipboard.writeText(codeToCopy).then(function() {
                alert('Der Code wurde in die Zwischenablage kopiert!');
            }, function(err) {
                console.error('Fehler beim Kopieren: ', err);
            });
        });
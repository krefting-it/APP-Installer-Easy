function convertToTxt() {
            const appFileInput = document.getElementById('appFileInput');
            const appFile = appFileInput.files[0];
            if (appFile) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const appUrl = event.target.result;
                    // Hier kommt der Code, um die .app-Datei in eine .txt-Datei umzuwandeln und herunterzuladen
                    // Beispiel:
                    // const txtUrl = convertAppToTxtAndDownload(appUrl);
                    
                    // Simuliertes Beispiel: Nehmen wir an, die .app-Datei wird nicht umgewandelt und bleibt gleich
                    const txtUrl = appUrl;
                    const a = document.createElement('a');
                    a.href = txtUrl;
                    a.download = 'converted.txt';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    document.getElementById('uploadApp').style.display = 'none';
                    document.getElementById('uploadTxt').style.display = 'block';
                }
                reader.readAsDataURL(appFile);
            } else {
                alert('Bitte wählen Sie eine .app-Datei aus.');
            }
        }

        function displayTxtContent() {
            const txtFileInput = document.getElementById('txtFileInput');
            const txtFile = txtFileInput.files[0];
            if (txtFile) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const txtContent = event.target.result;
                    document.getElementById('txtContent').value = txtContent;
                    document.getElementById('uploadTxt').style.display = 'none';
                    document.getElementById('showTxtContent').style.display = 'block';
                }
                reader.readAsText(txtFile);
            } else {
                alert('Bitte wählen Sie eine .txt-Datei aus.');
            }
        }

        function copyTxtContent() {
            const txtContent = document.getElementById('txtContent').value;
            navigator.clipboard.writeText(txtContent).then(function() {
                alert('Textinhalt wurde in die Zwischenablage kopiert.');
            }, function() {
                alert('Fehler beim Kopieren des Textinhalts.');
            });
        }

        function showHtmlCodeInput() {
            document.getElementById('showTxtContent').style.display = 'none';
            document.getElementById('htmlCodeInput').style.display = 'block';
        }

        function showHtmlCode() {
            const htmlCode = document.getElementById('htmlInput').value;
            const htmlFrame = document.getElementById('htmlFrame');
            htmlFrame.srcdoc = htmlCode;
            document.getElementById('htmlCodeInput').style.display = 'none';
            document.getElementById('htmlCode').style.display = 'block';
        }

        function downloadFile() {
            const downloadUrl = localStorage.getItem('downloadUrl');
            if (downloadUrl) {
                window.location.href = downloadUrl;
            } else {
                alert('Die Download-URL wurde nicht gefunden.');
            }
        }
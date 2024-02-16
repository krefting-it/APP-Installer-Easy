function downloadTxt() {
  var url = document.getElementById("urlInput").value;
  var filename = "app.txt";
  var fileContent = "Downloaded URL: " + url;
  
  var blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = filename;
  downloadLink.click();
  
  document.getElementById("urlForm").style.display = "none";
  document.getElementById("uploadSection").style.display = "block";
}

function createApp() {
  var fileInput = document.getElementById("fileInput");
  if (fileInput.files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }
  
  var appName = document.getElementById("appNameInput").value;
  var uploadedFile = fileInput.files[0];
  if (uploadedFile.name !== "app.txt") {
    alert("Uploaded file must be named app.txt.");
    return;
  }
  
  var newFilename = appName + ".app";
  var blob = new Blob([uploadedFile], {type: "application/octet-stream"});
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = newFilename;
  downloadLink.click();
}
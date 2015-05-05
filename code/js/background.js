var $ = require('./libs/jquery');

function getContentFromClipboard() {
    var result = '';
    var sandbox = document.getElementById('sandbox');
    sandbox.value = '';
    sandbox.select();
    if (document.execCommand('paste')) {
        result = sandbox.value;
        console.log('got value from sandbox: ' + result);
    }
    sandbox.value = '';
    return result;
}

// Copy provided text to the clipboard.
function copyTextToClipboard(text) {
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}


;(function() {
  

  var classifier = require('programming-language-classifier');
  


  chrome.commands.onCommand.addListener(function(command) {
        if (command === "pasteCode") {
          pastedCode = getContentFromClipboard();
          classifiedLang = classifier.classify(languages, pastedCode);

          var langName = classifiedLang[0][0]

          var langExt = languages['extnames'][langName][0]

          //Create a Gist with classified language

          gistFile = {};
          
          gistFile["test"+langExt] = {"content" : pastedCode};
                

          var gist = {
            "description": "A "+langName+" gist",
            "public": true,
            "files": gistFile
          }
      
          $.ajax({ 
              url: 'https://api.github.com/gists',
              type: 'POST',
              data: JSON.stringify(gist)
          }).done(function(response) {
              copyTextToClipboard(response['html_url']);

              var myAudio = new Audio();
              myAudio.src = "blip.wav";
              myAudio.play();
          });
        }
  });

})();

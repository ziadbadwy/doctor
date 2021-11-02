var textInput = document.querySelector('#textInput');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            textInput.value = command;
            sendButton();
        };

        recognition.onspeechend = function() {
            recognition.stop();
            

        };

        recognition.onerror = function(event) {
            userText.textContent = 'Error occurred in recognition: ' + event.error;
        }        
        function VoiceReco(){
            recognition.start();
        }


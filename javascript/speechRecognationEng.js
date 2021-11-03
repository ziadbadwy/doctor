var textInput = document.querySelector('#textInput');
var message = document.querySelector('#message');
var closeModal= document.querySelector('#close-modal');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-eg';
        recognition.interimResults = false;
        let p = document.createElement("p");
        function CloseM(){
            sendButton();
        }
        message.value="";
        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            textInput.value = command;
            message.textContent = `${'Voice Input: '} ${command} ${ '.'}`
        };

        recognition.onspeechend = function() {
            recognition.stop();
        };

        recognition.onerror = function(event) {
            message.textContent = 'Error occurred in recognition: ' + event.error();
            
        }
        function VoiceReco(){
            recognition.start();
        }
        //firstBot msg
        let firstMessage = "I wish you have a nice day , you can ask me any thing, if you want to search just say or type (search for 'what you Search')";
        firstBotMessage(firstMessage);



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
        recognition.lang = 'ar-eg';
        recognition.interimResults = false;
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
            message.textContent = 'Error occurred in recognition: ' + event.error();;
            
        }
        function VoiceReco(){
            recognition.start();
        }
        //firstbotmsg
        let firstMessage = "أتمنى لك يومًا سعيدًا ، يمكنك أن تسألني عن أي شيء ، إذا كنت تريد البحث فقط قل أو اكتب (ابحث عن 'ما تريد البحث عنه ')";
        firstBotMessage(firstMessage);



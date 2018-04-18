var waveform = window.Waveform();
var message = document.getElementById("message");
var config, conversation;
message.textContent = "Passive";

document.getElementById("audio-control").onclick = function() {
  // AWS.config.credentials = new AWS.Credentials(
  //   document.getElementById("AKIAI4B7NT4PDHYGMCQA").value,
  //   document.getElementById("6SIJbyFG7AUlmNpzVmjAZ2rbME729slgvZRZq3yb").value,
  //   null
  // );
  AWS.config.credentials = {};
  AWS.config.region = "eu-west-1";

  config = {
    lexConfig: { botName: document.getElementById("BOT").value }
  };

  conversation = new LexAudio.conversation(
    config,
    function(state) {
      message.textContent = state + "...";
      if (state === "Listening") {
        waveform.prepCanvas();
      }
      if (state === "Sending") {
        waveform.clearCanvas();
      }
    },
    function(data) {
      console.log(
        "Transcript: ",
        data.inputTranscript,
        ", Response: ",
        data.message
      );
    },
    function(error) {
      message.textContent = error;
    },
    function(timeDomain, bufferLength) {
      waveform.visualizeAudioBuffer(timeDomain, bufferLength);
    }
  );
  conversation.advanceConversation();
};

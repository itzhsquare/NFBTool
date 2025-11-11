let speech = new SpeechSynthesisUtterance();


let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices =window.speechSynthesis.getVoices();
    
    // Find a Hindi voice, fallback to first voice if not found
    let hindiVoice = voices.find(voice => voice.lang.includes('hi') || voice.name.toLowerCase().includes('hindi'));
    speech.voice = hindiVoice || voices[0];

    voices.forEach((voice, i ) => (voiceSelect.options[i] = new Option (voice.name, i )));

}



document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

})
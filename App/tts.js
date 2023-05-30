// TTS
function textToSpeech(text)
{
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

const textarea = document.querySelector('.row textarea'),
    voiceList = document.querySelector('.row select'),
    speechBtn = document.querySelector('.form button');

let synth = speechSynthesis, isSpeaking = true;
voices();

function voices()
{
    for(let voice of synth.getVoices()){
        let selected = voice.name === 'Google US English' ? 'selected' : '';
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML('beforeend', option);
    }
}

synth.addEventListener('voiceschanged', voices);

speechBtn.addEventListener('click', e => {
    e.preventDefault();
    if(textarea.value !== ''){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            setInterval(() => {
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerHTML = '<i class="bi bi-volume-up"></i>Konversi Suara';
                }
            }, 500);
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerHTML = '<i class="bi bi-pause-fill"></i>Jeda Bicara';
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerHTML = '<i class="bi bi-play-fill"></i>Lanjutkan Bicara';
            }
        }else{
            speechBtn.innerHTML = '<i class="bi bi-volume-up"></i>Konversi Suara';
        }
    }
});
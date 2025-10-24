class DrumKit{
    constructor() {
        this.playBtn = document.querySelector('.play');
        this.pads = document.querySelectorAll('.pad');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihataudio = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }
    repeat(){
        let step = this.index % 8;
        const activeBars = document.querySelector(`.b${step}`);
        this.index++;
    }
    start(){
        const interval = (60/this.bpm) * 1000;
        setInterval(()=>{
            this.repeat();
        }, interval);
    }
    activePad(){
        this.classList.toggle('active');
    }
}

const drumKit =  new DrumKit();
drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
})

drumKit.playBtn.addEventListener('click', function (){
    drumKit.start();
});
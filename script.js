const txtAnim = document.querySelector (".name");

new Typewriter(txtAnim, {
    deleteSpeed: 5 
    
})

.typeString('Solène LEMA')
.pauseFor(300)
.start();


const txtAnim2 = document.querySelector (".titre");

new Typewriter (txtAnim2, {
deleteSpeed: 5
})

.changeDelay(60)
.changeDeleteSpeed(30)
.typeString('<strong> Developpeuse UX/UI & <span style="color:rgb(183,6,6)"> intégratrice </span></strong>')
.pauseFor(300)
.deleteChars(22)
.typeString('<strong> <span style="color:rgb(183,6,6)"> Javascript </span></strong>')
.pauseFor(300)
.deleteChars(12)
.typeString('<strong><span style="color:rgb(183,6,6)"> CSS </span></strong>')
.pauseFor(300)
.deleteChars(5)
.typeString('<strong><span style="color:rgb(183,6,6)"> PHP </span></strong>')
.pauseFor(300)
.deleteChars(5)
.typeString('<strong> UX/UI & <span style="color:rgb(183,6,6)"> intégratrice </span></strong>')
.start();
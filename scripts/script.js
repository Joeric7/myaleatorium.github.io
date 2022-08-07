
const participants = [];
    
const button = document.getElementById('button');
const pLogger = document.getElementById('logger');
const hiddenButton = document.getElementById('hidden');
const hiddenDiv = document.getElementById('hidden-div');

hiddenButton.hidden = true;
hiddenDiv.hidden = true;

const addParticipants = event => {
    const input = document.getElementById('participant-box');
    const maxParticipants = document.getElementById('participants-counter').value;
    if(maxParticipants < 2){
        input.classList.add('red');
        return 
    }
    maxParticipants.id = 'new-counter'
    const value = input.value;
        
    if(value.length <= 0 || value === false){
        console.log(`valor: ${input.value.length}`)
        input.placeholder = 'Agrega algo singatumadre';
        return 
    } else {
        input.placeholder = 'Escribe aqui';
    }
    participants.push(value);
        
    const toAppend = document.createElement('span');
    toAppend.textContent = value;
    pLogger.appendChild(toAppend);
    
    input.value = ''
}
    
const checkMax = () => {
    const input = document.getElementById('participant-box');
    const maxParticipants = document.getElementById('participants-counter').value;
    const participant = participants.length;
    console.log(participant);
    if(participant >= maxParticipants){
        button.disabled = true;
        hiddenButton.hidden = false;
    }

}
        

const start = () => {
    // const rounds = document.getElemeentById('rounds');
    // for(let i = 0; i <= rounds; i++){
        const maxParticipants = document.getElementById('participants-counter').value;
        // button.hidden = true;
        for (let i = 0; i < maxParticipants; i++) {
            const span = document.querySelector('span');
            pLogger.removeChild(span);
        }
    
        const randomNum = Math.floor(Math.random() * participants.length);
        const winner = participants[randomNum];
        hiddenDiv.hidden = false;
        hiddenDiv.style.display = 'flex'
        console.log('algo')
        // document.html.classList.add('egg');
        newH3 = document.getElementById('ganador');
        newH3.textContent = winner;
        
        
        // const toAppend = document.createElement('h2');
        // toAppend.id = 'winner'
        // toAppend.textContent = `Y el ganador es... `
        
        // setTimeout(() => {
        //     toAppend.textContent += winner;
        // }, 2000)
        
        // pLogger.appendChild(toAppend)

    // }
}
    
button.addEventListener('click', addParticipants)
button.addEventListener('click', checkMax)
hiddenButton.addEventListener('click', start)

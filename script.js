let participantCount = 2;

function calculateTip() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if( isNaN(amount) || amount <= 0 ) {
        document.getElementById('result').innerHTML = `Introduceți o valoare validă la nota de plată.`;
        return;
    }
    
    if ( document.querySelector('input[name="tipMethod"]:checked').value == "default" ) {
        const tip = amount * parseFloat(document.getElementById('tipPercentage').value);
        const total = amount + tip;
        
        document.getElementById('result').innerHTML = `
        Bacșiș: ${tip.toFixed(2)} RON <br>
        Total: ${total.toFixed(2)} RON
        `;
        
    }
    else if ( document.querySelector('input[name="tipMethod"]:checked').value == "custom1" ) {
        const tip = amount * parseFloat(document.getElementById('customPercent').value) / 100;
        const total = amount + tip;

        if( isNaN(tip) ) {
            document.getElementById('result').innerHTML = `Introduceți o valoare validă la procentul de bacșiș.`;
            return;
        }
        
        document.getElementById('result').innerHTML = `
        Bacșiș: ${tip.toFixed(2)} RON <br>
        Total: ${total.toFixed(2)} RON
        `;
        
    }
    else if ( document.querySelector('input[name="tipMethod"]:checked').value == "custom2" ) {
        const tip = parseFloat(document.getElementById('customAmount').value);
        const tipPercentage = tip * 100 / amount;
        const total = amount + tip;

        if( isNaN(tip) ) {
            document.getElementById('result').innerHTML = `Introduceți o valoare validă la suma de bacșiș.`;
            return;
        }
        
        document.getElementById('result').innerHTML = `
        Bacșiș: ${tip.toFixed(2)} RON (${tipPercentage.toFixed(2)}%) <br>
        Total: ${total.toFixed(2)} RON
        `;

    }

    document.querySelector('.cineplateste').style.display = 'block';
}

function resetAll() {
    document.getElementById('amount').value = '';
    document.getElementById('tipPercentage').value = '0';
    document.getElementById('customPercent').value = '';
    document.getElementById('customAmount').value = '';
    document.getElementById('result').innerHTML = '';
    document.querySelector('.cineplateste').style.display = 'none';
}





function addParticipant() {
    participantCount++;
    const div = document.createElement('div');
    div.id = 'participant' + participantCount;
    div.innerHTML = `
        <button onclick="removeParticipant(${participantCount})">-</button>
        <input type="text" class="additional" placeholder="Person ${participantCount}">
    `;
    document.getElementById('additionalParticipants').appendChild(div);
}

function removeParticipant(id) {
    const participantDiv = document.getElementById('participant' + id);
    participantDiv.remove();
}


function choosePerson() {
const inputs = document.querySelectorAll('.cineplateste input[type="text"]');
const names = Array.from(inputs).map(input => input.value).filter(name => name.trim() !== '');
if (names.length > 0) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const chosenName = names[randomIndex];
    document.getElementById('personResult').innerText = `Persoana aleasă: ${chosenName}`;
} else {
    document.getElementById('personResult').innerText = 'Introduceți numele  persoanelor';
}
}
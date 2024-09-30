function calculateTip() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if( isNaN(amount) ) {
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
}
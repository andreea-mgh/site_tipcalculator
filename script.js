function calculateTip() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if( document.querySelector('input[name="tipMethod"]:checked').value == "default" ) {
        const tip = amount * parseFloat(document.getElementById('tipPercentage').value);
        const total = amount + tip;
        
        document.getElementById('result').innerHTML = `
        Bacșiș: ${tip} RON <br>
        Total: ${total} RON
        `;
    }
    else if( document.querySelector('input[name="tipMethod"]:checked').value == "custom1" ) {
        const tip = amount * parseFloat(document.getElementById('customPercent').value) / 100;
        const total = amount + tip;
        
        document.getElementById('result').innerHTML = `
        Bacșiș: ${tip} RON <br>
        Total: ${total} RON
        `;
    }
    else if( document.querySelector('input[name="tipMethod"]:checked').value == "custom2" ) {
        const tip = parseFloat(document.getElementById('customAmount').value);
        const total = amount + tip;
        
        document.getElementById('result').innerHTML = `
        Bacșiș: ${tip} RON (${tip*100/total}%) <br>
        Total: ${total} RON
        `;
    }
}
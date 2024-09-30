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
}
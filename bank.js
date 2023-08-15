document.getElementById('deposit-btn').addEventListener('click', function(){
	// step 2
	const depositField = document.getElementById('deposit-field');
	const newDepositAmountString = depositField.value;
	const newDepositAmount = parseFloat(newDepositAmountString);
	
	if(isNaN(newDepositAmount)){
		alert('please provide a valid number');
		return ;
	}

	// step 3
	const depositTotal = document.getElementById('deposit-total');
	const previousDepositTotalString = depositTotal.innerText;

	const previousDepositTotal = parseFloat(previousDepositTotalString)

	// step 4
	const currentDepositTotal = previousDepositTotal + newDepositAmount;
	depositTotal.innerText = currentDepositTotal;

	// step 5
	const balanceTotal = document.getElementById('balance-total');
	const previousBalanceTotalString = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(previousBalanceTotalString);

	// step 6

	const currentBalanceTotals = previousBalanceTotal + newDepositAmount;
	balanceTotal.innerText = currentBalanceTotals;

	// step 7
	depositField.value = '';

})
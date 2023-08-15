document.getElementById('withdraw-btn').addEventListener('click', function(){
	// step 2
	const withdrawField = document.getElementById('widthraw-field');
	const newWithdrawAmountString = withdrawField.value;
	const newWithdrawAmount = parseFloat(newWithdrawAmountString);

	// step 7
	withdrawField.value = '';

	if(isNaN(newWithdrawAmount)){
		alert('please provide a valid number');
		return ;
	}

	// step 3
	const withdrawTotal = document.getElementById('withdraw-total');
	const previousWithdrawTotalString = withdrawTotal.innerText;
	const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

	// step 5
	const balanceTotal = document.getElementById('balance-total');
	const previousBalanceTotalString = balanceTotal.innerText;
	const previousBalanceTotal = parseFloat(previousBalanceTotalString);

	if(newWithdrawAmount > previousBalanceTotal){
		alert('not enough money in your baap er bank');
		return ;
	}

	// step 4
	const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
	withdrawTotal.innerText = currentWithdrawTotal;

	// step 6
	const currentBalance = previousBalanceTotal - newWithdrawAmount;
	balanceTotal.innerText = currentBalance;
})
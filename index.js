function toFixed(value, amount = 0) {

	if( 
	(typeof value != "string" || typeof value != "number") && value.toString().indexOf(".") == -1
	) return null;

	if(amount < 1 && amount != 0) return null;
	if(amount == 0) return Math.round(value);

	
	value = value.toString();

	if(Number(value) != NaN && value.indexOf(".") != -1) {
		let newPointValue = "";

		const newValue = value.split(".");
		const numValue = newValue[0];
		const pointValue = newValue[1];

		
		if(amount > pointValue.length) return null;

		for(let i = 0; i < amount; i++) {
			if(pointValue[i] != undefined) {
				newPointValue += pointValue[i];
			}
		}

		return Number(numValue + "." + newPointValue );
	}
	
}

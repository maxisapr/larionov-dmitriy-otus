function sum(value) {
	if (value === undefined) {
		return 0;
	}

	let summa = value;
	return f = (v) => {
		if (v === undefined) {
			return summa;
		}

		summa += v;
		return f;
    }
}
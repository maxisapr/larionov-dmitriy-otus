function sum(value) {
	let summa = value;

	function f(v) {
		if (v === undefined) {
			return summa;
		}

		summa += v;
		return f;
	}

	if (value === undefined) {
		return 0;
	}

	return f;
}
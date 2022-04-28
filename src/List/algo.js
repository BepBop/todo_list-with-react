export default function algo(max, column) {
	let t = 1;
	let temp;
	let arr = [];

	for (let i = 1; i <= max; i++) {
		if (localStorage.getItem(column + i) != null) {
			temp = localStorage.getItem(column + i);
			localStorage.removeItem(column + i);
			localStorage.setItem(column + t++, temp);
			arr = [...arr, temp];
		}
	}

	localStorage.setItem(column + 0, String(t));
	return arr;
}

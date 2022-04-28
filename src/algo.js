//0 key defines what is the total number of CatList Cards was opened by our user in the last session
//then an array is generated with the same length as the number of cards and filled with value starting from 1 so it can be passed down to child components for using them as localstorage key
export default function algo() {
	localStorage.getItem("0") == null ? localStorage.setItem("0", "0") : {};
	let temp = Array(parseInt(localStorage.getItem("0")));
	for (let i = 0; i < temp.length; i++) {
		temp[i] = i + 1; //starts at 1
	}
	return temp;
}

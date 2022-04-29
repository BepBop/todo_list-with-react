import { useState } from "react";
import listAlgo from "./List/algo";
import Checkbox from "./List/checkbox";
import "./CardsList.css";
import Input2 from "./List/Input2";

export default (props) => {
	let j = props.j;

	//used to fix localstorage keys when something in between gets del and generating an array off it
	let arr = listAlgo(
		parseInt(localStorage.getItem("column" + j + 0), 10),
		"column" + j
	);

	const [Arr, setArr] = useState(arr);

	return (
		<div id={"CardList"}>

			{Arr.map((x, i) => (
				<Checkbox
					defValue={x}
					column={"column" + j}
					index={i + 1} //just so map in localstorage can start from 1
					set={setArr}
				/>
			))}

			<Input2 setArr={setArr}/>
		</div>
	);
};

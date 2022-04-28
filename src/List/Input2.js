import { useState } from "react";

export default (props) => {
	const [inputVal, set_inputVal] = useState("");

	function catch_inputVal(e) {
		set_inputVal(e.target.value);
	}

	function submit_inputVal(event) {
		if (event.code === "Enter" || event.code === "NumpadEnter") {
			event.preventDefault();
			inputVal ? props.setArr((x) => [...x, inputVal]) : {};
			set_inputVal("");
		}
	}

	return (
		<form>
			<textarea
				value={inputVal}
				onChange={catch_inputVal}
				onKeyDown={submit_inputVal}
				rows="2"
				cols="22"
			/>
		</form>
	);
};

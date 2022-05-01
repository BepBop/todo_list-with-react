import { useState } from "react";
import ContentEditable from "react-contenteditable";

export default function Checkbox (props) {
	const [check, set_check] = useState(false);
	const [text, set_text] = useState(props.defValue);

	if (localStorage.getItem(props.column + 0) == null)
		localStorage.setItem(props.column + 0, "0");
	else if (parseInt(localStorage.getItem(props.column + 0), 10) < props.index)
		localStorage.setItem(props.column + 0, props.index);

	function hack() {
		localStorage.setItem(props.column + props.index, String(text));
		if (check) localStorage.removeItem(props.column + props.index);
		return text;
	}
	function catch_inputVal(e) {
		set_text(e.currentTarget.textContent);
	}


	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type="checkbox"
				checked={check}
				onChange={() => set_check(!check)}
			/>
			{!check ? (
				<ContentEditable className={"textarea"}  onChange={catch_inputVal} onInput={hack} html={hack()}/>
			) : (
				<ContentEditable
					className={"textarea"}
					html={hack()}
					style={{ textDecorationLine: "line-through" }}
				/>
			)}
		</form>
	);
};

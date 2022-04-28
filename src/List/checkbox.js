import { useState } from "react";

export default (props) => {
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

	function hack_catch_inputVal(e) {
		set_text(e.currentTarget.textContent);
		localStorage.setItem(props.column + props.index, String(text));
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type="checkbox"
				checked={check}
				onChange={() => set_check(!check)}
			/>
			{!check ? (
				<span
					className={"textarea"}
					onInput={hack_catch_inputVal}
					contentEditable={true}
				>
					{hack()}
				</span>
			) : (
				<span
					className={"textarea"}
					style={{ textDecorationLine: "line-through" }}
				>
					{hack()}
				</span>
			)}
		</form>
	);
};

import {useEffect, useState} from "react";

export default (props) => {
	const [check, set_check] = useState(false);
	const [text, set_text] = useState(props.defValue);

	if (localStorage.getItem(props.column + 0) == null)
		localStorage.setItem(props.column + 0, "0");
	else if (parseInt(localStorage.getItem(props.column + 0), 10) < props.index)
		localStorage.setItem(props.column + 0, props.index);


	function catch_inputVal(e){
		set_text(e.target.value);
	}

	useEffect(() => {
		!check? localStorage.setItem(props.column + props.index, String(text)):localStorage.removeItem(props.column + props.index);;
	}, );

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type="checkbox"
				checked={check}
				onChange={() => set_check(!check)}
			/>
			{!check ? (
				<textarea
					className={"textarea"}
					/*onInput={hack_catch_inputVal}*/
					onInput={catch_inputVal}
					value={text}
				/>
			) : (
				<textarea
					className={"textarea"}
					style={{ textDecorationLine: "line-through" }}
					/*onInput={hack_catch_inputVal}*/
					value={text}
				/>
			)}
		</form>
	);
};

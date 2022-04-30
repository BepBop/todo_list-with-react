import { GrAdd } from "react-icons/gr";

export default (props) => {
	function submit_inputVal(event) {
		if (event.code === "Enter" || event.code === "NumpadEnter") {
		}
		props.setArr((x) => [...x, ""]);
	}

	return(
	<>
		<div role={'button'} className={"hell"} onClick={submit_inputVal} onFocus={submit_inputVal} onKeyDown={submit_inputVal}>
		<button>
			<GrAdd />
		</button>
		<input value={'Click to add'}/>
		</div>
	</>);
};

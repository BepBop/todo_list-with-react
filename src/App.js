import React from "react";
import CardsList from "./CardsList";
import { useState } from "react";
import algo from "./algo";
import "./App.css";

import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";

export function App() {
	const [cards, set_cards] = useState(algo()); //react is smart enough to call algo() only once

	function add() {
		set_cards(cards.concat(cards.length + 1));
		let temp = cards.length + 1;
		localStorage.setItem("0", temp.toString());
	}

	function del() {
		set_cards(cards.filter((element, index) => index < cards.length - 1));
		localStorage.getItem("0") !== "0"
			? localStorage.setItem("0", (cards.length - 1).toString())
			: {};
	}

	return (
		<React.StrictMode>
			<div className={"sign"}>
				<div style={{ fontSize: "50px", cursor: "pointer" }} onClick={add}>
					<AiOutlineAppstoreAdd />
				</div>
				<div style={{ fontSize: "50px", cursor: "pointer" }} onClick={del}>
					<FiMinus />
				</div>
			</div>
			<div className={"cards"}>
				{cards.map((x) => (
					<CardsList j={x}/>
				))}
			</div>
		</React.StrictMode>
	);
}

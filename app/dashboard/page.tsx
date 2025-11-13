"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
	const [listOfPokemons, setLisOfPokemons] = useState<string[]>([]);

	function fetchPokemons() {
		fetch("/api/list-pokemons")
			.then((res) => res.json())
			.then((data) => {
				const pokemonNames = data.results.map(
					(pokemon: { name: string }) => pokemon.name
				);
				setLisOfPokemons(pokemonNames);
			});
	}

	return (
		<div className="w-full max-w-xl mx-auto ">
			<ul>
				{listOfPokemons.length > 0 &&
					listOfPokemons.map((pokemon) => (
						<li key={pokemon} className="capitalize">
							{pokemon}
						</li>
					))}
			</ul>
			<Button onClick={fetchPokemons}>Show me all Pokémon</Button>
		</div>
	);
}

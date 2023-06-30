import { useState } from "react";
import { useGetPokemonByNameQuery } from "services/pokemon";
import LoadingBar from "react-top-loading-bar";

export const Home = () => {
	const [pokemonName, setPokemonName] = useState("");
	const {
		data,
		error,
		isFetching,
		isUninitialized,
		isError,
		isSuccess,
		refetch
	} = useGetPokemonByNameQuery(pokemonName, {
		skip: pokemonName === "",
		refetchOnFocus: true,
		refetchOnReconnect: true
	});

	const [progress, setProgress] = useState(0);

	const handleSubmit = e => {
		e.preventDefault();
		setPokemonName(e.currentTarget.elements.pokemonName.value);
		setProgress(98);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='pokemonName' />
				<button type='submit'>Submit</button>
			</form>
			{!isUninitialized && (
				<button onClick={refetch} type='button'>
					Refresh
				</button>
			)}

			{isFetching && (
				<LoadingBar
					color={"green"}
					progress={progress}
					onLoaderFinished={() => setProgress(0)}
				/>
			)}
			{isError && (
				<h1>
					Pokemon <b>{pokemonName}</b> {error.data}
				</h1>
			)}
			{isSuccess && <h1>{data.name}</h1>}
		</div>
	);
};

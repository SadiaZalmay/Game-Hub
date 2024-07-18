import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () =>{
    const {games, error, isLoading} = useGames();
    const Skeletons = [1,2,3,4,5,6];
    
    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid 
            columns={{ sm: 1, md:2, lg:3, xl: 3}} 
            padding={10} 
            spacing={20}
        >
        {isLoading && Skeletons.map(Skeletons => <GameCardSkeleton key={Skeletons}/>)}
        {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
        ))}  
        </SimpleGrid>
        </>
    );
}

export default GameGrid
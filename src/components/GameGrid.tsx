import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () =>{
    const {data, error, isLoading} = useGames();
    const Skeletons = [1,2,3,4,5,6];
    
    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid 
            columns={{ sm: 1, md:2, lg:3, xl: 3}} 
            padding={10} 
            spacing={3}
        >
        {isLoading && Skeletons.map(Skeletons =><GameCardContainer> <GameCardSkeleton key={Skeletons}/></GameCardContainer>)}
        {data.map((game) => (
            <GameCardContainer>
                <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
        ))}  
        </SimpleGrid>
        </>
    );
}

export default GameGrid
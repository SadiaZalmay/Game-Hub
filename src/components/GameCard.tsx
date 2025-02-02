import react from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props{
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card >
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map( (p: { platform: any }) => p.platform)}></PlatformIconList>
            </CardBody>
        </Card>
    )}

export default GameCard
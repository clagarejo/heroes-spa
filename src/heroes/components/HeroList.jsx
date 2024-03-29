import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heros = useMemo( () => getHeroesByPublisher(publisher), [ publisher ]) 

    return (
        <>
            <div className='row rows-cols-1 row-cols-3 g-3'>
                {
                    heros.map(hero => (
                        <HeroCard key={ hero.id } { ...hero } />
                    ))
                }
            </div>
        </>
    )
}

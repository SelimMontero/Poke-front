import { type } from "os";
import style from "./PokemonCard.module.scss";
import { capitalize } from '../../helpers';
import Tag from './Tag';
import Like from "./Partials/Like";
import { zfill } from '../../helpers'
import { useState } from 'react'
import Cookies from "js-cookie";
import { useFetch } from 'use-http'
import { urlBase } from '../../constants'

const PokemonCard = ({id, name, pokeImage, weight, height, types, like, ownerId}) => {
    const [ pokeLike, setPokeLike ] = useState(like)
    const [ owner, setOwner ] = useState(ownerId)
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')
    const headers = { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }

    const getTypes = () => types.map(({ type: { name }}, i) => <Tag name={name} key={i.toString()}/>)
    const handleLikeState = async () => {
        if(owner === null) {
            const res = await fetch(`${urlBase}/users/${userId}/pokemon-likes`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    "date": new Date(),
                    "like": true,
                    "pokemon_id": id
                })
            })
            if(res.ok) {
                const data = await res.json()
                setPokeLike(data.like)
                setOwner(data.id)
            }
            return
        }
        const res = await fetch(`${urlBase}/users/${userId}/pokemon-likes?where=%7B%0A%20%20%22id%22%3A%20${owner}%0A%7D`, {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({
                "like": !pokeLike
            })
        })
        if(res.ok) {
            setPokeLike(!pokeLike)
        }
    }

    return (    
        <div className={style.pokemon_card}>
            <div>
                <Like likeState={pokeLike} handleLike={handleLikeState}/>
            </div>
            <div className={style.pokemon_card__header}>
                <h2 className="pokemon_card__header_title">{capitalize(name)}</h2>
                <h3 className="pokemon_card__header_subtitle">{zfill(id, 3)}</h3>
            </div>
            <div className={style.pokemon_card__body}>
                <div className={style.pokemon_card__body_image}>
                    <img
                        src={pokeImage}
                        alt="Pokemon image"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
            <div className={style.pokemon_card__footer}>
                {getTypes()}
            </div>
        </div>
    )
}

export default PokemonCard

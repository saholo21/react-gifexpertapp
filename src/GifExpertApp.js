import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ["One Punch", "Samurai X", "Naruto"]
    const [categories, setCategories] = useState(["Rick y Morty"])
    
    // const handleAdd = () => {
    //     setCategories(c => [...c, "Spider-man"])
    // }

    return (
        <>
            <h2>GifExpertAPP</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            {/* <button onClick = { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            key = { category }
                            category= { category } />
                    ))
                }
            </ol>
        </>
    )
}


import React, { useState } from 'react'
import MovieContainer from '../containers/MovieContainer'

const FullInfoMovie = ({navigation,route}) =>{
    const [routee,setRoutee] = useState(route)
console.log(routee)
    return(
        <MovieContainer 
navigation = {navigation}
route = {routee}
/>
    )
} 

export default FullInfoMovie
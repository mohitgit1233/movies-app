import { FlatList } from 'native-base'
import React, { useState } from 'react'
import MovieCard from '../listItems/MovieCard'



const MoviesList = ({movies,navigation}) => {
    console.log("movies")
    
  return (
    <>
    
    <FlatList
    data={movies}
    renderItem={({item}) =>(
        <MovieCard
        image = {item.poster_path}
        label = {item.original_title}
        popularity = {item.popularity}
        relDate = {item.release_date}
        id = {item.id}
        navigation = {navigation}
        overview = {item.overview}
        />
    )}
    keyExtractor={item => item.id}
    />
</>
  )
}

export default MoviesList
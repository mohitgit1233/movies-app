import { FlatList } from 'native-base'
import React, { useState } from 'react'
import MovieCard from '../listItems/MovieCard'


const MoviesList = ({shows,navigation}) => {
    console.log(shows)
    
  return (
    
    <FlatList
    data={shows}
    renderItem={({item}) =>(
        <MovieCard
        image = {item.poster_path}
        label = {item.original_name}
        popularity = {item.popularity}
        relDate = {item.first_air_date}
        id = {item.id}
        navigation = {navigation}
        overview = {item.overview}
        />
    )}
    keyExtractor={item => item.id}
    />

  )
}

export default MoviesList
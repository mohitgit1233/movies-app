import React from 'react'
import {BASE_URL,API_KEY} from '../config/api_config';

export const api_call = async (filter,type) => {

    const url = `${BASE_URL}/${type}/${filter}?api_key=${API_KEY}&language=en-US&page=1`

    const apiCall = await fetch(url)

    const response = await apiCall.json()

  return response
}



export const api_call_search = async (input,filter) => {


    const url = `${BASE_URL}/search/${filter}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input}`
   
    const apiCall = await fetch(url)

    const response = await apiCall.json()
    console.log('watch this',response)
  return response
}



import React, { useEffect,useState } from 'react'
// eslint-disable-next-line
import axios from 'axios';
import Searchbox from './Searchbox';
import Card from './Card';

const Covid = () => {

   const [country,setCountry]=useState('india')
   const [details,setDetails]=useState([])

   const getCovidData = () =>
   {
    var options = {
      method: 'GET',
      url: `https://covid-19-tracking.p.rapidapi.com/v1/${country}`,
      headers: {
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '50df58f0cfmsh4479169af5845e0p19ad4ejsnfdf15d261f90'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
        setDetails(response.data);
          console.log("This are details  "+details)
    }).catch(function (error) {
        console.error(error);
    });
    console.log("yo")
   }

    useEffect(() => 
    {
        getCovidData()
    }, [country])

    const SearchSubmitHandler=(cntry)=>
    {
        console.log("this......"+cntry)
        setCountry(cntry)    
    }

    return (
        <>
            <Searchbox SubmitHandler={(cntry)=>SearchSubmitHandler(cntry)} />
            <Card details={details}/>
        </>
    )
};

export default Covid

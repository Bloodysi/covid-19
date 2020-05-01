import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { countries } from '../../api'
 

const CountryPicker= ({ handleCountryChange }) =>{
    const [fetchedCountries, setCountries] = useState([])

    useEffect(()=>{
        const fetchCountries = async () =>{
            setCountries(await countries())
        }
        
        fetchCountries()
    },[setCountries])

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
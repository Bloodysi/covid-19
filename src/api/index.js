import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country)=>{
    let changeableUrl = url

    if(country) changeableUrl = `${url}/countries/${country}` 
    
    try {
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(changeableUrl)

        return {confirmed, deaths, recovered, lastUpdate}
    } catch (error) {
        console.log(error)
    }
    
}


export const fetchDailyData = async () =>{

    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifyData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total, 
            deaths: dailyData.deaths.total,
            data: dailyData.reportDate
        }))
        return modifyData
    } catch (error) {
        console.log(error)
    }

}


export const countries = async ()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name)
    } catch (error) {
        console.error(error)
    }
}
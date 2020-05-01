import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async ()=>{
    try {
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(url)

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
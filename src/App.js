import React, { Component } from 'react'
import styles from './App.module.css'

import { Cards, Chart, CountryPicker } from './components'
import Button from '@material-ui/core/Button'
import { fetchData } from './api'

class App extends Component{    

    state = {
        data: {}
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }   

    render(){
        const { data } = this.state

        return(
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
                <Button variant='contained' color='secondary' href='/'>React</Button>
            </div>
        )
    }
}

export default App;
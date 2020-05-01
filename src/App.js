import axios from 'axios'
import './App.css'


import React, { Component } from 'react'

export default class App extends Component {

    state = {
        advice: ''
    }

    componentDidMount() {
        this.fetchAdvice()
        
        

    }


    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=> {
            const { advice } = res.data.slip
            console.log(advice);
            this.setState({advice : advice})
            

        })
        .catch((err) => {
            console.log(err);
            

        })
    }






    render() {
        const { advice } = this.state
        return (
            <div className='app'>
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>NEW ADVICE</span>
                    </button>
                </div>
            </div>
        )
    }
}

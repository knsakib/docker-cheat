import React, {Component} from 'react';
import axios from 'axios';


class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    };

    componentDidMount(){
        this.fetchValues();
        this.fetchIndexes();

    }
    async fetchValues(){
        const values = await axios.get('/api/values/current');
        this.setState({ 
            values: values.data
        });
    }

    async fetchIndexes(){
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({
            seenIndexes: seenIndexes.data
        });
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        await axios.post ('/api/values', {
            index: this.state.index
        });
        this.setState({index: ''}); 
    };

    renderSeenIndexes(){
        return this.state.seenIndexes.map( ({number} )=> number ).join(', ');
        //this will iterate over every object in seenindexes object and return 
        //only the numbers. SO the requst will be list of numbers. So
        //it will show one by one comma seperated  
    }

    renderValues(){
        const entries = [];

        for (let key in this.state.values){
            entries.push(
                <div key={key}>
                    For indexes {key} I have calculated {this.state.values[key]}
                </div>
            );
        }
        return entries; 
    }

    render(){
        return(
            <div className="container">
                <div className="row center">
                    
                    <form className="center" onSubmit = {this.handleSubmit}>
                        <label><h4>Enter your index:</h4></label>
                            <div className="index-entry center" align="center">
                                <input 
                                value ={this.state.index}
                                onChange = {event => this.setState({ index: event.target.value })}
                                />
                            </div>
                            <button className="btn grey">Submit</button>
                    </form>

                </div>
                <div className="row center">
                        
                        <h4>Index Values that I have seen: {this.renderSeenIndexes()}</h4>
                        
                        <h4>Calculated Values: {this.renderValues()}</h4>
                        
                </div>
            </div>
        )
    }
}

export default Fib;
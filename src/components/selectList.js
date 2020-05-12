import React, { Component } from 'react'

class SelectList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'default'};
    
        this.handleChange = this.handleChange.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
        console.log(this.state);
        document.getElementById('selectList').style.border="1px solid green";
        document.getElementById('selectList').style.background="rgba(0,110,0,0.3)";
        document.getElementsByClassName("Invisible")[9].style.display = "none";
    }
    render() {
        return (
            <>
                <select style={{height:'2rem',border:'1px solid #ccc'}} 
                        id="selectList" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                >
                    <option value="default" disabled>Please choose date to participate</option>
                    <option value="1">11-11-2019 till 22-11-2019</option>
                    <option value="2">23-03-2020 till 03-04-2020</option>
                    <option value="3">11-05-2020 till 22-05-2020</option>
                </select>
            </>
        )
    }
}

export default SelectList;
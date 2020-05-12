import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './CalendarDate.css';

export class CalendarDate extends Component {
  

    state = {
        date: [
               new Date(2019, 11, 5), 
               new Date(2019, 11, 10)
              ]
      }
     
      onChange = e => {
          this.setState({ date: this.value })
          console.log('klik', this.state);
      }


     render() {
        return (
          // <div style={{backgroundColor: "#333"}}>
            <Calendar
              onChange={this.onChange}
              value={this.state.date.map( el => el)}
              select="multiple"
              className="background"
            />
          // </div>
        );
      }
}

export default CalendarDate

import React, { Component } from 'react'
import IntlTelInput from 'react-intl-tel-input';

class inputTel extends Component {
    constructor(props) {
        super(props)
        this.state = {
          value: '',
        }
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this)
      }
    
      onPhoneNumberChange(isValid, value, countryData, number) {
        this.setState({
          value: number,
        })
        const tel = this.state.value;
        const reTel = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))$/;
        if(reTel.test(tel)){
          // okArr.push({"tel": tel});
          document.getElementsByClassName("Invisible")[8].style.display = "none";
          document.getElementsByClassName('form-control')[0].style.border="1px solid green";
          document.getElementsByClassName('form-control')[0].style.background="rgba(0,110,0,0.3)";
      }
      else{
          // errArr.push("You have to enter name in regular format");
          document.getElementsByClassName("Invisible")[8].style.display = "block";
          document.getElementsByClassName('form-control')[0].style.border="1px solid red";
          document.getElementsByClassName('form-control')[0].style.background="rgba(110,0,0,0.3)";
      }
      }
      // Napraviti if kada je tel=""
    
      render() {
        const { value, infoVisible } = this.state
        return (
          <div className="container">
            <IntlTelInput
              css={['intl-tel-input', 'form-control']}
              inputClassName="form-control" 
              value={value}
              onPhoneNumberChange={this.onPhoneNumberChange}
            />
          </div>
        );
      }
    }


export default inputTel;

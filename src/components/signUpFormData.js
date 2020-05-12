import React from 'react';
import styled from 'styled-components';
import InputTel from "./inputTel";
import SelectList from "./selectList";

const SignUpFormDiv = styled.div`
    width:65%;
    height: auto;
    padding: 5% 0;
    h3 {
        font-family: ${props => props.theme.fonts.montserratBold};
        font-size: 27px;
        font-weight:700;
        color: ${props => props.theme.colors.blue};
        margin-bottom:1.5rem;
    }
    p {
        text-align:left;
    }
    label {
        font-family: ${props => props.theme.fonts.montserratBold};
    }
    span {
        color:red;
        font-family: ${props => props.theme.fonts.montserratBold};
    }
    @media all and ${props =>props.theme.devices.xs} {
        width: 100%;
    }
`;

const Form = styled.div`
    line-height:3rem;
    input, select {
        height:2rem;
        border-radius:2px;
        border:1px solid #ccc;
    }
    textarea {
        border:1px solid #ccc;
        border-radius:5px;
        padding:.5rem;
    }
    input[type=text], textarea {
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #DDDDDD;
    }
    
    input[type=text]:focus, textarea:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
    }
`;

const WrapDiv = styled.div`
    display:flex;
    justify-content:space-between;
    @media all and ${props =>props.theme.devices.xs} {
        flex-direction:column;
        
    }
`;

const InputWrap = styled.div`
    display:flex;
    flex-direction:column;
    width:40%;
    @media all and ${props =>props.theme.devices.xs} {
        width: 100%;
    }
`;

const InputWrap3 = styled.div`
    display: flex;
    flex-direction:column;
    width:55%;
    @media all and ${props =>props.theme.devices.xs} {
        width: 100%;
    }
`;

const InputWrap2 = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    span {
        color:#333;
        font-size:.9rem;
    }
`;

const Bold = styled.p`
    font-family: ${props => props.theme.fonts.montserratBold};
`;

const Red = styled.span`
    color:red;
`;

const Button2 = styled.button`
    padding: .5rem .8rem;
    background:transparent;
    border:1px solid #ccc;
    color:#000;
    /* font-weight:400; */
    font-size:.9rem;
    border-radius:2px;
    cursor: pointer;
    &:hover {
        background:#ccc;
    }
`;

const Sent = styled.p`
    display:none;
    color:red;
`;

const Success = styled.p`
    display:none;
    color:green;
`;


const SignUpForm = ({ text64, 
                      text65, 
                      text66, 
                      text67, 
                      text68, 
                      text69, 
                      text70, 
                      text71, 
                      text72, 
                      text73,
                      text74,
                      text75,
                      text76,
                      text77,
                      text78,
                      text79 
                    }) => {
    // const document.getElementsByClassName("Invisible") = document.getElementsByClassName("Invisible");
    const reFirstName =new RegExp('[A-Z][a-z]{2,13}');
    const reLastName =new RegExp('[A-Z][a-z]{2,13}');
    const reEmail = new RegExp('\\w+([\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+');
    const reBirth =new RegExp('([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}');
    const reAddress =new RegExp('\\d+\\s[A-z]+\\s[A-z]+');
    const reCity =new RegExp('[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*');
    const reZipCode =new RegExp('(?:[^\\d]|^)(\\d{5}\\-\\d{4})(?:[^\\d]|$)');
    const reCountry =new RegExp('[a-zA-Z]{2,}');
    const backgroundGreen = "rgba(0,110,0,0.3)";
    const backgroundRed = "rgba(110,0,0,0.3)";
    const colorGreen = "1px solid green";
    const colorRed = "1px solid red";
    const colorGray ="1px solid #DDD";
    const transparent = "transparent";
    
    const checkComm=()=>{
        const commentID = document.getElementById('comment');
        
        commentID.style.border=colorGreen;
        commentID.style.background=backgroundGreen; 
    }
    const checkStudy=()=>{
        const studyID = document.getElementById('study');
        studyID.style.border=colorGreen;
        studyID.style.background=backgroundGreen;   
    }
    const checkCountry=()=>{
        const country = document.getElementById('country').value;
        const countryID = document.getElementById('country');
        // const reCountry =new RegExp('[a-zA-Z]{2,}');
        if(country!==""){
            if(reCountry.test(country)){
                document.getElementsByClassName("Invisible")[7].style.display = "none";
                countryID.style.border=colorGreen;
                countryID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[7].style.display = "block";
                countryID.style.border=colorRed;
                countryID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[7].style.display = "none";
            countryID.style.border=colorGray;
            countryID.style.background=transparent;
        }
    }
    const checkZipCode=()=>{
        const zipCode = document.getElementById('zipCode').value;
        const zipCodeID = document.getElementById('zipCode');
        // const reZipCode =new RegExp('(?:[^\\d]|^)(\\d{5}\\-\\d{4})(?:[^\\d]|$)');
        if(zipCode!==""){
            if(reZipCode.test(zipCode)){
                document.getElementsByClassName("Invisible")[6].style.display = "none";
                zipCodeID.style.border=colorGreen;
                zipCodeID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[6].style.display = "block";
                zipCodeID.style.border=colorRed;
                zipCodeID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[6].style.display = "none";
            zipCodeID.style.border=colorGray;
            zipCodeID.style.background=transparent;
        }
    }
    const checkCity=()=>{
        const city = document.getElementById('city').value;
        const cityID = document.getElementById('city');
        // const reCity =new RegExp('[a-zA-Z]+(?:[\\s-][a-zA-Z]+)*');
        if(city!==""){
            if(reCity.test(city)){
                document.getElementsByClassName("Invisible")[5].style.display = "none";
                cityID.style.border=colorGreen;
                cityID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[5].style.display = "block";
                cityID.style.border=colorRed;
                cityID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[5].style.display = "none";
            cityID.style.border=colorGray;
            cityID.style.background=transparent;
        }
    }
    const checkAdress=()=>{
        const address = document.getElementById('address').value;
        const addressID = document.getElementById('address');
        // const reAddress =new RegExp('\\d+\\s[A-z]+\\s[A-z]+');
        if(address!==""){
            if(reAddress.test(address)){
                document.getElementsByClassName("Invisible")[4].style.display = "none";
                addressID.style.border=colorGreen;
                addressID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[4].style.display = "block";
                addressID.style.border=colorRed;
                addressID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[4].style.display = "none";
            addressID.style.border=colorGray;
            addressID.style.background=transparent;
        }
    }
    const checkEmail=()=>{
        const email = document.getElementById('email').value;
        const emailID = document.getElementById('email');
        // const reEmail = new RegExp('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+');
        if(email!==""){
            if(reEmail.test(email)){
                document.getElementsByClassName("Invisible")[2].style.display = "none";
                emailID.style.border=colorGreen;
                emailID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[2].style.display = "block";
                emailID.style.border=colorRed;
                emailID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[2].style.display = "none";
            emailID.style.border=colorGray;
            emailID.style.background=transparent;
        }
    }
    const checkBirth=()=>{
        const birth = document.getElementById('birth').value;
        const birthID = document.getElementById('birth');
        // const reBirth =new RegExp('([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}');
        if(birth!==""){
            if(reBirth.test(birth)){
                document.getElementsByClassName("Invisible")[3].style.display = "none";
                birthID.style.border=colorGreen;
                birthID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[3].style.display = "block";
                birthID.style.border=colorRed;
                birthID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[3].style.display = "none";
            birthID.style.border=colorGray;
            birthID.style.background=transparent;
        }
    }
    const checkFNAME=(e)=>{
        const fName = document.getElementById('fName').value;
        const fNameID = document.getElementById('fName');
        // const reFirstName = new RegExp('[A-Z][a-z]{2,13}');
        if(fName!==""){
            if(reFirstName.test(e.target.value)){
                document.getElementsByClassName("Invisible")[0].style.display = "none";
                fNameID.style.border=colorGreen;
                fNameID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[0].style.display = "block";
                fNameID.style.border=colorRed;
                fNameID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[0].style.display = "none";
            fNameID.style.border=colorGray;
            fNameID.style.background=transparent;
        }

    }
    const checkLNAME=(e)=>{
        const lName = document.getElementById('lName').value;
        const lNameID = document.getElementById('lName');
        // const reLastName =new RegExp('[A-Z][a-z]{2,13}');
        if(lName!==""){
            if(reLastName.test(e.target.value)){

                document.getElementsByClassName("Invisible")[1].style.display = "none";
                lNameID.style.border=colorGreen;
                lNameID.style.background=backgroundGreen;
            }
            else{
                document.getElementsByClassName("Invisible")[1].style.display = "block";
                lNameID.style.border=colorRed;
                lNameID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[1].style.display = "none";
            lNameID.style.border=colorGray;
            lNameID.style.background=transparent;
        }
    }
    
    const submitForm = () => {
        const okArr = [];
        const errArr=[];
        const fName = document.getElementById('fName').value;
        const fNameID = document.getElementById('fName');
        const lName = document.getElementById('lName').value;
        const lNameID = document.getElementById('lName');
        const email = document.getElementById('email').value;
        const emailID = document.getElementById('email');
        const birth = document.getElementById('birth').value;
        const birthID = document.getElementById('birth');
        const address = document.getElementById('address').value;
        const addressID = document.getElementById('address');
        const city = document.getElementById('city').value;
        const cityID = document.getElementById('city');
        const zipCode = document.getElementById('zipCode').value;
        const zipCodeID = document.getElementById('zipCode');
        const country = document.getElementById('country').value;
        const countryID = document.getElementById('country');
        const tel = document.getElementsByClassName('form-control')[0].value;
        const reTel = new RegExp('((?:\\+|00)[17](?: |\\-)?|(?:\\+|00)[1-9]\\d{0,2}(?: |\\-)?|(?:\\+|00)1\\-\\d{3}(?: |\\-)?)?(0\\d|\\([0-9]{3}\\)|[1-9]{0,3})(?:((?: |\\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\\-)[0-9]{3}(?: |\\-)[0-9]{4})|([0-9]{7}))');
        const selectList = document.getElementById('selectList').value;
        const selectListID = document.getElementById('selectList');
        const study = document.getElementById('study').value;
        const studyID = document.getElementById('study');
        const comment = document.getElementById('comment').value;
        const commentID = document.getElementById('comment');
        const formControl = document.getElementsByClassName('form-control');

        // const colorGreen = "1px solid green";
        const backgroundColor="rgba(0,110,0,0.3)";
        // const colorRed = "1px solid red";
        // const backgroundRed ="rgba(110,0,0,0.3)";
        const fNameMsg = "You have to enter First name in regular format";
        const lNameMsg = "You have to enter Last name in regular format";
        const emailMsg = "You have to enter email in regular format";
        const birthMsg = "You have to enter birth in regular format";
        const addressMsg = "You have to enter address in regular format";
        const cityMsg = "You have to enter city in regular format";
        const zipCodeMsg = "You have to enter Zip code in regular format";
        const countryMsg = "You have to enter country in regular format";
        const telephoneMsg = "You have to enter telephone in regular format";
        
        if(reFirstName.test(fName)){
            okArr.push({"fName": fName});
            document.getElementsByClassName("Invisible")[0].style.display = "none";
            fNameID.style.border=colorGreen;
            fNameID.style.background=backgroundColor;
        }
        else{
            errArr.push(fNameMsg);
            document.getElementsByClassName("Invisible")[0].style.display = "block";
            fNameID.style.border=colorRed;
            fNameID.style.background=backgroundRed;
        }
        if(reLastName.test(lName)){
            okArr.push({"lName": lName});
            document.getElementsByClassName("Invisible")[1].style.display = "none";
            lNameID.style.border=colorGreen;
            lNameID.style.background=backgroundColor;
        }
        else{
            errArr.push(lNameMsg);
            document.getElementsByClassName("Invisible")[1].style.display = "block";
            lNameID.style.border=colorRed;
            lNameID.style.background=backgroundRed;
        }
        if(email !== "") {
            if(reEmail.test(email)){
                okArr.push({"email": email});
                document.getElementsByClassName("Invisible")[2].style.display = "none";
                emailID.style.border=colorGreen;
                emailID.style.background=backgroundColor;
            }else {
                errArr.push(emailMsg);
                document.getElementsByClassName("Invisible")[2].style.display = "block";
                emailID.style.border=colorRed;
                emailID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[2].style.display = "none";
        }
        if(birth !== "") {
            if(reBirth.test(birth)){
                okArr.push({"birth": birth});
                document.getElementsByClassName("Invisible")[3].style.display = "none";
                birthID.style.border=colorGreen;
                birthID.style.background=backgroundColor;
            }
            else{
                errArr.push(birthMsg);
                document.getElementsByClassName("Invisible")[3].style.display = "block";
                birthID.style.border=colorRed;
                birthID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[3].style.display = "none";
        }
        if(address !== "") {
            if(reAddress.test(address)){
                okArr.push({"address": address});
                document.getElementsByClassName("Invisible")[4].innerHTML = "";
                addressID.style.border=colorGreen;
                addressID.style.background=backgroundColor;
            }
            else{
                errArr.push(addressMsg);
                document.getElementsByClassName("Invisible")[4].style.display = "block";
                addressID.style.border=colorRed;
                addressID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[4].style.display = "none";
        }
        if(city !== "") {
            if(reCity.test(city)){
                okArr.push({"city": city});
                document.getElementsByClassName("Invisible")[5].style.display = "none";
                cityID.style.border=colorGreen;
                cityID.style.background=backgroundColor;
            }
            else{
                errArr.push(cityMsg);
                document.getElementsByClassName("Invisible")[5].style.display = "block";
                cityID.style.border=colorRed;
                cityID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[5].style.display = "none";
        }
        if(zipCode !== "") {
            if(reZipCode.test(zipCode)){
                okArr.push({"zipCode": zipCode});
                document.getElementsByClassName("Invisible")[6].style.display = "none";
                zipCodeID.style.border=colorGreen;
                zipCodeID.style.background=backgroundColor;
            }else {
                errArr.push(zipCodeMsg);
                document.getElementsByClassName("Invisible")[6].style.display = "block";
                zipCodeID.style.border=colorRed;
                zipCodeID.style.background=backgroundRed;
            }
        }
        else{
            document.getElementsByClassName("Invisible")[6].style.display = "none";
        }
        if(reCountry.test(country)){
            okArr.push({"country": country});
            document.getElementsByClassName("Invisible")[7].style.display = "none";
            countryID.style.border=colorGreen;
            countryID.style.background=backgroundColor;
        }
        else{
            errArr.push(countryMsg);
            document.getElementsByClassName("Invisible")[7].style.display = "block";
            countryID.style.border=colorRed;
            countryID.style.background=backgroundRed;
        }
            if(reTel.test(tel)){
                okArr.push({"tel": tel});
                document.getElementsByClassName("Invisible")[8].style.display = "none";
                formControl[0].style.border=colorGreen;
                formControl[0].style.background=backgroundColor;
            }
            else{
                errArr.push(telephoneMsg);
                document.getElementsByClassName("Invisible")[8].style.display = "block";
                formControl[0].style.border=colorRed;
                formControl[0].style.background=backgroundRed;
            }
        
        if(selectList !== "default") {
            console.log('ok');
            okArr.push({"selectList": selectList});
            selectListID.style.border=colorGreen;
            selectListID.style.background=backgroundColor;
            document.getElementsByClassName("Invisible")[9].style.display = "none";
        }
        else{
            console.log('error');
            errArr.push("blabalbalb");
            document.getElementsByClassName("Invisible")[9].style.display = "block";
            selectListID.style.background = backgroundRed;
            selectListID.style.border=colorRed;
        }
        if(study !== "") {
            okArr.push({"study": study});
            studyID.style.border=colorGreen;
            studyID.style.background=backgroundColor;
        }
        if(comment !== "") {
            okArr.push({"comment": comment});
            commentID.style.border=colorGreen;
            commentID.style.background=backgroundColor;
        }

        
        if(okArr.length===9){
            localStorage.setItem("message",JSON.stringify(okArr));
            const stored=JSON.parse(localStorage.getItem("message"));
            console.log(stored);
            document.getElementsByClassName("ShowMsg")[0].style.display = "block";
        }
        if(okArr.length>=5&&errArr.length==0){
            document.getElementsByClassName("ShowMsg")[0].style.display = "block";
            const sendData = {
                'FirstName':fName,
                'LastName':lName,
                'email':email,
                'birth':birth,
                'address':address,
                'city':city,
                'zipCode':zipCode,
                'country':country,
                'selectList':selectList,
                'study':study,
                'comment':comment,
                'tel':tel
            }
            console.log(sendData);
        // console.log('FirstName:',fName,
        //     'LastName:',lName,
        //     'email:',email,
        //     'birth:',birth,
        //     'address:',address,
        //     'city:',city,
        //     'zipCode:',zipCode,
        //     'country:',country,
        //     'selectList:',selectList,
        //     'study:',study,
        //     'comment:',comment
        // );
        }else{
            console.log("You have an errors");
        }
;
        console.log(errArr);
    }

    return (
        <SignUpFormDiv>
            <h3>{text64}</h3>
            <h3 style={{color:'#000'}}>{text65}</h3>
            <Form>
                <WrapDiv>
                    <InputWrap>
                        <label>{text66} <span>*</span></label>
                        <input type="text" id="fName" onChange={checkFNAME}/>
                        <Sent className="Invisible">
                            You have to enter name in regular format
                        </Sent>
                    </InputWrap>
                    <InputWrap3>
                        <label>{text67} <span>*</span></label>
                        <input type="text" id="lName" onChange={checkLNAME}/>
                        <Sent className="Invisible">
                            You have to enter name in regular format
                        </Sent>
                    </InputWrap3>
                </WrapDiv>
                <InputWrap2>
                    <label>{text68}</label>
                    <input type="text" id="email" onChange={checkEmail}/>
                    <Sent className="Invisible">
                        You have to enter email in regular format
                    </Sent>
                </InputWrap2>
                <InputWrap2>
                    <label>{text69}</label>
                    <input type="text" id="birth" onChange={checkBirth}/>
                    <p style={{color:'#999'}}>dd/mm/yyyy</p>
                    <Sent className="Invisible">
                        You have to enter date of birth in regular format
                    </Sent>
                </InputWrap2>
                <WrapDiv>
                    <InputWrap>
                        <label>{text70}</label>
                        <input type="text" id="address" onChange={checkAdress} />
                        
                    </InputWrap>
                    <InputWrap3>
                        <label>{text71}</label>
                        <input type="text" id="city" onChange={checkCity} />
                    </InputWrap3>
                </WrapDiv>
                <div style={{display:'flex'}}>
                    <Sent className="Invisible" style={{width:'45%'}}>
                        <i>Exanple: "4 Saffron Hill Road"</i>
                    </Sent>
                    <Sent className="Invisible" style={{width:'50%'}}>
                        You have to enter city in regular format <i>ex. "Hong Kong"</i>
                    </Sent>
                </div>
                <InputWrap2>
                    <label>{text72}</label>
                    <input type="text" id="zipCode" onChange={checkZipCode} />
                    <Sent className="Invisible">
                        You have to enter zip code in regular format <i>ex. "90128-1672"</i>
                    </Sent>
                </InputWrap2>
                <InputWrap2>
                    <label>{text73} <span style={{color:'red'}}>*</span></label>
                    <input type="text" id="country" onChange={checkCountry} />
                    <Sent className="Invisible">
                        You have to enter country in regular format <i>ex. "Europe"</i>
                    </Sent>
                </InputWrap2>
                <InputWrap2>
                <label>{text74} <span style={{color:'red'}}>*</span></label>
                <InputTel />
                <Sent className="Invisible">
                    You have to enter telephone in regular format
                </Sent>
                </InputWrap2>
                <InputWrap2>
                    <label>
                        {text75} <span style={{color:'red'}}>*</span>
                    </label>
                    <SelectList />
                    <Sent className="Invisible">
                        You have to enter email in regular format
                    </Sent>
                </InputWrap2>
                <InputWrap2>
                    <label>{text76}</label>
                    <input type="text" 
                           id="study" 
                           onChange={checkStudy} 
                           style={{width:'100%',height:'2rem',borderRadius:'2px',border:'1px solid #ccc'}} />
                </InputWrap2>
                <InputWrap2>
                    <label>{text77}</label>
                    <textarea onChange={checkComm} 
                              rows="5" 
                              id="comment" 
                              form="usrform" 
                              placeholder={text78} />
                </InputWrap2>
                <Button2 type="button" onClick={submitForm}>
                    {text79}
                </Button2>
                <Success className="ShowMsg" style={{color:colorGreen}}>Success! Check your email for more informations...</Success>
            </Form>
        </SignUpFormDiv>
    )
}

export default SignUpForm

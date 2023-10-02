// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component{
    state={firstName:'',lastName:'',firstErrMsg:'',lastErrMsg:'',firstEmpty:false,lastEmpty:false,formSubmitted:false}

    submitForm=event=>{
      const {firstName,lastName}=this.state
      event.preventDefault()
      if (firstName==='' && lastName===''){
        this.setState({firstEmpty:true,lastEmpty:true,firstErrMsg:'Required',lastErrMsg:'Required'})
      }
      else if (firstName==='' && lastName!==''){
        this.setState({firstEmpty:true,lastEmpty:false,firstErrMsg:'Required',lastErrMsg:''})
      }
      else if (firstName!=='' && lastName===''){
        this.setState({firstEmpty:false,lastEmpty:true,firstErrMsg:'',lastErrMsg:'Required'})
      }
      else if (firstName!=='' && lastName!==''){
        this.setState({formSubmitted:true,firstEmpty:false,lastEmpty:false,firstErrMsg:'',lastErrMsg:''})
      }
    }

    changeSubmission=()=>{
      this.setState({formSubmitted:false})
    }

    renderResult=()=>{
      return(
        <div className="submission-container">
         <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success"/>
         <p className="success-text">Submitted Successfully</p>
         <button type="button" className="another-button" onClick={this.changeSubmission}>Submit Another Response</button>
       </div>
      ) 
    }
    
    renderEntryForm=()=>{
      const {firstErrMsg,lastErrMsg,firstEmpty,lastEmpty}=this.state

      const firstErrorMessage=event=>{
        if (event.target.value===''){
          this.setState({firstErrMsg:'Required',firstEmpty:true})
        }
        else{
          this.setState({firstErrMsg:'',firstEmpty:false,firstName:event.target.value})
        }
    }

    const lastErrorMessage=event=>{
      if (event.target.value===''){
        this.setState({lastErrMsg:'Required',lastEmpty:true})
      }
      else{
        this.setState({lastErrMsg:'',lastEmpty:false,lastName:event.target.value})
      }
    }
    const firsInputStyle=firstEmpty?'error-input':''
    const lastInputStyle=lastEmpty?'error-input':''
    const fristNameErrorText=firstEmpty?<p className="error-msg">{firstErrMsg}</p>:null
    const lastNameErrorText=lastEmpty?<p className="error-msg">{lastErrMsg}</p>:null

      return (
        <form className="registration-form" onSubmit={this.submitForm}>
          <label className="label" htmlFor="firstName">FIRST NAME</label>
          <input className={`input ${firsInputStyle}`} type="text" id="firstName" placeholder="First name" onBlur={firstErrorMessage}/>
          {fristNameErrorText}
          <label className="label" htmlFor="lastName">LAST NAME</label>
          <input className={`input ${lastInputStyle}`} type="text" id="lastName" placeholder="Last name" onBlur={lastErrorMessage}/>
          {lastNameErrorText}
          <div className="btn-align">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      )
    }

    render(){
      const {formSubmitted}=this.state

      return(
        <div className="container">
           <h1 className="registration">Registration</h1>
           {formSubmitted?(this.renderResult()):(this.renderEntryForm())}
        </div>
      )
    }
}

export default RegistrationForm



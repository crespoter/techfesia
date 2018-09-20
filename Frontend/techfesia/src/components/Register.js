import React,{Component} from 'react';
import axios from 'axios';

class Register extends Component{
    state = {
        name : '',
        email : '',
        mobile : '',
        institute : '',
        topBot : false,
        quadrotorWorkshop : false,
        appathon : false,
        medTechHackathon : false,
        elektra : false,
        reverseCoding : false,
        rcCarRacing : false,
        captureTheFlag : false,
        theCascader : false,
        pravikarsha : false,
        hackTheCode : false
    }
    changeCapture = (e,field)=>{
        let newState = {};
        newState[field] = e.target.value;
        this.setState(newState);
    }
    changeCaptureForCheckbox = (e,field)=>{
        let newState = {};
        newState[field] = e.target.checked;
        this.setState(newState);
    }
    register=(e)=>{
        
        e.preventDefault();
        var componentReference = this;
        axios.post('http://localhost:8080/users/register',this.state).then(function(response){
            componentReference.setState({
                name : '',
                email : '',
                mobile : '',
                institute : '',
                topBot : false,
                quadrotorWorkshop : false,
                appathon : false,
                medTechHackathon : false,
                elektra : false,
                reverseCoding : false,
                rcCarRacing : false,
                captureTheFlag : false,
                theCascader : false,
                pravikarsha : false,
                hackTheCode : false
            });
            if(response.data.status)
                alert("User Registered");
            else
            {
                if(response.data.error === "EMAIL_EXISTS"){
                    alert("Email is already registered");
                }
                else if(response.data.error === "MOBILE_EXISTS"){
                    alert("Mobile number is already registered");
                }
                else
                    alert("Unexpected error has occured. Please contact Technical Support");
            }
        }).catch(function(error){
            alert("ERROR : Something has gone wrong. Please contact technical support");
            console.log(error);
        });
    }
    render(){
        return (
            <div className="container home">
                <h4 className="center">TechFesia Onsite Registration</h4>
                <div className="row">
                    <div className="post card col s10 offset-s1">
                        <div className="row">
                            <br />
                            <form className="col offset-s2 s10 center" onSubmit={this.register} >
                                <div className="row">
                                    <div className="input-field col s10">
                                        <input id="name" type="text" className="validate" name="name" value={this.state.name} onChange={e=>this.changeCapture(e,"name")} required/>
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="input-field col s10">
                                        <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={e=>this.changeCapture(e,"email")} required/>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field col s10">
                                        <input id="mobile" type="number" className="validate" name="mobile" value={this.state.mobile} onChange={e=>this.changeCapture(e,"mobile")} required/>
                                        <label htmlFor="mobile">Mobile</label>
                                    </div>
                                    <div className="input-field col s10">
                                        <input id="institute" type="text" className="validate" name="institute" value={this.state.institute} onChange={e=>this.changeCapture(e,"institute")} required/>
                                        <label htmlFor="institute">Institute</label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="topBot" checked={this.state.topBot} onChange={e=>this.changeCaptureForCheckbox(e,"topBot")}/>
                                            <span>Top Bot</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="quadrotorWorkshop" checked={this.state.quadrotorWorkshop} onChange={e=>this.changeCaptureForCheckbox(e,"quadrotorWorkshop")}/>
                                            <span>Quadrotor Workshop</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="appathon"  checked={this.state.appathon} onChange={e=>this.changeCaptureForCheckbox(e,"appathon")}/>
                                            <span>Appathon</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="medTechHackathon"  checked={this.state.medTechHackathon} onChange={e=>this.changeCaptureForCheckbox(e,"medTechHackathon")}/>
                                            <span>Med Tech Hackathon</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="elektra"  checked={this.state.elektra} onChange={e=>this.changeCaptureForCheckbox(e,"elektra")}/>
                                            <span>Elektra</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="reverseCoding"  checked={this.state.reverseCoding} onChange={e=>this.changeCaptureForCheckbox(e,"reverseCoding")}/>
                                            <span>Reverse Coding</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="rcCarRacing"  checked={this.state.rcCarRacing} onChange={e=>this.changeCaptureForCheckbox(e,"rcCarRacing")} />
                                            <span>RC Car Racing</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="captureTheFlag"  checked={this.state.captureTheFlag} onChange={e=>this.changeCaptureForCheckbox(e,"captureTheFlag")}/>
                                            <span>Capture The Flag</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="theCascader" checked={this.state.theCascader} onChange={e=>this.changeCaptureForCheckbox(e,"theCascader")}/>
                                            <span>The Cascader</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="pravikarsha" checked={this.state.pravikarsha} onChange={e=>this.changeCaptureForCheckbox(e,"pravikarsha")}/>
                                            <span>Pravikarsha</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s10">
                                        <label>
                                            <input type="checkbox" id="hackTheCode"  checked={this.state.hackTheCode} onChange={e=>this.changeCaptureForCheckbox(e,"hackTheCode")}/>
                                            <span>Hack The Code</span>
                                        </label>
                                    </div>        
                                    <div className=" col s8">
                                        <br/>
                                        <button className="btn waves-effect waves-light" type="submit" >Register
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}
export default Register;
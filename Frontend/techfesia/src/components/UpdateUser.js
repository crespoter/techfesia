import React,{Component} from 'react';
import axios from 'axios';

class UpdateUser extends Component{
    state = {
        details : null,
        mobile : ''
    }
    onMobileChange = (e)=>{
        this.setState({
            mobile : e.target.value
        });
    }
    onFind = (e)=>{
        e.preventDefault();
        var componentReference = this;
        axios.get('http://localhost:8080/users/findUser?mobile='+this.state.mobile).then(function(response){
            if(response.data.status){
                componentReference.setState({mobile : '',details : response.data.user});
            }else{
                alert("Mobile Not Found");
                this.state.setState({mobile : ''});
            }
        });
    }
    changeCaptureField = (e,field)=>{
        let newState = {details : this.state.details};
        newState.details[field] = e.target.value;
        this.setState(newState);
    }
    changeCaptureForCheckbox = (e,field)=>{
        let newState = {details : this.state.details};
        newState.details[field] = e.target.checked;
        this.setState(newState);
    }
    update=(e)=>{
        e.preventDefault();
        var componentReference = this;
        axios.post('http://localhost:8080/users/update',this.state.details).then(function(response){
            componentReference.setState({
               details : null,
               email : '' 
            });
            if(response.data.status)
                alert("User has been updated");
            else
            {
                alert("Unexpected error has occured. Please contact Technical Support");
            }
        }).catch(function(error){
            alert("ERROR : Something has gone wrong. Please contact technical support");
            console.log(error);
        });
    }
    render(){
        var formDisplay = (<div></div>);
        if(this.state.details != null){
            formDisplay = (
                <form className="col offset-s2 s10 center" onSubmit={this.update} >
                    <div className="row">
                        <div className="input-field col s10">
                            <input id="name" type="text" className="validate" name="name" value={this.state.details.name} onChange={e=>this.changeCaptureField(e,"name")} required/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field col s10">
                            <input id="email" type="email" className="validate" name="email" value={this.state.details.email} onChange={e=>this.changeCaptureField(e,"email")} required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s10">
                            <input id="institute" type="text" className="validate" name="institute" value={this.state.details.institute} onChange={e=>this.changeCaptureField(e,"institute")} required/>
                            <label htmlFor="institute">Institute</label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="topBot" checked={this.state.details.topBot} onChange={e=>this.changeCaptureForCheckbox(e,"topBot")}/>
                                <span>Top Bot</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="quadrotorWorkshop" checked={this.state.details.quadrotorWorkshop} onChange={e=>this.changeCaptureForCheckbox(e,"quadrotorWorkshop")}/>
                                <span>Quadrotor Workshop</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="appathon"  checked={this.state.details.appathon} onChange={e=>this.changeCaptureForCheckbox(e,"appathon")}/>
                                <span>Appathon</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="medTechHackathon"  checked={this.state.details.medTechHackathon} onChange={e=>this.changeCaptureForCheckbox(e,"medTechHackathon")}/>
                                <span>Med Tech Hackathon</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="elektra"  checked={this.state.details.elektra} onChange={e=>this.changeCaptureForCheckbox(e,"elektra")}/>
                                <span>Elektra</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="reverseCoding"  checked={this.state.details.reverseCoding} onChange={e=>this.changeCaptureForCheckbox(e,"reverseCoding")}/>
                                <span>Reverse Coding</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="rcCarRacing"  checked={this.state.details.rcCarRacing} onChange={e=>this.changeCaptureForCheckbox(e,"rcCarRacing")} />
                                <span>RC Car Racing</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="captureTheFlag"  checked={this.state.details.captureTheFlag} onChange={e=>this.changeCaptureForCheckbox(e,"captureTheFlag")}/>
                                <span>Capture The Flag</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="theCascader" checked={this.state.details.theCascader} onChange={e=>this.changeCaptureForCheckbox(e,"theCascader")}/>
                                <span>The Cascader</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="pravikarsha" checked={this.state.details.pravikarsha} onChange={e=>this.changeCaptureForCheckbox(e,"pravikarsha")}/>
                                <span>Pravikarsha</span>
                            </label>
                        </div>
                        <div className="input-field col s10">
                            <label>
                                <input type="checkbox" id="hackTheCode"  checked={this.state.details.hackTheCode} onChange={e=>this.changeCaptureForCheckbox(e,"hackTheCode")}/>
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
            );
        }
        else{
            formDisplay = (
                <form className="col offset-s2 s10 center" onSubmit={this.onFind}>
                    <div className="input-field col s10">
                        <input id="mobile" type="number" className="validate" name="mobile" value={this.state.mobile} onChange={this.onMobileChange} required/>
                        <label htmlFor="mobile">Mobile</label>
                    </div>
                    <div className=" col s8">
                        <br/>
                        <button className="btn waves-effect waves-light" type="submit" >Find
                            <i className="material-icons right">search</i>
                        </button>
                    </div>
                </form>
            );
        }
        return (
            <div className="container updateUser">
                <h4 className="center">Update User Details</h4>
                <div className="row">
                    <div className="post card col s10 offset-s1">
                        <div className="row">
                            <br />
                            {formDisplay}
                        </div>
                    </div>
                </div>
            </div>
        );
    }  
}
export default UpdateUser;
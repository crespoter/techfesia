import React,{Component} from 'react';
import axios from 'axios';
import { Input, Row,Button,Icon} from 'react-materialize';


class Register extends Component{
    state = {
        event : 'topBot',
        message : ''
    }
    onChangeEvent = e=>{
        this.setState({
            event : e.target.value
        });
    }
    onChangeMessage = e=>{
        this.setState({
            message : e.target.value
        });
    }
    onSubmit = e=>{
        e.preventDefault();
        console.log(this.state);
        var componentReference = this;
        axios.post('http://localhost:8080/users/sendMessage',this.state).then(function(response){
            if(response.data.status){
                componentReference.setState({
                    mobile : '',
                    message : ''
                });
                alert("Message has been send");
            }else{
                alert("Unexpected error has occured. Please contact technical Support");
            }
        }).catch(error=>{
            console.log(error);
            alert("Unexpected error has occured. Please contact technical Support");
        });
    }
    render(){
        return (
            <div className="container home">
                <h4 className="center">Message Center</h4>
                <div className="row">
                    <div className="post card col s10 offset-s1">
                        <div className="row">
                            <form className="col offset-s2 s10 center" onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <Row>
                                        <Input s={12} type='select' label="Materialize Select" value={this.state.event} onChange={this.onChangeEvent} required>
                                            <option value='topBot'>Top Bot</option>
                                            <option value='quadrotorWorkshop'>Quadrotor Workshop</option>
                                            <option value='appathon'>Appathon</option>
                                            <option value='medTechHackathon'>Med Tech Hackathon</option>
                                            <option value='elektra'>Elektra</option>
                                            <option value='reverseCoding'>ReverseCoding</option>
                                            <option value='rcCarRacing'>RC Car Racing</option>
                                            <option value='captureTheFlag'>Capture The Flag</option>
                                            <option value='theCascader'>The Cascader</option>
                                            <option value='pravikarsha'>Pravikarsha</option>
                                            <option value='hackTheCode'>Hack The Code</option>
                                        </Input>
                                    </Row>
                                    <Row>
                                        <Input type='textarea' label="Message" s={12} value={this.state.message} onChange={this.onChangeMessage}/>
                                    </Row>
                                    <Button waves='light'>Send<Icon right>send</Icon></Button>
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
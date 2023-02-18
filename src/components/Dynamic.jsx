import React from "react";
import Dynamicdatashow from "./Dynamicdatashow";


export default class Dynamic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            useremail:"",
            userlocation:"",
            userinfostore: [],
            status: false
        }
    }

    // change fire for update state
    stateValueChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
    show = (e)=>{
        let obj = {
            username:this.state.username,
            useremail: this.state.useremail,
            userlocation: this.state.userlocation
        }
        this.state.userinfostore.push(obj);
        this.setState({userinfostore:this.state.userinfostore,status:true});
        console.log(this.state.userinfostore);
    }

    render(){
        return(
            <>
                <div className="container">
                    <form className="form-fuild">
                        <label>User Name</label>
                        <input type="text" name="username" onChange={this.stateValueChange} />
                        <label>Email</label>
                        <input type="email" name="useremail" onChange={this.stateValueChange} />
                        <label>Location</label>
                        <select name="userlocation" onChange={this.stateValueChange}>
                            <option value="">Choose an opiton</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Pune">Pune</option>
                        </select>
                        <div className="btn-wrapper">
                            <button type="button" onClick={this.show}>Add Data</button>
                        </div>
                    </form>
                </div>
                
                {
                    (this.state.status === true) ? 
                    (<Dynamicdatashow infostore = {this.state.userinfostore} />) 
                    : (null)
                }                
            </>
        );
    }
}
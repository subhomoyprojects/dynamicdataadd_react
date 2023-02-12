import React from "react";

export default class Dynamic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            useremail: '',
            userlocation: '',
            userinfostore: []
        }
    }
    render(){
        return(
            <>
                <div className="container">
                    <form className="form-fuild">
                        <label>User Name</label>
                        <input type="text" name="username" />
                        <label>Email</label>
                        <input type="email" name="useremail" />
                        <label>Location</label>
                        <select name="userlocation">
                            <option value="Kolkata">Kolkata</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Pune">Pune</option>
                        </select>
                        <div className="btn-wrapper">
                            <button type="button">Add Data</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
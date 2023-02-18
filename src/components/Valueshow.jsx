import React from "react";

class Valueshow extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            info: [],
        };
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        var parent = {
            name: e.target.nm.value,
            email: e.target.em.value,
            loc: e.target.loc.value,
        }
        this.state.info.push(parent);
        this.setState({info: this.state.info});
        console.log(this.state.info);
    }
    

    render()
    {
        return(
            <>
            <ol>
                    {
                        this.state.info.map((val,index)=>{
                            return (
                                <li key = {index+1}>
                                    Name is: {val.name}
                                    <br/>
                                    Email is: {val.email}
                                    <br/>
                                    Location is: {val.loc}
                                </li>
                            );
                            
                        })
                    }
                </ol>
            <form onSubmit={this.handleSubmit}>
                username: <input name="nm" type="text" id="text1"/> <br/>
                email: <input name="em" type="email" id="text2"/> <br/>
                city: <select name="loc"><option>Kolkata</option><option>Mumbai</option></select> <br/>
                <input type="submit" value="Submit"/>
             </form>
            </>
        );
    }
}

export default Valueshow
import React from "react";

export default function Dynamicdatashow(props){
    const listItems = props.infostore.map((val,index)=>{
        return (<tr key={index++}>
                <td>{val.username}</td>
                <td>{val.useremail}</td>
                <td>{val.userlocation}</td>
            </tr>);
    });
    return(
        <>
            <div className="container">
                <table className="dinamicValue">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        </>
    );
}
import React from "react";

class Education extends React{
    constructor(props){
        super(props)

        this.state = {
            university : "Havard University",
            degree : "Computer Engineering",
            stream : "Computer"
        }
    }


    render(){


        return (
            <div>
                <form>
                    
                    <div>
                        <label>University</label>
                        <input />
                    </div>

                    <div>
                        <label></label>
                        <input />
                    </div>

                    <div>
                        <label></label>
                        <input />
                    </div>

                </form>
            </div>
        )
    }
}






export {Education}
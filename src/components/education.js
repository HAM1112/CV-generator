import React, { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props)

        this.state = {
            university : "Havard University",
            degree : "Computer Engineering",
            stream : "Computer"
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            university : document.getElementById('uni').value,
            degree : document.getElementById('degree').value,
            stream : document.getElementById('stream').value,
        }))
    }

    render(){


        return (
            <div className="main-edu">
                <div className="edu-input">

                    <form>
                        
                        <div>
                            <label>University</label>
                            <input type={"text"} id={"uni"}/>
                        </div>

                        <div>
                            <label>Degree</label>
                            <input type={'text'} id={'degree'} />
                        </div>

                        <div>
                            <label>Stream</label>
                            <input type={'text'} id={'stream'} />
                        </div>

                        <button type="submit" onClick={this.handleSubmit}>Add Education</button>

                    </form>

                </div>
                <div>
                    {this.state.university}<br/>
                    {this.state.degree}<br/>
                    {this.state.stream}
                </div>
            </div>
        )
    }
}






export {Education}
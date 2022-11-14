import React, { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props)

        this.state = {
            university : "Havard University",
            program : "Computer Engineering",
            stream : "Computer"
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            university : document.getElementById('uni').value,
            program : document.getElementById('program').value,
            stream : document.getElementById('stream').value,
        }))
    }

    render(){

        if(this.props.show){
            return (
                <div>
                    {this.state.university}<br/>
                    {this.state.program}<br/>
                    {this.state.stream}
                </div>
            )
        }
        else{
            return (
                <div className="main-edu">
                    <div className="edu-input">
                        <h2>Educatoional Qualification</h2>
                        <div className="form-feild">

                            <form>
                                
                                <div>
                                    <label>University</label>
                                    <div>
                                    <input type={"text"} id={"uni"}/>
                                    </div>
                                </div>
        
                                <div>
                                    <label>Program</label>
                                    <div>
                                    <input type={'text'} id={'program'} />
                                    </div>
                                </div>
        
                                <div>
                                    <label>Stream</label>
                                    <div>
                                    <input type={'text'} id={'stream'} />
                                    </div>
                                </div>
        
                                <button 
                                type="submit" 
                                onClick={this.handleSubmit}
                                >
                                Add 
                                </button>
        
                            </form>
                        </div>
    
    
                    </div>
                </div>
            )
        }
    }
}






export {Education}
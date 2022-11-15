import React, { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props)

        this.state = {
            university : "Havard University",
            program : "Computer Engineering",
            startyear : 2001,
            endyear : 2006,
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            university : document.getElementById('uni').value,
            program : document.getElementById('program').value,
            startyear : document.getElementById('startyear').value,
            endyear : document.getElementById('endyear').value,
        }))
    }

    render(){

        if(this.props.show){
            return (
                <div>
                    <h4>Education</h4>
                    <p>
                        {this.state.program} from {this.state.university}   
                        {this.state.startyear} {this.state.endyear}
                    </p>
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
                                    <label>Start</label>
                                    <div>
                                    <input type={'text'} id={'startyear'} />
                                    </div>
                                </div>

                                <div>
                                    <label>End</label>
                                    <div>
                                    <input type={'text'} id={'endyear'} />
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
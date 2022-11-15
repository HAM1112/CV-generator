import React, { Component } from "react";

class Works extends Component{

    constructor(){
        super()

        this.state = {
            company: "Star Trek pvt",
            position: "CEO",
            years: 5,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            company : document.getElementById('company').value,
            position : document.getElementById('position').value,
            years : document.getElementById('years').value,
        }))
    }

    render(){

        if(this.props.show){
            return (
                <div>
                    <h4>{this.state.company}<br/></h4>
                    
                    {this.state.position}<br/>
                    {this.state.years}
                </div>

            )
        }
        else{
            return (
                <div className="main-work">
                    <div className="work-input">
                        <h2>Work Experience</h2>
                        <div className="form-feild">

                            <form>
                                
                                <div>
                                    <label>Company</label>
                                    <div>
                                    <input type={"text"} id={"company"}/>
                                    </div>
                                </div>
        
                                <div>
                                    <label>Position</label>
                                    <div>
                                    <input type={'text'} id={'position'} />
                                    </div>
                                </div>
        
                                <div>
                                    <label>Years</label>
                                    <div>
                                    <input type={'number'} id={'years'} />
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

export {Works}
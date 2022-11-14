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


        return (
            <div className="main-work">
                <div className="work-input">

                    <form>
                        
                        <div>
                            <label>Company</label>
                            <input type={"text"} id={"company"}/>
                        </div>

                        <div>
                            <label>Position</label>
                            <input type={'text'} id={'position'} />
                        </div>

                        <div>
                            <label>Years</label>
                            <input type={'number'} id={'years'} />
                        </div>

                        <button type="submit" onClick={this.handleSubmit}>Add Education</button>

                    </form>

                </div>
                <div>
                    {this.state.company}<br/>
                    {this.state.position}<br/>
                    {this.state.years}
                </div>
            </div>
        )
    }
}

export {Works}
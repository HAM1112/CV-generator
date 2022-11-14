import React , {Component} from "react"

class General extends Component{
    constructor(){
        super()

        this.state = {
            name : "superman",
            age : 29,
            email : "superman@kripton.com"
        }  
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            name : document.getElementById('name').value,
            age : document.getElementById('age').value,
            email : document.getElementById('email').value,
        }))
    }

    render(){
        //console.log("hi");

         
        if(this.props.show){
            return (

                <div>
                    {this.state.name}<br/>
                    {this.state.age}<br/>
                    {this.state.email}
                </div>
            )
        }
        else{
            return (
                <div className="main-general">
                    <div className="general-input">
                        <form>
    
                            <div>
                                <label>Name</label>
                                <input 
                                type={'text'} 
                                id="name"
                                />
                            </div>
    
                            <div>
                                <label>Age</label>
                                <input 
                                type={'number'} 
                                id={'age'}
                                //value={this.state.age}
                                />
                            </div>
    
                            <div>
                                <label>Email</label>
                                <input 
                                type={'email'}
                                id={'email'} 
                                //value={this.state.email}
                                />
                            </div>
                            <button type="submit" onClick={this.handleSubmit}>yeah this one</button>
                        </form>
                
                    </div>
                </div>
            )  
        }
    }
}


export {General}
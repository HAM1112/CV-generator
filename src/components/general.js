import React , {Component} from "react"

class General extends Component{
    constructor(){
        super()

        this.state = {
            name : "superman",
            age : 28,
            email : "superman@kripton.com",
            title : "Super hero",
        }  
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            name : document.getElementById('name').value,
            age : document.getElementById('age').value,
            email : document.getElementById('email').value,
            title : document.getElementById('title').value,
        }))
    }

    render(){
        //console.log("hi");

         
        if(this.props.show){
            return (

                <div>
                    {this.state.name}<br/>
                    {this.state.age}<br/>
                    {this.state.email}<br />
                    {this.state.title}
                </div>
            )
        }
        else{
            return (
                <div className="main-general">
                    <div className="general-input">
                        <h2>Personal Details</h2>
                        <div className="form-feild">
                            
                            <form>
        
                                <div>
                                    <label>Name</label>
                                    <div>
                                    <input 
                                    type={'text'} 
                                    id="name"
                                    />
                                    </div>
                                </div>

                                <div>
                                    <label>Title</label>
                                    <div>
                                    <input 
                                    type={'text'} 
                                    id="title"
                                    />
                                    </div>
                                </div>
        
                                <div>
                                    <label>Age</label>
                                    <div>
                                    <input 
                                    type={'number'} 
                                    id={'age'}
                                    //value={this.state.age}
                                    />
                                    </div>
                                </div>
        
                                <div>
                                    <label>Email</label>
                                    <div>
                                    <input 
                                    type={'email'}
                                    id={'email'} 
                                    //value={this.state.email}
                                    />
                                    </div>
                                </div>
                                <button 
                                type="submit" 
                                onClick={this.handleSubmit}>
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


export {General}
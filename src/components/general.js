import React , {Component} from "react"

class General extends Component{
    constructor(){
        super()

        this.state = {
            name : "Super-Man",
            phone : 1112223334,
            email : "superman@kripton.com",
            title : "Super hero",
        }  
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault()
        this.setState(state =>({
            name : document.getElementById('name').value,
            phone : document.getElementById('phone').value,
            email : document.getElementById('email').value,
            title : document.getElementById('title').value,
        }))
        console.log(("hi"));
    }

    render(){
        //console.log("hi");

         
        if(this.props.show){
            return (

                <div className="general-output">
                    <div>
                        <h1>
                            {this.state.name}
                        </h1>
                        <span>
                            {this.state.title}
                        </span>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>{this.state.phone}</p>
                        <h4>Email</h4>
                        <p>{this.state.email}</p>
                    </div>
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
                                    {this.state.name}
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
                                    id={'phone'}
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
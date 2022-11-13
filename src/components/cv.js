import React, { Component } from "react";
import { General } from "./general";
import { Education } from "./education";

class Contents extends Component{


        render(){
            

            return(
                <div>
                    <div>
                        <General />
                        <Education />
                    </div>
                </div>
            )
        }
}




export {Contents}
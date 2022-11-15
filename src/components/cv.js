import React, { Component } from "react";
import { General } from "./general";
import { Education } from "./education";
import { Works } from "./work";

class Contents extends Component{


        render(){
            

            return(
                <div>
                    <div className="main">
                        <General />
                        <Education />
                        <Works />
                    </div>
                    <div className="main-output">
                        <div>
                            <General show={"output"} />
                            <Education show={"output"} />
                            <Works show={"output"} />
                        </div>
                    </div>
                </div>
            )
        }
}




export {Contents}
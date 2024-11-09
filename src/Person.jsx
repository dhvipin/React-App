import { Component } from "react";



class Person extends Component
{

    
    constructor(props)
    {
        super(props)
        this.props=props;
    }
    hello(name)
     {
    alert("hello "+name); 
    
}
    render()
    {
        return(
            <div>
                <h2>Hello {this.props.name}</h2>
                <h2>I am {this.props.age} years old</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit libero excepturi quam distinctio, ullam tenetur ducimus. Nulla, aspernatur vero non aperiam suscipit eveniet. Ab, dolorum provident. Nihil dolorem voluptatum minima?</p>
                {/* <input type="button" value="click" onClick={this.hello("Vipin")} /> */}

                
            </div>
        )
    }
}
export default Person;
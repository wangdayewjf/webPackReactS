import  React from "react";
class Welcome extends React.Component{
    render(){
        return <h1> hello,{this.props.name}</h1>
    }
}

function App(){
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome nmae="Peng"/>
        </div>
    );
}

export  default App;

import React from 'react';

const App = () => {

    const date = new Date();
    const currentTime = date.getHours();
    
    let greeting;
    const customStyle = {
        color: ""
    };
    
    if (currentTime <12) {
        greeting = "Good Morning";
        customStyle.color = "red";
    } else if  (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "green";
    } else {
        greeting = "Good Evening";
        customStyle.color = " blue";
    }
    
    return <h1 className="heading" style={customStyle}>
        {greeting}
    </h1>
    
    }
    
export default App;

import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
    render(){
        return(
            <div>
                <h2>Hello There!</h2>
                <p>Nice to meet you!</p>
            </div>
        );
    }
}

render(<App />, document.getElementById('main'));

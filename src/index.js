// import React
import React from 'react'
// import ReactDOM
import ReactDOM from 'react-dom'

//function
function emailHelpMessage(message) {
    return message;
}

// create a functional component
const App = () => {
    // variable for the email address label
    const emailAddressLabel = 'Email Address';
    return (
        <div>
            <form style={{ maxWidth: 500, margin: '0 auto', marginTop: 30 }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">{emailAddressLabel}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">{emailHelpMessage("We'll never share your email with anyone else.")}</div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

// display the content at the home page
ReactDOM.render(<App />, document.getElementById('root'))
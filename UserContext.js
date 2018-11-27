import React from 'react';

const UserContext = React.createContext();

class UserProvider extends React.Component {
    /* 
        the following is an antipattern but implemented in this manner for the sake of getting the project done
        ideally, we would load user data upon authenticating, we decided not to implement auth for this proof-of-concept
    */
    constructor(props) {
        super(props);
        this.state = { ...this.props.userData };
    }

    

    render() {
        console.log('state in userContext is', this.state);
        return (
            <UserContext.Provider value={{userData: this.state}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export { UserConsumer, UserProvider };
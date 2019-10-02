import React, {Component} from 'react';

export default class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: this.props.items

        }
        this.newRef = React.createRef();
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        const user = this.newRef.current.value;
        const users = [...this.state.users, user];
        this.setState({
            users: users
        });
        this.newRef.current.value = '';
    }

    render() {
        const users = this.state.users.map((user,index) => {
            return <li key={index}>{user}</li>
        })

        return (
            <div>
                <ul>
                    {users}
                </ul>
                <hr />
                <label>
                    Type user name <input ref={this.newRef} type="text" placeholder="Name"/>
                </label>
                <button onClick={this.addUser}>Add</button>
            </div>
        )
    }
}

/*
this.props.items = ['Andrey', 'Anna', 'Beka', 'Geka', 'Biba'];

*/
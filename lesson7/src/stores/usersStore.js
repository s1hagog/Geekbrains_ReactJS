import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';


class usersStore extends EventEmitter{
    constructor(){
        super();
        this.users = [];
        this.getUsers = this.getUsers.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleActions = this.handleActions.bind(this);

    }

    getUsers(users){
        this.users = users;
        this.emit('change');
    }

    addUser(user){
        const newArray = [user, ...this.users];
        this.users = newArray;
        this.emit('change');
    }

    handleActions(action){
        switch(action.type){
            case 'GET_USERS':
                this.getUsers(action.data);
                break;
            case 'ADD_USER':
                this.addUser(action.data);
                break;
        }
    }


}

const store = new usersStore();
dispatcher.register(store.handleActions);
export default store;

import React from 'react';


export default class WelcomeModalWindow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }

        this.closeModalWindow = this.closeModalWindow.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {this.setState({modal:true})}, 1000);
    }

    closeModalWindow(){
        this.setState({modal: false});
    }

    render() {
        if(this.state.modal){
            return (
                <div className="modal fade" style={{display: 'block'}} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Lorem Ipsum!</h5>
                            <button onClick={() => {this.closeModalWindow()}} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Adipisicing proident consectetur deserunt eiusmod cupidatat incididunt minim esse ex exercitation sit. Incididunt cupidatat fugiat nisi aute quis do fugiat consectetur labore. Veniam incididunt commodo aliqua minim tempor Lorem. Ex minim tempor deserunt ullamco labore adipisicing culpa eu.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={() => {this.closeModalWindow()}} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }
}
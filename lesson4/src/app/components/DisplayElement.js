import React, {Component} from 'react';

export default class DisplayElement extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: false
        }
    }
    render(){
        let newsBlock;
        if(this.state.display){
            newsBlock = <div>
                <h3>News</h3>
                <p>Ullamco excepteur voluptate irure id minim ut ullamco esse commodo cillum elit ex ex commodo. Incididunt ex sint dolor culpa excepteur velit voluptate id labore reprehenderit. Minim occaecat duis culpa ullamco aliqua id fugiat sint nisi do excepteur laborum sit. Magna Lorem Lorem aute laboris tempor id excepteur qui adipisicing non amet dolore et. Adipisicing reprehenderit occaecat ex deserunt consectetur irure fugiat. Ullamco aliqua sit dolor esse ea cupidatat ut sunt magna eiusmod non ipsum sunt irure. Officia cillum cupidatat officia elit ut nulla elit irure laborum labore.</p>
                <p>Non Lorem incididunt pariatur sit irure culpa aute dolore sit aliquip anim reprehenderit pariatur fugiat.</p>
            </div>;
        }

        return (
            <div>
                <h2 className="link" onClick={() => {
                    this.setState({display: !this.state.display});
                    console.log(this.state.display);
                }}>Show/Hide block</h2>
                {newsBlock}
            </div>
        )
    }
}
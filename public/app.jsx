import React from 'react';
import ReactDOM from 'react-dom';
import action from "../actions/action";
var store = require("../stores/store");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this._onData = this._onData.bind(this);
        store.addChangeListener(this._onData);
    }
    _onData(){
        console.log(store._store);
        this.setState({
        data:store._store
        })
    }
    
    componentWillMount() {
        
        action.receiveData('https://jsonplaceholder.typicode.com/photos');
    };
    render() {
        return (
            <Tiles data={this.state.data} />
        );
    }
};
var Tiles = props => {
    return (
           <div className="tiles">
                {props.data.map((data) => {
                    return <Tile data={data} key={data.id} />
                })}
            </div>
    );
};
class Tile extends React.Component {
    constructor(props) {
        super(props);   
    }
    render() {
        var tileStyle = {};
        var headerStyle = {};
        var cssClass = 'tile';
        
        return (
            <div className={cssClass} style={tileStyle}>
                <img
                    src={this.props.data.url}
                    alt={this.props.data.name}
                />
            </div>
        );
    }
};
 ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react'
import List from './List';
import Search from './Search'
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchName:''
        }
    }
    search= (searchName)=>{
        console.log(searchName);
        this.setState({searchName})
    }
    render(){
        let { searchName } =this.state;
        return (
            <div className="container">
                <Search  search={this.search}/>
                <List searchName={searchName}/>
            </div>
        );
    }
}
export default App;

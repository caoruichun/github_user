import React from 'react'
class Search extends React.Component {
    constructor(props){
        super(props);
    }
    //搜索
    searchUsers = ()=>{
     let searchName = this.refs.searchName.value;
     this.props.search(searchName)
    }
    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref="searchName" placeholder="enter the name you search"/>
                    <button onClick={this.searchUsers}>Search</button>
                </div>
            </section>
        );
    }
}
export default Search;

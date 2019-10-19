import React from 'react'
import axios from 'axios'
class List extends React.Component {
    constructor(props){
        super(props);
    //    初始化状态
        this.state={
            fristView :true,
            loading:false,
            users:null,
            error:null
        }
    }
    //组件将要接受props数据或者props数据发生变化的时候调用
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        //更新状态
        this.setState({
            fristView:false,
            loading:true,
        })
        // 发送请求
        let url = `https://api.github.com/search/users?q=${nextProps.searchName}`;
        axios.get(url).then(res=>{
            console.log(res);
            let data = res.data;
            this.setState({
                users:data.items,
                loading:false
            })

        }).catch(err=>{
            console.log(err);
            this.setState({
                loading:false,
                error:err
            })
        })
    }
    render(){
        let {fristView,users,loading,error} = this.state;
        if(fristView){
            return <h2>enter name to search</h2>
        }else if(loading){
            return <h2>loading......</h2>
        }else if(users.length>0){
            return (
                <div className="row">
                    {
                        users.map((item,index)=>{
                           return (
                               <div className="card" key={index}>
                                   <a href={item.html_url} target="_blank">
                                       <img src={item.avatar_url} style={{width: '100px'}}/>
                                   </a>
                                   <p className="card-text">{item.login}</p>
                               </div>
                           )
                        })
                    }
                </div>
            );
        }else if(users.length==0){
            return <h2>没有数据</h2>
        }
        else if(error){
            return <h2>请求失败</h2>
        }


    }
}
export default List;

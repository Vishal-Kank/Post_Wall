import React from 'react';
import './PostWall.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class PostWall extends React.Component{
    
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.newPost){
            this.props.posts.unshift(nextProp.newPost)
        }
    }

    render(){
        return(
            <div className='postwall'>
    
                <h1 style={{color:'white'}}>POST</h1>
                
                {this.props.posts.map(data =>
                        <div  key={data.id} style={{paddingTop:'20px',textAlign:'left',margin:'auto',width:'80%'}}>
                        <ul>
                            <li style={{listStyle:'none'}}>
                                <h3>{data.title}</h3>
                                <p style={{width:'70%',padding:'10px 0 10px 10px'}}>{data.body+'.'}</p>
                            </li>
                        </ul>
                        <hr/>
                        </div>
                    )
                }
            </div>
        )
    }
    
}

PostWall.props = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts:state.post.items,
    newPost:state.post.item
})
//state.(name_of_payload).item


export default connect(mapStateToProps,{fetchPosts})(PostWall);

// connect  (mapStateToProps,mapDispatchToProps)  (Component)
//          state->props    action from component   component
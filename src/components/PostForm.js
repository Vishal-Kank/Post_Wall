import React from 'react';
import './PostWall.css';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PropTypes from 'prop-types'

class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }
        this.handleOnChange=this.handleOnChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleOnChange(e){
        this.setState({[e.target.name]:e.target.value});  
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('from component PostForm '+this.state.title+'\n'+this.state.body)
        
        const post = {
            title:this.state.title,
            body:this.state.body
        }

        this.props.createPost(post)
    
        this.setState({title:'',body:''})
    }

    render(){
        return(
            <div >
                <form onSubmit={this.handleSubmit} >
                
                    <div className='label'><h3>Title</h3></div>
                    <div className='input'><input name='title' onChange={this.handleOnChange} value={this.state.title}/></div>
                    
                    <br/>
                    
                    <div className='label'><h3>Body</h3></div> 
                    <div className='textarea'><textarea name='body' onChange={this.handleOnChange} value={this.state.body}/><br/></div>
                    
                    <button type='submit'><b>Add Post</b></button><br/>
                
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null,{ createPost })(PostForm);

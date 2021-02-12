import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';
// import axios from 'axios';

class Blog extends Component {
    state={
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        axios.get("/posts")
              .then(Response =>{
                  const posts = Response.data.slice(0,4);
                  const UpdatedPosts = posts.map(post =>{
                      return {
                          ...post,
                          author:'Max'
                      }
                  })
                  this.setState({
                      posts:UpdatedPosts
                  })
                console.log(Response);
              });
    }
    handleClick=(id)=>{
    this.setState({selectedPostId:id})

    }
    render () {
       const posts = this.state.posts.map((post) =>{
           return <Post title={post.title}
                         key={post.id} 
                         author={post.author} 
                         handleClick={()=>this.handleClick(post.id)}></Post>;
       }
       );

           
        
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
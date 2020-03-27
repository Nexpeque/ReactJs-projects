import React, { Component } from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import axios from './axiosInstance';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    newPostInfo: {
      title: "",
      author: "",
      content: ""
    },
    loading: false,
    error: false
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    axios.get("/posts")
      .then(response => {
        var updatedPost = response.data.slice(0, 4);
        updatedPost = updatedPost.map(post => {
          return {
            author: post.author,
            title: post.title.slice(0, 6),
            content: post.body
          }
        })
        this.setState({
          posts: updatedPost
        });

        console.log(updatedPost);
      }).catch(error => {
        this.setState({
          error
        });
      }).then(() => {
        this.setState({
          loading: false
        });
      })
  }

  componentShouldUpdate(nextProps, nextState) {
    return nextState.openPostIndex !== this.state.openPostIndex;
  }

  render() {
    var content;
    if (this.state.loading) {
      content = <h1>Loading...</h1>
    } else if (this.state.error) {
      content = <h1>Error</h1>
    } else {
      content = <Posts posts={this.state.posts} />
    }
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav className="nav-bar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new-post">New Post</Link></li>
              </ul>
            </nav>
          </header>
          <h1 className="main-header">My posts</h1>

          <Route path="/new-post" render={() => (
            <NewPost
              newPostInfo={this.state.newPostInfo}
              updateNewPostData={this.updateNewPostData}
              submitNewPost={this.submitNewPost}
            />
          )} />
          <Route path="/" exact render={() => content} />
          <Route path="/post/:postIndex" exact render={() => (
            <FullPost openPost={(postIndex) => this.openPost(postIndex)} />
          )} />
        </div>
      </BrowserRouter>
    )
  }

  openPost = (postIndex) => {
    return this.state.posts[postIndex];
  }

  updateNewPostData = (event, type) => {
    var updatedNewPostInfo = {
      ...this.state.newPostInfo
    }

    updatedNewPostInfo[type] = event.target.value;

    this.setState({
      newPostInfo: updatedNewPostInfo
    });
  }

  submitNewPost = () => {
    var updatedPosts = [...this.state.posts];
    var newPostInfo = { ...this.state.newPostInfo }

    updatedPosts.push(newPostInfo);

    this.setState({
      posts: updatedPosts,
      newPostInfo: {
        title: "",
        author: "",
        content: ""
      }
    })
    axios.post("https://jsonplaceholder.typicode.com/posts", newPostInfo)
      .then(response => {
        console.log(response)
      });
  }
}

export default withRouter(App);

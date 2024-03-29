import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import aSyncComponent from '../../hoc/aSynComponent/aSyncComponent';
import { Route, NavLink, Switch } from 'react-router-dom';

const AsyncNewPost = aSyncComponent(() => {
    return import('./NewPost/NewPost');
});
class Blog extends Component {

    state = {
        auth: false
    }


    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="active"
                                activeStyle={{
                                    textDecoration: 'underline',
                                    color: '#fa923f'
                                }}
                            >Post</NavLink></li>
                            <li><NavLink to={{

                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from='/' to="/posts" /> */}
                    {/* <Route path='/' component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import BasePage from '../components/BasePage';

import axios from 'axios';

class Portfolios extends React.Component {

  static async getInitialProps() {
    // gets asyncronous data from a remote server before rendering anything.
    let posts = [];

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    } catch(err) {
      console.error(err);
    }

    return{posts: posts.splice(0,10)};
  }

  renderPosts(posts) {
    // as prop will change the link to a more clean looking one, needs custom server api tho
    return posts.map((post, index) => {
      return (
        <li key={index}>
            <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
                <a style={{'fontSize': '20px'}}> {post.title} </a>
            </Link>
        </li>
      )
    })
  }
  render () {
    const { posts } = this.props;

    return (
        <BaseLayout>
            <BasePage>
                <h1>This is the Portfoloios Page </h1>
                <ul>
                    { this.renderPosts(posts) }
                </ul>
            </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;

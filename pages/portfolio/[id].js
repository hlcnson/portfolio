import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {

  static async getInitialProps(context) {
    const postId = context.query.id;
    let post = {};

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      post = response.data;
    } catch(err) {
      console.error(err);
    }
    return { post };
  }
  render () {
    const { post } = this.props;

    return (
      <BaseLayout>
      <h1>Portfolio Page</h1>
      <h2>{post.title}</h2>
      <p>BODY: {post.body}</p>
      <p>ID: {post.id}</p>
      </BaseLayout>
    )
  }
}



export default withRouter(Portfolio);

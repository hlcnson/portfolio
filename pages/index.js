import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent {

  static async getInitialProps() {
    // gets asyncronous data from a remote server before rendering anything.
    let userData = {};

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      userData = response.data;
      console.log(response.data);
    } catch(err) {
      console.error(err);
    }

    return{initialData: [1,2,3,4], userData};
  }

  constructor(props) {
    super(props);

    this.state = {
      title: 'I am Index Page'
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate () {
    console.log ('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateTitle = () => {
    // alternatively one can use in the constructor:
    // this.updateTitle = this.updateTitle.bind(this);
    // binds the context of the index class to updateTitle, so the "this" reference does not change when used in a different context (when changing states)
    this.setState({title: 'I am Updated Index Page'});
  }

  render () {
    const { title } = this.state;
    const { userData, initialData } = this.props;
    // is equal to
    // const title = this.state.title;
    // this is called "Destructuring"

    console.log('render');
    return (
      <BaseLayout>
      <h1>This is the Index Page from Class Component</h1>
      <h2>{ title }</h2>
      <h2>{ userData.title }</h2>
      <button onClick={this.updateTitle}> Change Title </button>
      </BaseLayout>
    )
  }
}

export default Index;

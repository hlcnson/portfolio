import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blogs extends React.Component {
  render () {
    return (
        <BaseLayout>
            <BasePage>
                <h1>This is the Blog Page </h1>
            </BasePage>
        </BaseLayout>
    )
  }
}

export default Blogs;

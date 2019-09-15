import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes';
import '../../styles/main.scss';

class Header extends React.Component {
  render () {

    const title = this.props.title;

    return (
    <React.Fragment>
      <p> { title } </p>
      {this.props.children}
      <p className='custom'> styled p element </p>
      <p className='customFromFile'> styled p element </p>

      <Link href="/">
        <a> Home </a>
      </Link>

      <Link href="/about">
        <a> About </a>
      </Link>

      <Link href="/portfolios">
        <a> Portfolio </a>
      </Link>

      <Link href="/blogs">
        <a> Blog </a>
      </Link>

      <Link href="/cv">
        <a> CV </a>
      </Link>

      <NextLink route="test/2" params={{id:'2'}}><a>Test 2</a></NextLink>
      <NextLink route="/test/5"><a>Test 5</a></NextLink>

      <style jsx>
      {`
        a {
          font-size: 20px;
        }
        .custom {
          font-weight:600;
          color: #f00;
        }
      `}
      </style>
    </React.Fragment>
    )
  }
}

export default Header;

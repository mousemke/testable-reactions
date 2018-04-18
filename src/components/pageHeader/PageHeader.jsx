// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import pageHeaderActions from '../../redux/action-builders/pageHeader';

import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';

import styles from './PageHeader.css';

type Props = {
  name: string,
};

/**
 * ## Pageheader
 *
 * top of the page
 */
class Pageheader extends Component<any> {
  static defaultProps = {
    name: 'anonymous',
  };

  /**
   * ## render
   *
   * renders the header with search
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { name } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.loginWrapper}>Hello {name}</div>
          <Link to="/nmm" className={styles.homeButton}>
            Home
          </Link>
          <Input placeholder={'Search'} />
          <Button title={'Submit'} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // dropdownOptions: state.timestamp.now,
  };
}

const mapDispatchToProps = dispatch => pageHeaderActions(dispatch).actions;

export default connect(mapStateToProps, mapDispatchToProps)(Pageheader);

// // @flow
// import React, { Component } from 'react';

// import styles from './PageHeader.css';

// type Props = {
//   name: string,
// };

// /**
//  * ## Pageheader
//  *
//  * top of the page
//  */
// class Pageheader extends Component<Props> {
//   static defaultProps = {
//     name: 'anonymous',
//   };

//   props: Props;

//   *
//    * ## render
//    *
//    * renders the header
//    *
//    * @return {JSX} compiled jsx

//   render() {
//     return (
//       <div className={styles.pageHeaderWrapper}>
//         Hello {this.props.name}, This app seems to be working! Or is it ....
//       </div>
//     );
//   }
// }

// export default Pageheader;

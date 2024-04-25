import { Children } from 'react';
import './GlobalStyles.scss';
import propTypes from 'prop-types';

const GlobalStyles = ({ children }) => {
    // only allow one child
    return Children.only(children);
};

GlobalStyles.propTypes = {
    children: propTypes.node.isRequired,
};

export default GlobalStyles;

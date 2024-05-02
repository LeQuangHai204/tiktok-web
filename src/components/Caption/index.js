import { NavLink } from 'react-router-dom';

const Caption = ({ children }) => {
    const hashTagRegEx = /\b#(\w+)/g;
    children = children.replace(hashTagRegEx, '<a href="/tags/$1">#$1</a>');
    // console.log('children', children);

    return <div className="caption">{children}</div>;
};

export default Caption;

import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import { images } from '~/assets';
import styles from './Image.module.scss';

const Image = forwardRef(
    (
        {
            className,
            src,
            alt,
            width,
            height,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => setFallback(customFallback);

        return (
            <img
                ref={ref}
                className={classNames(styles.wrapper, className)}
                src={fallback || (src ?? '')}
                alt={alt}
                width={width}
                height={height}
                {...props}
                onError={handleError}
            />
        );
    }
);

Image.propTypes = {
    className: propTypes.string,
    src: propTypes.string,
    alt: propTypes.string,
    fallback: propTypes.string,
};

export default Image;

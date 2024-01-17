import { forwardRef, useState } from "react";
import classNames from "classnames";

import { images } from "~/assets";
import styles from "./Image.module.scss";

const Image = (
    {
        className,
        src,
        alt,
        fallback: customFallback = images.noImage,
        ...props
    },
    ref
) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => setFallback(customFallback);

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || (src ?? "")}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
};

export default forwardRef(Image);

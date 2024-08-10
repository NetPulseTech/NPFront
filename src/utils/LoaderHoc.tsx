import React, { useEffect, useState } from 'react';

const LoaderHoc = <T extends {}>(OriginalComponent: React.ComponentType<T>) => {
  const NewComponent = (props: T) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(false);
        // aa true nu false krwu loading ,mate
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }, [show]);

    return <OriginalComponent show={show} {...props} />;
  };

  return NewComponent;
};

export default LoaderHoc;

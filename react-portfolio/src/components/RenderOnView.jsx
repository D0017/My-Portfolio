import React, { useEffect, useRef, useState } from "react";

const RenderOnView = ({
  children,
  rootMargin = "700px",
  minHeight = 300,
  id,
  as: Component = "div",
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, show]);

  return (
    <Component
      id={id}
      ref={ref}
      style={{ minHeight: show ? undefined : minHeight }}
    >
      {show ? children : null}
    </Component>
  );
};

export default RenderOnView;

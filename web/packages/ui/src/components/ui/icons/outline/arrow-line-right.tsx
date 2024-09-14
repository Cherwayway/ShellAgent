import * as React from 'react';
import { Icon, IconProps } from '../../icon';

const ArrowLineRight = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <Icon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5625 2.69727C18.1828 2.69727 17.875 3.00507 17.875 3.38477V18.6155C17.875 18.9952 18.1828 19.303 18.5625 19.303C18.9422 19.303 19.25 18.9952 19.25 18.6155V3.38477C19.25 3.00507 18.9422 2.69727 18.5625 2.69727ZM9.33277 4.80247C9.06428 5.07096 9.06428 5.50626 9.33277 5.77474L13.8707 10.3126L2.83813 10.3126C2.45844 10.3126 2.15063 10.6205 2.15063 11.0001C2.15063 11.3798 2.45844 11.6876 2.83813 11.6876L13.8707 11.6876L9.33277 16.2255C9.06428 16.494 9.06428 16.9293 9.33277 17.1978C9.60125 17.4663 10.0366 17.4663 10.305 17.1978L16.0166 11.4863C16.2851 11.2178 16.2851 10.7825 16.0166 10.514L10.305 4.80247C10.0366 4.53399 9.60125 4.53399 9.33277 4.80247Z"
            fill="#6D7175"
          />
        </svg>
      </Icon>
    );
  },
);

export { ArrowLineRight };

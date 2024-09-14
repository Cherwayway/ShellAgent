import * as React from 'react';
import { Icon, IconProps } from '../../icon';

const ImportIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.32592 1.6875L8 1.6875C8.31066 1.6875 8.5625 1.93934 8.5625 2.25C8.5625 2.56066 8.31066 2.8125 8 2.8125H6.35C5.71066 2.8125 5.26498 2.81294 4.91801 2.84129C4.5776 2.8691 4.38203 2.92095 4.23389 2.99643C3.91637 3.15821 3.65821 3.41637 3.49643 3.73389C3.42095 3.88203 3.3691 4.0776 3.34129 4.41801C3.31294 4.76498 3.3125 5.21066 3.3125 5.85V12.15C3.3125 12.7893 3.31294 13.235 3.34129 13.582C3.3691 13.9224 3.42095 14.118 3.49643 14.2661C3.65821 14.5836 3.91637 14.8418 4.23389 15.0036C4.38203 15.0791 4.5776 15.1309 4.91801 15.1587C5.26498 15.1871 5.71066 15.1875 6.35 15.1875H12.65C13.2893 15.1875 13.735 15.1871 14.082 15.1587C14.4224 15.1309 14.618 15.0791 14.7661 15.0036C15.0836 14.8418 15.3418 14.5836 15.5036 14.2661C15.5791 14.118 15.6309 13.9224 15.6587 13.582C15.6871 13.235 15.6875 12.7893 15.6875 12.15V10.5C15.6875 10.1893 15.9393 9.9375 16.25 9.9375C16.5607 9.9375 16.8125 10.1893 16.8125 10.5V12.1741C16.8125 12.7837 16.8125 13.2754 16.78 13.6736C16.7465 14.0836 16.6757 14.4437 16.506 14.7768C16.2363 15.3061 15.8061 15.7363 15.2768 16.006C14.9437 16.1757 14.5836 16.2465 14.1736 16.28C13.7754 16.3125 13.2837 16.3125 12.6741 16.3125H6.32591C5.71628 16.3125 5.22458 16.3125 4.8264 16.28C4.41642 16.2465 4.05632 16.1757 3.72315 16.006C3.19395 15.7363 2.76369 15.3061 2.49404 14.7768C2.32429 14.4437 2.25352 14.0836 2.22002 13.6736C2.18749 13.2754 2.18749 12.7837 2.1875 12.1741V5.82592C2.18749 5.21629 2.18749 4.72458 2.22002 4.3264C2.25352 3.91642 2.32429 3.55632 2.49404 3.22315C2.76369 2.69395 3.19395 2.26369 3.72315 1.99404C4.05632 1.82429 4.41642 1.75352 4.8264 1.72002C5.22458 1.68749 5.71629 1.68749 6.32592 1.6875ZM16.25 1.6875C16.5607 1.6875 16.8125 1.93934 16.8125 2.25V3.17409C16.8125 3.78372 16.8125 4.27542 16.78 4.6736C16.7465 5.08358 16.6757 5.44368 16.506 5.77685C16.2363 6.30605 15.8061 6.73631 15.2768 7.00596C14.9437 7.17571 14.5836 7.24648 14.1736 7.27998C13.7754 7.31251 13.2837 7.31251 12.6741 7.3125H11.608L12.8977 8.60225C13.1174 8.82192 13.1174 9.17808 12.8977 9.39775C12.6781 9.61742 12.3219 9.61742 12.1023 9.39775L9.85225 7.14775C9.63258 6.92808 9.63258 6.57192 9.85225 6.35225L12.1023 4.10225C12.3219 3.88258 12.6781 3.88258 12.8977 4.10225C13.1174 4.32192 13.1174 4.67808 12.8977 4.89775L11.608 6.1875H12.65C13.2893 6.1875 13.735 6.18706 14.082 6.15871C14.4224 6.1309 14.618 6.07905 14.7661 6.00357C15.0836 5.84179 15.3418 5.58363 15.5036 5.26611C15.5791 5.11797 15.6309 4.9224 15.6587 4.58199C15.6871 4.23502 15.6875 3.78934 15.6875 3.15V2.25C15.6875 1.93934 15.9393 1.6875 16.25 1.6875Z"
          fill="#3E5CFA"
        />
      </svg>
    </Icon>
  );
});

export { ImportIcon };

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const colors = {
  firstBlockClr: '#005bba',
  secondBlockClr: '#fed500',
  clr: '#111',
};

const size = '30px';

const down = keyframes`0%, 100% {
    transform: none;
   }
  
   25% {
    transform: translateX(100%);
   }
  
   50% {
    transform: translateX(100%) translateY(100%);
   }
  
   75% {
    transform: translateY(100%);
   }
`;

const up = keyframes` 0%, 100% {
    transform: none;
   }
  
   25% {
    transform: translateX(-100%);
   }
  
   50% {
    transform: translateX(-100%) translateY(-100%);
   }
  
   75% {
    transform: translateY(-100%);
   }`;

export const SpinnerEl = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &::after,
  &::before {
    box-sizing: border-box;
    position: absolute;
    content: '';
    width: ${size};
    height: ${size};
    top: 50%;
    animation: ${up} 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    left: 50%;
    background: ${colors.firstBlockClr};
  }
  &::after {
    background: ${colors.secondBlockClr};
    top: calc(50% - ${size});
    left: calc(50% - ${size});
    animation: ${down} 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }
`;

import React, { FC } from 'react';
import styles from './Spinner.module.scss';
import { style } from 'framer-motion/client';

type AllowedTypeSpinner = 'loading' | 'finished' | 'error';

type SpinnerProps = {
  type: AllowedTypeSpinner;
};

const Spinners = ({ type }: SpinnerProps) => {
  const SpaceAround = () => {
    return (
      <>
        <div data-testid='loading-screen' id={styles.universe}>
          <div id={styles.galaxy}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div id={styles.orbit0}>
              <div id={styles.pos0}>
                <div id={styles.dot0}></div>
              </div>
            </div>
            <div id={styles.orbit1}>
              <div id={styles.pos1}>
                <div id={styles.dot1}></div>
              </div>
            </div>
            <div id={styles.orbit2}>
              <div id={styles.pos2}>
                <div id={styles.dot2}></div>
              </div>
            </div>
            <div id={styles.orbit3}>
              <div id={styles.pos3}>
                <div id={styles.dot3}></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const SvgError = () => (
    <>
      <a href='https://www.freepik.com/free-vector/404-error-design-with-astronaut_1534909.htm'>
        <svg
          data-testid='error-screen'
          width='500px'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 682.1 743.3'
        >
          <defs>
            <clipPath id='clip-path' transform='translate(69 -0.3)'>
              <circle cx='249.9' cy='250.3' r='250' fill='none' />
            </clipPath>
            <clipPath id='clipPath-2' transform='translate(69 -0.3)'>
              <rect x='-0.1' y='0.3' width='500' height='500' fill='none' />
            </clipPath>
          </defs>
          <title>Error</title>
          <g>
            <g id='Capa_1' data-name='Capa 1'>
              <g clipPath='url(#clip-path)'>
                <rect x='68.9' width='500' height='500' fill='#1c1c1c' />
                <rect x='68.9' width='500' height='500' opacity='0.09' />
                <g clipPath='url(#clip-path-2)'>
                  <path
                    d='M179.1,265.1H104.5a7.1,7.1,0,0,1-7.1-7.1h0a7.1,7.1,0,0,1,7.1-7.2h74.6a7.2,7.2,0,0,1,7.2,7.2h0A7.1,7.1,0,0,1,179.1,265.1Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M398.1,351.9H323.5a7.1,7.1,0,0,1-7.1-7.1h0a7.1,7.1,0,0,1,7.1-7.2h74.6a7.2,7.2,0,0,1,7.2,7.2h0A7.2,7.2,0,0,1,398.1,351.9Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M384.1,391.9H309.5a7.1,7.1,0,0,1-7.1-7.2h0a7.1,7.1,0,0,1,7.1-7.1h74.6a7.1,7.1,0,0,1,7.2,7.1h0A7.2,7.2,0,0,1,384.1,391.9Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M420.8,372.4H388.2a7.1,7.1,0,0,1-7.1-7.1h0a7.1,7.1,0,0,1,7.1-7.2h32.6a7.2,7.2,0,0,1,7.2,7.2h0A7.1,7.1,0,0,1,420.8,372.4Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M359.4,372.4H347.7a7.1,7.1,0,0,1-7.2-7.1h0a7.2,7.2,0,0,1,7.2-7.2h11.7a7.1,7.1,0,0,1,7.1,7.2h0A7.1,7.1,0,0,1,359.4,372.4Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M142.2,295.2H68.9a12.3,12.3,0,0,1-12.3-12.3h0a12.3,12.3,0,0,1,12.3-12.3h73.3a12.3,12.3,0,0,1,12.3,12.3h0A12.3,12.3,0,0,1,142.2,295.2Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M194.8,62.8a12.3,12.3,0,0,1-12.2,12.3H12.2A12.3,12.3,0,0,1-.1,62.8h0A12.3,12.3,0,0,1,12.2,50.5H182.6a12.3,12.3,0,0,1,12.2,12.3Z'
                    transform='translate(69 -0.3)'
                    fill='#242426'
                  />
                  <path
                    d='M160.5,87.4a12.3,12.3,0,0,1-12.3,12.2H34.2A12.3,12.3,0,0,1,21.9,87.4h0A12.3,12.3,0,0,1,34.2,75.1h114a12.3,12.3,0,0,1,12.3,12.3Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <rect
                    x='115.4'
                    y='25.7'
                    width='160.5'
                    height='24.57'
                    rx='12.3'
                    fill='#222223'
                  />
                  <rect
                    x='475.2'
                    y='422.4'
                    width='194.9'
                    height='24.57'
                    rx='12.3'
                    fill='#262628'
                  />
                  <path
                    d='M566.7,459.5a12.3,12.3,0,0,1-12.3,12.3h-114a12.3,12.3,0,0,1-12.3-12.3h0a12.3,12.3,0,0,1,12.3-12.3h114a12.3,12.3,0,0,1,12.3,12.3Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M600.9,422.6h-136a12.3,12.3,0,0,1-12.3-12.3h0A12.3,12.3,0,0,1,464.9,398h136a12.3,12.3,0,0,1,12.2,12.3h0A12.3,12.3,0,0,1,600.9,422.6Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M125.9,389.4a12.3,12.3,0,0,1-12.3,12.3H-56.7A12.3,12.3,0,0,1-69,389.4h0a12.3,12.3,0,0,1,12.3-12.3H113.6a12.3,12.3,0,0,1,12.3,12.3Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M91.5,414a12.3,12.3,0,0,1-12.2,12.3H-34.8A12.3,12.3,0,0,1-47,414h0a12.3,12.3,0,0,1,12.2-12.3H79.3A12.3,12.3,0,0,1,91.5,414Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M91,377.1H-10.3a12.2,12.2,0,0,1-12.2-12.2h0a12.3,12.3,0,0,1,12.2-12.3H91a12.3,12.3,0,0,1,12.3,12.3h0A12.3,12.3,0,0,1,91,377.1Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M440.5,156.8a12.3,12.3,0,0,1-12.3,12.3H257.9a12.3,12.3,0,0,1-12.3-12.3h0a12.3,12.3,0,0,1,12.3-12.3H428.2a12.3,12.3,0,0,1,12.3,12.3Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M393.9,193.7h-114a12.3,12.3,0,0,1-12.3-12.3h0a12.3,12.3,0,0,1,12.3-12.3h114a12.3,12.3,0,0,1,12.3,12.3h0A12.3,12.3,0,0,1,393.9,193.7Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                  <path
                    d='M386.3,144.5h-82a12.3,12.3,0,0,1-12.2-12.3h0A12.2,12.2,0,0,1,304.3,120h82a12.3,12.3,0,0,1,12.3,12.2h0A12.3,12.3,0,0,1,386.3,144.5Z'
                    transform='translate(69 -0.3)'
                    fill='#262628'
                  />
                </g>
                <g clipPath='url(#clip-path-2)'>
                  <path
                    d='M241.8,278.6l27.3-8.7a22.5,22.5,0,0,1,28.4,14.6l6.2,19.2a22.1,22.1,0,1,0,42-13.5l-2-6.1a22.6,22.6,0,0,1,14.6-28.4l13-4.2'
                    transform='translate(69 -0.3)'
                    fill='none'
                    stroke='#fff'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='4.83'
                  />
                  <path
                    d='M178.1,182.3h18.7a4.3,4.3,0,0,1,4.3,4.3v5a0,0,0,0,1,0,0H173.7a0,0,0,0,1,0,0v-5A4.3,4.3,0,0,1,178.1,182.3Z'
                    transform='translate(20.8 66.1) rotate(-17.8)'
                    fill='#79b4b5'
                  />
                  <path
                    d='M231.1,200.6l4.4-1.4A4.4,4.4,0,0,1,241,202l10.8,33.7L240,239.5'
                    transform='translate(69 -0.3)'
                    fill='none'
                    stroke='#497c74'
                    strokeMiterlimit='10'
                    strokeWidth='4.37'
                  />
                  <rect
                    x='173.8'
                    y='187.9'
                    width='61.5'
                    height='61.75'
                    rx='7'
                    transform='translate(11.8 72.9) rotate(-17.8)'
                    fill='#497c74'
                  />
                  <path
                    d='M261.5,295.2l15.3-4.9L262.6,246a19.8,19.8,0,0,0-24.8-12.7l-19.1,6.1,4.9,15.4,19.1-6.2a3.8,3.8,0,0,1,4.6,2.3Z'
                    transform='translate(69 -0.3)'
                    fill='#79b4b5'
                  />
                  <path
                    d='M262,266.4a6.9,6.9,0,0,0,8.6,4.4l-4.2-12.9A6.7,6.7,0,0,0,262,266.4Z'
                    transform='translate(69 -0.3)'
                    fill='#68989b'
                  />
                  <path
                    d='M261.5,264.9a6.9,6.9,0,0,0,8.6,4.4l-4.2-13A6.9,6.9,0,0,0,261.5,264.9Z'
                    transform='translate(69 -0.3)'
                    fill='#415d5e'
                  />
                  <path
                    d='M253.4,270l15.2-4.9a2.4,2.4,0,0,0,1.6-3,2.4,2.4,0,0,0-3-1.6l-15.3,4.9Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <path
                    d='M260,240.7a9.7,9.7,0,0,1-5.1,4,9.3,9.3,0,0,1-11.6-6,9.4,9.4,0,0,1,.3-6.4A20.1,20.1,0,0,1,260,240.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <rect
                    x='253.7'
                    y='247.4'
                    width='9.4'
                    height='1.95'
                    transform='matrix(-0.95, 0.31, -0.31, -0.95, 649.41, 405.48)'
                    fill='#e08623'
                  />
                  <rect
                    x='254.6'
                    y='250.5'
                    width='9.4'
                    height='1.95'
                    transform='translate(652.3 411.2) rotate(162.2)'
                    fill='#e08623'
                  />
                  <rect
                    x='255.6'
                    y='253.5'
                    width='9.4'
                    height='1.95'
                    transform='matrix(-0.95, 0.31, -0.31, -0.95, 655.14, 416.85)'
                    fill='#e08623'
                  />
                  <rect
                    x='173.5'
                    y='202.7'
                    width='57.4'
                    height='18.52'
                    rx='3.4'
                    transform='translate(13.8 71.8) rotate(-17.8)'
                    fill='#79b4b5'
                  />
                  <circle
                    cx='202.3'
                    cy='212'
                    r='25.9'
                    transform='translate(-20.4 240) rotate(-51.9)'
                    fill='#a2e8e0'
                  />
                  <circle
                    cx='202.3'
                    cy='212'
                    r='20.1'
                    transform='translate(29.8 377.7) rotate(-80.9)'
                    fill='#82868b'
                  />
                  <circle
                    cx='202.3'
                    cy='212'
                    r='17.2'
                    transform='matrix(0.08, -1, 1, 0.08, 44.12, 396.85)'
                    fill='#52565a'
                  />
                  <path
                    d='M212.2,198a14.5,14.5,0,0,1,2.2,4.5,17.1,17.1,0,0,1-26.3,19.2A17.2,17.2,0,1,0,212.2,198Z'
                    transform='translate(69 -0.3)'
                    fill='#3b3e43'
                  />
                  <path
                    d='M199.1,200.3a13,13,0,0,1,2.3-1.8,12.8,12.8,0,0,0-3.3.6,13.6,13.6,0,0,0-5.4,3.3Z'
                    transform='translate(69 -0.3)'
                    fill='#82868b'
                  />
                  <path
                    d='M190.3,205.6a14,14,0,0,0-1.2,9.7l6.4-2.1a14,14,0,0,1,1.2-9.7Z'
                    transform='translate(69 -0.3)'
                    fill='#82868b'
                  />
                  <line
                    x1='249.9'
                    y1='243.2'
                    x2='306.9'
                    y2='224.9'
                    fill='none'
                    stroke='#a2e8e0'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='5.37'
                  />
                  <rect
                    x='195.4'
                    y='237.7'
                    width='52.9'
                    height='67.74'
                    transform='translate(-3.5 80.7) rotate(-17.8)'
                    fill='#79b4b5'
                  />
                  <rect
                    x='215.2'
                    y='300'
                    width='21.7'
                    height='71.56'
                    transform='translate(-23 85.1) rotate(-17.8)'
                    fill='#497c74'
                  />
                  <rect
                    x='245'
                    y='290.4'
                    width='21.7'
                    height='71.57'
                    transform='translate(-18.6 93.7) rotate(-17.8)'
                    fill='#497c74'
                  />
                  <path
                    d='M203.5,313.9l-15.3,4.9L174,274.5a19.7,19.7,0,0,1,12.7-24.8l19.1-6.1,4.9,15.3-19.1,6.2a3.5,3.5,0,0,0-2.3,4.5Z'
                    transform='translate(69 -0.3)'
                    fill='#79b4b5'
                  />
                  <rect
                    x='203.1'
                    y='251.4'
                    width='34.4'
                    height='33.29'
                    transform='translate(-2.5 80.1) rotate(-17.8)'
                    fill='#68989b'
                  />
                  <rect
                    x='202.6'
                    y='249.9'
                    width='34.4'
                    height='33.29'
                    transform='translate(-2 79.8) rotate(-17.8)'
                    fill='#fff'
                  />
                  <path
                    d='M245.8,361.8a10.8,10.8,0,0,0-13.6-7,11,11,0,0,0-7,13.7l1.5,4.7,20.6-6.7Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <rect
                    x='226.6'
                    y='369.8'
                    width='21.7'
                    height='2.6'
                    transform='translate(-33.2 90.2) rotate(-17.8)'
                    fill='#52565a'
                  />
                  <path
                    d='M236.9,334a10.9,10.9,0,0,1-7,13.7,10.9,10.9,0,1,1,7-13.7Z'
                    transform='translate(69 -0.3)'
                    fill='#415d5e'
                  />
                  <circle
                    cx='225.9'
                    cy='335.3'
                    r='10.9'
                    transform='translate(-77.4 492.7) rotate(-79)'
                    fill='#fff'
                  />
                  <line
                    x1='284.5'
                    y1='338.3'
                    x2='305.3'
                    y2='331.7'
                    fill='none'
                    stroke='#a2e8e0'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='4.83'
                  />
                  <rect
                    x='202.4'
                    y='290.6'
                    width='53'
                    height='6.44'
                    transform='translate(-10 83.9) rotate(-17.8)'
                    fill='#415d5e'
                  />
                  <rect
                    x='204'
                    y='256.8'
                    width='13.9'
                    height='7.7'
                    transform='translate(-0.7 76.9) rotate(-17.8)'
                    fill='#68989b'
                  />
                  <rect
                    x='206.2'
                    y='266.1'
                    width='13.9'
                    height='2.51'
                    transform='translate(-2.6 77.8) rotate(-17.8)'
                    fill='#52565a'
                  />
                  <path
                    d='M216.3,276.5A3.6,3.6,0,0,1,214,281a3.6,3.6,0,1,1,2.3-4.5Z'
                    transform='translate(69 -0.3)'
                    fill='#e08623'
                  />
                  <path
                    d='M227.8,272.8a4.5,4.5,0,0,1-2.9,5.7,4.5,4.5,0,0,1-2.8-8.6A4.5,4.5,0,0,1,227.8,272.8Z'
                    transform='translate(69 -0.3)'
                    fill='#6a6e72'
                  />
                  <path
                    d='M226.2,273.3a2.8,2.8,0,0,1-1.8,3.5,2.7,2.7,0,0,1-3.5-1.8,2.6,2.6,0,0,1,1.8-3.4A2.8,2.8,0,0,1,226.2,273.3Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <rect
                    x='222.1'
                    y='253.4'
                    width='8.2'
                    height='8.23'
                    transform='translate(1 81.4) rotate(-17.8)'
                    fill='#e08623'
                  />
                  <polygon
                    points='300.4 259.9 292.6 262.4 297.9 252.1 300.4 259.9'
                    fill='#dc6920'
                  />
                  <rect
                    x='231.4'
                    y='265.4'
                    width='16.8'
                    height='7.11'
                    transform='translate(-1.8 86.1) rotate(-17.8)'
                    fill='#415d5e'
                  />
                  <path
                    d='M204.1,315.6a8.1,8.1,0,0,1-5.2,10.1,8,8,0,0,1-10.1-5.2l-3.1-9.4,15.4-4.9Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <line
                    x1='268.2'
                    y1='309.3'
                    x2='274.3'
                    y2='314'
                    fill='none'
                    stroke='#a2e8e0'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='5.37'
                  />
                  <polygon
                    points='324 288.6 273.5 304.9 296.6 305 305.7 302.1 324 288.6'
                    fill='#a2e8e0'
                  />
                  <path
                    d='M186.3,290.7a6.8,6.8,0,0,1-4.4,8.6l-4.1-12.9A6.7,6.7,0,0,1,186.3,290.7Z'
                    transform='translate(69 -0.3)'
                    fill='#68989b'
                  />
                  <path
                    d='M185.8,289.2a6.8,6.8,0,0,1-4.4,8.6l-4.1-13A6.7,6.7,0,0,1,185.8,289.2Z'
                    transform='translate(69 -0.3)'
                    fill='#415d5e'
                  />
                  <path
                    d='M195.5,288.7l-15.3,4.9a2.5,2.5,0,0,1-3.1-1.6,2.4,2.4,0,0,1,1.6-3l15.3-4.9Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <path
                    d='M228,373.5h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2H228a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,228,373.5Z'
                    transform='translate(265.6 -63.7) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M232.2,372.1h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,232.2,372.1Z'
                    transform='translate(265.4 -65.7) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M236.3,370.8h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,236.3,370.8Z'
                    transform='translate(265.3 -67.8) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M240.4,369.5h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,240.4,369.5Z'
                    transform='translate(265.1 -69.8) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M244.5,368.1h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,244.5,368.1Z'
                    transform='translate(265 -71.8) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M232.9,357.6a9.5,9.5,0,0,1,1.6-1.2,9.3,9.3,0,0,0-2.3.4,10.9,10.9,0,0,0-3.6,2.2Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <path
                    d='M226.9,361.2a9.9,9.9,0,0,0-.8,6.6l4.4-1.4a8.9,8.9,0,0,1,.8-6.6Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <path
                    d='M198.4,323.8h1.4l-1.5.6a7.7,7.7,0,0,1-3,.3Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <path
                    d='M193.5,324.2a6.9,6.9,0,0,1-3.1-3.4l3-1a6.3,6.3,0,0,0,3.2,3.4Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <rect
                    x='183.5'
                    y='303.4'
                    width='18.3'
                    height='5.37'
                    transform='translate(-15.5 73.4) rotate(-17.8)'
                    fill='#68989b'
                  />
                  <path
                    d='M173,268.7a9.2,9.2,0,0,0,12.4-11.3,9.1,9.1,0,0,0-4-5A19.8,19.8,0,0,0,173,268.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <rect
                    x='174'
                    y='273'
                    width='9.4'
                    height='1.95'
                    transform='translate(-6.3 67.6) rotate(-17.8)'
                    fill='#e08623'
                  />
                  <rect
                    x='175'
                    y='276.1'
                    width='9.4'
                    height='1.95'
                    transform='translate(-7.2 68.1) rotate(-17.8)'
                    fill='#e08623'
                  />
                  <rect
                    x='176'
                    y='279.2'
                    width='9.4'
                    height='1.95'
                    transform='translate(-8.1 68.5) rotate(-17.8)'
                    fill='#e08623'
                  />
                  <path
                    d='M275.7,352.2a10.8,10.8,0,0,0-13.6-7,11,11,0,0,0-7,13.7l1.5,4.7,20.6-6.7Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <rect
                    x='256.5'
                    y='360.2'
                    width='21.7'
                    height='2.6'
                    transform='translate(-28.8 98.9) rotate(-17.8)'
                    fill='#52565a'
                  />
                  <circle
                    cx='256.5'
                    cy='327.7'
                    r='10.9'
                    transform='translate(-83.4 404.8) rotate(-62.7)'
                    fill='#415d5e'
                  />
                  <path
                    d='M245.4,329a10.9,10.9,0,1,0,7.1-13.8A10.9,10.9,0,0,0,245.4,329Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <line
                    x1='335.2'
                    y1='322'
                    x2='314.4'
                    y2='328.7'
                    fill='none'
                    stroke='#a2e8e0'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='4.83'
                  />
                  <path
                    d='M262.1,297a7.9,7.9,0,0,0,10.1,5.1,8.1,8.1,0,0,0,5.2-10.1l-3-9.4-15.4,5Z'
                    transform='translate(69 -0.3)'
                    fill='#a2e8e0'
                  />
                  <line
                    x1='331.5'
                    y1='289'
                    x2='329.3'
                    y2='296.3'
                    fill='none'
                    stroke='#a2e8e0'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='5.37'
                  />
                  <path
                    d='M257.9,363.8H261a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,257.9,363.8Z'
                    transform='translate(264.5 -78.4) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M262.1,362.5h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,262.1,362.5Z'
                    transform='translate(264.3 -80.5) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M266.2,361.2h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,266.2,361.2Z'
                    transform='translate(264.2 -82.5) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M270.3,359.9h3.1a0,0,0,0,1,0,0V361a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,270.3,359.9Z'
                    transform='translate(264 -84.5) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M274.4,358.5h3.1a0,0,0,0,1,0,0v1.1a2,2,0,0,1-2,2h-1.1a0,0,0,0,1,0,0v-3.1A0,0,0,0,1,274.4,358.5Z'
                    transform='translate(263.9 -86.6) rotate(27.2)'
                    fill='#52565a'
                  />
                  <path
                    d='M262.8,348a9.5,9.5,0,0,1,1.6-1.2,9.3,9.3,0,0,0-2.3.4,9.5,9.5,0,0,0-3.6,2.2Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <path
                    d='M256.8,351.6a9.9,9.9,0,0,0-.8,6.6l4.4-1.4a8.9,8.9,0,0,1,.8-6.6Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <path
                    d='M271.5,300.3l-1.1.8,1.6-.3a5.8,5.8,0,0,0,2.5-1.5Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <path
                    d='M275.6,297.8a6.1,6.1,0,0,0,.6-4.6l-3,1a6.3,6.3,0,0,1-.6,4.5Z'
                    transform='translate(69 -0.3)'
                    fill='#cdfff6'
                  />
                  <rect
                    x='256.7'
                    y='279.9'
                    width='18.3'
                    height='5.37'
                    transform='translate(-4.7 94.7) rotate(-17.8)'
                    fill='#68989b'
                  />
                  <line
                    x1='248.2'
                    y1='250'
                    x2='312.3'
                    y2='229.4'
                    fill='none'
                    stroke='#68989b'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='6.44'
                  />
                  <line
                    x1='258.4'
                    y1='246.7'
                    x2='275'
                    y2='241.4'
                    fill='none'
                    stroke='#79b4b5'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='6.44'
                  />
                  <line
                    x1='259.1'
                    y1='240.3'
                    x2='270.6'
                    y2='236.6'
                    fill='none'
                    stroke='#cdfff6'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='5.37'
                  />
                  <text
                    transform='translate(212.7 142.3)'
                    fontSize='90.14'
                    fill='#fff'
                    fontFamily='BritannicBold, Britannic Bold'
                  >
                    Error
                  </text>
                  <text
                    transform='translate(265.8 73.1)'
                    fontSize='32.53'
                    fill='#d8311c'
                    fontFamily='BankGothicBold, BankGothic'
                  >
                    Oops!
                  </text>
                  <text x='69' y='-0.3' />
                  <path
                    d='M353.8,185.5l.3-.2.4.2,1.7,3.7,3.7,1.7.2.3a.5.5,0,0,1-.2.4l-3.7,1.7-1.7,3.7-.4.2-.3-.2-1.7-3.7-3.7-1.7c-.2-.1-.2-.2-.2-.4s0-.2.2-.3l3.7-1.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M121.4,43.9a.5.5,0,0,1,1,0l.6,3.9a2.4,2.4,0,0,0,1.8,1.8l3.9.6a.5.5,0,0,1,.5.5.6.6,0,0,1-.5.6l-3.9.6a2.1,2.1,0,0,0-1.8,1.8l-.6,3.9a.5.5,0,0,1-1,0l-.6-3.9a2.1,2.1,0,0,0-1.8-1.8l-3.9-.6a.6.6,0,0,1-.5-.6.5.5,0,0,1,.5-.5l3.9-.6a2.4,2.4,0,0,0,1.8-1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M338.3,185.9l-.3.3-.3-.2-1.2-1.6-1.9-.5c-.1,0-.2-.1-.2-.3a.2.2,0,0,1,.1-.3l1.6-1.2.5-1.8a.3.3,0,0,1,.3-.3c.1-.1.3,0,.4.1l1.1,1.6,1.9.5.3.3a.5.5,0,0,1-.2.4l-1.6,1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M365.8,160.9l-.4.2a.3.3,0,0,1-.3-.3l-.7-1.8-1.8-.9-.2-.3c.1-.2.1-.3.3-.4l1.8-.7.9-1.7.4-.2.3.2.7,1.9,1.7.9c.2,0,.2.2.2.3s-.1.3-.2.3l-1.8.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M337.5,170.1a1.9,1.9,0,1,1-3.7,0,1.8,1.8,0,0,1,1.8-1.8A1.8,1.8,0,0,1,337.5,170.1Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M340.7,166.1a.9.9,0,0,1-1,1,.9.9,0,0,1-.9-1,.9.9,0,0,1,.9-.9A.9.9,0,0,1,340.7,166.1Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M383.8,183.1a1,1,0,0,1-2,0,1,1,0,1,1,2,0Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M395.6,179.6a1.2,1.2,0,0,1-1.2,1.3,1.3,1.3,0,1,1,0-2.6A1.2,1.2,0,0,1,395.6,179.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M279.1,220.2a2.5,2.5,0,1,1-2.4-2.4A2.5,2.5,0,0,1,279.1,220.2Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <circle cx='354.6' cy='217' r='1.6' fill='#fff' />
                  <path
                    d='M286.8,225.3a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,286.8,225.3Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M145.2,376.1c.1-.2.2-.3.4-.3a.3.3,0,0,1,.3.3l1.7,3.7,3.7,1.7a.3.3,0,0,1,.3.3c0,.2-.1.3-.3.4l-3.7,1.6-1.7,3.8-.3.2-.4-.2-1.6-3.8-3.8-1.6a.5.5,0,0,1-.2-.4c0-.1.1-.3.2-.3l3.8-1.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M89.9,320.9a.6.6,0,0,1,.6-.5.5.5,0,0,1,.5.5l.6,3.9a2.2,2.2,0,0,0,1.8,1.8l3.9.6a.5.5,0,1,1,0,1l-3.9.6a2.2,2.2,0,0,0-1.8,1.8l-.6,3.9a.5.5,0,0,1-.5.5.6.6,0,0,1-.6-.5l-.6-3.9a2.1,2.1,0,0,0-1.8-1.8l-3.9-.6a.5.5,0,0,1,0-1l3.9-.6a2.1,2.1,0,0,0,1.8-1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M129.8,376.5l-.3.2c-.2.1-.3,0-.4-.1L128,375l-1.9-.5a.3.3,0,0,1-.3-.3.4.4,0,0,1,.2-.4l1.6-1.1.4-1.9.3-.3a.5.5,0,0,1,.4.2l1.1,1.6,1.9.5a.3.3,0,0,1,.3.3.6.6,0,0,1-.1.4l-1.7,1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M157.2,351.5l-.3.2c-.2,0-.3-.1-.4-.3l-.7-1.8-1.7-.9a.5.5,0,0,1-.2-.4c0-.1.1-.2.2-.3l1.9-.7.9-1.7c0-.2.2-.2.3-.2s.3.1.3.2l.7,1.8,1.8.9a.5.5,0,0,1,.2.4.3.3,0,0,1-.3.3l-1.8.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <circle cx='196.1' cy='360.5' r='1.8' fill='#efc22f' />
                  <path
                    d='M132.1,356.7a.9.9,0,0,1-.9,1,.9.9,0,0,1-1-1,1,1,0,0,1,1-1A1,1,0,0,1,132.1,356.7Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M175.2,373.6a.9.9,0,0,1-1,1,.9.9,0,0,1-.9-1,.9.9,0,0,1,.9-.9A.9.9,0,0,1,175.2,373.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M187.1,370.2a1.3,1.3,0,0,1-2.6,0,1.3,1.3,0,1,1,2.6,0Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M127.1,415.7a2.5,2.5,0,0,1-4.9,0,2.5,2.5,0,1,1,4.9,0Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <circle cx='202.6' cy='412.5' r='1.6' fill='#fff' />
                  <circle cx='202' cy='420.5' r='1.8' fill='#fff' />
                  <path
                    d='M335.5,361.8c.2,0,.2.2.2.3s0,.3-.2.4l-3.7,1.6-1.7,3.8c0,.1-.2.2-.3.2a.5.5,0,0,1-.4-.2l-1.7-3.8-3.7-1.6a.5.5,0,0,1-.2-.4c0-.1.1-.3.2-.3l3.7-1.7,1.7-3.7c.1-.2.2-.3.4-.3a.3.3,0,0,1,.3.3l1.7,3.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M390.7,306.5a.5.5,0,1,1,0,1l-3.9.6a2.4,2.4,0,0,0-1.8,1.8l-.6,3.9a.5.5,0,1,1-1,0l-.6-3.9a2.4,2.4,0,0,0-1.8-1.8l-3.9-.6a.5.5,0,0,1,0-1l3.9-.6a2.4,2.4,0,0,0,1.8-1.8l.6-3.9a.5.5,0,1,1,1,0l.6,3.9a2.4,2.4,0,0,0,1.8,1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M335.1,346.3q-.2,0-.3-.3a.8.8,0,0,1,.2-.4l1.6-1.1.5-1.9q0-.2.3-.3l.4.2,1.1,1.6,1.9.5c.1,0,.2.1.2.3s0,.3-.1.4l-1.6,1.1-.5,1.9c0,.1-.1.2-.3.2s-.3,0-.4-.1l-1.1-1.6Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M360.1,373.7c-.1,0-.2-.2-.2-.3a.3.3,0,0,1,.3-.3l1.8-.7.9-1.8a.5.5,0,0,1,.4-.2l.3.3.7,1.8,1.7.9c.2,0,.2.2.2.3a.5.5,0,0,1-.2.4l-1.8.7-.9,1.7a.5.5,0,0,1-.4.2c-.1,0-.3-.1-.3-.2l-.7-1.9Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M350.9,345.4a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,350.9,345.4Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M354.9,348.7a1,1,0,0,1,0-2,1,1,0,0,1,0,2Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M337.9,391.7a.9.9,0,0,1-.9-.9.9.9,0,0,1,.9-1,.9.9,0,0,1,1,1A.9.9,0,0,1,337.9,391.7Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M341.4,403.6a1.3,1.3,0,0,1-1.3-1.3,1.3,1.3,0,0,1,2.6,0A1.3,1.3,0,0,1,341.4,403.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M295.9,343.6a2.5,2.5,0,0,1,0-4.9,2.5,2.5,0,1,1,0,4.9Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <circle cx='367.9' cy='349.9' r='1.6' fill='#fff' />
                  <path
                    d='M290.8,351.3a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,290.8,351.3Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M331.9,53.1c0-.1.2-.2.3-.2l.4.2,1.6,3.8,3.8,1.6a.5.5,0,0,1,.2.4c0,.1-.1.3-.2.3l-3.8,1.7-1.6,3.7c-.1.2-.2.3-.4.3a.3.3,0,0,1-.3-.3l-1.7-3.7-3.7-1.7a.3.3,0,0,1-.3-.3c0-.2.1-.3.3-.4l3.7-1.6Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M331.7,27.9c0-.2.3-.4.5-.4a.7.7,0,0,1,.6.4l.6,3.9a1.9,1.9,0,0,0,1.7,1.8l4,.6a.7.7,0,0,1,.4.6c0,.2-.2.5-.4.5l-4,.6a2,2,0,0,0-1.7,1.8l-.6,3.9a.6.6,0,0,1-.6.5.5.5,0,0,1-.5-.5l-.6-3.9a2.2,2.2,0,0,0-1.8-1.8l-3.9-.6a.5.5,0,0,1-.5-.5.6.6,0,0,1,.5-.6l3.9-.6a2.1,2.1,0,0,0,1.8-1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M316.4,53.5a.3.3,0,0,1-.3.3c-.1.1-.3,0-.4-.1l-1.1-1.6-1.9-.5c-.1,0-.2-.2-.2-.3s0-.3.1-.4l1.6-1.1.5-1.9q0-.1.3-.3l.4.2,1.1,1.6,1.9.5q.2,0,.3.3c0,.1-.1.3-.2.3l-1.6,1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M343.9,28.5c-.1.2-.2.2-.4.2s-.3-.1-.3-.2l-.7-1.8-1.8-.9a.5.5,0,0,1-.2-.4.3.3,0,0,1,.3-.3l1.8-.7.9-1.8a.5.5,0,0,1,.4-.2q.2,0,.3.3l.7,1.8,1.7.9c.2.1.2.2.2.4l-.2.3-1.8.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M315.6,37.8a1.9,1.9,0,0,1-1.9,1.8,1.8,1.8,0,0,1,0-3.6A1.9,1.9,0,0,1,315.6,37.8Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M318.8,33.8a1,1,0,0,1-1,1,1,1,0,0,1,0-2A1,1,0,0,1,318.8,33.8Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M339.2,65.8a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M337.8,70.8a1.2,1.2,0,0,1-1.2,1.3,1.3,1.3,0,0,1,0-2.6A1.2,1.2,0,0,1,337.8,70.8Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <circle cx='343.5' cy='559.9' r='183.4' fill='#b3511f' />
                  <path
                    d='M274.5,376.7V743.6c101.3,0,183.4-82.1,183.4-183.5A183.4,183.4,0,0,0,274.5,376.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8b3e21'
                  />
                  <path
                    d='M453.9,521.8a186.4,186.4,0,0,0-15.3-43.6h-162A21.8,21.8,0,0,0,254.8,500h0a21.8,21.8,0,0,0,21.8,21.8Z'
                    transform='translate(69 -0.3)'
                    fill='#e0641d'
                  />
                  <path
                    d='M206.2,551.8H91.3c-.1,2.7-.2,5.5-.2,8.3a186.1,186.1,0,0,0,3.4,35.3H206.2A21.9,21.9,0,0,0,228,573.6h0A21.8,21.8,0,0,0,206.2,551.8Z'
                    transform='translate(69 -0.3)'
                    fill='#e0641d'
                  />
                  <path
                    d='M243.6,595.4H94.5A184.2,184.2,0,0,0,108.8,639H243.6a21.8,21.8,0,0,0,0-43.6Z'
                    transform='translate(69 -0.3)'
                    fill='#e0641d'
                  />
                  <path
                    d='M245.2,671a21.8,21.8,0,1,0,0,43.6H373.4A181.5,181.5,0,0,0,420.6,671Z'
                    transform='translate(69 -0.3)'
                    fill='#e0641d'
                  />
                  <path
                    d='M457.4,573.9H367.3a21.8,21.8,0,0,0-21.8,21.8h0a21.7,21.7,0,0,0,21.8,21.8h81.4A183.3,183.3,0,0,0,457.4,573.9Z'
                    transform='translate(69 -0.3)'
                    fill='#e0641d'
                  />
                  <path
                    d='M257.2,409.1H170.4a184.3,184.3,0,0,0-44.5,43.6H257.2a21.8,21.8,0,1,0,0-43.6Z'
                    transform='translate(69 -0.3)'
                    fill='#e0641d'
                  />
                  <path
                    d='M93.7,147.6l.3-.2.4.2,1.6,3.7,3.8,1.7c.1.1.2.2.2.3a.5.5,0,0,1-.2.4L96,155.4l-1.6,3.7a.5.5,0,0,1-.4.2l-.3-.2L92,155.4l-3.7-1.7c-.2-.1-.3-.2-.3-.4s.1-.2.3-.3l3.7-1.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M93.5,122.4a.5.5,0,0,1,.5-.5.6.6,0,0,1,.6.5l.6,3.9a2.1,2.1,0,0,0,1.7,1.8l4,.6a.5.5,0,0,1,0,1l-4,.6a2.1,2.1,0,0,0-1.7,1.8l-.6,3.9a.6.6,0,0,1-.6.5.5.5,0,0,1-.5-.5l-.6-3.9a2.4,2.4,0,0,0-1.8-1.8l-3.9-.6a.5.5,0,1,1,0-1l3.9-.6a2.4,2.4,0,0,0,1.8-1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M78.2,148l-.3.3-.4-.2-1.1-1.6-1.9-.5c-.1,0-.2-.1-.2-.3a.2.2,0,0,1,.1-.3l1.6-1.1.5-1.9a.3.3,0,0,1,.3-.3c.1-.1.3,0,.4.1l1.1,1.6,1.9.5.3.3a.5.5,0,0,1-.2.4l-1.6,1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M105.7,123a.5.5,0,0,1-.4.2.3.3,0,0,1-.3-.3l-.7-1.8-1.8-.9-.2-.3c0-.2.1-.3.3-.4l1.8-.7.9-1.7.4-.2.3.2.7,1.9,1.7.9c.2,0,.2.2.2.3s-.1.3-.2.3l-1.8.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M77.4,132.2a2,2,0,0,1-1.9,1.9,1.9,1.9,0,0,1-1.8-1.9,1.8,1.8,0,0,1,1.8-1.8A1.9,1.9,0,0,1,77.4,132.2Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M80.6,128.2a.9.9,0,0,1-1,1,1,1,0,0,1-1-1,1,1,0,0,1,1-.9A.9.9,0,0,1,80.6,128.2Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M101,160.3a1,1,0,1,1-1-1A1.1,1.1,0,0,1,101,160.3Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M99.6,165.3a1.2,1.2,0,0,1-1.2,1.2,1.2,1.2,0,0,1-1.3-1.2,1.3,1.3,0,0,1,1.3-1.3A1.2,1.2,0,0,1,99.6,165.3Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M441.1,215.3a.3.3,0,0,1-.3.3c-.2,0-.3-.1-.4-.3l-1.6-3.7-3.8-1.7c-.1,0-.2-.2-.2-.3a.5.5,0,0,1,.2-.4l3.8-1.6,1.6-3.8.4-.2c.1,0,.3.1.3.2l1.7,3.8,3.7,1.6c.2.1.3.2.3.4a.3.3,0,0,1-.3.3l-3.7,1.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M441.3,240.5a.5.5,0,0,1-.5.5.6.6,0,0,1-.6-.5l-.6-3.9a1.9,1.9,0,0,0-1.7-1.7l-4-.7a.5.5,0,0,1-.4-.5c0-.2.2-.5.4-.5l4-.6a2.1,2.1,0,0,0,1.7-1.8l.6-3.9a.6.6,0,0,1,.6-.5.5.5,0,0,1,.5.5l.6,3.9a2.4,2.4,0,0,0,1.8,1.8l3.9.6a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5l-3.9.7a2.1,2.1,0,0,0-1.8,1.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M456.6,214.9c0-.1.1-.2.3-.2s.3,0,.4.1l1.1,1.6,1.9.5c.1,0,.2.1.2.3s0,.3-.1.4l-1.6,1.1-.5,1.9-.3.3-.4-.2-1.1-1.6-1.9-.5q-.2,0-.3-.3a.8.8,0,0,1,.2-.4l1.6-1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M429.1,240c.1-.2.2-.3.4-.3l.3.3.7,1.8,1.8.9a.5.5,0,0,1,.2.4.3.3,0,0,1-.3.3l-1.8.7-.9,1.7c-.1.2-.2.3-.4.2l-.3-.2-.7-1.8-1.7-.9c-.2-.1-.2-.2-.2-.4s.1-.3.2-.3l1.8-.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M457.4,230.7a1.9,1.9,0,0,1,1.9-1.8,1.8,1.8,0,1,1,0,3.6A1.9,1.9,0,0,1,457.4,230.7Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M454.2,234.7a1,1,0,0,1,1-1,1,1,0,0,1,0,2A1,1,0,0,1,454.2,234.7Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M433.8,202.6a1,1,0,0,1,2,0,1,1,0,0,1-2,0Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M435.2,197.7a1.2,1.2,0,0,1,1.2-1.3,1.3,1.3,0,0,1,1.3,1.3,1.2,1.2,0,0,1-1.3,1.2A1.2,1.2,0,0,1,435.2,197.7Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M23.1,344.3l-.4.2-.3-.2-1.7-3.8L17,338.9a.5.5,0,0,1-.2-.4c0-.1.1-.3.2-.3l3.7-1.7,1.7-3.7q.2-.3.3-.3c.2,0,.3.1.4.3l1.7,3.7,3.7,1.7c.1,0,.2.2.2.3a.5.5,0,0,1-.2.4l-3.7,1.6Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M23.3,369.5a.7.7,0,0,1-.6.4.7.7,0,0,1-.5-.4l-.6-3.9a2.1,2.1,0,0,0-1.8-1.8l-3.9-.6a.7.7,0,0,1-.4-.6.7.7,0,0,1,.4-.5l3.9-.6a2.1,2.1,0,0,0,1.8-1.8l.6-3.9a.7.7,0,0,1,.5-.4.7.7,0,0,1,.6.4l.6,3.9a2,2,0,0,0,1.8,1.8l3.9.6a.7.7,0,0,1,.4.5.7.7,0,0,1-.4.6l-3.9.6a2,2,0,0,0-1.8,1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M38.5,343.9q.2-.3.3-.3h.4l1.1,1.7,1.9.4q.3.1.3.3c0,.2,0,.3-.1.4l-1.7,1.1-.4,1.9q-.1.3-.3.3c-.2,0-.3,0-.4-.2L38.5,348l-1.9-.4-.3-.3c0-.2,0-.3.2-.4l1.6-1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M11.1,368.9l.4-.2.3.2.7,1.8,1.7.9a.4.4,0,0,1,.2.4c0,.2-.1.3-.2.3l-1.8.7-.9,1.8a.5.5,0,0,1-.4.2.3.3,0,0,1-.3-.3l-.7-1.8L8.3,372c-.1-.1-.2-.2-.2-.3s.1-.3.3-.4l1.8-.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M39.4,359.6a1.8,1.8,0,1,1,1.8,1.8A1.8,1.8,0,0,1,39.4,359.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M36.2,363.6a1,1,0,0,1,.9-1,1,1,0,0,1,1,1,.9.9,0,0,1-1,1A.9.9,0,0,1,36.2,363.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M15.8,331.6a.9.9,0,0,1,1-1,.9.9,0,0,1,.9,1,.9.9,0,0,1-.9.9A.9.9,0,0,1,15.8,331.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M17.1,326.6a1.3,1.3,0,1,1,1.3,1.3A1.3,1.3,0,0,1,17.1,326.6Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M463.9,436.8a.5.5,0,0,1-.4.2l-.3-.2-1.7-3.7-3.7-1.7c-.2-.1-.3-.2-.3-.4a.3.3,0,0,1,.3-.3l3.7-1.7,1.7-3.7c0-.2.2-.2.3-.2s.3,0,.4.2l1.6,3.7,3.8,1.7c.1,0,.2.2.2.3a.5.5,0,0,1-.2.4l-3.8,1.7Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M464,462a.5.5,0,0,1-1,0l-.6-3.9a2.2,2.2,0,0,0-1.8-1.8l-3.9-.6c-.3-.1-.5-.3-.5-.5a.6.6,0,0,1,.5-.6l3.9-.6a2.1,2.1,0,0,0,1.8-1.8l.6-3.9a.5.5,0,0,1,1,0l.6,3.9a2.1,2.1,0,0,0,1.8,1.8l3.9.6a.6.6,0,0,1,.5.6c0,.2-.2.4-.5.5l-3.9.6a2.2,2.2,0,0,0-1.8,1.8Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M479.3,436.4a.3.3,0,0,1,.3-.3c.2,0,.3,0,.4.2l1.1,1.6,1.9.4c.1.1.3.2.3.3a.5.5,0,0,1-.2.4l-1.6,1.1L481,442a.3.3,0,0,1-.3.3c-.1,0-.3,0-.3-.2l-1.1-1.6-1.9-.4q-.3-.2-.3-.3c-.1-.2,0-.3.1-.4l1.6-1.1Z'
                    transform='translate(69 -0.3)'
                    fill='#c84c55'
                  />
                  <path
                    d='M451.9,461.4l.3-.2.4.2.7,1.9,1.7.9c.1,0,.2.2.2.3s-.1.3-.2.3l-1.9.7-.9,1.8-.3.2c-.2,0-.3-.1-.4-.3l-.7-1.8-1.7-.9c-.1,0-.2-.2-.2-.3a.5.5,0,0,1,.2-.4l1.9-.7Z'
                    transform='translate(69 -0.3)'
                    fill='#8cd1cf'
                  />
                  <path
                    d='M480.2,452.1a1.8,1.8,0,0,1,3.6,0,1.8,1.8,0,1,1-3.6,0Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M476.9,456.1a1,1,0,0,1,1-.9.9.9,0,0,1,1,.9.9.9,0,0,1-1,1A1,1,0,0,1,476.9,456.1Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M456.6,424.1a.9.9,0,0,1,.9-1,.9.9,0,0,1,1,1,1,1,0,0,1-1,1A1,1,0,0,1,456.6,424.1Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M457.9,419.1a1.2,1.2,0,0,1,1.3-1.2,1.2,1.2,0,0,1,1.2,1.2,1.2,1.2,0,0,1-1.2,1.3A1.3,1.3,0,0,1,457.9,419.1Z'
                    transform='translate(69 -0.3)'
                    fill='#efc22f'
                  />
                  <path
                    d='M129.2,399.7,93.8,365a5.4,5.4,0,0,1-1.7-4.1,5.7,5.7,0,0,1,2.1-4l20-15.8'
                    transform='translate(69 -0.3)'
                    fill='none'
                    stroke='#3b3e43'
                    strokeMiterlimit='10'
                    strokeWidth='3.8'
                  />
                  <path
                    d='M159.7,425.5l-33.5,34.3a13.7,13.7,0,0,1-19.4.2h0a13.7,13.7,0,0,1-.2-19.4l33.5-34.3a13.7,13.7,0,0,1,19.4-.2h0A13.7,13.7,0,0,1,159.7,425.5Z'
                    transform='translate(69 -0.3)'
                    fill='#6a6e72'
                  />
                  <circle cx='186.5' cy='448.9' r='9.6' fill='#52565a' />
                  <path
                    d='M110.7,442.4a9.4,9.4,0,0,0-2.3,9.6,9.1,9.1,0,0,1,2.6-5.4,9.6,9.6,0,0,1,13.6-.1,10.6,10.6,0,0,1,2.4,3.9,9.3,9.3,0,0,0-2.8-8.1A9.6,9.6,0,0,0,110.7,442.4Z'
                    transform='translate(69 -0.3)'
                    fill='#3b3e43'
                  />
                  <path
                    d='M140.3,425.8a9.6,9.6,0,0,1,.1,13.6,9.5,9.5,0,0,1-13.5.2,9.6,9.6,0,0,1,13.4-13.8Z'
                    transform='translate(69 -0.3)'
                    fill='#52565a'
                  />
                  <path
                    d='M126.7,426a9.8,9.8,0,0,0-2.3,9.6,9.6,9.6,0,0,1,2.7-5.4,9.5,9.5,0,0,1,13.5-.2,10,10,0,0,1,2.5,4,9.9,9.9,0,0,0-2.8-8.2A9.6,9.6,0,0,0,126.7,426Z'
                    transform='translate(69 -0.3)'
                    fill='#3b3e43'
                  />
                  <circle
                    cx='149.7'
                    cy='416.3'
                    r='9.6'
                    transform='translate(-200.1 558.4) rotate(-89)'
                    fill='#52565a'
                  />
                  <path
                    d='M142.8,409.6a9.4,9.4,0,0,0-2.3,9.5,10.9,10.9,0,0,1,2.6-5.4,9.6,9.6,0,0,1,13.6-.1,8.3,8.3,0,0,1,2.4,4,9.7,9.7,0,0,0-2.7-8.2A9.6,9.6,0,0,0,142.8,409.6Z'
                    transform='translate(69 -0.3)'
                    fill='#3b3e43'
                  />
                  <rect
                    x='82.2'
                    y='416.4'
                    width='78.5'
                    height='8.86'
                    transform='translate(-195.4 213.2) rotate(-45.6)'
                    fill='#689fd4'
                  />
                  <rect
                    x='79.8'
                    y='413.5'
                    width='73.8'
                    height='4.85'
                    transform='translate(-193.3 208.4) rotate(-45.6)'
                    fill='#5881ac'
                  />
                  <rect
                    x='89'
                    y='384.9'
                    width='16.2'
                    height='39.12'
                    transform='translate(-191 190.9) rotate(-45.6)'
                    fill='#73ccfd'
                  />
                  <rect
                    x='86.8'
                    y='425.1'
                    width='12.2'
                    height='9.71'
                    transform='translate(-210.5 195.5) rotate(-45.6)'
                    fill='#73ccfd'
                  />
                  <rect
                    x='102.3'
                    y='416.5'
                    width='16.2'
                    height='1.92'
                    transform='translate(-196.3 204.3) rotate(-45.6)'
                    fill='#689fd4'
                  />
                  <rect
                    x='89.4'
                    y='431.4'
                    width='12.2'
                    height='2.27'
                    transform='translate(-211.5 198.2) rotate(-45.6)'
                    fill='#689fd4'
                  />
                  <line
                    x1='153.9'
                    y1='425.8'
                    x2='142.4'
                    y2='426'
                    fill='none'
                    stroke='#52565a'
                    strokeMiterlimit='10'
                    strokeWidth='3.13'
                  />
                  <path
                    d='M74,423.8a2.4,2.4,0,0,1,.1,4.7,2.4,2.4,0,0,1-2.4-2.4A2.3,2.3,0,0,1,74,423.8Z'
                    transform='translate(69 -0.3)'
                    fill='#52565a'
                  />
                  <path
                    d='M94.2,426a11.1,11.1,0,0,0-11.1-10.9l.2,22A11,11,0,0,0,94.2,426Z'
                    transform='translate(69 -0.3)'
                    fill='#f5db8f'
                  />
                  <rect
                    x='84.2'
                    y='377.6'
                    width='30'
                    height='15.97'
                    transform='translate(-176.8 186.7) rotate(-45.6)'
                    fill='#e08623'
                  />
                  <rect
                    x='87.2'
                    y='384.6'
                    width='30'
                    height='7.72'
                    transform='translate(-178 189.7) rotate(-45.6)'
                    fill='#dc6920'
                  />
                  <rect
                    x='109.1'
                    y='367.2'
                    width='4.2'
                    height='12.24'
                    transform='translate(-164.5 191.6) rotate(-45.6)'
                    fill='#6a6e72'
                  />
                  <path
                    d='M103.5,374.5a1.4,1.4,0,1,1-2,0A1.5,1.5,0,0,1,103.5,374.5Z'
                    transform='translate(69 -0.3)'
                    fill='#fff'
                  />
                  <path
                    d='M115.7,339.2a3.2,3.2,0,0,1,.1,4.7,3.4,3.4,0,0,1-4.8.1,3.4,3.4,0,0,1,0-4.8A3.3,3.3,0,0,1,115.7,339.2Z'
                    transform='translate(69 -0.3)'
                    fill='#73ccfd'
                  />
                  <polygon
                    points='120.3 284.4 141 250.2 138.1 248.4 117.8 281.9 120.3 284.4'
                    fill='#b8eafe'
                  />
                  <polygon
                    points='99.3 263.4 132.8 243.1 131 240.2 96.8 260.9 99.3 263.4'
                    fill='#b8eafe'
                  />
                  <polygon
                    points='120.9 276.7 117.8 281.9 120.3 284.4 123.4 279.2 120.9 276.7'
                    fill='#dc6920'
                  />
                  <polygon
                    points='102 257.8 96.8 260.9 99.3 263.4 104.5 260.3 102 257.8'
                    fill='#dc6920'
                  />
                  <circle cx='146.9' cy='233.3' r='25' fill='#73ccfd' />
                  <path
                    d='M95.8,216.1,60.5,251.4a25,25,0,0,0,35.3-35.3Z'
                    transform='translate(69 -0.3)'
                    fill='#689fd4'
                  />
                  <path
                    d='M64.1,237c-1.6.9-4-.2-5.5-2.6s-1.4-5.1.2-6.1,4,.2,5.5,2.6S65.7,236,64.1,237Z'
                    transform='translate(69 -0.3)'
                    fill='#e08623'
                  />
                  <polygon
                    points='76.5 264.5 131.7 233.4 130.1 230.5 74.1 262 76.5 264.5'
                    fill='#b8eafe'
                  />
                  <path
                    d='M75.5,248.4c-.9,1.5.2,4,2.6,5.5s5.1,1.3,6.1-.3-.2-4-2.6-5.4S76.5,246.8,75.5,248.4Z'
                    transform='translate(69 -0.3)'
                    fill='#dc6920'
                  />
                  <polygon
                    points='119.2 307.1 150.7 251.1 147.8 249.5 116.7 304.7 119.2 307.1'
                    fill='#b8eafe'
                  />
                  <polygon
                    points='79.8 258.8 74.1 262 76.5 264.5 82.2 261.3 79.8 258.8'
                    fill='#e08623'
                  />
                  <polygon
                    points='119.9 299 116.7 304.7 119.2 307.1 122.4 301.4 119.9 299'
                    fill='#e08623'
                  />
                  <line
                    x1='129.3'
                    y1='215.6'
                    x2='164.6'
                    y2='250.9'
                    fill='none'
                    stroke='#dc6920'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='5.91'
                  />
                  <rect x='68.9' width='500' height='500' fill='none' />
                  <text
                    transform='translate(0.9 61.7)'
                    fontSize='12'
                    fontFamily='BritannicBold, Britannic Bold'
                  >
                    Lorem ipsum
                  </text>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </>
  );

  const SvgFinish = () => (
    <div
      data-testid='finish-screen'
      className='flex translate-y-11 flex-col items-center pb-6'
    >
      <a href='https://www.freepik.com/free-vector/cute-astronaut-standing-planet-cartoon-icon-illustration_11759993.htm#fromView=search&page=1&position=28&uuid=190891ca-4b0a-4234-9fa1-899c49cffb30'>
        <svg
          className=''
          id='Capa_1'
          width='80px'
          data-name='Capa 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 267.1 493'
        >
          <title>End</title>
          <circle cx='133.5' cy='359.5' r='130.8' fill='#ca412a' />
          <path
            d='M241.8,348.3c1.9,7,12.6,5.6,13-3.7s-6.5-11.2,0-16.3-13.5-12.7-4.4-23.8c-1.3-2.5-2.6-5-4.1-7.5C210,234.7,129.9,213.6,67.5,250a130.2,130.2,0,0,0-32.9,27.2c7.8-4.2,14.3-6.7,17.5-5.6,11.6,4.2,16.7-3.3,22.8-.3s-7.5,6.8-3.8,11.5,5.2,8.3,1,10.7,1.7,15.3-7.3,29.3-5.2,18.1,3.8,15.3,22.5-21.9,33.5-18.1,16.8,13.4,31.3,4.6,15.1-6.5,18.3,3.3-12.6,7.9.6,15.3,14.5.5,12.9,13.5-10,18.1-5.6,21.9,22.7-3,22.2-17.8,16.6,1.9,26.7-8.3,8.7,6.5,16.6-2.8S239.9,341.4,241.8,348.3Z'
            transform='translate(0.1 -3.5)'
            fill='#e2794a'
          />
          <path
            d='M39.3,328.3c.1-1.9,3-2.4,4.4-1.1s1.7,3.3,1.8,5.2.2,6-2.2,7.4-5.4-.2-6.4-2.6-.5-5.2.5-7.6'
            transform='translate(0.1 -3.5)'
            fill='#e2794a'
          />
          <path
            d='M46.7,382.1a35.3,35.3,0,0,0,.1,4.6c1.3,4.6,7.8,5.2,10.8,8.9s1.3,9.1-2.6,10.8-9.2-1.3-9.6-5.6c-.3-2.5.6-5.7-1.5-7.1s-3.1-.4-4.2-1.4-.8-3.4-.1-5.1,1.2-4-.2-5.1-2-.7-2.9-1.2-1.5-2.8-1.5-4.3C35,366.5,46.4,376.8,46.7,382.1Z'
            transform='translate(0.1 -3.5)'
            fill='#e2794a'
          />
          <path
            d='M105.3,418.2c-.4,1-.1,2.2-.6,3.2s-2.4,1.6-3.9,1.4-2.9-.6-4.3-.1-2.7,4.4-1.1,6.3a6.2,6.2,0,0,0,6.9,1.1c2.1-.8,4.4-2.5,6.3-1.4s1.1,1,1.7,1.4c2.2,1.5,5.5-.7,5.7-3.3S108,411.5,105.3,418.2Z'
            transform='translate(0.1 -3.5)'
            fill='#e2794a'
          />
          <path
            d='M164,419.9c-3.4-1.2-7.2,2.2-7.1,5.8s3.3,6.6,6.8,7.2a13.3,13.3,0,0,0,10.1-2.9c3.2-2.3,5.8-6.2,4.7-10a5,5,0,0,0-3.8.6,7,7,0,0,0,2.1-5.9,4.5,4.5,0,0,0-4.4-4c-2.6.1-4.4,2.8-4.4,5.4s1.3,4.9,2.5,7.2l-4.4.3a6.9,6.9,0,0,1,.8-4.9,4.6,4.6,0,0,0-3.7-1.1'
            transform='translate(0.1 -3.5)'
            fill='#e2794a'
          />
          <path
            d='M129.9,385a3.4,3.4,0,0,0-1,4.7,4.6,4.6,0,0,0,4.9,1.5,7.2,7.2,0,0,0,4-3.5c0,1.3,1.9,2,3,1.3s1.6-2.1,1.6-3.5a5.8,5.8,0,0,0-1.8-4.3,4.6,4.6,0,0,0-4.5-.9c.6-2.1.8-5.1-1.3-5.9s-3.6,1.1-4.2,2.8-.6,3.8-1.5,5.5'
            transform='translate(0.1 -3.5)'
            fill='#e2794a'
          />
          <g opacity='0.6'>
            <path
              d='M187.4,481.3l-5.5,3.1a139.6,139.6,0,0,0,17.4-8.5,130.8,130.8,0,0,0-8-230.2,130.3,130.3,0,0,0-60.7-7.7,130.3,130.3,0,0,1,103.8,64.5C270.8,364.9,249.7,445,187.4,481.3Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M32.7,279.5A130.8,130.8,0,0,0,238.9,440.2c-1.2,1.7-2.5,3.3-3.8,4.9a130.7,130.7,0,0,0,29-84.6,117.9,117.9,0,0,1-14.5,22A118.6,118.6,0,0,1,212.5,416a121.4,121.4,0,0,1-178-138.6Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <path
            d='M133.6,496.4A133.6,133.6,0,0,1,18,430.2C-19.1,366.6,2.5,284.7,66.1,247.6s145.6-15.6,182.7,48A133.4,133.4,0,0,1,133.6,496.4ZM133.2,235a127.4,127.4,0,0,0-64.3,17.4c-60.9,35.5-81.6,114-46,175A127.9,127.9,0,1,0,133.2,235Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.3'>
            <ellipse cx='131.4' cy='255.5' rx='55.1' ry='23.6' fill='#44154f' />
          </g>
          <path
            d='M207.7,79.9s7.3-8.5,11.9-6.6,8.5,6.3,7.8,19.6c-.4,8.6-26.6,10.2-26.6,10.2L194,85.9'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M200.8,105.1a2.1,2.1,0,0,1-1.9-1.3l-6.8-17.1a2.1,2.1,0,1,1,3.8-1.6l6.3,15.8c9.7-.8,22.9-3.8,23.2-8.1.6-12.9-3.2-16.2-6.6-17.6s-6.9,3-9.5,6.1a2.1,2.1,0,0,1-3,.2,2.1,2.1,0,0,1-.2-2.9c1.4-1.6,8.6-9.6,14.3-7.2s9.7,9.7,9.1,21.6c-.4,9.9-23.9,11.9-28.6,12.1Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M194,85.9s2-15.8,10.2-18.8,3.5,12.8,3.5,12.8a20.7,20.7,0,0,1,5.7,10.3'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M191.9,85.7c.3-1.8.6-3.4,1-5.1s1-3.3,1.6-4.9a29.2,29.2,0,0,1,2.3-4.7,16.4,16.4,0,0,1,3.7-4.2,14,14,0,0,1,2.6-1.6,8.6,8.6,0,0,1,3.4-.6,6.5,6.5,0,0,1,2.1.7l.8.7.7.9a8.2,8.2,0,0,1,.9,3.2,24.3,24.3,0,0,1-.1,5.4,31,31,0,0,1-1.1,5.1l-.6-2.3a6.3,6.3,0,0,1,1.1,1.3,11.3,11.3,0,0,1,1,1.3,26.9,26.9,0,0,1,1.6,2.9,26.4,26.4,0,0,1,1,3,11.7,11.7,0,0,1,.2,3.2.7.7,0,0,1-.7.7.6.6,0,0,1-.6-.3h-.1a20.1,20.1,0,0,0-1.4-2.5,4.4,4.4,0,0,0-.8-1.1,8.3,8.3,0,0,0-.8-1.2L208,83.4l-.9-1-.9-.8a2.2,2.2,0,0,1-.7-2.1v-.2c.3-1.4.7-3,1-4.5a21.7,21.7,0,0,0,.3-4.3,10.2,10.2,0,0,0-.4-1.5h-.1a.1.1,0,0,1-.1-.1h-.2l-1.4.3a5.4,5.4,0,0,0-1.6,1c-2.1,1.6-3.6,4.3-4.7,7.1a32.2,32.2,0,0,0-1.4,4.4,37.3,37.3,0,0,0-.9,4.6h0a2.1,2.1,0,0,1-2.4,1.8,2.1,2.1,0,0,1-1.8-2.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <rect
            x='85.4'
            y='100.5'
            width='88.5'
            height='97.52'
            rx='44.3'
            fill='#adadad'
          />
          <path
            d='M159.7,204.2H99.4a16.9,16.9,0,0,1-16.9-16.9V118a16.9,16.9,0,0,1,16.9-16.9h60.3A16.9,16.9,0,0,1,176.6,118v69.3A16.9,16.9,0,0,1,159.7,204.2ZM99.4,106.7A11.4,11.4,0,0,0,88.1,118v69.3a11.4,11.4,0,0,0,11.3,11.4h60.3A11.3,11.3,0,0,0,171,187.3V118a11.3,11.3,0,0,0-11.3-11.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M158.4,235s12.4,5.2,12.7,16.8a9.7,9.7,0,0,1-5.2,8.7c-4.2,2.1-10.8,4.4-17.6,2.5a11,11,0,0,1-7.7-8.4,26.1,26.1,0,0,1,1.8-16.9S152.1,231.6,158.4,235Z'
            transform='translate(0.1 -3.5)'
            fill='#3b5ec4'
          />
          <path
            d='M153.6,264a20.5,20.5,0,0,1-5.4-.7,11.3,11.3,0,0,1-8-8.6,26.9,26.9,0,0,1,1.9-17.1h.1c.4-.3,9.9-6.3,16.4-2.8.5.3,12.5,5.6,12.8,17.1a9.9,9.9,0,0,1-5.4,9A28.3,28.3,0,0,1,153.6,264Zm-10.9-26a26.6,26.6,0,0,0-1.8,16.6,10.4,10.4,0,0,0,7.5,8c6.6,1.9,13.1-.3,17.3-2.4a9.1,9.1,0,0,0,5-8.4c-.3-11.2-12.3-16.4-12.4-16.4h0C152.4,232.2,143.6,237.4,142.7,238Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M158.4,235s12.4,5.2,12.7,16.8a9.7,9.7,0,0,1-5.2,8.7c-4.2,2.1-10.8,4.4-17.6,2.5a11,11,0,0,1-7.7-8.4,26.1,26.1,0,0,1,1.8-16.9S152.1,231.6,158.4,235Z'
            transform='translate(0.1 -3.5)'
            fill='#adadad'
          />
          <path
            d='M153.6,264a20.5,20.5,0,0,1-5.4-.7,11.3,11.3,0,0,1-8-8.6,26.9,26.9,0,0,1,1.9-17.1h.1c.4-.3,9.9-6.3,16.4-2.8.5.3,12.5,5.6,12.8,17.1a9.9,9.9,0,0,1-5.4,9A28.3,28.3,0,0,1,153.6,264Zm-10.9-26a26.6,26.6,0,0,0-1.8,16.6,10.4,10.4,0,0,0,7.5,8c6.6,1.9,13.1-.3,17.3-2.4a9.1,9.1,0,0,0,5-8.4c-.3-11.2-12.3-16.4-12.4-16.4h0C152.4,232.2,143.6,237.4,142.7,238Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M147.2,248.8a10.1,10.1,0,0,1,3.1-4.3,11.2,11.2,0,0,1,5.1-2.2,8.8,8.8,0,0,1,2.8-.1l1.4.2,1.3.5a7.2,7.2,0,0,1,2.4,1.4c.4.2.6.6,1,.9l.8,1a18.7,18.7,0,0,1-2.5-.4l-2.4-.3a20.7,20.7,0,0,0-4.3.2,16.6,16.6,0,0,0-4.2,1.2Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.6'>
            <path
              d='M143.3,238.5a8.8,8.8,0,0,1,.5-1.5l-.6.3C143.2,237.7,143.3,238.1,143.3,238.5Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
            <path
              d='M143.1,240.4v-1.9a4.9,4.9,0,0,1-.1-1.2v-.2h.1l.6-.3.8-.4-.3.8a13.1,13.1,0,0,0-.5,1.5Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.6'>
            <path
              d='M170.2,255.7h.1v-.2Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
            <polygon
              points='169.1 252.9 170.3 251.8 171.4 250.8 170.7 252.5 170.4 252.6 169.1 252.9'
              fill='#282828'
            />
          </g>
          <path
            d='M153.6,265.8a19.3,19.3,0,0,1-5.8-.8,13,13,0,0,1-9.3-9.9,28.7,28.7,0,0,1,2.1-18.3,1.8,1.8,0,0,1,.7-.8c.4-.3,10.7-6.8,18.1-2.8,1.3.5,13.4,6.2,13.8,18.5a11.5,11.5,0,0,1-6.4,10.6A28.9,28.9,0,0,1,153.6,265.8Zm-9.5-26.6a24.1,24.1,0,0,0-1.5,15,8.9,8.9,0,0,0,6.3,6.8c6,1.7,12.1-.4,16-2.4a7.2,7.2,0,0,0,4.1-6.7c-.3-10.1-11.3-14.9-11.4-14.9h-.2C153.4,234.7,146.8,237.6,144.1,239.2Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.3'>
            <path
              d='M144.6,257c-.2-7.3,8.4-13.2,15.2-13.4a18.3,18.3,0,0,1,10.2,2.9c-3-7.9-11.6-11.5-11.6-11.5-6.3-3.4-16,2.7-16,2.7a26.1,26.1,0,0,0-1.8,16.9,11,11,0,0,0,4.9,7.1A12.7,12.7,0,0,1,144.6,257Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <path
            d='M100.7,235s-12.3,5.2-12.6,16.8a9.4,9.4,0,0,0,5.1,8.7c4.2,2.1,10.8,4.4,17.6,2.5a11.3,11.3,0,0,0,7.8-8.4,26.2,26.2,0,0,0-1.9-16.9S107.1,231.6,100.7,235Z'
            transform='translate(0.1 -3.5)'
            fill='#3b5ec4'
          />
          <path
            d='M105.5,264a28.3,28.3,0,0,1-12.4-3.2,9.9,9.9,0,0,1-5.4-9c.3-11.5,12.3-16.8,12.8-17.1,6.5-3.5,16,2.5,16.4,2.8h.1a26.2,26.2,0,0,1,1.9,17.1,11.2,11.2,0,0,1-8,8.6A20,20,0,0,1,105.5,264Zm-.3-29.7a9.1,9.1,0,0,0-4.3,1h-.1c-.1,0-12.1,5.2-12.4,16.4a9.3,9.3,0,0,0,5,8.4c4.3,2.1,10.7,4.3,17.3,2.4a10.4,10.4,0,0,0,7.5-8,25.2,25.2,0,0,0-1.8-16.6C115.7,237.5,110.3,234.3,105.2,234.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M100.7,235s-12.3,5.2-12.6,16.8a9.4,9.4,0,0,0,5.1,8.7c4.2,2.1,10.8,4.4,17.6,2.5a11.3,11.3,0,0,0,7.8-8.4,26.2,26.2,0,0,0-1.9-16.9S107.1,231.6,100.7,235Z'
            transform='translate(0.1 -3.5)'
            fill='#3b5ec4'
          />
          <path
            d='M105.5,264a28.3,28.3,0,0,1-12.4-3.2,9.9,9.9,0,0,1-5.4-9c.3-11.5,12.3-16.8,12.8-17.1,6.5-3.5,16,2.5,16.4,2.8h.1a26.2,26.2,0,0,1,1.9,17.1,11.2,11.2,0,0,1-8,8.6A20,20,0,0,1,105.5,264Zm-.3-29.7a9.1,9.1,0,0,0-4.3,1h-.1c-.1,0-12.1,5.2-12.4,16.4a9.3,9.3,0,0,0,5,8.4c4.3,2.1,10.7,4.3,17.3,2.4a10.4,10.4,0,0,0,7.5-8,25.2,25.2,0,0,0-1.8-16.6C115.7,237.5,110.3,234.3,105.2,234.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M100.7,235s-12.3,5.2-12.6,16.8a9.4,9.4,0,0,0,5.1,8.7c4.2,2.1,10.8,4.4,17.6,2.5a11.3,11.3,0,0,0,7.8-8.4,26.2,26.2,0,0,0-1.9-16.9S107.1,231.6,100.7,235Z'
            transform='translate(0.1 -3.5)'
            fill='#adadad'
          />
          <path
            d='M105.5,264a28.3,28.3,0,0,1-12.4-3.2,9.9,9.9,0,0,1-5.4-9c.3-11.5,12.3-16.8,12.8-17.1,6.5-3.5,16,2.5,16.4,2.8h.1a26.2,26.2,0,0,1,1.9,17.1,11.2,11.2,0,0,1-8,8.6A20,20,0,0,1,105.5,264Zm-.3-29.7a9.1,9.1,0,0,0-4.3,1h-.1c-.1,0-12.1,5.2-12.4,16.4a9.3,9.3,0,0,0,5,8.4c4.3,2.1,10.7,4.3,17.3,2.4a10.4,10.4,0,0,0,7.5-8,25.2,25.2,0,0,0-1.8-16.6C115.7,237.5,110.3,234.3,105.2,234.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M112.6,247.9c-1.6-.7-3.1-1.2-4.6-1.7a23.1,23.1,0,0,0-4.3-.8,12.5,12.5,0,0,0-4.3.1l-2.3.5-2.5.6a4.4,4.4,0,0,1,.8-1.1c.3-.4.5-.8.9-1a11.2,11.2,0,0,1,2.2-1.6l1.3-.5,1.4-.4a13.1,13.1,0,0,1,2.8-.1,10.6,10.6,0,0,1,5.2,1.9A8.5,8.5,0,0,1,112.6,247.9Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.6'>
            <path
              d='M115.8,238.5c-.1-.5-.3-1-.4-1.5l.5.3A4.9,4.9,0,0,1,115.8,238.5Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
            <path
              d='M116,240.4l-.5-1.8a8.8,8.8,0,0,0-.5-1.5l-.2-.8.7.4.6.3h.2v.2a4.9,4.9,0,0,0-.1,1.2Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.6'>
            <path
              d='M88.9,255.7h-.1v-.2Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
            <polygon
              points='90.3 252.9 88.9 252.6 89 252.2 88.9 252.6 88.7 252.5 88.5 252.2 88 250.8 90.3 252.9'
              fill='#282828'
            />
          </g>
          <path
            d='M105.5,265.8a28.9,28.9,0,0,1-13.2-3.5A11.3,11.3,0,0,1,86,251.7c.3-12.3,12.5-18,13.8-18.5,7.4-4,17.6,2.5,18,2.8a2,2,0,0,1,.8.8,28.6,28.6,0,0,1,2,18.3,12.9,12.9,0,0,1-9.2,9.9A20.4,20.4,0,0,1,105.5,265.8Zm-4-28.8c-.1,0-11.1,4.8-11.4,14.9a7.6,7.6,0,0,0,4.1,6.7c4,2,10,4.1,16,2.4a8.9,8.9,0,0,0,6.3-6.8,23.9,23.9,0,0,0-1.4-15c-2.8-1.6-9.4-4.5-13.4-2.3Zm-.8-2Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.3'>
            <path
              d='M116.7,237.7s-9.6-6.1-16-2.7c0,0-7.2,4.8-10.9,10.1,5.3-1.4,12.3-3,17,.6,6.2,4.5,7,11.2,3.5,17.4h.5a11.3,11.3,0,0,0,7.8-8.4A26.2,26.2,0,0,0,116.7,237.7Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <path
            d='M86.2,171.4s4.3,17.1-5.9,22.3-18.8-15.8-6.7-28.1S86.2,171.4,86.2,171.4Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M77.1,196.5a9.7,9.7,0,0,1-8-4.5c-5-6.9-5.2-19.5,3.1-27.8,4.2-4.3,7.7-5.8,10.7-4.6,4.7,1.9,5.3,9.8,5.4,11.5s4,18.9-7.1,24.4A8.6,8.6,0,0,1,77.1,196.5Zm3.7-33.1c-1.3,0-3.3,1.4-5.7,3.7-7.4,7.5-6,17.8-2.6,22.4,1.1,1.6,3.5,4,6.8,2.3,8.7-4.4,4.9-19.7,4.9-19.9a.6.6,0,0,1-.1-.4c-.1-2.8-1-7.3-2.7-8Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M81.7,182.6s-2,9,3.5,8.4,8.3-18.2,0-21.3'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M82.4,182.8c.3,1.5.5,2.9.8,4.1a7.7,7.7,0,0,0,.6,1.5l.3.3h1a1.4,1.4,0,0,0,.9-.6,8,8,0,0,0,1.6-3.2,16.3,16.3,0,0,0,.5-7.9,8.6,8.6,0,0,0-1.2-3.4,4.9,4.9,0,0,0-2.4-2.1h-.1a2.1,2.1,0,0,1-1.2-2.7,2.2,2.2,0,0,1,2.8-1.2h0a10.4,10.4,0,0,1,2.5,1.5,9.7,9.7,0,0,1,1.9,2.2,16.5,16.5,0,0,1,1.9,4.9,22.6,22.6,0,0,1-.7,10,14,14,0,0,1-2.4,4.7,6.5,6.5,0,0,1-2.8,2l-1,.2a2.2,2.2,0,0,1-.8,0l-1.9-.3a4.5,4.5,0,0,1-1.7-1.1,14,14,0,0,1-1-1.6,7.7,7.7,0,0,1-.5-2.9,9.7,9.7,0,0,1,1.5-4.8.7.7,0,0,1,1-.3l.4.5Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M94.2,159.3c-7.2,21.1-25.8,25.4-22.4-8.8s20.3-45.7,20.3-45.7,5.3,9.5,10.9,10.5Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M79.6,177.8l-1.6-.2c-3.3-.7-10.6-4.8-8.3-27.3,3.5-34.7,20.5-46.8,21.2-47.3a2.1,2.1,0,0,1,2.9.6,2.1,2.1,0,0,1-.5,2.9h0c-.2.1-16.1,11.6-19.4,44.2-1.6,15.7,1.7,22.1,5,22.8s9.8-4.7,13.3-14.9a2,2,0,0,1,2.6-1.3,2.3,2.3,0,0,1,1.4,2.7C92.5,170.6,85.8,177.8,79.6,177.8Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M170.9,102.5,194,85.9s15,6.2,11.8,16.6-34.9,37.7-34.9,37.7L167,171.9s4.7,39.4-5.7,61.4a11.1,11.1,0,0,1-8.9,6.6,7.6,7.6,0,0,1-7.8-3.8c-5.1-8.1-6-35.8-13.2-49,0,0-4.6,4.5-8.5,23.3s-6.4,31.7-16.8,29.9-17.3-26.6-10.7-66.4c0,0-5-21.2-2.7-38.1,0,0,.5-14.5,5.2-20.5C97.9,115.3,143.3,131.5,170.9,102.5Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M170.5,101.9c1.7-1.6,3.5-3.1,5.4-4.7l5.5-4.5,5.6-4.3,5.7-4.3a2.2,2.2,0,0,1,2.1-.2h0a12.3,12.3,0,0,1,2.3,1.1l2.2,1.2a37.9,37.9,0,0,1,4,3,19.1,19.1,0,0,1,3.3,4.1,11.5,11.5,0,0,1,1.8,5.2,10.6,10.6,0,0,1-.9,5.6,23,23,0,0,1-2.5,4.4,61.8,61.8,0,0,1-5.9,7.4c-4.2,4.7-8.6,9.1-13.1,13.3s-9.1,8.5-13.7,12.6l.7-1.4-3.9,31.8v-.5c.6,5.6.9,11.2,1,16.9a159,159,0,0,1-.5,16.9,96.9,96.9,0,0,1-2.4,16.9l-.5,2.1-.6,2.1-.7,2-.3,1.1-.4,1-.8,2-.4,1-.3.5-.2.6a16.2,16.2,0,0,1-3,3.9,13.4,13.4,0,0,1-9.2,3.4,10.3,10.3,0,0,1-5-1.7,9.9,9.9,0,0,1-3.3-3.8,10.7,10.7,0,0,1-1-2.2,18,18,0,0,1-.8-2.1l-.6-2.1-.6-2.1c-.6-2.8-1.2-5.5-1.7-8.3-1-5.5-2-11-3.2-16.4s-2.6-10.6-5.1-15.2l3.3.4c.1,0,0,.1,0,.1h-.1l-.3.4-.5.7-.9,1.7c-.6,1.2-1.1,2.4-1.6,3.6a64.8,64.8,0,0,0-2.6,7.8c-.7,2.6-1.3,5.3-1.9,7.9l-1.8,8.2c-.6,2.8-1.2,5.5-2,8.3a45.7,45.7,0,0,1-3.1,8.2,16.6,16.6,0,0,1-2.8,3.9,9.3,9.3,0,0,1-4.5,2.6,10.6,10.6,0,0,1-5,.2A10.9,10.9,0,0,1,101,240a15.2,15.2,0,0,1-3.2-3.5c-.8-1.3-1.5-2.6-2.2-4a50.2,50.2,0,0,1-2.7-8.3,88.8,88.8,0,0,1-2.1-17,172.7,172.7,0,0,1,2.5-33.7v.9c-.7-3.3-1.3-6.4-1.8-9.6a79.6,79.6,0,0,1-1.2-19.5,39.5,39.5,0,0,1,1.7-9.6.7.7,0,0,1,.8-.5.6.6,0,0,1,.5.6h0c.2,3.3.3,6.4.6,9.5s.4,6.3.8,9.4.7,6.3,1.1,9.4,1,6.3,1.7,9.3h0v.8A165.3,165.3,0,0,0,95,207.1a78.8,78.8,0,0,0,2,16.1,37.6,37.6,0,0,0,2.5,7.6,17.4,17.4,0,0,0,1.8,3.3,12.5,12.5,0,0,0,2.4,2.7,6.4,6.4,0,0,0,2.7,1.4,6.8,6.8,0,0,0,3.2-.1,4.8,4.8,0,0,0,2.6-1.6,12.7,12.7,0,0,0,2.1-2.9,40.5,40.5,0,0,0,2.8-7.4c.7-2.6,1.4-5.3,2-8l1.7-8.1c.6-2.8,1.2-5.5,2-8.3a64.1,64.1,0,0,1,2.7-8.1,28.7,28.7,0,0,1,1.8-4,19.8,19.8,0,0,1,1.1-2l.6-1a1,1,0,0,0,.4-.5l.2-.2.3-.4h.1a1.9,1.9,0,0,1,2.8,0,1,1,0,0,1,.4.5,37.5,37.5,0,0,1,1.9,4.1l.8,2,.6,2.1a6.6,6.6,0,0,1,.6,2l.6,2.1c.4,1.4.7,2.7,1,4.1,1.3,5.6,2.2,11.1,3.2,16.5.5,2.8,1.1,5.5,1.7,8.1l.5,2,.6,1.9.6,1.9a8,8,0,0,0,.8,1.6,6.5,6.5,0,0,0,2.1,2.5,6.6,6.6,0,0,0,2.8.9,9,9,0,0,0,6.2-2.3,12.1,12.1,0,0,0,2.1-2.8l.2-.4V232l.4-.9.8-1.9.4-.9.3-1,.5-1.9a15.2,15.2,0,0,0,.6-2l.5-2a109.1,109.1,0,0,0,2.4-16.2c.4-5.5.5-11,.4-16.5s-.4-11.1-1-16.6h0v-.5l3.9-31.7a2.1,2.1,0,0,1,.7-1.3h0c4.6-4,9.2-8.2,13.6-12.4s8.8-8.5,12.8-13.1c2-2.3,3.9-4.6,5.6-7a26.4,26.4,0,0,0,2-3.6A8.7,8.7,0,0,0,204,99c-.2-2.3-1.7-4.6-3.8-6.5a28.5,28.5,0,0,0-3.3-2.5,11.8,11.8,0,0,0-1.9-1.1l-1.8-1,2.1-.2-5.9,4c-1.9,1.4-3.9,2.7-5.9,4l-6,3.8-6.2,3.6a.8.8,0,0,1-1-.3A1,1,0,0,1,170.5,101.9Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M152.3,135a85.7,85.7,0,0,1-45.5,0h-.7v23.1l.7.2a85.7,85.7,0,0,0,45.5,0l.7-.2V135Z'
            transform='translate(0.1 -3.5)'
            fill='#adadad'
          />
          <path
            d='M129.6,161.7a88.9,88.9,0,0,1-22.9-3l-.9-.3V134.7h1.1a87.4,87.4,0,0,0,45.4,0h1.1v23.7l-1,.3A87.6,87.6,0,0,1,129.6,161.7Zm-23.1-3.8h.4a87.4,87.4,0,0,0,45.4,0h.4V135.4h-.3a88.1,88.1,0,0,1-45.6,0h-.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M129.6,163.4a87.2,87.2,0,0,1-23.3-3.1,2.9,2.9,0,0,1-2.2-2.9V135a2.1,2.1,0,0,1,2-2.1h1.3a83.6,83.6,0,0,0,44.4,0H153a2.1,2.1,0,0,1,2.1,2.1v22.4a2.9,2.9,0,0,1-2.2,2.9A87.8,87.8,0,0,1,129.6,163.4Zm-21.4-6.9a83.5,83.5,0,0,0,42.7,0V137.6a90.7,90.7,0,0,1-42.7,0Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M115.6,145.4a90.6,90.6,0,0,0,13.8,1h.1a1.7,1.7,0,0,0,1.6-1.7,1.7,1.7,0,0,0-1.8-1.7,83.8,83.8,0,0,1-13.2-1,1.6,1.6,0,0,0-1.9,1.4A1.7,1.7,0,0,0,115.6,145.4Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M166.8,212.4c.2,3-3.1,5.6-7.3,5.9s-7.8-1.9-8-4.9,2.9-6.7,7.1-7S166.6,209.4,166.8,212.4Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M158.8,220.4a10.4,10.4,0,0,1-5.9-1.6,6.6,6.6,0,0,1-3.5-5.3c-.3-4,3.6-8.8,9.1-9.2s10.2,4,10.4,8-3.8,7.7-9.3,8.1Zm.3-11.9h-.3c-3.2.2-5.3,3-5.2,4.8s.9,1.6,1.5,2a7.4,7.4,0,0,0,4.3.9c3.3-.2,5.4-2.1,5.3-3.7S162.1,208.5,159.1,208.5Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M94.2,212.4c-.2,3,3.1,5.6,7.3,5.9s7.8-1.9,8-4.9-2.9-6.7-7.1-7S94.4,209.4,94.2,212.4Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M102.2,220.4h-.8c-5.5-.4-9.6-3.9-9.3-8.1s4.8-8.3,10.4-8,9.4,5.2,9.1,9.2a6.6,6.6,0,0,1-3.5,5.3A10.4,10.4,0,0,1,102.2,220.4Zm-.3-11.9c-3,0-5.5,2.4-5.6,4s2.1,3.5,5.3,3.7a7.4,7.4,0,0,0,4.3-.9c.6-.4,1.5-1,1.5-2s-2-4.6-5.1-4.8Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M77.7,121.1c-1.1,2.6.6,6.3,3.9,8.2s6.9,1.2,8-1.5a8.1,8.1,0,0,0-3.4-9.2C82.9,116.8,78.8,118.4,77.7,121.1Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M85.4,132.4a9.4,9.4,0,0,1-4.8-1.3c-4.2-2.4-6.4-7.2-4.8-10.8a7.3,7.3,0,0,1,4.6-4.1,8.1,8.1,0,0,1,6.8.6c4.3,2.4,5.8,8.3,4.3,11.8a6.1,6.1,0,0,1-3.7,3.5A9.9,9.9,0,0,1,85.4,132.4Zm-2.3-12.5-1.4.3a3.2,3.2,0,0,0-2,1.7c-.7,1.5.4,4.1,3,5.6a4.9,4.9,0,0,0,3.8.6,2.2,2.2,0,0,0,1.2-1.1,5.9,5.9,0,0,0-2.5-6.5A3.7,3.7,0,0,0,83.1,119.9Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.6'>
            <path
              d='M82.8,119.6s-3,.3-3.5,2.4,2.2,5,2.2,5S78.4,121.9,82.8,119.6Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
          </g>
          <circle
            cx='140.8'
            cy='143.9'
            r='2'
            transform='translate(-31.5 244.4) rotate(-76.7)'
            fill='#282828'
          />
          <path
            d='M115.6,153.1a90.6,90.6,0,0,0,13.8,1h.1a1.7,1.7,0,0,0,1.6-1.7,1.8,1.8,0,0,0-1.8-1.8,83.7,83.7,0,0,1-13.2-.9,1.6,1.6,0,0,0-1.9,1.4A1.8,1.8,0,0,0,115.6,153.1Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <circle
            cx='140.8'
            cy='151.6'
            r='2'
            transform='translate(-39 250.3) rotate(-76.7)'
            fill='#282828'
          />
          <g opacity='0.3'>
            <path
              d='M193.9,84.3l-.5.8L176,98.3l-12.9,13.9s15.4-10.4,27.1-15.6c8.4-3.6,12.9-1,14.7.8C202.7,91.4,197.6,86.9,193.9,84.3Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M129.6,121.1c-14.7,0-27.8-5-36.7-12.9,4.5,12.2,19.2,21.2,36.7,21.2s32.1-9,36.6-21.2C157.4,116.1,144.3,121.1,129.6,121.1Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M146.6,137.2s3.7,16.1-10.4,19.1-30.1-2.8-30.1-2.8v3.9s24.6,9.6,46.9.7V135.9Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M92.1,135.9s-2,23-8.4,30.8-9.9,4.9-9.9,4.9-2.4,4.8,1.9,8,9.6-3.8,11.5-1.3,2.1,6.3,2.1,6.3,2.2-9.9-1.3-12.9l4.9-8.5S91.2,139.6,92.1,135.9Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M86.9,119.1s1.9,8.3-5.4,8.2c0,0,4,3.2,7.3.6S88.5,119.5,86.9,119.1Z'
              transform='translate(0.1 -3.5)'
              fill='#44154f'
            />
            <path
              d='M85.9,129.2a8.6,8.6,0,0,1-4.6-1.6l-.8-.7h1a4.6,4.6,0,0,0,4.1-1.6c1.8-2.2,1-6.1.9-6.1v-.6l.6.2c1.1.2,2.8,2.5,3.3,5a4.2,4.2,0,0,1-1.3,4.4A4.8,4.8,0,0,1,85.9,129.2Zm-3.3-1.6c1.3.7,3.8,1.7,5.9,0a3.5,3.5,0,0,0,1.1-3.7,8,8,0,0,0-2.2-4.1c.1,1.3.3,4.1-1.2,6A5.7,5.7,0,0,1,82.6,127.6Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M131.4,187.1s-5.9-2.7-10.6,7.4-4.6,34.6-11.3,39.5-9.6,2.5-9.6,2.5,3.6,7.8,12.7,2S125.2,189.2,131.4,187.1Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M131.9,186.8s8.8-1.7,11.5,7.3,3.5,38.2,8.1,41.5,7.7,1.4,7.7,1.4-7,7-14.6-.9S135.8,191.3,131.9,186.8Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.2'>
            <ellipse
              cx='198.4'
              cy='307.3'
              rx='20.6'
              ry='26.2'
              transform='translate(-143.1 173.1) rotate(-36.2)'
              fill='#fff'
            />
          </g>
          <path
            d='M122.8,183.9l4.6.4,4.3.2a32.7,32.7,0,0,0,4.4-.1l2.2-.2,2.4-.3h0a.8.8,0,0,1,.8.7.7.7,0,0,1-.3.6,12.8,12.8,0,0,1-4.4,2.6,14.8,14.8,0,0,1-5.1.9,12.7,12.7,0,0,1-5.1-.8,11.5,11.5,0,0,1-4.5-2.7.9.9,0,0,1,.1-1.1l.5-.2Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M178.5,36.7s15.2-5.3,16.3,21c0,0,2.8,19.5-10.8,19.6Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M184,79.7a2.4,2.4,0,0,1-2.4-2.1L176.1,37a2.3,2.3,0,0,1,1.6-2.6A13,13,0,0,1,188.8,36c5.1,3.5,8,10.7,8.4,21.5.2,1.3,1.4,12.1-3.8,18.1a11.8,11.8,0,0,1-9.4,4.1Zm-2.8-41,4.9,35.9a6.8,6.8,0,0,0,3.6-2.2c3.3-3.8,3.1-11.7,2.7-14.4v-.2c-.4-9-2.6-15.1-6.3-17.7A7.6,7.6,0,0,0,181.2,38.7Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.2'>
            <path
              d='M191.9,43.6c.2,5.4-.8,15.8-10.2,16.4L184,77.3c13.6-.1,10.8-19.6,10.8-19.6C194.5,51.3,193.4,46.8,191.9,43.6Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <path
            d='M71.4,52S57.8,47.9,59.7,72.5c0,0,1.9,23.7,18,18.4Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M73.3,94.1a12.9,12.9,0,0,1-6.9-2c-7.9-5.3-9.1-18.9-9.1-19.4-.9-10.5.9-17.6,5.3-21.1a11,11,0,0,1,9.5-1.9,2.4,2.4,0,0,1,1.7,1.9l6.3,38.9a2.5,2.5,0,0,1-1.7,2.8A19.2,19.2,0,0,1,73.3,94.1ZM69.2,54.2a5.3,5.3,0,0,0-3.6,1.3c-2,1.7-4.3,6-3.5,16.8.3,3.2,2.1,12.5,7,15.7a7.7,7.7,0,0,0,5.8,1.1Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.2'>
            <path
              d='M59.6,64.8a67.9,67.9,0,0,0,.1,7.7s1.9,23.7,18,18.4L75.4,76.6C65.8,79.2,61.5,71.1,59.6,64.8Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <path
            d='M118.3,6.6s53.2-10.4,65.4,49.5c0,0,8,58.4-50.4,64.6,0,0-51.5,7.8-61-44.5C72.3,76.2,58.4,17.1,118.3,6.6Z'
            transform='translate(0.1 -3.5)'
            fill='#fff'
          />
          <path
            d='M126.3,123.6a67,67,0,0,1-20.7-3.2C92.1,116,75,104.8,69.9,76.7,69.5,74.8,63.8,49,77.7,28,86,15.4,99.5,7.4,117.9,4.2a62.7,62.7,0,0,1,29.3,2.4c14.2,4.6,32.4,16.9,38.9,49.1h.1c.1,1.1,3.5,27.2-12,47-9.1,11.6-22.7,18.4-40.6,20.3A43.5,43.5,0,0,1,126.3,123.6Zm1-115.2a55.6,55.6,0,0,0-8.5.6h0c-17.1,3-29.5,10.3-37.1,21.7-12.8,19.4-7.1,44.7-7.1,44.9h.1c3.7,20.7,14.6,34.2,32.3,40a63.7,63.7,0,0,0,26,2.6h.1c16.5-1.8,29-8,37.2-18.5,13.9-17.6,11.2-41.8,11-43.3-4.8-23.8-16.8-39-35.4-45.2A57.1,57.1,0,0,0,127.3,8.4Zm-9-1.8Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.8'>
            <path
              d='M111.1,115.3a65.1,65.1,0,0,0,22.9,2.9l5.9-1a62.4,62.4,0,0,1-18.4-2.9C103.9,108.4,93,95,89.2,74.3h0c-.1-.3-5.7-25.5,7.1-44.9,6.9-10.5,18.1-17.5,33-20.9a49.9,49.9,0,0,0-5.6.1h-.8c-17,3-29.5,10.3-37,21.7-12.8,19.4-7.2,44.6-7.1,44.9h0C82.6,96,93.4,109.5,111.1,115.3Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M120.5,8.7h0Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M130.8,118.5h.2c16.5-1.8,29-8,37.3-18.5,13.8-17.7,11.1-41.8,11-43.3-4.9-23.8-16.8-39-35.5-45.2a61.7,61.7,0,0,0-23.3-2.8l-1.7.3h0l-3.3.6a55.9,55.9,0,0,1,13,2.7c18.6,6.2,30.6,21.4,35.4,45.3.2,1.4,2.9,25.5-10.9,43.2-7.3,9.3-18,15.2-31.7,17.7a56.7,56.7,0,0,0,11.5-.2Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.3'>
            <path
              d='M132.9,118.3h0Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <path
            d='M82.9,40S125,10.4,166,33.4c0,0,15.2,38.8.8,58.8,0,0-41.5,23.4-72.4,7.6C94.4,99.8,77.5,78.3,82.9,40Z'
            transform='translate(0.1 -3.5)'
            fill='#d3801e'
            stroke='#282828'
            strokeMiterlimit='10'
            strokeWidth='0'
          />
          <line x1='72' y1='63.2' x2='81.7' y2='62.2' fill='#e5f6f9' />
          <path
            d='M71.8,68a1.4,1.4,0,0,1-1.4-1.3,1.5,1.5,0,0,1,1.3-1.5l9.7-.9a1.4,1.4,0,0,1,.3,2.7L72,68Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <line x1='72.7' y1='70.8' x2='82.4' y2='69.8' fill='#e5f6f9' />
          <path
            d='M72.6,75.6a1.4,1.4,0,0,1-1.4-1.2,1.5,1.5,0,0,1,1.2-1.6l9.8-.9a1.4,1.4,0,0,1,1.5,1.2,1.5,1.5,0,0,1-1.3,1.6l-9.7.9Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <line x1='172.6' y1='53.3' x2='182.3' y2='52.3' fill='#e5f6f9' />
          <path
            d='M172.4,58.1a1.4,1.4,0,0,1-1.4-1.2,1.5,1.5,0,0,1,1.3-1.6l9.7-.9a1.3,1.3,0,0,1,1.5,1.2,1.4,1.4,0,0,1-1.2,1.6l-9.7.9Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <line x1='173.3' y1='60.9' x2='183' y2='60' fill='#e5f6f9' />
          <path
            d='M173.2,65.8a1.5,1.5,0,0,1-1.4-1.3A1.3,1.3,0,0,1,173,63l9.8-1a1.4,1.4,0,1,1,.2,2.8l-9.7.9Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M70.8,53.5a2,2,0,0,1-1.3-.4,2.1,2.1,0,0,1-.3-3c.4-.5,10.6-13,29.2-21.1s45.1-12.1,80,7.5a2,2,0,0,1,.8,2.8,2,2,0,0,1-2.8.8c-26.8-15-52.4-17.5-76.1-7.3A79.1,79.1,0,0,0,72.4,52.7,1.8,1.8,0,0,1,70.8,53.5Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M120.8,105.7h-4.1c-20.6-.8-35.9-6.4-36.5-6.7A2.1,2.1,0,0,1,79,96.3a2.2,2.2,0,0,1,2.7-1.2,121.2,121.2,0,0,0,35.3,6.4c26.5.9,48.4-7,65-23.4a2.1,2.1,0,0,1,3,3C168.6,97.3,146.4,105.7,120.8,105.7Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M96.3,103.3a1.6,1.6,0,0,1-1.3-.6c-20.1-23-13.9-59.5-13.6-61a1.8,1.8,0,0,1,2-1.5,1.7,1.7,0,0,1,1.4,2.1c0,.3-6.2,36.4,12.8,58.1a1.6,1.6,0,0,1-.1,2.4A2.1,2.1,0,0,1,96.3,103.3Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <path
            d='M166.8,94l-.8-.2a1.8,1.8,0,0,1-.8-2.4c13.3-25.6-1.2-58.4-1.4-58.8a1.8,1.8,0,0,1,.9-2.3,1.7,1.7,0,0,1,2.3.9c.6,1.4,15.4,34.7,1.3,61.8A1.8,1.8,0,0,1,166.8,94Z'
            transform='translate(0.1 -3.5)'
            fill='#282828'
          />
          <g opacity='0.2'>
            <path
              d='M71.5,48.4l11.6-7.3s-5.3,38.7,11,57.5H80.6S63.3,72.3,71.5,48.4Z'
              transform='translate(0.1 -3.5)'
              fill='#282828'
            />
          </g>
          <g opacity='0.2'>
            <path
              d='M83.3,41S109,29.4,133.7,29.9a23.2,23.2,0,0,1,20.9,32c-7.6,18-24,39.1-59.9,38.2,0,0,59.4,9.2,74.4-9.8,0,0,8.5-40.6-3.7-58.4C165.4,31.9,124.2,11.4,83.3,41Z'
              transform='translate(0.1 -3.5)'
              fill='#2d3368'
              stroke='#282828'
              strokeMiterlimit='10'
              strokeWidth='0'
            />
          </g>
          <g opacity='0.5'>
            <path
              d='M157.7,56.6s-1.4,29.7-28,31.5a20.5,20.5,0,0,0,11.8,1.6A22.1,22.1,0,0,0,157.9,57Z'
              transform='translate(0.1 -3.5)'
              fill='#fff'
            />
          </g>
          <g opacity='0.5'>
            <circle
              cx='112.6'
              cy='48.7'
              r='12.7'
              transform='translate(31.9 137.6) rotate(-72.2)'
              fill='#fff'
            />
          </g>
          <g opacity='0.5'>
            <circle cx='98.7' cy='67.3' r='4.4' fill='#fff' />
          </g>
          <g opacity='0.2'>
            <path
              d='M167.2,34.7l10.6,5.4,6.6,17.5-1.9,22.3L167.7,90.5S177.1,54.2,167.2,34.7Z'
              transform='translate(0.1 -3.5)'
              fill='#2d3368'
              stroke='#282828'
              strokeMiterlimit='10'
              strokeWidth='0'
            />
          </g>
        </svg>
      </a>
      <p className={styles.TextEnd}>Nothing else to show.</p>
    </div>
  );

  if (type == 'loading') {
    return <SpaceAround />;
  }
  if (type == 'finished') return <SvgFinish />;
  else return <SvgError />;
};

export default Spinners;

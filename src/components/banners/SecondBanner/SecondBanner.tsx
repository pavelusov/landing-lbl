'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

import img01 from '/public/banner_01.svg';
import img02 from '/public/banner_02.svg';
import img03 from '/public/banner_03.svg';
import img04 from '/public/banner_04.svg';
import img05 from '/public/banner_05.svg';

import s from './banner.module.scss';

export const SecondBanner = () => {
  return (
    <div className={s.root}>
      <Parallax
        translateX={[-120, -10, 'easeOutBack']}
        translateY={[5, 5, 'easeOutBack']}
        speed={50}
        scale={[0.5, 1]}
        className={s.image01}
      >
        <Image src={img01} />
      </Parallax>
      <Parallax
        translateX={[-110, 0, 'easeOutBack']}
        translateY={[20, 0, 'easeOutBack']}
        speed={50}
        scale={[0.5, 1]}
        className={s.image02}
      >
        <Image src={img02} />
      </Parallax>
      <Parallax
        translateX={[-20, 10, 'easeOutBack']}
        translateY={[15, 5, 'easeOutBack']}
        speed={50}
        scale={[0.5, 1]}
        className={s.image03}
      >
        <Image src={img03} />
      </Parallax>
      <Parallax
        translateX={[110, 20, 'easeOutBack']}
        translateY={[0, 0, 'easeOutBack']}
        speed={50}
        scale={[0.5, 1]}
        className={s.image04}
      >
        <Image src={img04} />
      </Parallax>
      <Parallax
        translateX={[-50, 10, 'easeOutBack']}
        translateY={[5, 0, 'easeOutBack']}
        speed={50}
        scale={[0, 1]}
        className={s.image05}
      >
        <Image src={img05} />
      </Parallax>
      <Parallax
        translateX={[115, 11, 'easeOutBack']}
        translateY={[0, 0]}
        speed={500}
        className={s.rightText}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto autem corporis ipsam iste nulla optio pariatur recusandae voluptates!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto autem corporis ipsam iste nulla optio pariatur recusandae voluptates!</p>
      </Parallax>
    </div>

  );
}
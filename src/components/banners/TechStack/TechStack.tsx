'use client';

import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

import img01 from '/public/banner_01.svg';
import img02 from '/public/banner_02.svg';
import img03 from '/public/banner_03.svg';
import img04 from '/public/banner_04.svg';
import img05 from '/public/banner_05.svg';

import s from './TechStack.module.scss';
import { Typography } from "@mui/material";
import { TechItem } from "@/components/TechItem/TechItem";
import ReactIcon from "/public/react.svg";
import NextJSIcon from "/public/nextjs.svg";
import TypescriptIcon from "/public/typescript.svg";
import CSSIcon from "/public/css-logo.svg";
import CodeIcon from '@mui/icons-material/Code';

export const TechStack = () => {
  return (
    <div className={s.root}>
      <Typography variant="h2" sx={{color: 'white'}} mt={20} mb={6}>
        <CodeIcon sx={{ color: 'rgba(84,84,84,0.87)', fontSize: 50, marginRight: 2 }} />Технический стек
      </Typography>
      <TechItem
        reverse
        icon={<Image src={TypescriptIcon} width={200} height={200} />}
        title="Typescript"
      >
        TypeScript - это JavaScript с синтаксисом для типов. TypeScript - это строго типизированный язык программирования, основанный на JavaScript, предоставляющий вам лучшие инструменты в любом масштабе.
      </TechItem>
      <TechItem
        icon={<Image src={ReactIcon} width={200} height={200} />}
        title="React"
      >
        Библиотека для веб-пользовательских интерфейсов. Создавайте пользовательские интерфейсы из компонентов.
      </TechItem>
      <TechItem
        reverse
        icon={<Image src={NextJSIcon} width={250} height={250} />}
        title="NextJS"
      >
        Next.js это фреймворк React для создания полнофункциональных веб-приложений.
        Компоненты React используются для создания пользовательских интерфейсов и Next.js для дополнительных функций и оптимизации.
      </TechItem>
      <TechItem
        icon={<Image src={CSSIcon} width={200} height={200} />}
        title="Custom CSS"
      >
        Мы создаем стили в соответствии с вашим дизайном.
        Мы также используем css-фреймворк Tailwind.
      </TechItem>
      <div style={{height: 2000}}></div>
    </div>

  );
}
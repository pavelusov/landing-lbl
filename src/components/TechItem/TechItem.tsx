import s from './TechItem.module.scss';
import {Typography} from "@mui/material";
import {FC, JSX} from "react";
import cx from 'clsx';
import {Parallax, useParallax} from "react-scroll-parallax";
import {CSSEffect} from "parallax-controller";

type Props = {
  title: string;
  icon: JSX.Element;
  reverse?: boolean;
  children: string;
}

export const TechItem: FC<Props> = ({ title, children, icon, reverse,  }) => {
  const align = reverse ? "right" : "left"
  const translateXIcon: CSSEffect = reverse ? [70, -50, 'easeOutQuint'] : [-50, 70, 'easeOutQuint']
  const translateX: CSSEffect = reverse ? [-50, 0, 'easeOutQuint'] : [50, 15, 'easeOutQuint']
  const { ref } = useParallax<HTMLDivElement>({
    translateX: translateXIcon,
  });

  const { ref: ref2 } = useParallax<HTMLDivElement>({
    translateX,
  });

  return (
    <div className={cx(s.root, {[s.reverse]: reverse})}>
      <div ref={ref}>
        <div className={s.icon}>
          {icon}
        </div>
      </div>
      <div ref={ref2}>
        <div className={s.container}>
          <Typography variant="h3" sx={{color: 'white'}} mb={2} align={align}>{title}</Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 20, color: '#bfbfbf' }} align={align}>{children}</Typography>
        </div>
      </div>
    </div>
  )
}
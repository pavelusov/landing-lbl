import s from './TechItem.module.scss';
import {Typography} from "@mui/material";
import {FC, JSX} from "react";
import cx from 'clsx';
import { Parallax } from "react-scroll-parallax";

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
  reverse?: boolean;
}

export const TechItem: FC<Props> = ({ title, children, icon, reverse,  }) => {
  const align = reverse ? "right" : "left"
  const translateXIcon = reverse ? [70, -50, 'easeOutQuint'] : [-50, 70, 'easeOutQuint']
  const translateX = reverse ? [-50, 0, 'easeOutQuint'] : [50, 15, 'easeOutQuint']

  return (
    <div className={cx(s.root, {[s.reverse]: reverse})}>
      <Parallax translateX={translateXIcon}>
        <div className={s.icon}>
          {icon}
        </div>
      </Parallax>
      <Parallax translateX={translateX}>
      <div className={s.container}>
        <Typography variant="h3" sx={{color: 'white'}} mb={2} align={align}>{title}</Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20, color: '#bfbfbf' }} align={align}>{children}</Typography>
      </div>
      </Parallax>
    </div>
  )
}
'use client';
import { Card, CardContent, Typography } from "@mui/material";
import { FC, JSX } from "react";
import { Parallax, useParallax} from "react-scroll-parallax";
import { CSSEffect } from "parallax-controller";

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const BasicCard: FC<Props> = ({ title, description, icon }) => {
  const rotate: CSSEffect = [90, 0];
  const { ref } = useParallax<HTMLDivElement>({
    rotateY: rotate,
    easing: 'easeOutCubic',
  });
  return (
    <div ref={ref}>
      <Card sx={{ width: 250, background: 'rgba(13, 13, 13, .25)', borderRadius: 10 }}  >
        <CardContent>
          <div>
            {icon}
          </div>
          <Typography variant="h4" sx={{ color: 'white' }} mt={2} gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: 20, color: '#bfbfbf' }} component="div">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
);
}
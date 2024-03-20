'use client';
import { Card, CardContent, Typography } from "@mui/material";
import { FC, JSX } from "react";
import { Parallax } from "react-scroll-parallax";

type Props = {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const BasicCard: FC<Props> = ({ title, description, icon, speed }) => {
  const rotate = [90, 0, 'easeOutCubic'];
  return (
    <Parallax rotateY={rotate}>
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
    </Parallax>
);
}
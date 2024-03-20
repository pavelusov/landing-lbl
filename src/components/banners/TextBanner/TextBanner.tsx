'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import PaidIcon from '@mui/icons-material/Paid';
import s from './banner.module.scss';
import {Typography} from "@mui/material";
import {Parallax} from "react-scroll-parallax";

export const TextBanner = () => {
  return (
    <div className={s.root}>
      <div className="my-48">
        <div className="my-20">
          <Parallax translateX={[-30,70]}>
            <FavoriteIcon sx={{ color: 'red', fontSize: 100 }}/>
          </Parallax>
          <Typography variant="h1" sx={{ fontWeight: 'bold', fontSize: 110, color: "white" }} gutterBottom>
            Мы приводим клиентов <AddReactionIcon sx={{ color: 'yellow', fontSize: 100 }} /> и увеличиваем Вашу прибыль <PaidIcon sx={{ color: 'green', fontSize: 100 }} />
          </Typography>
        </div>
        <Typography variant="subtitle1" sx={{ color: "#bfbfbf", fontWeight: 'light', fontSize: 23 }} gutterBottom>
          Мы предоставляем услуги по дизайну, разработке приложений и чат-ботов с искусственным интелектом для каждого этапа вашего проекта.
        </Typography>
      </div>
    </div>

  );
}
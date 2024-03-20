'use client';

import { ParallaxBanner } from 'react-scroll-parallax';

export const MainBanner = () => {
  return (
    <ParallaxBanner
      expanded={true}
      layers={[
        { image: '/main_banner_bg.svg', speed: 0 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex items-center justify-center translate-x-9">
              <h1
                className="-translate-y-56 text-8xl text-white font-bold text-cyan-500 drop-shadow-[0_0_20px_rgba(0,0,0,1)]"
              >Line By Line</h1>
            </div>
          ),
        },
        { image: '/main_banner_fg.svg', speed: 20, scale: [-2, 1, 'easeOutCubic'] },
      ]}
      className="aspect-[2/1]"
      scale={[0, 5, 'easeOutCubic']}
    />
  );
}
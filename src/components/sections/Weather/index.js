import { useState, useEffect } from 'react';

import * as S from './styled';

export const Weather = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screen, setScreen] = useState('');

  const getScreen = () => {
    setScreen(document.documentElement.clientWidth);
  }

  window.addEventListener('resize', () => {
    getScreen();
  });

  useEffect(() => {
    if(screen <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screen]);
  
  useEffect(() => {
    getScreen();
    if(screen <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <S.Container>
      {
        isMobile ?
        <iframe src="https://www.meteoblue.com/pt/weather/widget/daily/capão-da-canoa_brazil_3467362?geoloc=fixed&days=5&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=monochrome&pictoicon=icon&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=dark" 
          frameborder="0"
          scrolling="NO"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
          style={{width: "300px", height: "420px"}}>
        </iframe>
      :
        <iframe src="https://www.meteoblue.com/pt/weather/widget/three/capão-da-canoa_brazil_3467362?geoloc=fixed&nocurrent=0&nocurrent=1&noforecast=0&days=5&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=dark" 
          title="Clima"
          scrolling="NO"
          sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox">
        </iframe>

      }

      
    </S.Container>
  )
}
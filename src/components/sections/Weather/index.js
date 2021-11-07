import * as S from './styled';

export const Weather = () => {
  return (
    <S.Container>
      <iframe src="https://www.meteoblue.com/pt/weather/widget/three/capão-da-canoa_brazil_3467362?geoloc=fixed&nocurrent=0&nocurrent=1&noforecast=0&days=5&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=dark" 
        title="Clima"
        scrolling="NO"
        sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox">
      </iframe>
    </S.Container>
  )
}
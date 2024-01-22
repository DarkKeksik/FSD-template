import { FC } from "react"

import { RainComponent } from "@/entities"
import { LiningBg, WrapPageContent, Button } from "@/shared"
import * as Styled from "./CryptoWeathers.styled"
import cryptoHouseImg from "./cryptoHouse.png"

const CryptoWeathers: FC = () => {
  return (
    <WrapPageContent bgColor="linear-gradient(rgba(253, 119, 163, 1), rgba(16, 24, 32, 1))">
      <Styled.WrapCryptoWeathers>
        <Styled.WrapDescription>
          <Styled.Title>
            Cryptocurrency sentiment analytics
          </Styled.Title>
          <Styled.DescriptionCryptoWeather>
            The service allows you to&nbsp;analyze a
            cryptocurrency unit based on&nbsp;news sentiment
            from different sources and visually display
            sentiment in&nbsp;weather equivalent, try
            it&nbsp;for free!
          </Styled.DescriptionCryptoWeather>
          <Button>Try to free!</Button>
        </Styled.WrapDescription>
        <LiningBg source={cryptoHouseImg}>
          <Styled.AlignRight>
            <Styled.PanelMood>
              <Styled.PanelMoodItem>
                BTC
              </Styled.PanelMoodItem>
              <Styled.PanelMoodItem>
                Negative
              </Styled.PanelMoodItem>
              <Styled.PanelMoodItem>
                7 days
              </Styled.PanelMoodItem>
            </Styled.PanelMood>
          </Styled.AlignRight>
          <RainComponent />
        </LiningBg>
      </Styled.WrapCryptoWeathers>
    </WrapPageContent>
  )
}

export default CryptoWeathers
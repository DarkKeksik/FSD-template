import { type FC } from "react"

import { Icons } from "@/shared"
import * as Styled from "./Logo.styled"

type TLogo = {
  isShort?: boolean
}

const Logo: FC<TLogo> = ({ isShort = false }) => {
  return (
    <Styled.WrapLogo>
      <Icons.IconPickaxe />
      {!isShort && <Styled.Title>cryptonews</Styled.Title>}
    </Styled.WrapLogo>
  )
}

export default Logo

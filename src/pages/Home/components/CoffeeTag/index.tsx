import { CoffeeTagContainer } from "./styles";

interface CoffeeTagProps{
  tag: string
}

export function CoffeeTag({tag}: CoffeeTagProps) {
  return (
    <CoffeeTagContainer>
      <span className="tag">{tag.toUpperCase()}</span>
    </CoffeeTagContainer>
  )
}
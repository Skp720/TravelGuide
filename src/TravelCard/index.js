import {Card, CardImg, CardHead, CardPara} from './styledComponents'

const TravelCard = props => {
  const {data} = props
  const {description, imgUrl, name} = data
  return (
    <Card>
      <CardImg src={imgUrl} alt={name} />
      <CardHead>{name}</CardHead>
      <CardPara>{description}</CardPara>
    </Card>
  )
}

export default TravelCard

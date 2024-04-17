import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {MainContainer, MainHead, CardContainer} from './styledComponents'
import TravelCard from '../TravelCard'

const urlStatusConst = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class MainPage extends Component {
  state = {urlStatus: urlStatusConst.initial, data: []}

  componentDidMount() {
    this.apiUrlPackages()
  }

  apiUrlPackages = async () => {
    this.setState({urlStatus: urlStatusConst.inProgress})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.status === 200) {
      const finalData = data.packages.map(eachData => ({
        description: eachData.description,
        id: eachData.id,
        imgUrl: eachData.image_url,
        name: eachData.name,
      }))

      this.setState({urlStatus: urlStatusConst.success, data: finalData})
    } else {
      this.setState({urlStatus: urlStatusConst.inProgress})
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderSuccessView = () => {
    const {data} = this.state
    return (
      <CardContainer>
        {data.map(eachData => (
          <TravelCard data={eachData} key={eachData.id} />
        ))}
      </CardContainer>
    )
  }

  renderView = () => {
    const {urlStatus} = this.state

    switch (urlStatus) {
      case urlStatusConst.success:
        return this.renderSuccessView()
      case urlStatusConst.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <MainContainer>
        <MainHead>Travel Guide</MainHead>
        {this.renderView()}
      </MainContainer>
    )
  }
}

export default MainPage

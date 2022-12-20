import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onLeftArrClick = firstIndex => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > firstIndex) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    } else if (activeReviewIndex === firstIndex) {
      this.setState({activeReviewIndex: firstIndex})
    }
  }

  onRightArrClick = lastIndex => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < lastIndex) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    } else if (activeReviewIndex === lastIndex) {
      this.setState({activeReviewIndex: lastIndex})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const reviewObj = reviewsList[activeReviewIndex]

    const lastIndex = reviewsList.length() - 1
    const firstIndex = 0

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="outer-container">
          <button
            className="left-arr-btn btn"
            onClick={this.onLeftArrClick}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>

          <ul className="main-content-container">
            <PersonItem personDetails={reviewObj} />
          </ul>

          <button
            className="right-arr-btn btn"
            type="button"
            onClick={this.onRightArrClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

const PersonItem = props => {
  const {personDetails} = props
  const {imgUrl, username, companyName, description} = personDetails

  return (
    <li className="list-item-container">
      <div className="profile-img-container">
        <img src={imgUrl} alt={username} className="profile-img" />
      </div>
      <p className="user-name">{username}</p>
      <p className="company-name">{companyName}</p>
      <p className="description">{description}</p>
    </li>
  )
}

export default ReviewsCarousel

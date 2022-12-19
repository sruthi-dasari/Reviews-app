import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    username: '',
  }

  onClickLeftArr = () => {}

  render() {
    const {reviewsList} = this.props

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="outer-container">
          <button
            className="left-arr-btn btn"
            onClick={this.onClickLeftArr}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>

          <ul className="main-content-container">
            {reviewsList.map(eachObj => (
              <PersonItem personDetails={eachObj} />
            ))}
          </ul>
          <button className="right-arr-btn btn" type="button">
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

import {Component} from 'react'

class Feedback extends Component {

    state={feedBackSelected:false}




    onChangeEmoji=()=>{
        this.setState({feedBackSelected:true})
    


     


  renderFeedback=() =>{

    const {resources}=this.props

    const{emojis}=resources



    return (
      <div className="bg-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onChangeEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className={'emoji'}
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }




  renderThankYou=()=>{
      const {resources}=this.props
      const {loveEmoji}=resources



      return(
          <div className="thankyou">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji"/>
              <h1 className="heading">Thank you!</h1>
              <p className="para">
                  We will use your feedback to improve our customer support performance.
              </p>
          </div>
      )
  }



  render() {
      const {feedBackSelected}=this.state


      return(
          <div className="container">
              <div className="card">
                  {feedBackSelected? this.renderThankYou() : this.renderFeedback()}
              </div>
          </div>
      )
  }






}
export default Feedback

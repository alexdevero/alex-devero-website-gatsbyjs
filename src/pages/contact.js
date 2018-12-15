import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import $ from 'jquery'
import Recaptcha from 'react-recaptcha'

import Layout from '../components/layout'
import SEO from '../components/seo'

class ContactPage extends React.Component {
  state = {
    formEmail: '',
    formMessage: '',
    formName: '',
    formNewsletter: false,
    isCaptchaValid: false,
    isErrorShown: false,
    isFormSubmitted: false,
    isFormValid: false
  }

  handleInputChange = event => {
    if (event.target.value.length > 0 && event.target.name !== 'formEmail') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    if (event.target.name === 'formEmail') {
      /* eslint-disable */
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      /* eslint-enable */

      if (re.test(String(event.target.value).toLowerCase())) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }
  }

  handleCheckboxClick = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  // Show message in console when reCaptcha plugin is loaded
  onCaptchaLoad = () => {
    console.log('Captcha loaded')
  }

  // Update state after reCaptcha validates visitor
  onCaptchaVerify = (response) => {
    this.setState({
      isCaptchaValid: true
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    if (this.state.formEmail.length > 0 && this.state.formName.length > 0 && this.state.formMessage.length > 0 && this.state.isCaptchaValid) {
      this.setState({
        isErrorShown: false,
        isFormValid: true
      })

      setTimeout(() => {
        $.ajax({
          data: this.state,
          type: 'POST',
          url: withPrefix('/contact.php'),
          success: function(data) {
            console.info(data)
          },
          error: function(xhr, status, err) {
            console.error(status, err.toString())
          }
        })

        console.log(this.state)

        // Reset state after sending the form
        this.setState({
          formEmail: '',
          formMessage: '',
          formName: '',
          formNewsletter: false,
          isCaptchaValid: false,
          isErrorShown: false,
          isFormSubmitted: true,
          isFormValid: false
        })
      }, 1000)
    } else {
      this.setState({
        isErrorShown: true
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          {/* <!-- reCaptcha API --> */}
          <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
        </Helmet>

        <Layout>
          <SEO title="Contact" keywords={['contact', 'design', 'web design', 'entrepreneur', 'founder', 'ceo']} />

          <div className="hero">
            <h1>Let's get in touch</h1>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p>Do you have some project you want to realize? Please, contact me via the form below. I will reply in 3 days. {/*You can also <a href="#">click here</a> to reveal QR code and scan it. It contains my contact information.*/}</p>

                <form action="">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <label htmlFor="formName">Full name</label>

                        <input onChange={this.handleInputChange} type="text" name="formName" id="formName" required={true} />
                      </fieldset>
                    </div>

                    <div className="col-md-6">
                      <fieldset>
                        <label htmlFor="formEmail">Email address</label>

                        <input onChange={this.handleInputChange} type="email" name="formEmail" id="formEmail" required={true} />
                      </fieldset>
                    </div>
                  </div>

                  <fieldset>
                    <label>Your message</label>

                    <textarea onChange={this.handleInputChange} name="formMessage" id="formMessage" required={true} />
                  </fieldset>

                  <fieldset>
                    <label htmlFor="formNewsletter">
                      <input className="styled-checkbox" onClick={this.handleCheckboxClick} type="checkbox" name="formNewsletter" id="formNewsletter" defaultChecked={false} />

                      <span>Yes, I want to be informed about new tech, design & business articles.</span>
                    </label>
                  </fieldset>

                  <fieldset>
                    <Recaptcha
                      onloadCallback={this.onCaptchaLoad}
                      sitekey="6Ldt6RgUAAAAAKtaxY2787y3S7uP5Wp9kzL0PMMg"
                      render="explicit"
                      verifyCallback={this.onCaptchaVerify}
                    />
                  </fieldset>

                  {this.state.isFormSubmitted && (
                    <fieldset>
                      <p>Your message is on the way. I will reply in three days.</p>
                    </fieldset>
                  )}

                  {this.state.isErrorShown && (
                    <fieldset>
                      <p>Please, make sure to fill all fields.</p>
                    </fieldset>
                  )}

                  <fieldset>
                    <button onClick={this.handleFormSubmit} className="btn">
                      Send
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

export default ContactPage

import React from 'react'
import ajax from 'ajax-query'
import { withPrefix } from 'gatsby'

import Layout from '../components/layout'

class ContactPage extends React.Component {
  state = {
    formEmail: '',
    formMessage: '',
    formName: '',
    formNewsletter: false,
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

  handleFormSubmit = event => {
    event.preventDefault()

    if (this.state.formEmail.length > 0 && this.state.formName.length > 0) {
      this.setState({
        isFormValid: true
      })

      setTimeout(() => {
        // $.ajax({
        //   data: this.state,
        //   type: 'POST',
        //   url: withPrefix('/contact.php'),
        //   success: function(data) {
        //     console.info(data)
        //   },
        //   error: function(xhr, status, err) {
        //     console.error(status, err.toString())
        //   }
        // })

        const callback = function() {
          console.info(this)
        }

        ajax.ajaxRequest(
          {
            data: this.state,
            type: 'POST',
            url: withPrefix('/contact.php'),
            success: function(data) {
              console.info(data)
            },
            error: function(xhr, status, err) {
              console.error(status, err.toString())
            }
          },
          callback
        )

        console.log(this.state)

        this.setState({
          formEmail: '',
          formMessage: '',
          formName: '',
          formNewsletter: false,
          isFormSubmitted: true,
          isFormValid: false
        })
      }, 1000)
    }
  }

  render() {
    return (
      <Layout>
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

                  <textarea onChange={this.handleInputChange} name="formMessage" id="formMessage" />
                </fieldset>

                <fieldset>
                  <label htmlFor="formNewsletter">
                    <input className="styled-checkbox" onClick={this.handleCheckboxClick} type="checkbox" name="formNewsletter" id="formNewsletter" defaultChecked={false} />

                    <span>Yes, I want to be informed about new tech, design & business articles.</span>
                  </label>
                </fieldset>

                {this.state.isFormSubmitted && (
                  <fieldset>
                    <p>Your message is on the way. I will reply in three days.</p>
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
    )
  }
}

export default ContactPage

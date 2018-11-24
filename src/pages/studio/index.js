import React from 'react'

import Layout from '../../components/layout'

class DeveroStudio extends React.Component {
  state = {
    formAdditionalMessage: '',
    formEmail: '',
    formName: '',
    formNewsletter: false,
    checkboxApp: false,
    checkboxConsultation: false,
    checkboxDesign: false,
    checkboxElse: false,
    checkboxFrontBack: false,
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

      this.setState({
        formAdditionalMessage: '',
        formEmail: '',
        formName: '',
        formNewsletter: false,
        checkboxApp: false,
        checkboxConsultation: false,
        checkboxDesign: false,
        checkboxElse: false,
        checkboxFrontBack: false,
        isFormSubmitted: true,
        isFormValid: false
      })

      console.log(this.state)
    }
  }

  render() {
    return (
      <Layout>
        <section className="studio--benefits">
          <h1>Design + Development + Management</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </section>

        <button>What we do</button>

        <section className="studio--benefits">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">1</div>

              <div className="col-md-6 col-lg-4">2</div>

              <div className="col-md-6 col-lg-4">3</div>

              <div className="col-md-6 col-lg-4">4</div>

              <div className="col-md-6 col-lg-4">5</div>
            </div>
          </div>
        </section>

        <section className="studio--split">
          <div className="container">
            <div className="row">
              <div className="col-md-6">Content</div>

              <div className="col-md-6">image</div>
            </div>
          </div>
        </section>

        <div className="studio--testimonial">
          <div className="container">
            <blockquote>
              <p>Testimonial</p>
            </blockquote>

            <cite>&mdash;Author</cite>
          </div>
        </div>

        <section className="studio--split">
          <div className="container">
            <div className="row">
              <div className="col-md-6">Content</div>

              <div className="col-md-6">image</div>
            </div>
          </div>
        </section>

        <div className="studio--testimonial">
          <div className="container">
            <blockquote>
              <p>Testimonial</p>
            </blockquote>

            <cite>&mdash;Author</cite>
          </div>
        </div>

        <section className="studio--split">
          <div className="container">
            <div className="row">
              <div className="col-md-6">Content</div>

              <div className="col-md-6">image</div>
            </div>
          </div>
        </section>

        <div className="studio--testimonial">
          <div className="container">
            <blockquote>
              <p>Testimonial</p>
            </blockquote>

            <cite>&mdash;Author</cite>
          </div>
        </div>

        <section className="studio--contact">
          <form action="">
            <fieldset>
              <label htmlFor="formName">Full name</label>

              <input onChange={this.handleInputChange} type="text" name="formName" id="formName" required={true} />
            </fieldset>

            <fieldset>
              <label htmlFor="formEmail">Email address</label>

              <input onChange={this.handleInputChange} type="email" name="formEmail" id="formEmail" required={true} />
            </fieldset>

            <h2>What are you interested in?</h2>

            <div className="row">
              <div className="col-md-6">
                <fieldset>
                  <label htmlFor="checkboxFrontBack">
                    <input onClick={this.handleCheckboxClick} type="checkbox" name="checkboxFrontBack" id="checkboxFrontBack" />

                    <span>Frontend / Backend</span>
                  </label>
                </fieldset>
              </div>

              <div className="col-md-6">
                <fieldset>
                  <label htmlFor="checkboxDesign">
                    <input onClick={this.handleCheckboxClick} type="checkbox" name="checkboxDesign" id="checkboxDesign" />

                    <span>Design</span>
                  </label>
                </fieldset>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <fieldset>
                  <label htmlFor="checkboxApp">
                    <input onClick={this.handleCheckboxClick} type="checkbox" name="checkboxApp" id="checkboxApp" />

                    <span>App</span>
                  </label>
                </fieldset>
              </div>

              <div className="col-md-6">
                <fieldset>
                  <label htmlFor="checkboxConsultation">
                    <input onClick={this.handleCheckboxClick} type="checkbox" name="checkboxConsultation" id="checkboxConsultation" />

                    <span>Consultation</span>
                  </label>
                </fieldset>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <fieldset>
                  <label htmlFor="checkboxElse">
                    <input onClick={this.handleCheckboxClick} type="checkbox" name="checkboxElse" id="checkboxElse" />

                    <span>Something Else</span>
                  </label>
                </fieldset>
              </div>
            </div>

            <h2>Want to add something?</h2>

            <textarea onChange={this.handleInputChange} name="formAdditionalMessage" id="formAdditionalMessage" />

            <fieldset>
              <label htmlFor="formNewsletter">
                <input onClick={this.handleCheckboxClick} type="checkbox" name="formNewsletter" id="formNewsletter" />

                <span>Yes, I want to be informed about new tech, design & business articles.</span>
              </label>
            </fieldset>

            {this.state.isFormSubmitted && (
              <fieldset>
                <p>Your message is on the way. I will reply in three days.</p>
              </fieldset>
            )}

            <fieldset>
              <button onClick={this.handleFormSubmit}>Send</button>
            </fieldset>
          </form>
        </section>
      </Layout>
    )
  }
}

export default DeveroStudio
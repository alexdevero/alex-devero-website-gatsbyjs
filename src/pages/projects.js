import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = () => (
  <Layout page="projects">
    <SEO title="Projects" keywords={['projects', 'design', 'web design', 'entrepreneur', 'founder', 'ceo']} />

    <div className="hero">
      <h1>Projects</h1>
    </div>

    <div className="projects__header container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p>
            Welcome to my personal laboratory. These are some of my experiments. Code for most of them is on my <a href="https://github.com/alexdevero">GitHub</a>.
          </p>

          <h2 className="projects__wip">Work in progress</h2>
        </div>
      </div>

      <div className="projects__dashboard row">
        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>1</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>2</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>3</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>4</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>5</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>6</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>7</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>8</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>

        <div className="col-md-6 col-lg-4">
          <button className="project__container" href="#">
            <div className="project__header">
              <img className="project__thumbnail" src="" alt="" />
            </div>

            <div className="project__body">
              <span className="project__number">
                No.<span>9</span>
              </span>

              <h2 className="project__heading h5">Project heading</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectsPage

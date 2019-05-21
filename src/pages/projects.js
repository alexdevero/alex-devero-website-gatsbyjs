import React from 'react'
import { Link } from 'gatsby'
import ImageZoom from 'react-medium-image-zoom'

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
        </div>
      </div>

      <div className="projects__dashboard row">
        <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/thumbnail-tesla-web-design-concept.jpg'),
                  alt: 'Tesla web design concept',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/thumbnail-tesla-web-design-concept.jpg'),
                  alt: 'Tesla web design concept'
                }}
              />
            </div>

            <div className="project__body">
              <Link to="/projects/" className="project__link">
                <span className="project__number">
                  No.<span>1</span>
                </span>

                <h5 className="project__heading h5">Tesla web design concept</h5>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/thumbnail-harley-davidson.jpg'),
                  alt: 'Harley Davidson web design concept',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/thumbnail-harley-davidson.jpg'),
                  alt: 'Harley Davidson web design concept'
                }}
              />
            </div>

            <div className="project__body">
              <Link to="/projects/" className="project__link">
                <span className="project__number">
                  No.<span>2</span>
                </span>

                <h5 className="project__heading h5">Harley Davidson web design concept</h5>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/thumbnail-ceska-whisky.jpg'),
                  alt: 'Ceska Whisky web design concept',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/thumbnail-ceska-whisky.jpg'),
                  alt: 'Ceska Whisky web design concept'
                }}
              />
            </div>

            <div className="project__body">
              <Link to="/projects/" className="project__link">
                <span className="project__number">
                  No.<span>3</span>
                </span>

                <h5 className="project__heading h5">Ceska Whisky web design concept</h5>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/'),
                  alt: '',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/'),
                  alt: ''
                }}
              />
            </div>

            <div className="project__body">
              <Link to="" className="project__link">
                <span className="project__number">
                  No.<span>4</span>
                </span>

                <h5 className="project__heading h5">Project heading</h5>
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/'),
                  alt: '',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/'),
                  alt: ''
                }}
              />
            </div>

            <div className="project__body">
              <Link to="" className="project__link">
                <span className="project__number">
                  No.<span>5</span>
                </span>

                <h5 className="project__heading h5">Project heading</h5>
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/'),
                  alt: '',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/'),
                  alt: ''
                }}
              />
            </div>

            <div className="project__body">
              <Link to="" className="project__link">
                <span className="project__number">
                  No.<span>6</span>
                </span>

                <h5 className="project__heading h5">Project heading</h5>
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/'),
                  alt: '',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/'),
                  alt: ''
                }}
              />
            </div>

            <div className="project__body">
              <Link to="" className="project__link">
                <span className="project__number">
                  No.<span>7</span>
                </span>

                <h5 className="project__heading h5">Project heading</h5>
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/'),
                  alt: '',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/'),
                  alt: ''
                }}
              />
            </div>

            <div className="project__body">
              <Link to="" className="project__link">
                <span className="project__number">
                  No.<span>8</span>
                </span>

                <h5 className="project__heading h5">Project heading</h5>
              </Link>
            </div>
          </div>
        </div> */}

        {/* <div className="col-md-6 col-lg-4">
          <div className="project__container" to="#">
            <div className="project__header">
              <ImageZoom
                image={{
                  src: require('./../images/thumbnails/'),
                  alt: '',
                  className: 'project__thumbnail'
                }}
                zoomImage={{
                  src: require('./../images/thumbnails/'),
                  alt: ''
                }}
              />
            </div>

            <div className="project__body">
              <Link to="" className="project__link">
                <span className="project__number">
                  No.<span>9</span>
                </span>

                <h5 className="project__heading h5">Project heading</h5>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </Layout>
)

export default ProjectsPage

import React from 'react'
import { Link } from 'gatsby'
import GitHub from 'github-api'
import ImageZoom from 'react-medium-image-zoom'

import { githubCredentials } from './../_credentials/credentials.github.js'

import Layout from '../components/layout'
import SEO from '../components/seo'


const gh = new GitHub({
  username: githubCredentials.username,
  password: githubCredentials.password,
  token: githubCredentials.token
})

const alexData = gh.getUser('alexdevero')

class ProjectsPage extends React.Component {
  state = {
    areGithubDataReady: false,
    githubData: null
  }

  fetchGithubRepository = () => {
    alexData.listRepos({sort: 'pushed', since: ''}, async (err, repositories) => {
      // List all repositories
      // docs: http://github-tools.github.io/github/
      await Promise.all(repositories.map(async (repository) => {
        const repositoryName = await repository.name
        const repositoryDescription = await repository.description
        const repositoryId = await repository.id
        const repositoryIsFork = await repository.fork
        const repositoryLanguage = await repository.language
        const repositoryURL = await repository.html_url

        return {
          'name': repositoryName,
          'description': repositoryDescription,
          'id': repositoryId,
          'isFork': repositoryIsFork,
          'language': repositoryLanguage,
          'url': repositoryURL
        }
      })).then((data) => {
        this.setState({
          areGithubDataReady: true,
          githubData: data.filter(project => project.isFork === false ? 1 : 0)
        })
      })
    })
  }

  componentDidMount() {
    this.fetchGithubRepository()
  }

  render() {
    return(
      <Layout page="projects">
        <SEO title="Projects" keywords={['projects', 'design', 'web design', 'entrepreneur', 'founder', 'ceo']} />

        <div className="hero">
          <h1>Projects</h1>
        </div>

        <div className="projects__header container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p>Welcome to my personal laboratory.</p>

              <p>These are my latest experiments you can find on my <a href="https://github.com/alexdevero">GitHub</a>:</p>
            </div>
          </div>

          {!this.state.areGithubDataReady && <ul className="loader">
            <li className="loader__center"></li>
            <li className="loader__item loader__item-1"></li>
            <li className="loader__item loader__item-2"></li>
            <li className="loader__item loader__item-3"></li>
            <li className="loader__item loader__item-4"></li>
            <li className="loader__item loader__item-5"></li>
            <li className="loader__item loader__item-6"></li>
            <li className="loader__item loader__item-7"></li>
            <li className="loader__item loader__item-8"></li>
          </ul>}

          {this.state.areGithubDataReady && <ul className="projects__github-list list--unstyled mt-1">
            {this.state.githubData !== null && this.state.githubData.map((repository, index) => {
              return <li key={repository.id}>No.{index < 10 ? `0${index}` : index}: <a className="link--red" href={repository.url} rel="noopener noreferrer" target="_blank">{repository.name} {repository.language !== null && `(${repository.language})`}</a></li>
            })}
          </ul>}

          <div className="row justify-content-center mt-3">
            <div className="col-lg-8">
              <p>Are these are some examples of my design work:</p>
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
  }
}

export default ProjectsPage

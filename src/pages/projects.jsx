import React from 'react'
import { Link } from 'gatsby'
import GitHub from 'github-api'
import ImageZoom from 'react-medium-image-zoom'

import { githubCredentials } from '../_credentials/credentials.github.js'

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

        <div className="projects__dashboard container">
          <p className="mb-3 text--center">Featured examples of my design & development work:</p>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="project__container" to="#">
                <div className="project__header">
                  <ImageZoom
                    image={{
                      src: require('./../images/thumbnails/thumbnail-supernova@1x.jpg'),
                      alt: 'Supernova',
                      className: 'project__thumbnail'
                    }}
                    zoomImage={{
                      src: require('./../images/thumbnails/thumbnail-supernova@2x.jpg'),
                      alt: 'Supernova'
                    }}
                  />
                </div>

                <div className="project__body">
                  <div className="project__link">
                    <span className="project__number">
                      No.<span>1</span>
                    </span>

                    <h5 className="project__heading h5">Supernova</h5>

                    <a href="https://www.supernova.io" className="project__link" target="_blank" rel="noopener noreferrer"><span class="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 16 }} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project__container" to="#">
                <div className="project__header">
                  <ImageZoom
                    image={{
                      src: require('./../images/thumbnails/thumbnail-fresh-tasty@1x.jpg'),
                      alt: 'Fresh & Tasty',
                      className: 'project__thumbnail'
                    }}
                    zoomImage={{
                      src: require('./../images/thumbnails/thumbnail-fresh-tasty@2x.jpg'),
                      alt: 'Fresh & Tasty'
                    }}
                  />
                </div>

                <div className="project__body">
                  <div className="project__link">
                    <span className="project__number">
                      No.<span>2</span>
                    </span>

                    <h5 className="project__heading h5">Fresh & Tasty</h5>

                    <a href="https://www.freshandtasty.cz" className="project__link" target="_blank" rel="noopener noreferrer"><span class="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 16 }} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project__container" to="#">
                <div className="project__header">
                  <ImageZoom
                    image={{
                      src: require('./../images/thumbnails/thumbnail-slavnosti-ruzoveho-vina@1x.jpg'),
                      alt: 'Slavnosti růžového vína',
                      className: 'project__thumbnail'
                    }}
                    zoomImage={{
                      src: require('./../images/thumbnails/thumbnail-slavnosti-ruzoveho-vina@2x.jpg'),
                      alt: 'Slavnosti růžového vína'
                    }}
                  />
                </div>

                <div className="project__body">
                  <div className="project__link">
                    <span className="project__number">
                      No.<span>3</span>
                    </span>

                    <h5 className="project__heading h5">Slavnosti růžového vína</h5>

                    <a href="https://www.slavnostiruzovehovina.cz" className="project__link" target="_blank" rel="noopener noreferrer"><span class="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 16 }} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project__container" to="#">
                <div className="project__header">
                  <ImageZoom
                    image={{
                      src: require('./../images/thumbnails/thumbnail-ceska-whisky@1x.jpg'),
                      alt: 'Česká Whisky',
                      className: 'project__thumbnail'
                    }}
                    zoomImage={{
                      src: require('./../images/thumbnails/thumbnail-ceska-whisky@2x.jpg'),
                      alt: 'Česká Whisky'
                    }}
                  />
                </div>

                <div className="project__body">
                  <div className="project__link">
                    <span className="project__number">
                      No.<span>6</span>
                    </span>

                    <h5 className="project__heading h5">Česká Whisky</h5>

                    <a href="https://www.ceskawhisky.cz" className="project__link" target="_blank" rel="noopener noreferrer"><span class="fas fa-external-link-alt" style={{ marginLeft: 6, fontSize: 16 }} /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project__container" to="#">
                <div className="project__header">
                  <ImageZoom
                    image={{
                      src: require('./../images/thumbnails/thumbnail-tesla@1x.jpg'),
                      alt: 'Tesla Motors',
                      className: 'project__thumbnail'
                    }}
                    zoomImage={{
                      src: require('./../images/thumbnails/thumbnail-tesla@2x.jpg'),
                      alt: 'Tesla Motors'
                    }}
                  />
                </div>

                <div className="project__body">
                  <div className="project__link">
                    <span className="project__number">
                      No.<span>4</span>
                    </span>

                    <h5 className="project__heading h5">Tesla Motors</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="project__container" to="#">
                <div className="project__header">
                  <ImageZoom
                    image={{
                      src: require('./../images/thumbnails/thumbnail-harley-davidson@1x.jpg'),
                      alt: 'Harley-Davidson',
                      className: 'project__thumbnail'
                    }}
                    zoomImage={{
                      src: require('./../images/thumbnails/thumbnail-harley-davidson@2x.jpg'),
                      alt: 'Harley-Davidson'
                    }}
                  />
                </div>

                <div className="project__body">
                  <div className="project__link">
                    <span className="project__number">
                      No.<span>5</span>
                    </span>

                    <h5 className="project__heading h5">Harley-Davidson</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__header container">
          <div className="mt-2 mb-2 text--center">
            {/* <p>Welcome to my personal laboratory.</p> */}

            <p>My latest experiments you can find on my <a href="https://github.com/alexdevero">GitHub</a>:</p>
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
        </div>
      </Layout>
    )
  }
}

export default ProjectsPage

/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import PhotoGallery from '../components/PhotoGallery';

import { getPortfolio } from './../redux/actions/portfolio';

const SkillItem = ({ skill }) => {
  return (
    <div className="skill">
      <p>{skill}</p>
    </div>
  );
};

const PortfolioDetail = ({ portfolio, getPortfolio, match }) => {
  useEffect(() => {
    getPortfolio(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showPage = () => {
    if (portfolio) {
      const {
        name,
        subtitle,
        description,
        category,
        skills,
        live,
        github
      } = portfolio;

      return (
        <main className="PortfolioDetail container padding-nav">
          {/* <PhotoGallery photos={photos} /> */}
          <div className="PortfolioDetail__wrapper">
            <div className="row">
              <div className="col-lg-8">
                <h1>{name}</h1>
                <h4 className="info">{subtitle}</h4>
                <p>{description}</p>
              </div>
              <div className="col-lg-4">
                <div className="PortfolioDetail__information">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Created:</td>
                        <td>{new Date().getFullYear()}</td>
                      </tr>
                      <tr>
                        <td>Creator:</td>
                        <td>Shivam Kaushik</td>
                      </tr>
                      <tr>
                        <td>Category:</td>
                        <td>{category}</td>
                      </tr>
                      <tr>
                        <td>Visit:</td>
                        <td>
                          <a className="h4" href={live} target="_blank">
                            Live Link
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Github:</td>
                        <td>
                          <a className="h4" href={github} target="_blank">
                            Github Url
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="PortfolioDetail__skills">
              <h4>Skills</h4>
              <div className="content">
                {skills.map((skill, idx) => (
                  <SkillItem key={idx} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </main>
      );
    } else {
      return <h1>Portfolio Item with this ID doesn't exist</h1>;
    }
  };

  return showPage();
};

const mapStateToProps = state => ({
  portfolio: state.portfolio.portfolioItem
});

export default connect(mapStateToProps, { getPortfolio })(PortfolioDetail);

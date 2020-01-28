import React from 'react';
// import PhotoGallery from '../components/PhotoGallery';

const photos = [
  {
    src:
      'https://shivamkaushik.s3.ap-south-1.amazonaws.com/youtube1-1576520091309.png',
    width: 800,
    height: 426
  },
  {
    src:
      'https://shivamkaushik.s3.ap-south-1.amazonaws.com/youtube2-1576520091330.png',
    width: 800,
    height: 426
  },
  {
    src:
      'https://shivamkaushik.s3.ap-south-1.amazonaws.com/youtube3-1576520091401.png',
    width: 800,
    height: 426
  }
];

const skills = [
  'Node',
  'React',
  'SSR',
  'Mongoose',
  'Express',
  'Authentication',
  'Auth',
  'Error handling',
  'redux',
  'redux-thunk',
  'Node',
  'React',
  'SSR',
  'Mongoose',
  'Express',
  'Authentication',
  'Auth',
  'Error handling',
  'redux',
  'redux-thunk'
];

const SkillItem = ({ skill }) => {
  return (
    <div className="skill">
      <p>{skill}</p>
    </div>
  );
};

const PortfolioDetail = () => {
  return (
    <main className="PortfolioDetail container padding-nav">
      {/* <PhotoGallery photos={photos} /> */}
      <div className="PortfolioDetail__wrapper">
        <div className="row">
          <div className="col-lg-8">
            <h1>BONIFACHO</h1>
            <h4 className="info">ART COLLECTOR ECOMMERCE</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptates ad non possimus assumenda, eveniet temporibus iusto in
              explicabo iste excepturi voluptatibus mollitia quia soluta.
              Doloremque cum aliquam rerum in? ssimus assumenda, eveniet
              temporibus iusto in explicabo iste excepturi voluptatibus mollitia
              quia soluta. Doloremque cum aliquam rerum in?
            </p>
          </div>
          <div className="col-lg-4">
            <div className="PortfolioDetail__information">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Created:</td>
                    <td>01.09.2019</td>
                  </tr>
                  <tr>
                    <td>Creator:</td>
                    <td>Shivam Kaushik</td>
                  </tr>
                  <tr>
                    <td>Category:</td>
                    <td>MERN Stack</td>
                  </tr>
                  <tr>
                    <td>Visit:</td>
                    <td>
                      <a className="h4" href="http://www.github.com">
                        Live Link
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Github:</td>
                    <td>
                      <a className="h4" href="http://www.github.com">
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
            {skills.map(skill => (
              <SkillItem key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioDetail;

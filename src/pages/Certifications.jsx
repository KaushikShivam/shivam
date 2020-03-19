import React from 'react';
import { connect } from 'react-redux';
import Header from './../layout/Header';
import CertificateItem from './../components/CertificateItem';

const Certifications = ({ certifications }) => {
  return (
    <main className="container padding-nav">
      <Header
        title="Certifications"
        subtitle="Hours of acquired knowledge"
        image="http://fc00.deviantart.net/fs71/i/2013/334/3/d/paperplane_wallpaper__full_hd__by_frangrgic-d6w6u49.png"
      />
      <div style={{ marginTop: '8rem' }} className="row">
        {certifications.map(certification => (
          <CertificateItem key={certification.id} {...certification} />
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  certifications: state.certifications.certifications
});

export default connect(mapStateToProps)(Certifications);

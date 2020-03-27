import React from 'react';
import { connect } from 'react-redux';
import Header from './../layout/Header';
import CertificateItem from './../components/CertificateItem';

const Certifications = ({ certifications }) => {
  return (
    <main className="container padding-nav">
      <Header
        title="Training"
        subtitle="Hours of acquired knowledge"
        image="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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

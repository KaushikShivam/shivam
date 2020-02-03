import React from 'react';
import Header from './../layout/Header';
import CertificateItem from './../components/CertificateItem';

const Certifications = () => {
  return (
    <main className="container padding-nav">
      <Header
        title="Certifications"
        subtitle="Hours of acquired knowledge"
        image="http://fc00.deviantart.net/fs71/i/2013/334/3/d/paperplane_wallpaper__full_hd__by_frangrgic-d6w6u49.png"
      />
      <div style={{ marginTop: '8rem' }} className="row">
        <CertificateItem />
        <CertificateItem />
        <CertificateItem />
        <CertificateItem />
        <CertificateItem />
        <CertificateItem />
      </div>
    </main>
  );
};

export default Certifications;

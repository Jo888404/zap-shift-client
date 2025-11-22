import React from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import Services from '../Services/Services';
import TrustedBySection from './TrustedBySection/TrustedBySection';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import BeMerchant from '../BeMerchant/BeMerchant';
import CustomerReview from '../CustomerReview/CustomerReview';
import FAQSection from '../FAQSection/FAQSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cart></Cart>
            <Services></Services>
            <TrustedBySection></TrustedBySection>
            <ServiceFeatures></ServiceFeatures>
            <BeMerchant></BeMerchant>
            <CustomerReview></CustomerReview>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;
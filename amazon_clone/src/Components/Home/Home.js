import React from 'react';

import './Home.style.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02/Launch/2ndFeb/Rv4/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_DesktopTallHero_1500x600._CB661306685_.jpg"
                alt="mobile phone"
            />
            <div className="home__row">
                <Product
                    id="1"
                    title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={20000}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/41jr5nrfFoL.__AC_SY200_.jpg'
                />
                <Product
                    id="2"
                    title="Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard, Backlit RGB LED, Cherry MX RGB Blue, Black"
                    price={2000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/7193Jl8PejL._SL1500_.jpg'
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Dell Inspiron 3593 15.6-inch FHD Laptop (10th Gen i3-1005G1/4GB/1TB HDD/Win 10 + MS Office/Integrated Graphics/Black) D560236WIN9B"
                    price={60000}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/51fc8BFnQ1L._SL1000_.jpg'
                />
                <Product
                    id="5"
                    title="beAAtho JS-29 High Back Executive Office Revolving Chair/Director Chair/Boss Chair (4 Colour Options) (Brown)"
                    price={15000}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61Rio8Go7qL._AC_UL480_FMwebp_QL65_.jpg'
                />
                <Product
                    id="6"
                    title="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
                    price={200}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg'
                />
            </div>
            <div className="home__row">
                <Product
                    id="4"
                    title="DELL 21.5 inch SE2219HX Ultra Thin Bezel LED Backlit Computer Monitor (Black)"
                    price={20000}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/516uAGJoQpL._AC_SY200_.jpg'
                />
            </div>
        </div>
    )
}

export default Home

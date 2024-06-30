// Home.js
import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div id="root">
            <div className="search-bar">
                <input type="text" placeholder="Search for products..." required />
                <button onClick={() => alert('Searching has been completed')}>Search</button>
            </div>
            <div className="container">
                <div className="middle">
                    <div className="text" style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'justify' }}>Welcome to <b>InstiOLX</b>, your ultimate destination for buying and selling a wide range of products right within your community. At <b>InstiOLX</b>, we understand the value of convenience and the importance of finding great deals close to home. Whether you're looking for electronics, furniture, vehicles, and even more, our platform connects you with trusted sellers and buyers from your local area. Our user-friendly interface makes it easy to browse listings, post ads, and discover incredible bargains. Join our growing community today and experience a safer, faster, and more enjoyable way to shop.</div>
                </div>
            </div>
            <div className="product-listings">
                <div className="product">
                    <img src="https://www.lg.com/content/dam/channel/wcms/in/images/dishwasher/dfb532fp_apzpeil_eail_in_c/DFB532FP-Dishwasher-front-view-350.jpg" alt="Dishwasher" />
                    <div className="product-info">
                        <h2>LG Dishwasher</h2>
                        <p>₹10,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://sathya.in/media/87913/catalog/2-35.jpg" alt="Haier Refrigerator" />
                    <div className="product-info">
                        <h2>Haier Refrigerator</h2>
                        <p>₹15,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985" alt="Apple Airpods Pro 2" />
                    <div className="product-info">
                        <h2>Apple Airpods Pro 2</h2>
                        <p>₹7,800</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://www.sathya.in/media/92729/catalog/Sony%20Bravia%2065%204K%20Ultra%20HD%20Smart%20LED%20Google%20TV%2002.jpg" alt="Sony Bravia TV" />
                    <div className="product-info">
                        <h2>Sony Bravia(65)</h2>
                        <p>₹45,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://img.freepik.com/premium-photo/isolated-iphone-15-mobile-front-back-showcasing-sleek-desig-white-background-clean_655090-799590.jpg" alt="Iphone 12" />
                    <div className="product-info">
                        <h2>Iphone 12</h2>
                        <p>₹17,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c13fdcb-1d86-464b-92ae-bb445875e473/phantom-gx-2-academy-mg-low-top-football-boot-9pj0JD.png" alt="Nike Shoes" />
                    <div className="product-info">
                        <h2>Nike Phantom</h2>
                        <p>₹2,500</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://www.ikea.com/in/en/images/products/vimle-3-seat-sofa-gunnared-medium-grey__0514368_pe639441_s5.jpg" alt="Sofa" />
                    <div className="product-info">
                        <h2>Sofa (3 seater)</h2>
                        <p>₹21,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://www.kylinseating.in/uploads/wooden-restaurant-table-size-2-x-4-ft-top-marble-sunmica-361562547.jpg" alt="Dining Table" />
                    <div className="product-info">
                        <h2>Dining Table</h2>
                        <p>₹6,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://sp.yimg.com/ib/th?id=OPHS.AlKk2%2fzqeGx%2bbQ474C474&o=5&pid=21.1&w=174&h=174" alt="Gaming Chair" />
                    <div className="product-info">
                        <h2>Gaming Chair</h2>
                        <p>₹5,000</p>
                    </div>
                </div>
                <div className="product">
                    <img src="https://sp.yimg.com/ib/th?id=OPHS.a%2f%2fXhBOHyr%2ft%2fQ474C474&o=5&pid=21.1&w=174&h=174" alt="Wireless Mouse" />
                    <div className="product-info">
                        <h2>Wireless Mouse</h2>
                        <p>₹300</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Useful Links</h3>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Policies</h3>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Exchange Policy</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p><i className="fa fa-map-marker"></i>Chennai-600036.</p>
                        <p><i className="fa fa-phone"></i> +91 98765 43210</p>
                        <div className="social-icons">
                            <a href="https://r.search.yahoo.com/_ylt=AwrjbALNd4FmSlIQ4tpXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1720970445/RO=10/RU=https%3a%2f%2fwww.whatsapp.com%2f/RK=2/RS=QhAXwYehWeI5Bx4eJY4cWVhkPsQ-" className="fa fa-whatsapp"><img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="30" height="30" alt="whatsapp logo" /></a>
                            <a href="https://r.search.yahoo.com/_ylt=Awrgwyzkd4FmBqAPixdXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1720970469/RO=10/RU=https%3a%2f%2fdiscord.com%2f/RK=2/RS=btdaaOTR7esztPeoD08rwVYkLUo-" className="fa fa-discord"><img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/discord/default.svg" width="30" height="30" alt="discord logo" /></a>
                            <a href="https://r.search.yahoo.com/_ylt=AwrjW6f5d4FmsusPuJBXNyoA;_ylu=Y29sbwNncTEEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1720970489/RO=10/RU=https%3a%2f%2fwww.linkedin.com%2flogin/RK=2/RS=GNc6m13Roc8sLPeH.Li0wsyU65E-" className="fa fa-linkedin">
                                <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="30" height="30" alt="linkedin logo" /></a>
                            © Developed by Muralikrishnan Mani
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

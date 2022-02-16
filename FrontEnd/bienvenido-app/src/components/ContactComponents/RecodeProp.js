import React from "react";
import img1 from '../../images/1.jpg'

const RecodeProp = () => {
    return (
        <section className="logo-container">
            <div className="swiper logo-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                    <div className="swiper-slide">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RecodeProp; 

{/* <div className="swiper-slide">
<img src={img1} alt="" />
</div> */}
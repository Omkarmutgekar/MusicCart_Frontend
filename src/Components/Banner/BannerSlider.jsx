import React from "react";
import styles from "./Banner.module.css";

import Banner from "/images/banner/Rectangle 3.png"
import Vector from "/images/banner/vector.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {

  return (
    <div className={styles.banner_Image_container}>
    
          <div className={styles.product_img} >
            <div className={styles.banner_title}>
                <h1>Grab upto 50% off on <br />
Selected headphones </h1>
            </div>
            <img src={Banner} alt="banner" />
            <div className={styles.vector_img}>
              <img src={Vector} alt="vector" />
            </div>
          </div>
    </div>
  );
};

export default BannerSlider;

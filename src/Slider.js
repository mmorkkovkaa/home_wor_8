import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
    return (
        <div className="slider-container">
            <h1>Beautiful place in the WORLD</h1>
            <Carousel>
                <div>
                    <img src="https://papik.pro/izobr/uploads/posts/2023-03/thumbs/1679674183_papik-pro-p-krasivie-peizazhi-prirodi-visokogo-razresh-5.jpg" alt="Пейзаж 1" />
                </div>
                <div>
                    <img src="https://cojo.ru/wp-content/uploads/2022/12/shtat-vaioming-grand-titon-2-1.webp" alt="Пейзаж 2" />
                </div>
                <div>
                    <img src="https://cojo.ru/wp-content/uploads/2022/12/peizazh-59.webp" alt="Пейзаж 3" />
                </div>
            </Carousel>
        </div>
    );
}

export default Slider;
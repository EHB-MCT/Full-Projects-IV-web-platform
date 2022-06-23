/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "../../../styles/showroom/_slider.scss";

import { FreeMode, Thumbs } from "swiper";

export default function Slider(props: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2">
                <SwiperSlide>
                    <video
                        id="vid2"
                        src={props.data.pathVideo.replace(
                            "http://finalshowcasebackend.be/",
                            "https://finalshow.be/images/"
                        )}
                        controls></video>
                </SwiperSlide>
                {props.data.images.map((image: any, index: any) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={image.path.replace(
                                    "http://finalshowcasebackend.be/storage/",
                                    "https://finalshow.be/images/"
                                )}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper">
                <SwiperSlide>
                    <video
                        id="vid"
                        src={props.data.pathVideo.replace(
                            "http://finalshowcasebackend.be/",
                            "https://finalshow.be/images/"
                        )}
                        muted></video>
                </SwiperSlide>
                {props.data.images.map((image: any, index: any) => {
                    return (
                        <SwiperSlide key={index} className="imageSliderBottom">
                            <img
                                src={image.path.replace(
                                    "http://finalshowcasebackend.be/storage/",
                                    "https://finalshow.be/images/"
                                )}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}

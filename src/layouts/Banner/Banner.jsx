import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";

const Banner = ({ apartments }) => {
  return (
    <div className="relative">
      <div>
        <img
          src="https://i.ibb.co/yPyrD71/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg"
          alt=""
          className="md:w-2/3 h-auto"
        />
      </div>
      <div className="absolute inset-0 py-8 pt-20 bg-[#0d263cce] flex items-center justify-center">
        <Swiper
          slidesPerView={2}
          spaceBetween={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full h-full flex items-center justify-center"
        >
          {apartments.map((apartment) => (
            <SwiperSlide key={apartment.id}>
              <img
                className="mx-auto rounded-2xl"
                src={apartment.image_url}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Banner.propTypes = {
  apartments: PropTypes.array.isRequired,
};

export default Banner;

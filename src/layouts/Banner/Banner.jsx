import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import PropTypes from "prop-types";

const Banner = ({ apartments }) => {
  console.log(apartments);
  return (
    <div className="my-10 ">
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {apartments.map((apartment) => (
          <SwiperSlide key={apartment.id}>
            <img className="mx-auto" src={apartment.image_url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Banner.propTypes = {
  apartments: PropTypes.object.isRequired,
};

export default Banner;

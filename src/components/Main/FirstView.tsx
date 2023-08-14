import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectFade, Keyboard } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/keyboard"
import "./FirstView.css"

export const FirstView = () => {
  return (
    <Swiper
      id="main-slide"
      slidesPerView={1}
      onSlideChange={() => {
        // console.log("slide change")
      }}
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      modules={[Pagination, Autoplay, EffectFade, Keyboard]}
      centeredSlides
      loop
      effect="fade"
      speed={2000}
      lazyPreloadPrevNext={1}
      className="h-screen min-h-[800px]"
    >
      <SwiperSlide>
        <div
          className="animate relative h-full w-full overflow-hidden"
          style={{
            backgroundImage: "url(/main.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </SwiperSlide>
      {["1", "2", "3", "4", "5"].map((item) => (
        <SwiperSlide key={item}>
          <div
            className="animate relative h-full w-full overflow-hidden"
            style={{
              backgroundImage: `url(/main_${item}.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

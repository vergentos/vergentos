'use client';
import reviews from '@/data/json/testimonials/testimonials.json';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';
import GradientOverlay from '../shared/reviews/GradientOverlay';
import LinkButton from '../ui/button/LinkButton';

const bgColors = [
  'bg-gradient-to-br from-pink-500 to-purple-600',
  'bg-gradient-to-br from-cyan-500 to-blue-600',
  'bg-gradient-to-br from-green-500 to-teal-600',
  'bg-gradient-to-br from-orange-500 to-red-600',
  'bg-gradient-to-br from-indigo-500 to-purple-600',
  'bg-gradient-to-br from-yellow-500 to-orange-600',
];

const Testimonial = () => {
  return (
    <section className="relative bg-white bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-[100px] pb-[100px] dark:bg-black">
      <div className="main-container">
        <div className="mb-10 flex flex-col items-center text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px]">Partnering for digital success.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[872px]">
              Trusted by industry leaders across the UK to deliver technical excellence. Discover how Mediatopia.agency empowers brands through bespoke web design, custom API integrations, and AI-driven automation that drives real commercial growth.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="relative">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={30}
              slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              centeredSlides={true}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}>
              <div className="swiper-wrapper">
                {reviews.map((review, index) => (
                  <SwiperSlide key={review.id} className="swiper-slide">
                    <div className="bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col gap-y-6 overflow-hidden rounded-[20px] p-8 sm:mx-0">
                      <GradientOverlay />
                      <figure className={`relative inline-flex size-14 items-center justify-center rounded-full ${bgColors[index % bgColors.length]}`}>
                        <span className="text-xl font-bold text-white">{review.initials}</span>
                      </figure>
                      <p className="text-secondary/60 dark:text-accent/60 review-text line-clamp-3">{review.quote}</p>
                      <div>
                        <p className="text-secondary dark:text-accent review-name text-lg leading-[1.5] font-medium">
                          {review.name}
                        </p>
                        <p className="text-secondary/60 dark:text-accent/60 text-tagline-2 review-title">
                          {review.position}, {review.company}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mt-10 text-center">
            <LinkButton
              href="/testimonial"
              className="btn btn-secondary btn-md dark:btn-transparent dark:border-primary-50 hover:btn-primary mx-auto inline-block w-[85%] md:w-auto">
              Read more testimonials
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonial;

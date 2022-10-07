import React from 'react'
import "./App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Home = () => {
  return (
    <div>
        <section className='sec1'>
            <div className='container'>
                <div className='row'>
                <img src='imge\Think-Marketing-Tradeline-valU-Accused-Of-Creating-A-Fiasco-Marketing-Campaign.jpg' style={{ height: '600px',width: '1347px'}}/>
                </div>
            
            </div>
           
        </section>
        <section className='sec2'>
            <div className='container'>
                <h1>iPhone</h1>
            </div>
        </section>

        <section className='sec3'>
       <a href='src\Shop.js'>
       <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
       <SwiperSlide><img src='imge\pexels-photo-887751.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\Think-Marketing-Tradeline-valU-Accused-Of-Creating-A-Fiasco-Marketing-Campaign.jpg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-4645502.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\Think-Marketing-Tradeline-valU-Accused-Of-Creating-A-Fiasco-Marketing-Campaign.jpg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-5750001.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-699122.jpeg'/></SwiperSlide>
      </Swiper>
       </a>
        </section>
        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='imge\pexels-photo-699122.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-788946.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-887751.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-4645502.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\Think-Marketing-Tradeline-valU-Accused-Of-Creating-A-Fiasco-Marketing-Campaign.jpg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-5750001.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-699122.jpeg'/></SwiperSlide>
      </Swiper>
        </section>
        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><img src='imge\pexels-photo-5750001.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-699122.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-887751.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-4645502.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-10914594.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\Think-Marketing-Tradeline-valU-Accused-Of-Creating-A-Fiasco-Marketing-Campaign.jpg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-5750001.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-699122.jpeg'/></SwiperSlide>
      </Swiper>
        </section>
       
        <section className='sec2'>
            <div className='container'>
                <h1>MAC</h1>
            </div>
        </section>
        <section className='sec4'>
            <div className='container'>
                <div className='row'>
                <img src='http://d5z7ph582hxfs.cloudfront.net/media/home_images/dd0d9d41-b875-4971-836b-bbc4209274b6.png' style={{ height: '600px',width: '1347px'}}/>
                </div>
            
            </div>
           
        </section>
        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='imge\apple-imac-ipad-workplace-38568.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\macbook-apple-imac-computer-39284.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-69432.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-115655.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-238118.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-322338.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-434346.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-461064.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-699122.jpeg'/></SwiperSlide>
      </Swiper>
        </section>

        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><img src='imge\pexels-photo-115655.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-238118.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-322338.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\apple-imac-ipad-workplace-38568.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\macbook-apple-imac-computer-39284.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-69432.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\apple-imac-ipad-workplace-38568.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\macbook-apple-imac-computer-39284.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-69432.jpeg'/> </SwiperSlide>
      </Swiper>
        </section>

        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide><img src='imge\apple-imac-ipad-workplace-38568.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\macbook-apple-imac-computer-39284.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-69432.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-115655.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-238118.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-322338.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\apple-imac-ipad-workplace-38568.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\macbook-apple-imac-computer-39284.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-69432.jpeg'/> </SwiperSlide>
      </Swiper>
        </section>

        <section className='sec2'>
            <div className='container'>
                <h1>AIRPODS</h1>
            </div>
        </section>

        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><img src='imge\pexels-photo-5081399.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-8534090.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\istockphoto-1217083980-612x612.jpg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-3780681.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-3825517.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-3780681.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-1646704.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-5081399.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-8534090.jpeg'/></SwiperSlide>
      </Swiper>
        </section>
        
        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='imge\pexels-photo-3780681.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-1646704.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-5081399.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-8534090.jpeg'/></SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-3825517.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-3780681.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-1646704.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-5081399.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\pexels-photo-8534090.jpeg'/></SwiperSlide>
      </Swiper>
        </section>
        <section className='sec2'>
            <div className='container'>
                <h1>APPLE WATCH</h1>
            </div>
        </section>
        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='imge\watch1.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\watch2.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\watch3.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa4.webp'/></SwiperSlide>
        <SwiperSlide><img src='imge\wa5.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa6.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa7.png'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa8.png'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa9.png'/></SwiperSlide>
      </Swiper>
        </section>
        <section className='sec3'>
        <Swiper
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='imge\wa6.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa7.png'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa8.png'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa9.png'/></SwiperSlide>
        <SwiperSlide><img src='imge\wa5.jpeg'/> </SwiperSlide>
        <SwiperSlide><img src='imge\watch1.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\watch2.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\watch3.webp'/> </SwiperSlide>
        <SwiperSlide><img src='imge\wa4.webp'/></SwiperSlide>
      </Swiper>
        </section>
        <footer class="footer text-center" data-aos="fade-up">
            <div class="container">
                <div class="row">
                 
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>
                 
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><iconify-icon icon="bxl:facebook-circle"></iconify-icon></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><iconify-icon icon="fa:twitter-square"></iconify-icon></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><iconify-icon icon="ant-design:google-circle-filled"></iconify-icon></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><iconify-icon icon="akar-icons:instagram-fill"></iconify-icon></a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed  theme created by
                            
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer> 
    </div>
  )
}

export default Home
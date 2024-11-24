import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import carddive from '../assets/img/carddive.png';
import genshin from '../assets/img/genshin.png';
import pickstom from '../assets/img/pickstom.png';
import qbit from '../assets/img/qbit.png';
import whatmovie from '../assets/img/whatmovie.png';
import kboland from '../assets/img/kboland.png';
import musicflix from '../assets/img/musicflix.png';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={pickstom} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>Pickstom</p>
                            <p className='uselang'>사용 언어 : PHP, mySQL, jQuery</p>
                            <p className='desc'>PHP를 이용한 반려견 옷 커스텀 사이트.<br />
                                mySQL을 이용해 회원정보를 관리하며,
                                나만의 반려견 커스텀 옷을 자랑 할 수 있는 커뮤니티 제작</p>
                            <div className='urltexts'>
                                <a href="https://github.com/spearboy/project_pickstom" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="http://spearboy.dothome.co.kr/" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={carddive} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>Cardive</p>
                            <p className='uselang'>사용 언어 : React.js, Python</p>
                            <p className='desc'>React.js 를 이용한 신용카드 모아보기 사이트.<br />
                                Python을 이용해 네이버 신용카드 페이지를 스크랩하여 데이터를 추출하였습니다. 해당 데이터를 보기 좋게 React.js으로 만들었습니다.</p>
                            <div className='urltexts'>
                                <a href="https://github.com/spearboy/carddive" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="https://cardive.vercel.app/" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={genshin} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>Genshin</p>
                            <p className='uselang'>사용 언어 : PHP, jQuery</p>
                            <p className='desc'>호요버스의 간판 타이틀 원신의 PC라운지 페이지.<br />
                                제작사의 요청으로 외주작업을 진행 하였습니다. 기존 작업사의 ftp 정보를 받아 자택에서 작업하였습니다.</p>
                            <div className='urltexts'>
                                <a className='disabled-link' onclick="return false;" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="http://gipclounge.com/" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={whatmovie} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>Whatmovie</p>
                            <p className='uselang'>사용 언어 : Vue.js</p>
                            <p className='desc'>Vue.js와 TMDB API를 이용하여 제작한 사이트.<br />
                                TMDB API를 이용하여 세계박스오피스, 출연진, 예고편영상 등의 데이터를 가져와 보기 좋게 Vue.js를 사용해 구현 하였습니다.</p>
                            <div className='urltexts'>
                                <a href="https://github.com/spearboy/what_movie" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="https://moviecbh.vercel.app/" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={kboland} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>KBOland</p>
                            <p className='uselang'>사용 언어 : React.js</p>
                            <p className='desc'>React.js와 YOUTUBE API를 이용하여 제작한 사이트.<br />
                                YOUTUBE API를 이용하여 한국 프로야구 팀에 대한 영상과 간단한 팀 정보를 제공하는 웹사이트입니다.</p>
                            <div className='urltexts'>
                                <a href="https://github.com/spearboy/kboland" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="https://kboland.vercel.app/" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={musicflix} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>Musicflix</p>
                            <p className='uselang'>사용 언어 : React.js, Python</p>
                            <p className='desc'>React.js와 YOUTUBE API를 이용하여 제작한 사이트.<br />
                                Python을 이용하여 멜론,벅스,지니 등 각 음악차트 사이트의 순위를 매일 수집하는 Action을 깃허브에 적용해 데이터를 가져옵니다. 이후 YOUTUBE API를 이용해 여러 음악을 스트리밍 하고 플레이리스트에 저장할 수 있게 만든 사이트 입니다.</p>
                            <div className='urltexts'>
                                <a href="https://github.com/spearboy/yt_music" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="https://musicflixcbh.vercel.app/" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content_wrapper'>
                        <div className='target_mark'></div>
                        <div className='preview_image'>
                            <img src={qbit} alt="" />
                        </div>
                        <div className='code_text_box'>
                            <p className='title'>Qbit (개발중)</p>
                            <p className='uselang'>사용 언어 : Next.js, Node.js</p>
                            <p className='desc'>스마트 테이블 오더 시스템 (모바일전용).<br />
                                Next.js를 이용해 프론트를 구성했으며, Node.js Express 를 이용해 홈서버를 구축해 개발중입니다.
                                여러명이서 같이 주문하는 그런 시스템임으로 웹소켓이 적용되어있습니다. 메뉴를 담고 일행과 나의 메뉴를 장바구니에서 확인할 수 있습니다.</p>
                            <div className='urltexts'>
                                <a href="https://github.com/spearboy/project_qbit" target='_blank' rel="noreferrer">Code view <FaChevronRight /></a>
                                <a href="http://qbitorder.com" target='_blank' rel="noreferrer">Site view <FaChevronRight /></a>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Portfolio
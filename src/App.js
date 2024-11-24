import React, { useState, useEffect, useRef } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import './assets/scss/common.scss'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Loading from './pages/Loading'
import MouseFollower from './components/MouseFollower'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis 인스턴스 생성
    lenisRef.current = new Lenis();

    // 로딩 중에는 스크롤 중지
    if (isLoading) {
      lenisRef.current.stop();
    }

    lenisRef.current.on('scroll', (e) => {
      console.log(e);
    });

    lenisRef.current.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // 클린업
    return () => {
      lenisRef.current.destroy();
    }
  }, [isLoading]); // isLoading이 변경될 때마다 useEffect 실행

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // 로딩이 완료되면 스크롤 다시 활성화
    lenisRef.current.start();
    gsap.to(".gnb", { y: 0 })
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <MouseFollower delay={0.2} count={5} />
      <Header />
      <Main />
    </>
  )
}

export default App
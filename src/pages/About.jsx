import gsap from 'gsap'
import React from 'react'

const About = () => {
    const timeLine = gsap.timeline();

    // 첫 번째 애니메이션
    timeLine.to(".point_line", { left: -80, duration: 1 });

    // 첫 번째 애니메이션 완료 후 두 번째 애니메이션 실행
    timeLine.to(".point_text", { width: '200px', duration: 1 });

    timeLine.to(".text_1", { y: '0', opacity: 1, duration: 0.7 });
    timeLine.to(".text_2", { y: '0', opacity: 1, duration: 0.7 });

    return (
        <section id='about'>
            <div className='center_box'>
                <div className='text_box'>
                    <p className='text_1'>
                        사용자 경험을 혁신하는 프론트엔드 개발자를 향한
                        열정으로 가득찬 개발자 입니다. 단순한 코딩을 넘어 웹의 디지털 미학을 창조하고자 하며, HTML, CSS JavaScript의 탄탄한 기반 위에 React와 같은
                        현대적 프레임워크로 끊임없이 성장하고 있습니다.
                    </p>
                    <p className='text_2'>
                        중국에서의 오랜유학 생활로 중문과를 전공하였고,
                        전공을 살려 업무를 한 경험과, 퍼블리셔로서의 경험을 살려 다채로운 장점을 가진 프론트엔드 개발자로서 첫 도약을 해보려고합니다. 항상 배우려는 자세, 노력하는 자세로 임하고있습니다.
                    </p>
                </div>
                <h1>FRONTEND
                    <span className='point_line'></span>
                    <span className='point_text'>portfolio</span>
                </h1>
            </div>
        </section>
    )
}

export default About
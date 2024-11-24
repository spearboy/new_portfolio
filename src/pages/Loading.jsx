import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'

const Loading = ({ onComplete }) => {
    const textContainerRef = useRef(null)

    useEffect(() => {
        const titleList = gsap.utils.toArray(textContainerRef.current.querySelectorAll('p'))
        const titlesTl = gsap.timeline({
            onComplete: () => {
                // 애니메이션이 완료되면 콜백 함수 실행
                onComplete();
            }
        })

        gsap.registerEffect({
            name: 'rotateIn',
            extendTimeline: true,
            defaults: {
                duration: 1.3,
                rotationY: 0,
                rotationX: 0,
                transformOrigin: '50% 50%',
                ease: 'back',
                parent: textContainerRef.current,
            },
            effect: (targets, config) => {
                gsap.set(config.parent, { perspective: 800 })

                let tl = gsap.timeline()
                tl.from(targets, {
                    duration: config.duration,
                    rotationY: config.rotationY,
                    rotationX: config.rotationX,
                    transformOrigin: config.transformOrigin,
                    ease: config.ease,
                    stagger: {
                        each: 0.06,
                    },
                })

                tl.from(
                    targets,
                    {
                        duration: 0.4,
                        autoAlpha: 0,
                        ease: 'none',
                        stagger: {
                            each: 0.05,
                        },
                    },
                    0,
                )

                return tl
            },
        })

        gsap.registerEffect({
            name: 'rotateOut',
            extendTimeline: true,
            defaults: {
                duration: 0.5,
                x: 0,
                y: 0,
                rotationY: 0,
                rotationX: 0,
                rotationZ: 0,
                transformOrigin: '50% 50%',
                ease: 'power1.in',
                parent: textContainerRef.current,
            },
            effect: (targets, config) => {
                gsap.set(config.parent, { perspective: 800 })

                let tl = gsap.timeline()
                tl.to(targets, {
                    x: config.x,
                    y: config.y,
                    rotationY: config.rotationY,
                    rotationX: config.rotationX,
                    rotationZ: config.rotationZ,
                    transformOrigin: config.transformOrigin,
                    ease: config.ease,
                    stagger: {
                        each: 0.04,
                    },
                })

                tl.to(
                    targets,
                    {
                        duration: 0.45,
                        opacity: 0,
                        ease: 'none',
                        stagger: {
                            amount: 0.02,
                        },
                    },
                    0,
                )

                return tl
            },
        })

        function splitElements() {
            gsap.set(titleList, { autoAlpha: 1 })
            titleList.forEach((element, dex) => {
                let split = new SplitType(element, { type: 'chars,words,lines' })

                titlesTl
                    .rotateIn(split.words, {
                        rotationX: 90,
                        transformOrigin: '100% 0',
                        ease: 'back(2.3)',
                    }, dex > 0 ? '-=0.38' : 0)
                    .rotateOut(split.words, {
                        y: 20,
                        rotationX: -100,
                        transformOrigin: '100% 100%',
                    })
            })
        }

        splitElements()

        // 클린업
        return () => {
            titlesTl.kill()
        }
    }, [onComplete])

    return (
        <div className='loading'>
            <div className="text-container text-center" ref={textContainerRef}>
                <p>Hello world</p>
                <p>저의 포트폴리오 페이지에 오신것을</p>
                <p>환영합니다</p>
            </div>
        </div>
    )
}

export default Loading
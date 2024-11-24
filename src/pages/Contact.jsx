import React, { useEffect, useRef, useState } from 'react';
import profile_image from '../assets/img/profile_image_1.jpg'
import { FaChevronRight } from 'react-icons/fa';
import gsap from 'gsap';

const Contact = () => {
    const canvasRef = useRef(null);
    const nameCardRef = useRef(null);
    const animationFrameRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // 캔버스 크기를 설정하는 함수
        const setCanvasSize = () => {
            const parent = canvas.parentElement;
            const width = parent.clientWidth;
            const height = parent.clientHeight;

            // Canvas의 실제 픽셀 크기 설정
            canvas.width = width;
            canvas.height = height;

            setDimensions({ width, height });
        };

        let circles = 5;
        let radius = 20;
        let circleArray = [];
        let particularArray = [];
        const colors = ['#FFC900', '#29A4E8', '#FF4100', '#1CE840', '#DD0DFF'];

        function Circle(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;
            this.gravity = 0.98;
            this.frequency = 0.8;
            this.velocity = {
                x: (Math.random() - 0.5) * 15,
                y: 5,
            };
            this.alpha = 1;
        }

        Circle.prototype.smash = function () {
            this.radius -= 3;
            for (let i = 0; i < Math.min(10, this.radius); i++) {
                particularArray.push(
                    new ParticularCircle(this.x, this.y, 0, 0, Math.max(2, this.radius * 0.1), this.color)
                );
            }
        };

        Circle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        };

        Circle.prototype.update = function () {
            this.draw();

            // 벽과의 충돌 체크
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.velocity.x = -this.velocity.x * 0.8;
                this.smash();
            }

            // 바닥과의 충돌 체크
            if (this.y + this.radius + this.velocity.y > canvas.height) {
                this.velocity.y = -this.velocity.y * this.frequency;
                this.y = canvas.height - this.radius; // 바닥에 고정
                this.smash();
            } else {
                this.velocity.y += this.gravity;
            }

            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };

        function ParticularCircle(x, y, dx, dy, radius, color) {
            Circle.call(this, x, y, dx, dy, radius, color);
            this.gravity = 0.5;
            this.frequency = 0.8;
            this.velocity = {
                x: (Math.random() - 0.5) * 25,
                y: (Math.random() - 0.5) * 25,
            };
            this.timeOut = 50;
            this.alpha = 1;
        }

        ParticularCircle.prototype = Object.create(Circle.prototype);

        ParticularCircle.prototype.update = function () {
            this.alpha = this.timeOut / 50; // 시간이 지날수록 투명해짐
            this.draw();

            if (this.y + this.radius + this.velocity.y > canvas.height) {
                this.velocity.y = -this.velocity.y * this.frequency;
                this.y = canvas.height - this.radius;
            } else {
                this.velocity.y += this.gravity;
            }

            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.timeOut -= 1;
        };

        const createCircle = () => {
            circleArray = [];
            particularArray = [];
            for (let i = 0; i < circles; i++) {
                const x = Math.random() * (canvas.width - 2 * radius) + radius;
                const y = Math.random() * (canvas.height - 2 * radius) + radius;
                const dx = 1;
                const dy = 1;
                const color = colors[Math.floor(Math.random() * colors.length)];
                circleArray.push(new Circle(x, y, dx, dy, radius, color));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 원 업데이트
            circleArray = circleArray.filter(circle => {
                circle.update();
                return circle.radius > 0;
            });

            // 파티클 업데이트
            particularArray = particularArray.filter(miniCircle => {
                miniCircle.update();
                return miniCircle.timeOut > 0;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;

            const x = (e.clientX - rect.left) * scaleX;
            const y = (e.clientY - rect.top) * scaleY;

            console.log('Click detected:', x, y); // 디버깅용

            const color = colors[Math.floor(Math.random() * colors.length)];
            circleArray.push(new Circle(x, y, 1, 1, radius, color));
        };

        // 초기 설정
        setCanvasSize();

        // 이벤트 리스너 등록
        window.addEventListener('resize', setCanvasSize);
        canvas.addEventListener('click', handleClick);

        createCircle();
        animate();

        gsap.fromTo(
            nameCardRef.current,
            {
                opacity: 0,  // 초기 opacity는 0
                top: '40%',  // top은 40%로 시작
            },
            {
                opacity: 1,   // 최종 opacity는 1
                top: '50%',   // 최종 top은 50%
                duration: 1.5,  // 애니메이션 시간 1.5초
                ease: 'power3.out',  // 애니메이션 easing
            }
        );
        return () => {
            window.removeEventListener('resize', setCanvasSize);
            canvas.removeEventListener('click', handleClick);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);
    return (
        <section id="contact" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <canvas
                ref={canvasRef}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    touchAction: 'none'  // 모바일에서 더 나은 터치 처리
                }}
            />
            <div className='name_card' ref={nameCardRef}>
                <div className='image_box'>
                    <img src={profile_image} alt="프로필" />
                </div>
                <div className='contact_box'>
                    <div className='marker'></div>
                    <p>조병현<span>Cho Byung Hyun</span></p>
                    <a href='tel:01038280398'>+82&#41; 010 - 3828 - 0398</a>
                    <a href='mailto:tsagaanaa123@naver.com'>tsagaanaa123@naver.com</a>
                    <a href='https://open.kakao.com/o/sQU0Te1g'>카카오톡 <FaChevronRight /></a>
                    <a href='https://github.com/spearboy'>GitHUB <FaChevronRight /></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
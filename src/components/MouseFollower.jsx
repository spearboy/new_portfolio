import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower = ({ delay = 0.2, count = 5, onClick }) => {
    const cursorRef = useRef(null);
    const followersRef = useRef([]);

    useEffect(() => {
        const followers = followersRef.current;
        const cursor = cursorRef.current;

        const setSize = () => {
            let prev;
            followers.forEach(follower => {
                if (!prev) {
                    prev = cursor;
                }

                const rect = prev.getBoundingClientRect();
                gsap.set(follower, {
                    width: rect.width * 0.75,
                    height: rect.height * 0.75
                });
                prev = follower;
            });
        };

        const handleMouseMove = (event) => {
            const e = event.touches ? event.touches[0] : event;
            const x = e.clientX;
            const y = e.clientY;

            gsap.to(cursor, { duration: 0, x, y });
            gsap.to(followers, {
                duration: 0.2,
                x,
                y,
                stagger: delay / 10
            });
        };

        const handleClick = (event) => {
            if (onClick) {
                onClick(event);
            }
        };

        setSize();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, [delay, onClick]);

    return (
        <>
            <div
                ref={cursorRef}
                className="cursor"
                style={{ pointerEvents: 'none' }}
            />
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    ref={el => followersRef.current[i] = el}
                    className="follower"
                    style={{ pointerEvents: 'none' }}
                />
            ))}
        </>
    );
};

export default MouseFollower;
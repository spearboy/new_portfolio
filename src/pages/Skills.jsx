import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Skills = () => {
    const skillArray = [
        // 프론트엔드
        { skillName: 'React', width: '90%' },
        { skillName: 'Vue', width: '85%' },
        { skillName: 'Next.js', width: '80%' },
        { skillName: 'JavaScript', width: '88%' },
        { skillName: 'TypeScript', width: '40%' },
        { skillName: 'HTML', width: '95%' },
        { skillName: 'CSS', width: '90%' },
        { skillName: 'TailwindCSS', width: '85%' },
        { skillName: 'Bootstrap', width: '80%' },
        { skillName: 'SASS/SCSS', width: '75%' },
        { skillName: 'jQuery', width: '90%' },

        // 백엔드
        { skillName: 'Node.js', width: '60%' },
        { skillName: 'Express.js', width: '60%' },
        { skillName: 'PHP', width: '70%' },
        { skillName: 'Python', width: '50%' },

        // 데이터베이스
        { skillName: 'MySQL', width: '40%' },
        { skillName: 'MongoDB', width: '38%' },

        // DevOps 및 클라우드
        { skillName: 'Git', width: '88%' },

        // 기타 도구 및 협업 툴
        { skillName: 'Figma', width: '70%' },
        { skillName: 'Slack', width: '90%' },
    ];

    const skillRefs = useRef([]);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        skillRefs.current.forEach((ref, index) => {
            const skill = skillArray[index];
            ScrollTrigger.create({
                trigger: ref,
                start: 'top 80%', // 요소가 뷰포트 상단에서 80% 위치에 도달할 때
                onEnter: () => {
                    gsap.to(ref, {
                        width: skill.width,
                        duration: 1.5,
                        ease: 'power3.out',
                    });
                },
                onLeaveBack: () => {
                    gsap.to(ref, {
                        width: '0%',
                        duration: 1.5,
                        ease: 'power3.out',
                    });
                },
            });
        });
    }, []);

    return (
        <section id="skills">
            <div className="skills_content_wrapper">
                <h1>
                    Which<br />
                    STACK do<br />
                    you USE?
                </h1>
                <div className="skill_wrapper">
                    {skillArray.map(({ skillName, width }, index) => (
                        <div className="skill_items" key={index}>
                            <p className="skill_name">{skillName}</p>
                            <div className="skill_bar">
                                <div
                                    className="skill_progress"
                                    ref={(el) => (skillRefs.current[index] = el)}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React, { useState, useEffect, useRef } from 'react';
import Icon from '../assets/Icon.png';

const CardSection = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const cardSectionRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);

    const cards = [
        {
            icon: Icon,
            name: "Shivam Shukla",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            rating: 4,
        },
        {
            icon: Icon,
            name: "John Doe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            rating: 3,
        },
        {
            icon: Icon,
            name: "Jane Smith",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            rating: 5,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDraggingRef.current) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
            }
        }, 4000); // Change slide every 6 seconds

        return () => clearInterval(interval);
    }, [cards.length]);

    const handleMouseDown = (e) => {
        isDraggingRef.current = true;
        startXRef.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (isDraggingRef.current) {
            const deltaX = e.clientX - startXRef.current;
            if (Math.abs(deltaX) > 50) {
                setActiveIndex((prevIndex) => (deltaX > 0
                    ? (prevIndex - 1 + cards.length) % cards.length
                    : (prevIndex + 1) % cards.length
                ));
                isDraggingRef.current = false;
            }
        }
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
    };

    useEffect(() => {
        const cardSectionElement = cardSectionRef.current;
        cardSectionElement.addEventListener('mousedown', handleMouseDown);
        cardSectionElement.addEventListener('mousemove', handleMouseMove);
        cardSectionElement.addEventListener('mouseup', handleMouseUp);
        cardSectionElement.addEventListener('mouseleave', handleMouseUp);

        return () => {
            cardSectionElement.removeEventListener('mousedown', handleMouseDown);
            cardSectionElement.removeEventListener('mousemove', handleMouseMove);
            cardSectionElement.removeEventListener('mouseup', handleMouseUp);
            cardSectionElement.removeEventListener('mouseleave', handleMouseUp);
        };
    },);

    return (
        <div ref={cardSectionRef} className="relative flex items-center justify-center h-[250px] sm:h-[435px] w-full mt-0 sm:mt-10 mb-0 sm:mb-16 cursor-grab overflow-hidden">
            {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const isLeft = index === (activeIndex - 1 + cards.length) % cards.length;
                const isRight = index === (activeIndex + 1) % cards.length;

                return (
                    <Card
                        key={index}
                        isActive={isActive}
                        isLeft={isLeft}
                        isRight={isRight}
                        card={card}
                    />
                );
            })}
        </div>
    );
};

const Card = ({ isActive, card, isLeft, isRight }) => {
    const isMobile = window.innerWidth <= 700;

    const baseClass = "absolute transform transition-all duration-700 ease-in-out rounded-xl";
    const activeClass = "w-[20vh] h-[18vh]  sm:w-[600px] sm:h-[435px] z-20  bg-[#1A4E8B] text-white shadow-lg";
    const sideClass = "w-[12vh] h-[16vh] sm:w-[233px] sm:h-[375px] z-10 bg-white shadow-lg";
    const contentClass = "p-2 sm:p-6 flex flex-col items-center"; // Keep padding as before
    const positionClass = isMobile ? isLeft
    ? "-translate-x-[130%] translate-y-[-8px]"
    : isRight
    ? "translate-x-[130%] translate-y-[-8px]"
    : "translate-x-0"
        :isLeft
        ? "-translate-x-[170%] translate-y-[10px]"
        : isRight
        ? "translate-x-[170%] translate-y-[10px]"
        : "translate-x-0";

    return (
        <div className={`${baseClass} ${isActive ? activeClass : sideClass} ${positionClass}`}>
            <div className={`${contentClass} ${isActive ? "" : "bg-opacity-50"}`}>
                <div className="w-[25px] h-[30px] sm:w-[75px] sm:h-[69px] mb-1 sm:mb-9">
                    <img src={card.icon} alt={card.name} className="w-full h-full object-contain" />
                </div>
                <div className={`text-xs sm:text-2xl font-semibold mb-5 ${isActive ? "text-white" : "text-gray-600"}`}>
                    {card.name}
                </div>
                <p className={`text-[0.35rem]  sm:text-base text-center sm:p-7 ${isActive ? " mb-7 sm:mb-16 text-white" : "line-clamp-3 mb-5 text-gray-600"}`}>
                    {card.description}
                </p>
                {isActive && (
                    <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`w-2 h-2 sm:w-5 sm:h-5 ${i < card.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.117 3.43a1 1 0 00.95.691h3.626c.969 0 1.371 1.24.588 1.81l-2.93 2.145a1 1 0 00-.364 1.118l1.117 3.43c.3.921-.755 1.688-1.539 1.118l-2.93-2.145a1 1 0 00-1.176 0l-2.93 2.145c-.783.57-1.838-.197-1.539-1.118l1.117-3.43a1 1 0 00-.364-1.118L2.674 8.858c-.783-.57-.381-1.81.588-1.81h3.626a1 1 0 00.95-.691l1.117-3.43z" />
                            </svg>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardSection;

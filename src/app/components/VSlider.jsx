"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./VSlider.module.css";

export default function VSlider({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 12000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className={styles.container}>
      <div className={styles.slideWrapper}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === current ? styles.activeSlide : ""
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`${styles.dot} ${
              index === current ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

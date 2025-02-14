import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export default function StickyCursor({ stickyElement }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(
    null
  );
  const [cursorWidth, setCursorWidth] = useState(20);
  const cursorHeight = 40;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (isHovered && hoveredElement) {
        const { left, top, width, height } =
          hoveredElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        setCursorWidth(width + 10);
        mouse.x.set(centerX - width / 2 - 5);
        mouse.y.set(centerY - cursorHeight / 2);
      } else {
        setCursorWidth(20);
        mouse.x.set(clientX - cursorWidth / 2);
        mouse.y.set(clientY - cursorHeight / 4);
      }
    },
    [isHovered, hoveredElement, cursorWidth]
  );

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseOver = useCallback((e: MouseEvent) => {
    setIsHovered(true);
    setHoveredElement(e.target as HTMLElement);
  }, []);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    setHoveredElement(null);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    if (stickyElement.current) {
      stickyElement.current.forEach((item: any) => {
        item.addEventListener("mouseover", manageMouseOver);
        item.addEventListener("mouseleave", manageMouseLeave);
      });
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);

      if (stickyElement.current) {
        stickyElement.current.forEach((item: any) => {
          item.removeEventListener("mouseover", manageMouseOver);
          item.removeEventListener("mouseleave", manageMouseLeave);
        });
      }
    };
  }, [manageMouseMove]);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none hidden lg:block backdrop-invert bg-white/0"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorWidth,
        height: isHovered ? cursorHeight : 20,
        borderRadius: isHovered ? "10px" : "50%",
      }}
    />
  );
}

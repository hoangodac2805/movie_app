import React from "react";
import styles from "./_heading.module.scss";
interface IHeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  sizes: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const Heading: React.FC<IHeadingProps> = ({ children, sizes, ...props }) => {
  const className = () => {
    switch (sizes) {
      case "h1":
        return styles.heading_1;
      case "h2":
        return styles.heading_2;
      case "h3":
        return styles.heading_3;
      case "h4":
        return styles.heading_4;
      case "h5":
        return styles.heading_5;
      case "h6":
        return styles.heading_6;
      default:
        return styles.heading_1;
    }
  };
  return React.createElement(
    sizes,
    (props = {
      className: className(),
      ...props,
    }),
    children
  );
};

export default Heading;

declare module "react-just-parallax" {
  import { CSSProperties, ReactNode } from "react";

  // 声明 Parallax 组件的 props 类型
  export interface ParallaxProps {
    y: number; // 例如，Parallax 组件接受一个名为 y 的数值属性
    style?: CSSProperties; // 可选的 CSS 样式属性
    children?: ReactNode; // 可选的子节点
    // 这里可以根据库的实际情况添加更多的属性声明
  }

  // 声明 Parallax 组件类型
  export const Parallax: React.FC<ParallaxProps>;
}

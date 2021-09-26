import {Component} from "vue";

interface MarqueTextProps {
  duration?: number;
  repeat?: number;
  paused?: boolean;
  reverse?: boolean;
}

declare const MarqueComponent: Component<MarqueTextProps>;
export default MarqueComponent;

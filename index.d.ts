import { Component } from 'vue';

interface MarqueeTextProps {
  duration?: number;
  repeat?: number;
  paused?: boolean;
  reverse?: boolean;
}

declare const MarqueeText: Component<MarqueeTextProps>;
export default MarqueeText;

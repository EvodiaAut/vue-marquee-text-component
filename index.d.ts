import { DefineComponent } from 'vue';

interface MarqueeTextProps {
  duration?: number;
  repeat?: number;
  paused?: boolean;
  reverse?: boolean;
}

declare const MarqueeText: DefineComponent<MarqueeTextProps>;
export default MarqueeText;

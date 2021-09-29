<script>
import { h, getCurrentInstance, useCssModule } from 'vue';

const MarqueText = (((props, ctx) => {
  const { duration = 15, repeat = 2, paused = false, reverse = false } = props;

  if (!(repeat > 0)) {
    console.warn("MarqueText 'repeat' value must be above 0")
  }

  const $style = useCssModule();
  const inst = getCurrentInstance();
  const {key } = inst.vnode
  const { attrs, slots } = ctx;

  const text = h('div', {
    class: $style.text,
    style: {
      animationDuration: `${duration}s`,
      animationDirection: reverse ? 'reverse' : undefined
    }
  }, slots)
  return h('div', {
    key,
    class: [
      attrs.class || '',
      $style.wrap
    ]
  }, [
    h('div', {
      class: [
        paused
            ? $style.paused
            : undefined,
        $style.content
      ]
    }, Array(repeat).fill(text))
  ])
}));

export default MarqueText;
</script>

<style module>
.wrap {
  overflow: hidden;
}
.content {
  width: 100000px;
}
.text {
  animation-name: animation;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  float: left;
}
.paused .text {
  animation-play-state: paused
}
@keyframes animation {
  0% { transform:translateX(0); }
  100% { transform:translateX(-100%); }
}
</style>

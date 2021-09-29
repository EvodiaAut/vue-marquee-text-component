<script>
import { h, useCssModule } from 'vue'

const MarqueText = ((({
  duration = 15, repeat = 2, paused = false, reverse = false
}, { slots }) => {
  const $style = useCssModule()

  return h('div', { class: [$style.wrap] }, [
    h('div', {
      class: [
        paused
          ? $style.paused
          : undefined,
        $style.content
      ]
    }, Array(repeat).fill(
      h('div', {
        class: $style.text,
        style: {
          animationDuration: `${duration}s`,
          animationDirection: reverse !== false
            ? 'reverse'
            : undefined
        }
      }, slots)
    ))
  ])
}))

export default MarqueText
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

<script>
  export default {
    name: 'MarqueeText',
    functional: true,
    props: {
      duration: {
        type: Number,
        default: 15
      },
      repeat: {
        type: Number,
        default: 2,
        validator: function (val) {
          return val > 0
        }
      },
      paused: {
        type: Boolean,
        default: false
      },
      reverse: {
        type: Boolean,
        default: false
      }
    },
    render(h, { $style, props: { duration, repeat, paused, reverse }, children, data: { staticClass, key, on } }) {
      const text = h('div', {
        class: $style.text,
        style: {
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : undefined
        }
      }, children)

      return h('div', {
        key,
        on,
        class: [
          staticClass,
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
    }
  }
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

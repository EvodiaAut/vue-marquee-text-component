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
          return val >= 2
        }
      }
    },
    render(h, { $style, props: { duration, repeat }, children, data: { staticClass } }) {
      const text = h('div', {
        class: $style.text,
        style: {
          animationDuration: `${duration}s`
        }
      }, children)

      return h('div', {
        class: [
          staticClass,
          $style.wrap
        ]
      }, [
        h('div', {
          class: $style.content
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

  @keyframes animation {
    0% { transform:translateX(0); }
    100% { transform:translateX(-100%); }
  }
</style>

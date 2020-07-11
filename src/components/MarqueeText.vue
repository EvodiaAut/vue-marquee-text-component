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
      },
      paused: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: ''
      }
    },
    render(h, { $style, props: { duration, repeat, paused, direction }, children, data: { staticClass, key } }) {
       // console.log(h, $style, duration, repeat, paused, children, staticClass, key);
       const text = h('div', {
          class: $style.text,
          style: {
             animationDuration: `${duration}s`
          }
       }, children)
        return h('div', {
          key,
          class: [
             staticClass,
             $style.wrap
          ]
       }, [
          h('div', {
             class: [
                paused ? $style.paused : undefined,
                $style.content,
                direction === 'vertucal' ? $style.vertucal : undefined
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
  .vertucal.content {
     height: 100000px;
     width: 0;
  }
  .vertucal .text{
     animation-name: animationvertucal;
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
  @keyframes animationvertucal {
      0% { transform:translateY(0); }
      100% { transform:translateY(-100%); }
  }
</style>

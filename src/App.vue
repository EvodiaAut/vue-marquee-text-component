<template>
  <div id="app">
    <div class="bg-light py-5">
      <header class="container">
        <ul
          class="nav float-right"
        >
          <li>
            <a
              class="btn btn-primary btn-sm"
              href="https://github.com/EvodiaAut/vue-marquee-text-component"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <h1>vue-marquee-text-component</h1>
        <p class="lead">
          [<a
            href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/"
            target="_blank"
          >CSS GPU Animation</a>]
          Marquee Text for vuejs
        </p>
        <div class="d-flex flex-wrap">
          <a
            href="https://www.npmjs.com/package/vue-marquee-text-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/v/vue-marquee-text-component.svg?style=for-the-badge"
              alt="vue-marquee-text-component npm"
            >
          </a>
          <a
            href="https://github.com/EvodiaAut/vue-marquee-text-component/blob/master/LICENSE.md"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge"
              alt="vue-marquee-text-component license"
            >
          </a>
          <a
            href="https://www.npmjs.com/package/vue-marquee-text-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/dt/vue-marquee-text-component.svg?style=for-the-badge"
              alt="vue-marquee-text-component npm"
            >
          </a>
        </div>
      </header>
    </div>
    <main
      class="container"
      role="main"
    >
      <section class="my-4">
        <h2 class="mb-3">
          Props
        </h2>
        <div class="table-responsive">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">
                  Name
                </th>
                <th scope="col">
                  Description
                </th>
                <th scope="col">
                  Config
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  duration
                </th>
                <td>Animation Duration</td>
                <td><code>{ type: Number, default: 15 }</code></td>
              </tr>
              <tr>
                <th scope="row">
                  repeat
                </th>
                <td>Number of repeat the Slot <b>(It's important for to short content)</b></td>
                <td><code>{ type: Number, default: 2 }</code></td>
              </tr>
              <tr>
                <th scope="row">
                  paused
                </th>
                <td>The property specifies whether the animation is running or paused</td>
                <td><code>{ type: Boolean, default: false }</code></td>
              </tr>
              <tr>
                <th scope="row">
                  reverse
                </th>
                <td>The animation plays backwards each cycle</td>
                <td><code>{ type: Boolean, default: false }</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="my-4">
        <h3 class="mb-3">
          Demo <small>with test data</small>
          <button
            :class="{ 'active': isPaused }"
            class="btn btn-sm btn-outline-primary ml-2"
            type="button"
            @click="isPaused = !isPaused"
          >
            Pause
          </button>
        </h3>
        <MarqueeText
          :duration="45"
          :repeat="3"
          :paused="isPaused"
          class="py-2 bg-dark text-white"
        >
          <span class="badge badge-success ml-2">0,38%</span> ATX
          <span class="badge badge-danger ml-2">0,16%</span> DAX
          <span class="badge badge-success ml-2">0,04%</span> TecDax
          <span class="badge badge-danger ml-2">0,19%</span> MDAX
          <span class="badge badge-success ml-2">0,03%</span> ESTX50
          <span class="badge badge-info ml-2">0,00%</span> NIKKEI
          <span class="badge badge-success ml-2">0,03%</span> EUR/CHF
        </MarqueeText>
        <MarqueeText
          :duration="3"
          :repeat="3"
          :paused="isPaused"
          class="py-2 bg-dark text-white mt-2"
        >
          <span class="badge badge-success ml-2">0,38%</span> ATX
          <span class="badge badge-danger ml-2">0,16%</span> DAX
          <span class="badge badge-success ml-2">0,04%</span> TecDax
          <span class="badge badge-danger ml-2">0,19%</span> MDAX
          <span class="badge badge-success ml-2">0,03%</span> ESTX50
          <span class="badge badge-info ml-2">0,00%</span> NIKKEI
          <span class="badge badge-success ml-2">0,03%</span> EUR/CHF
        </MarqueeText>
        <MarqueeText
          :duration="20"
          :paused="isPaused"
          reverse
          class="py-2 mt-2 bg-light"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
          ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </MarqueeText>
      </section>
      <section class="my-4">
        <h4 class="mb-3">
          Listening to Events: Example - Stop on mouse hover
        </h4>
        <MarqueeText
          :repeat="3"
          :paused="isPaused"
          class="py-2 bg-dark text-white mt-2"
          @mouseenter="isPaused = !isPaused"
          @mouseleave="isPaused = false"
        >
          <span class="badge badge-success ml-2">0,38%</span> ATX
          <span class="badge badge-danger ml-2">0,16%</span> DAX
          <span class="badge badge-success ml-2">0,04%</span> TecDax
          <span class="badge badge-danger ml-2">0,19%</span> MDAX
          <span class="badge badge-success ml-2">0,03%</span> ESTX50
          <span class="badge badge-info ml-2">0,00%</span> NIKKEI
          <span class="badge badge-success ml-2">0,03%</span> EUR/CHF
        </MarqueeText>
      </section>
      <section class="my-4">
        <h4 class="mb-3">
          To small content
        </h4>
        <p class="font-weight-bold mb-0">
          use prop <code>{ :repeat="NUMBER" }</code> when you know the content is not wider than parent
        </p>
        <p class="font-italic">
          Default we clone default slot two times
        </p>
        <MarqueeText :duration="1">
          <span class="badge badge-success">START</span>
          Short text =(
          <span class="badge badge-danger">END</span>
        </MarqueeText>
        after add prop <code class="font-weight-bold">{ :repeat="10" }</code>
        <MarqueeText
          :duration="1"
          :repeat="10"
        >
          <span class="badge badge-success">START</span>
          Short text =(
          <span class="badge badge-danger">END</span>
        </MarqueeText>
      </section>
    </main>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MarqueeText from './components/MarqueeText.vue'

export default defineComponent({
  name: 'App',
  components: {
    MarqueeText
  },
  setup() {
    return {
      isPaused: ref(false)
    }
  }
})
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';

  table code {
    white-space: nowrap;
  }
</style>

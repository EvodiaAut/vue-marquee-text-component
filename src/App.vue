<template>
  <div
    id="app"
    class="container my-5"
  >
    <header class="pb-5 border-bottom">
      <ul
        class="nav float-right"
      >
        <li
          class="nav-item"
        >
          <a
            class="btn btn-primary nav-link"
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
          target="_blank">CSS GPU Animation</a>]
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
    <main
      class="my-5"
      role="main"
    >
      <section class="my-5">
        <h2 class="mb-3">Props</h2>
        <div class="table-responsive">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Config</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">duration</th>
                <td>Animation Duration</td>
                <td><code>{ type: Number, default: 15 }</code></td>
              </tr>
              <tr>
                <th scope="row">repeat</th>
                <td>Number of repeat the Slot <b>(It's important for to short content)</b></td>
                <td><code>{ type: Number, default: 2 }</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="my-5">
        <h3 class="mb-3">Demo</h3>
        <marquee-text
          :duration="30"
          class="my-3"
        >
          <span class="badge badge-success">START</span>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
          <span class="badge badge-danger">END</span>
        </marquee-text>
        <code>use prop repeat when you know the content is not wider that parent</code>
        <marquee-text>
          <span class="badge badge-success">START</span>
          Short text =(
          <span class="badge badge-danger">END</span>
        </marquee-text>
        <code>{ :repeat="6" }</code>
        <marquee-text
          :repeat="6"
        >
          <span class="badge badge-success">START</span>
          Short text =(
          <span class="badge badge-danger">END</span>
        </marquee-text>
      </section>
    </main>
  </div>
</template>

<script>
  import MarqueeText from './components/MarqueeText.vue'

  export default {
    name: 'App',
    components: {
      MarqueeText
    }
  }
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';

  body {
    background-color: #f8f9fa;
  }

  code {
    white-space: nowrap;
  }
</style>

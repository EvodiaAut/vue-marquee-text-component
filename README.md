# vue-marquee-text-component

> [[CSS GPU Animation](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/)] Marquee Text for vuejs

[![npm](https://img.shields.io/npm/v/vue-marquee-text-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-marquee-text-component)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/EvodiaAut/vue-marquee-text-component/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue-marquee-text-component.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-marquee-text-component)

## Demo

[Demo here](https://evodiaaut.github.io/vue-marquee-text-component/)

## Install

`npm install vue-marquee-text-component` or `yarn add vue-marquee-text-component`

## Usage

The most common use case is to register the component globally.

```js
// in your main.js or similar file
import Vue from 'vue'
import MarqueeText from 'vue-marquee-text-component'

Vue.component('marquee-text', MarqueeText)
```

Alternatively you can do this to register the components:

```js
// HelloWorld.vue
import MarqueeText from 'vue-marquee-text-component'

export default {
  name: 'HelloWorld',
  components: {
    MarqueeText
  }
}
```

On your page you can now use html like this:

```html
<!-- simple marquee text -->
<marquee-text>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
</marquee-text>

<!-- short text need more duplicates -->
<marquee-text :repeat="10">
  Short text =(
</marquee-text>

<!-- slow duration -->
<marquee-text :duration="30">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
</marquee-text>
```

## Props

|Prop|Type|Default|Description
|-|-|-|-|-|
|duration|Number|15|Animation Duration
|repeat|Number|2|Number of repeat the Slot (It's important for to short content)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

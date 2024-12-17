<script setup>
import {watchEffect} from "vue";

let {resultList, radius} = defineProps({
  resultList: {
    type: Array,
    required: true
  },
  radius: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    default: 300
  },
  height: {
    type: Number,
    default: 300
  }
})

let XScale = []
for (let i = -6; i < 6; ++i) {
  if (i === 0)
    XScale.push('');
  else
    XScale.push(i)
}
let YScale = []
for (let i = 6; i > -6; --i) {
  if (i === 0)
    YScale.push('');
  else
    YScale.push(i)
}

watchEffect(() => {
  console.log(radius);
})

</script>

<template>
  <svg class="graph" :height="`${height}`" :width="`${width}`" xmlns="http://www.w3.org/2000/svg">
    <!-- figure -->
    <path class="area" :transform="`translate(${width / 2}, ${height/ 2}) scale(${radius ? radius / 2 : 2}, ${radius ? radius/2 : 2})`"
          :d="`m -${width * 0.5 / 6} 0
                    l 0 ${height / 6}
                    l ${width * 0.5 / 6} 0
                    l 0 -${height / 6}
                    l ${width / 6} 0
                    a ${width / 6} ${height / 6} 0 0 0 -${width / 6} -${height / 6}
                    l -${width * 0.5 / 6} ${height / 6}
                    Z`" />

    <!-- lines -->
    <line x1="0" :y1="`${height / 2}`" :x2="`${width}`" :y2="`${height / 2}`" />
    <line :x1="`${width / 2}`" y1="0" :x2="`${width / 2}`" :y2="`${height}`" />
    <polygon :points="`${width / 2},0
                             ${width / 2 - 4},10
                             ${width/ 2 + 4},10`"
             stroke="black" />
    <polygon :points="`${width},${height / 2}
                             ${width - 10},${height / 2 - 4}
                             ${width - 10},${height / 2 + 4}`"
             stroke="black" />

    <text :x="`${width - 15}`" :y="`${height / 2 - 10}`">X</text>
    <text :x="`${width / 2 + 10}`" y="15">Y</text>

    <template v-for="(label, index) in ['-R', '-R/2', '', 'R/2', 'R']">
      <line class="default" :x1="`${width * (index + 1) / 6}`" :y1="`${height / 2 - 4}`"
            :x2="`${width * (index + 1) / 6}`" :y2="`${height / 2 + 4}`"
            v-show="radius == null" />
      <text class="default" :x="`${width * (index + 1) / 6 - 5}`" :y="`${height / 2 - 10}`"
            v-show="radius == null">
        {{ label }}
      </text>
    </template>
    <template v-for="(label, index) in ['R', 'R/2', '', '-R/2', '-R']">
      <line class="default" :x1="`${width / 2 - 4}`" :y1="`${height * (index + 1) / 6}`"
            :x2="`${width / 2 + 4}`" :y2="`${height * (index + 1) / 6}`"
            v-show="radius == null" />
      <text class="default" :x="`${width / 2 + 10}`" :y="`${height * (index + 1) / 6 + 4}`"
            v-show="radius == null">
        {{ label }}
      </text>
    </template>
    <template v-for="(x, index) in XScale">
      <line class="scaled" :x1="`${width * (index) / 12}`" :y1="`${height / 2 - 4}`"
            :x2="`${width * (index) / 12}`" :y2="`${height / 2 + 4}`"
            v-show="radius != null" />
      <text class="scaled"
            :x="`${width * (index) / 12 - 5}`" :y="`${height / 2 - 10}`"
            v-show="radius != null">
        {{ x }}
      </text>
    </template>
    <template v-for="(y, index) in YScale">
      <line class="scaled" :x1="`${width / 2 - 4}`" :y1="`${height * (index) / 12}`"
            :x2="`${width / 2 + 4}`" :y2="`${height * (index) / 12}`"
            v-show="radius != null" />
      <text class="scaled"
            :x="`${width / 2 + 10}`" :y="`${height * (index) / 12 + 4}`"
            v-show="radius != null">
        {{ y }}
      </text>
    </template>

    <template v-for="result in resultList">
      <circle class="point" :cx="`${width * (result.x + 6) / 12}`" :cy="`${height * (6 - result.y) / 12}`"
              :r="result.r" :hit="result.hit"
              v-show="radius === result.r"/>
    </template>
  </svg>
</template>

<style scoped>
.graph .area {
  stroke: #615DEC;
  fill: #76E2F4;
}

.graph line,
.graph polygon,
.graph text {
  stroke: #301781;
  fill: #301781;
}

.graph text {
  font-size: 1em;
}

.graph .point[hit=true] {
  fill: #615DEC;
  stroke: #615DEC;
}

.graph .point[hit=false] {
  fill: red;
  stroke: red;
}
</style>
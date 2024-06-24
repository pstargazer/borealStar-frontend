<script setup>
import { nextTick, onMounted, onUpdated } from 'vue'
const { newCard, city_data, time_factor, id } = defineProps(['newCard', 'city_data', 'time_factor','id'])
const emit = defineEmits(['delCard'])


function toCelsius(value){
  return Math.trunc(value - 273)
}


nextTick(async ()=>{
  console.log(await city_data);
})

</script>

<template>

  <div v-if="city_data" class="card card-gradient">
    
    <h2 class="font-kelly text-4xl font-bold">{{JSON.parse(city_data['spot']['names'])[0]['name']}}</h2>
    <p class="font-lato text-5xl">{{toCelsius(JSON.parse(city_data['weather'][0]['response'])['main']['temp'])}}°</p>
    <!-- <p>Чувствуется как {{toCelsius(props.city_data.spot.main.feels_like)}}°</p>
    <p>Давление {{toCelsius(props.city_data.spot.main.pressure)}} hPa</p>  -->
  </div>
  <div v-else class="card new-card flex-col">
    <h2 class="text-md">+</h2>
    <p class="text-center">Добавить точку</p>
  </div>
</template>

<style lang="scss">
.card {
  height: 17em;
  color: white;
  padding: 1.7em;
  border-radius: 2em;
  min-width: 22em;
}

.card-image {
  // background: url('')
}

.card-gradient {
  // position: relative;
  --time-factor-skyLum: 0.5;
  /**/
  --time-factor-skyHue: 1;
  /* 5 dawn  1 twilight*/
  --time-factor-horizonLum: 0.5;
  --time-factor-horizonHue: 1;
  --time-factor-groundLum: 0.2;

  --sky-colors: linear-gradient(
    hsl(
        calc(200 + var(--time-factor-skyHue) * 100),
        42%,
        calc(32% + var(--time-factor-skyLum) * -20%)
      )
      20%,
    hsl(
      calc(200 + var(--time-factor-horizonHue) * 80),
      33%,
      calc(50% + var(--time-factor-horizonLum) * -20%)
    ),
    hsl(97, 65%, calc(31% + var(--time-factor-groundLum) * -30 * 1%)) 90%
  );

  background: var(--sky-colors);


  h2 {
    margin: 0;
  }

  .sun {
    // position: absolute;
  }
}

.new-card {
  background: 0 !important;
  border: 0.4em dashed gray;
  color: gray;
  display: flex;
  cursor: pointer;

  h2{
    font-size: 8em;
    margin: auto;
    max-height: fit-content;
    max-width: fit-content;
    align-self: center;
    // height: 100%;
  }
}
</style>

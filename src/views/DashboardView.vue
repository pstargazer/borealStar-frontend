<script setup>
import { storeToRefs } from 'pinia'
import WeatherCard from '@/components/WeatherCard.vue'
import { computed, onMounted, onUpdated, reactive, watch } from 'vue'
import axios from 'axios'
import { useWeatherStore } from '/src/stores/weather'

// const { addCity } = useWeatherStore()

const { cities, weather } = storeToRefs(useWeatherStore())
const APP_ID = '894dbd1df920520cb8a520e09f6fb708'

function addCity() {
  let city = prompt()
  console.log(weather)
  axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APP_ID}`)
    .then((response) => {
      city = response.data[0]
      console.log(city)
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${APP_ID}`
        )
        .then((response2) => {
          weather.value.push(response2.data)
          console.log(weather)
        })
    })
    .catch((err) => console.log(err))
}

let greeting = computed(() => {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  // alert(currentHour)
  let name = 'lorem'

  if (currentHour < 5) return `Доброй ночи, ${name}`
  else if (currentHour < 12) return `Доброе утро, ${name}`
  else if (currentHour < 17) return `Добрый день, ${name}`
  else return `Добрый вечер, ${name}`
})

function deleteCard(id){
  // alert(id)
  let dialog = confirm(`Вы точно хотите удалить? ${id}`)
  if(dialog){
    alert()
    // let newWeather = weather.value.filter(el=>{
    //   if(id === el.id) return false;
    //   else return true;
    // })
    let newWeather = []
    weather.value.splice(0,weather.length, newWeather)
  }
}


onUpdated(() => {
  console.log(weather)
})
let a = 0
</script>

<template>
  <main class="bg-night-bg_lighter dark:bg-night-bg_lighter">
    <div class="container">
      <h1 class="font-kelly">{{ greeting }}</h1>
      <div class="weatherlist py-5">
        <WeatherCard v-for="city in weather" :newCard="false" :key="city" @delCard="deleteCard" :id="city.id" :city_data="city" />
        <WeatherCard @click="addCity" :city_data="false" :time_factor="3" :newCard="true" />
      </div>
    </div>
    <div class="gcse-search"></div>
  </main>
</template>

<style lang="scss">
.weather-card {
  // --time-factor-skyLum: !important;
}
.weatherlist {
  display: flex;
  // flex-direction: row-reverse;
  justify-content: flex-start;
  gap: 1.5em;
  overflow-x: scroll;
}

.weatherlist ::-webkit-scrollbar {
  // @apply bg-current-bg;
}
</style>

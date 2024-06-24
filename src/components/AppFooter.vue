<template>
    <footer>
        <div class="container">
            <a class="logo" href="https://openweathermap.org/">
                <p>
                    Powered by
                </p>
                <img src="../../src/assets/img/OWM_logo.png" alt="" srcset="">
            </a>
        </div>
    </footer>
</template>


<style scoped>
footer {
    box-sizing: content-box;
    /* justify-self: end flex-end; */
    /* align-self: end; */
    @apply h-fit w-full;
    position:fixed;
    bottom:0;
}

footer {
    @apply flex max-h-fit;
    /* min-height: 200px; */
}

.logo {
  @apply max-h-16 flex items-start flex-col m-3 max-w-fit;
  flex-wrap: npwrap;
  min-height: fit-content;
}

.logo img {
    @apply h-10;
}

.logo > *{
    @apply h-full;
}

</style>
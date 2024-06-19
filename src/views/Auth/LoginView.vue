<template> 
<div class="flex flex-col justify-items-center items-center">
    <h1 class="text-2xl">Войти</h1>
    <form action="" method="post">
        <!-- email -->
        <div class="mt-4">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша почта</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
            <!-- </div> -->
        </div>
        <!-- email end -->
        <!-- password-->
        <div class="my-4">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
            <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
            <!-- </div> -->
        </div>
        <!-- password end -->

        <router-link to="/register" class="text-dark border border-black dark:border-white flex w-full justify-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Регистрация</router-link>

        <!-- checkbox end -->
        <button type="submit" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Войти</button>
    </form>
</div>
</template>
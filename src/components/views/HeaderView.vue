<template>

    <nav class="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 start-0  dark:border-gray-600">
        <!-- navbar body -->
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between space-x-4 space-y-4 mx-auto p-4">

            <!-- logo -->
            <div class="flex-shrink-0 flex sm:justify-center sm:items-center ">
                <img src="/src/assets/images/leo.png" class="max-w-full h-auto rounded-full" width="100">
            </div>

            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                <button @click="toggleNavbar"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">

                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

            </div>
            <div :class="['items-center justify-between w-full md:flex md:w-auto md:order-1', isNavbarVisible ? '' : 'hidden']"
                id="navbar-sticky">


                <ul
                    class="flex flex-col p-2 mt-4 text-xl font-medium border border-gray-100 rounded-lg md:space-x-8 sm:space-x-reverse rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:ml-4">

                    <li class="my-1">
                        <a href="#"
                            class="block py-1 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                            aria-current="page">Home</a>

                    </li>

                    <li class="my-1">
                        <a href="#"
                            class="block py-1 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contents
                        </a>
                    </li>

                    <li class="my-1">
                        <a href="#"
                            class="block py-1 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li class="relative my-1">
                        <a href="#"
                            class="block py-1 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            @mouseenter="showDropdown = true" @mouseleave="showDropdown = hideDropdown">
                            Sections
                        </a>
                        <ul v-show="showDropdown" @mouseenter="showDropdown = true" @mouseleave="hideDropdown"
                            class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Paisagens
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">O
                                    Mundo
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Emoções
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Egocentrismo
                                </a>
                            </li>
                        </ul>
                    </li>



                </ul>

                <div class="block w-full text-center py-2 mt-5">
                    <button v-if="isDark" class="block py-2" @click="$emit('toggle-dark')">
                        <MoonIcon class="h-7 w-7 text-slate-300 hover:text-button-color" />
                    </button>
                    <button v-else @click="$emit('toggle-dark')" class="block py-2">
                        <SunIcon class="h-7 w-7 text-slate-400 hover:text-button-color" />
                    </button>
                </div>

            </div>
        </div>
    </nav>



</template>

<script setup>
import { ref } from "vue";
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const showDropdown = ref(false)

const isNavbarVisible = ref(false);

// toggle bar
const toggleNavbar = () => {
    isNavbarVisible.value = !isNavbarVisible.value;
};

// tempo para diminuir o bug do atraso
const hideDropdown = () => {
    setTimeout(() => {
        showDropdown.value = false;
    }, 1);
};

import { useDark } from "@vueuse/core";

const { isDark } = useDark({
  selector: 'html',
});

</script>
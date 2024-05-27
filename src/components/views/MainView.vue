<template>
    <div class="col=span-4 flex-1 flex-col order-1 md:order-none">
        <div class="container mx-auto max-w-full 2xl:max-w-6xl">
            <HeaderView />
    
            <Footer />
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import HeaderView from "./HeaderView.vue";
import ThemeToggle from "./ThemeToggle.vue";
import Footer from "./Footer.vue";

const router = useRouter()


</script>
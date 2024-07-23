<template>
    <TransitionGroup name="slide-fade" tag="div" class="transition-wrapper">
        <slot></slot>
    </TransitionGroup>
</template>

<style scoped>
.transition-wrapper {
    position: relative;
    overflow: hidden; /* Esconde o overflow durante a transição */
    width: 100%;
    height: 100%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0px);
}
</style>

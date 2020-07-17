<template>
    <div>
        <h1>我是过度动画效果页面</h1>
        <p>
            <router-link :to="{name: 'Transition01'}">美女01</router-link> | 
            <router-link :to="{name: 'Transition02'}">美女02</router-link> 
        </p>
        <!-- <transition name="slide">
            <router-view class="router-view"></router-view>
        </transition> -->

        <transition mode="out-in" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutRight">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>


<style scoped>

    .router-view{
        background-color: pink;
    }

    .animate__animated {
        animation-duration: .3s;
    }

    /* .slide-enter-active,.slide-leave-to-active {
        transition: all .5s;
    }

    .slide-enter, .slide-leave-to {
        opacity: 0;
    } */
</style>


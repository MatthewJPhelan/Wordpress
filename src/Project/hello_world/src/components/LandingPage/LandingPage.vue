<template>
    <section>
        <div class="information">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="about">
                <slot name="about"></slot>
            </div>
            <div class="contact">
                <slot name="contact"></slot>
            </div>
        </div>
        <div class="titleImage">
            <slot name="image"></slot>
        </div>
    </section>
</template>
<script lang="ts">
export default {
    name: 'Landing Page'   
}
</script>
<style>
    .title {
        color: red;
    }
</style>

<style lang="sass">
    @import ../../sass/imports/_extend

    a
        display: inline-block
        font-size: $pixel * 3
</style>

<template lang="pug">
    router-link(:to='href') {{title}}
</template>

<script>
    export default {
        props: ['href', 'title']
    }
</script>

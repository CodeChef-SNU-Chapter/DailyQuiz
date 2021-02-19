<template>
    <div id="global-layout" class="flex flex-col min-h-full">
        <NavBar v-bind:NavItems="this.$site.themeConfig.nav"/>

        <component :is="layout"/>

        <Footer />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        NavBar,
        Footer,
    },
    computed: {
        layout () {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    return this.$frontmatter.layout
                }
                return 'Layout'
            }
            return 'NotFound'
        }
    },
}
</script>

<style lang="stylus">
@import '../styles/theme.styl';
</style>
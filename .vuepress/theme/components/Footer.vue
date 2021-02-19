<template>
    <div class="p-4 pr-8 bg-gray-900 w-screen mt-auto flex flex-col sm:flex-row items-center justify-between">
        <span class="mx-2 flex-none sm:flex-1 text-gray-100">CodeChef SNU Chapter</span>
        <SocialBox class="flex items-center flex-none sm:flex-1 justify-end" :s="6" :m="2"/>
    </div>
</template>

<script>
import SocialBox from './SocialBox.vue';

export default {
    name: 'Footer',
    components: {
        SocialBox,
    }
}
</script>
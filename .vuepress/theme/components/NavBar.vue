<template>
    <nav class="w-full pt-8 px-6">
        <div class="max-w-6xl mx-auto flex sm:items-center justify-between">
            <a href='/' class="no-underline">
                <ul class="flex items-center">
                    <img class="rounded-full h-16 w-16 block" src="ccsnuc.jpeg">
                    <span class="px-2 font-bold text-lg text-black-900">CodeChef SNU Chapter</span>
                </ul>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0K1Sb9Zz9u5IwYJZh1bY4zaZ0_aUrZSXmFL65_RQzw9Bo9g/viewform">Join Chapter</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['NavItems'],
}
</script>

<template>
    <div class="w-full pt-8 px-6 flex flex-col justify-center items-center">
        <Content class="text-center"/>
        <div class="mt-6 p-6 font-semibold container flex flex-col items-center">
            <a href="https://discord.com/channels/777126470946390017/810770624729317406">
                <button class="transition-colors duration-200 bg-blue-900 hover:bg-blue-700 py-3 px-6 rounded-sm text-gray-100">Play On Discord</button>
            </a>
            <div class="m-6">
                <hr class="border-2 border-black w-full">
                <span>OR</span>
                <hr class="border-2 border-black w-full">
            </div>
            <p class="align-center text-xl">Contribute Own Question</p>
            <ContributionForm />
        </div>
    </div>
</template>

<script>
import ContributionForm from '../components/ContributionForm.vue';

export default {
    name: 'DQLayout',
    components: {
        ContributionForm,
    },
}
</script>
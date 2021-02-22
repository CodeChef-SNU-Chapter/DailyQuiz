<template>
    <form class="mt-6" enctype='application/json' v-on:submit.prevent="submitQuestion()" v-if="showForm">
        <div class="flex flex-col mb-4">
            <label for="username">Username</label>
            <input type="text" v-model="username" name="username" id="username" required>
        </div>
        <div class="flex flex-col mb-4">
            <label for="question">Question</label>
            <textarea v-model="question" name="question" id="question" placeholder="MARKDOWN (Discord) formatting is supported!" required>
            </textarea>
        </div>
        <div class="flex flex-col mb-4">
            <label for="options">Options</label>
            <input v-for="n in 4" type="text" v-model="options[numToLit[n]]" name="options" v-bind:id="numToLit[n]" v-bind:placeholder="'option ' + numToLit[n]" required>
        </div>
        <div class="mb-4 flex justify-between">
            <label for="correct">Correct Option</label>
            <span>
                <span v-for="n in 4" class="mb-2 pr-2">
                    <input type="radio" name="correct" v-bind:id="n" v-bind:value="numToLit[n]" v-model="answer" required>
                    <span class="uppercase" v-bind:for="n">{{ n }}</span>
                </span>
            </span>
        </div>
        <div class="flex flex-col mb-4">
            <label for="explaination">Explaination</label>
            <textarea v-model="explaination" name="explaination" id="explaination" placeholder="MARKDOWN (Discord) formatting is supported!" required>
            </textarea>
        </div>
        <button class="transition-colors duration-200 bg-green-700 hover:bg-green-900 block text-white uppercase text-lg mx-auto py-3 px-6 rounded-sm" type="submit" :disabled="onProgress">{{onProgress ? 'Please Wait...' : 'Submit'}}</button>
    </form>
    <div v-else="showForm">
       {{submissionResp}} Thank You for your effort.
    </div>
</template>

<script>
export default {
    name: 'ContributionForm',
    data: () => {
        return {
            username: "",
            question: "",
            options: {
                'one': '',
                'two': '',
                'three': '',
                'four': ''
            },
            answer: "",
            explaination: "",
            showForm: true,
            submissionResp: "Unfortunately, We can't process your request!",
            onProgress: false,
            numToLit: [
                'zero',
                'one',
                'two',
                'three',
                'four']
        }
    },
    methods: {
        submitQuestion: function () {
            console.log(JSON.stringify(this.$data.options));
            this.$data.onProgress = true;
            const data = {
                username: this.$data.username,
                question: this.$data.question,
                options: JSON.stringify(this.$data.options),
                answer: this.$data.answer,
                explaination: this.$data.explaination
            }
            return fetch('https://optimistic-colden-ddfef7.netlify.app/.netlify/functions/contribute', {
                body: JSON.stringify(data),
                method: 'POST'
            }).then(response => {
                response.text().then(data => {
                    this.$data.showForm = false;
                    if(data === "0") {
                        this.$data.submissionResp = "We've noted down your question!"
                    }
                })
            }).catch(e => {
                this.$data.showForm = false;
                console.log(e);
            })
        }
    }
}
</script>

<style scoped>
    input {
        @apply border py-2 px-3 mt-2 text-gray-900;
    }
    label {
        @apply mb-2 uppercase font-bold text-lg text-gray-900;
    }
    textarea {
        @apply border py-2 px-3 text-gray-900;
    }
</style>
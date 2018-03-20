<template>
    <div class="box">
        <div>{{person.name}}  {{person.age}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            person: {
                name: '张三',
                age: 18
            }
        }
    },
    computed: {

    },
    mounted() {
        this.$axios.post('http://www.mockapi.com')
            .then(res => {
                console.log('res', res);
                this.person.name = res.data.name;
                this.person.age = res.data.age;
            })
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>



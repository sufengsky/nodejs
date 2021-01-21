<template>
    <div>
        <button @click='sendData'>测试按钮</button>
    </div>
</template>

<script>
import eventBus from '../../common/eventBus'
export default {
    name: 'envent_bus_ca',
    data() {
        return {

        }
    },
    methods: {
        sendData() {
            this.$router.push({ path: '/bus/cb' })
        }
    },
    mounted() {
        console.log(this.$route.query.param)
    },
    created() {
        this.$emit("viewIn", "测试页标题1")
    },
    beforeDestroy() {
        eventBus.$emit('amsg', '信息')
    }
}
</script>

<style scoped>
</style>

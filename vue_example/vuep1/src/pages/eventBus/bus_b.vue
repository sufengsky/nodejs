<template>
    <div>
        {{collapseData}}
    </div>
</template>

<script>
import eventBus from '../../common/eventBus'
export default {
    name: 'envent_bus_cb',

    data() {
        return {
            collapseData: 'ab'
        }
    },
    methods: {

    },
    created() {
        eventBus.$on('amsg', msg => {
            console.log(msg);
            this.collapseData = msg
        })
    },
    beforeDestroy() {
        eventBus.$off('amsg')
    }
}
</script>

<style scoped>
</style>

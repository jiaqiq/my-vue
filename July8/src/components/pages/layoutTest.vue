<template>
    <div class="box">
        <layout1>
            <template slot="layout_l">
                <h1>左边</h1>
            </template>
            <template slot="layout_r">
                <h1>右边</h1>
            </template>
        </layout1>
    </div>
</template>

<script>
import Layout1 from '@/components/common/layout/layout1'
export default {
    components: {
        Layout1
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>



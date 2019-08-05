<template>
    <v-layout>
        <v-flex class="fixer">
            <div class="octa-bg-eventid">
                <v-parallax height="400" :src="data.img">
                    <div class="octa-whitespace">
                        <Timer :date="data.date" :end="data.enddate"/>
                    </div>
                </v-parallax>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import Timer from '~/components/timer.vue';
    export default {
        props:['data'],
        components: {
            Timer
        }
    }
</script>

<style scoped>
.fixer{
    z-index: 0;
}
.octa-bg-eventid{
    width: 100%;
    height: auto;
}
.octa-whitespace{
    margin: 50px 0;
}
</style>

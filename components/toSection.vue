<template>
    <div class="octa-rel">
        <v-flex class="fixer">
            <v-parallax v-if="data.button" dark height="210" :src="data.img">
                <div class="unseen">
                    <Title v-if="data.button" :button="data.button" :title="data.title"/>
                    <Title v-else :title="data.title"/>
                </div>
            </v-parallax>
            <v-parallax v-else dark height="150" :src="data.img">
                <div class="unseen">
                    <Title v-if="data.button" :button="data.button" :title="data.title"/>
                    <Title v-else :title="data.title"/>
                </div>
            </v-parallax>
        </v-flex>
        <div class="octa-abs">
            <div class="octa-container">
                <Title v-if="data.button" :button="data.button" :title="data.title"/>
                <Title v-else :title="data.title"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from '~/components/toSectionContent.vue';
    export default {
        props: ['data'],
        components:{
            Title,
        }
    }
</script>

<style scoped>
.unseen{
    opacity: 0;
}
.fixer{
    z-index: 0;
}
.octa-container{
    max-width: 960px;
    margin: auto;
}
.octa-rel{
    position: relative;
}
.octa-abs{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    background: rgba(0,0,0,0.5);
}
</style>

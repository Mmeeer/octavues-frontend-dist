<template>
    <v-layout>
        <v-flex class="fixer sizesize">
            <div class="octa-section">
                <span class="octa-wave-left"></span>
                <span class="octa-tosection-content">
                    <span class="octa-tosection-title">{{title}}</span>
                    <span class="octa-underline"></span>
                </span>
                <span class="octa-wave-right"></span>
            </div>
            <div class="octa-btn-center" v-if="button">
                <Octabutton :word="button.word" :to="button.to"/>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import Octabutton from '~/components/octa-btn.vue';
    export default {
        props: ['button', 'title'],
        components:{
            Octabutton,
        },

    }
</script>

<style scoped>

.octa-btn-center{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.octa-underline{
    width: 100%;
    height: 8px;
    background-color: #ffffff;
    border-radius: 8px;
}
.octa-tosection-title{
    color: #ffffff;
    font-size: 64px;
    font-family: 'Montserrat', 'sans-serif';
    text-transform: uppercase;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
}
.octa-tosection-content{
    display: grid;
    grid-template-rows: auto auto;
}
.octa-section{
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
}
.sizesize{
    padding: 40px 10px;
}
@media only screen and (min-width: 601px) {
    .octa-wave-left{
        transform: rotate(180deg);
    }
    .octa-wave-right, .octa-wave-left{
        padding-left: 10px;
        padding-right: 10px;
        background-image: url("../assets/home/wavy-05.png");
        background-size: contain;
        background-position: center;
    }
}
</style>

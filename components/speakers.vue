<template>
    <v-layout>
        <v-flex class="fixer">
            <span class="octa-speakers">
                <v-responsive :aspect-ratio="1/1" v-for="(item, index) in data" :key="index">
                    <nuxt-link to="#" class="octa-speaker-profile" :style="{backgroundImage: 'url(' + item.img + ')'}" >
                        <div class="octa-speaker-pro" >{{item.pro}}</div>
                        <div class="octa-speaker-name" >{{item.name}}</div>

                    </nuxt-link>
                </v-responsive>
            </span>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        props:['data'],

    }
</script>

<style scoped>
.fixer{
    z-index: 0;
}
.octa-speaker-pro{
    color: #ffffff;
    font-size: 14px;
    font-family: 'Montserrat', 'sans-serif';
    line-height: 14px;
    font-weight: 500;
    padding: 5px;
}
.octa-speaker-name{
    color: #ff2d55;
    font-size: 20px;
    font-family: 'Montserrat', 'sans-serif';
    line-height: 20px;
    font-weight: 700;
    padding-left: 5px;
}
.octa-speakers{
    width: 100%;
    display: grid;
}
.octa-speaker-profile{
    width: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column-reverse;
}
@media only screen and (min-width: 961px) {
    .octa-speaker-container{
        max-width: 960px;
    }
    .octa-speakers{
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
}
@media only screen and (min-width: 601px) and (max-width: 960px) {
    .octa-speaker-container{
        max-width: 570px;
    }
    .octa-speakers{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media only screen and (max-width: 600px) {
    .octa-speaker-container{
        max-width: 320px;
    }
    .octa-speakers{
        grid-template-columns: 1fr 1fr;
    }
}

    .octa-speaker-profile{
        height: 100%;
    }
</style>

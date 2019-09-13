<template>
    <v-layout>
        <v-flex class="fixer">
            <div class="octa-bg">
                <span class="octa-motto">
                    <span class="octa-quote-line-up">
                        <span class="octa-quote-drop"></span>
                    </span>
                    <span class="octa-quote">
                        <span>What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?</span>
                    </span>
                    <span class="octa-quote-line-down">
                        <span class="octa-quote-author">Aaron Swartz</span>
                    </span>
                </span>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.fixer{
    z-index: 0;
}
.octa-quote-author{
    color: #ffffff;
    font-family: 'Roboto', 'sans-serif';
    align-items: center;
}
.octa-quote-line-down{
    width: auto;
    background-image: url("../assets/motto/quotelinedown.png");
    background-size: contain;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.octa-quote span{
    color: #ffffff;
    font-weight: 500;
    font-family: 'Yellowtail', 'sans-serif';
    text-align: center;
}
.octa-quote{
    margin: auto;
    text-align: center;
}
.octa-quote-drop{
    z-index: 0;
    width: 100px;
    height: 50px;
    background-image: url("../assets/motto/quote.png");
    background-position: center;
    background-size: auto;
}
.octa-quote-line-up{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    background-image: url("../assets/motto/quoteline.png");
    background-position: center;
    background-size: contain;
}
.octa-motto{
    max-width: 640px;
    display: grid;
    grid-template-rows: 114px auto 169px;
    transform: scale(0.8);
}
.octa-bg{
    height: auto;
    padding: 25px;
    background: url("../assets/3Dcube.png");
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media only screen and (min-width: 601px) {
    .octa-quote-author{
        font-size: 48px;
        line-height: 48px;
    }
    .octa-quote span{
        font-size: 36px;
        line-height: 36px;
    }
}
@media only screen and (max-width: 600px) {
    .octa-quote-author{
        font-size: 32px;
        line-height: 32px;
    }
    .octa-quote span{
        font-size: 24px;
        line-height: 24px;
    }
}
</style>

import Vue from 'vue'
import vueMq from 'vue-mq'

Vue.use(vueMq,{
    breakPoints:{
        xs: 576,
        sm: 768,
        md: 960,
        lg: 1140,
        xl: Infinity
    }
})
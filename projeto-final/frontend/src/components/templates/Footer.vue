<template>
  <footer class="footer"><span>Copyright © <strong>Curso Web Moderno</strong> 
  {{time}}</span>{{myTime()}}</footer>
</template>

<script>
export default {
    name: 'footer',
    data: function(){
        return {time : ''}
    },
    methods:{
        myTime(){
            setInterval(() =>{
                this.time = new Date().toLocaleDateString() + ' ' +
                 new Date().toLocaleTimeString();}, 1000)
        }
    }
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #ddd;
        color: #333;
        
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
    }
</style>
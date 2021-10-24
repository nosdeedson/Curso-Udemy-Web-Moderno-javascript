
<template>
    <div class="conteudo">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .conteudo{
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>
<template>
<div>
    <div id="nav">
        <router-link to="/money">
            <Icon name='money' />
            记账
        </router-link> |
        <router-link to="/labels">
            <Icon name='label' />
            标签
        </router-link> |
        <router-link to="/statistics">
            <Icon name='Statistics' />
            统计
        </router-link>
    </div>
</div>
</template>

<script lang="ts">
// import x from '../assets/icons/label.svg';
// import y from '../assets/icons/money.svg';
// import z from '../assets/icons/Statistics.svg';
// console.log(x)
// console.log(y)
// console.log(z)
// //一个一个引入

export default {

}
</script>

<style lang="scss" scoped>
#nav {
    border: 1px solid red
}
</style>

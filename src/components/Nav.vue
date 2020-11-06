<template>
<div>
    <div id="nav">
        <router-link to="/money" class="item">
            <Icon name='money' />
            记账
        </router-link>
        <router-link to="/labels" class="item">
            <Icon name='label' />
            标签
        </router-link>
        <router-link to="/statistics" class="item">
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
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;

    >.item {
        padding: 2px 0;
        width: 33.33333%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .icon {
            width: 32px;
            height: 32px;
        }
    }

    >.item.selected {
        color: red;
    }
}
</style>

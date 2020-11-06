<template>
<div>
    <div class="box">
        <div class="title">404--当前页面不存在，请检查网址是否正确</div>
        <div class="button">
            <router-link to="/">返回首页</router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    font-weight: bold;
    color: #2c3e50;

    .title {
        padding: 20px 0;
    }

    .button {
        width: 100px;
        height: 30px;
        background-color: #f60;
        line-height: 30px;
        text-align: center;

        a {
            color: #fff;
            text-decoration: none;
        }
    }
}
</style>

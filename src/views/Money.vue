<template>
<div class="nav-wrapper">
    <div class="content">
        money
    </div>
    <Nav />
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.content {
    flex-grow: 1;
    overflow: auto;
}
</style>

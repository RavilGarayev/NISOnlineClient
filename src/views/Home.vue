<template>
    <div>
        <h1>Стартовая страница</h1>

        <router-link :to="{name: 'auth'}"> 
            <el-button type="success">Авторизация</el-button>
        </router-link>
        <hr/>
        <router-link :to="{name: 'main'}"> 
            <el-button type="success">Главная страница</el-button>
        </router-link>
    </div>
</template>

<script>

export default {
}
</script>
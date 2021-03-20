<template>
    <h1>Главная страница</h1>

    <div>
        <router-link :to="{name: 'testconstructor'}"> 
            <el-button type="success">Конструктор тестов</el-button>
        </router-link>
        <hr/>
        <router-link :to="{name: 'infoconstructor'}"> 
            <el-button type="success">Модуль добавления материала</el-button>
        </router-link>
    </div>
</template>

<script>

export default {
}
</script>

<template>
    <div> 
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        :router="true"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/" >Главная страница</el-menu-item>    
        <el-menu-item index="/task">Конструктор тестов</el-menu-item>
        <el-menu-item index="/auth">Авторизация</el-menu-item>
        <el-menu-item index="/registration">Регистрация</el-menu-item>
        </el-menu>
    </div>  
</template>     

<script>
export default {
    data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="Wrapper">  
  <div class="Authorization">  
   <div class="NisLogo"></div>

<div class="Authorization__Block">
    <div class="Authorization__Text">
        Войдите в систему NIS
    </div>
    <el-input
  placeholder="Адрес электронной почты"
  v-model="login"
  class="Authorization__Inputs"
  clearable>
</el-input>
<el-input placeholder="Пароль" class="Authorization__Inputs" v-model="password" show-password></el-input>
 <el-button class="Auth__Btn" type="primary" @click="saveCloseTest">Вход</el-button>
 <el-button class="Reg__Btn" @click="beforAuth" type="text">Зарегистрироваться</el-button>
</div>
<div class="AuthImgBg"></div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { defineComponent, ref } from "vue";
export default {
  setup() {
    return {
      login: ref(""),
      password: ref("")
    };
  },
  data: () => ({
    info: null,
    login: "",
    password: "",
    saveLogin: "",
    savePassword: "",
    putID: "",
    deleteID: "",
    viewID: "",
    putLogin: "",
    putPassword: "",
    picturSrc:
      "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
  }),
  methods: {
    getTestAPI() {
      alert("Получить?");
      axios
        .get("http://localhost:56026/api/users")
        .then(res => {
          this.info = res.data;
          console.log(res.data);
          alert("Успешно");
        })
        .catch(error => {
          console.log(error);
        });
    },
    getTestAPIOne() {
      alert("Получить?");
      axios
        .get("http://localhost:56026/api/users/" + this.viewID)
        .then(resOne => {
          this.login = resOne.data.login;
          this.password = resOne.data.password;
          alert("Успешно");
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTestAPI() {
      alert("Удалить?");
      axios
        .delete("http://localhost:56026/api/users/" + this.deleteID)
        .then(resDel => {
          console.log(resDel);
          alert("Успешно");
        })
        .catch(error => {
          console.log(error);
        });
    },
    postTestAPI() {
      alert("Сохранить?");
      const str = {
        Login: this.login,
        Password: parseInt(this.password)
      };

      axios
        .post("http://10.3.0.236:8880/api/Autorization/saveSchoolboyUser", str)
        .then(response => {
          console.log(response);
          alert("Успешно");
        })
        .catch(error => {
          console.log(error);
        });
    },
    saveCloseTest() {
      const str = {
        IIN: "true"
      };
      axios
        .post("http://10.3.0.236:8880/api/Autorization/saveSchoolboyUser", str)
        .then(response => {
          console.log(response);
          alert("Успешно");
        })
        .catch(error => {
          console.log(error);
        });
    },
    beforAuth() {
      window.open("registration", "_blank");
    },
    putTestAPI() {
      alert("Обновить?");
      const data = {
        ID: parseInt(this.putID),
        Login: this.putLogin,
        Password: parseInt(this.putPassword)
      };

      axios
        .put("http://localhost:56026/api/users", data)
        .then(response => {
          alert("Успешно");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.Wrapper {
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Authorization {
  position: relative;
  width: 1440px;
  height: 700px;
  background-color: #fff;
}
.NisLogo {
  position: absolute;
  top: 59px;
  left: 108px;
  width: 194px;
  height: 39px;
  background: url("../assets/image/NisLogo.png") center no-repeat;
  background-size: cover;
}

.Authorization__Block {
  position: absolute;
  top: 138px;
  left: 311px;
  width: 452px;
  height: 441px;
  display: flex;
  flex-direction: column;
}
.Authorization__Text {
  font-family: "SFProDisplay", Helvetica, Arial;
  text-align: left;
  font-size: 36px;
  font-weight: normal;
  margin: 0 0 57px 0;
}
.Authorization__Inputs {
  margin: 0 0 30px 0;
  height: 56px !important;
  font-family: "SFProDisplay", Helvetica, Arial;
  font-size: 20px;
}
.Auth__Btn {
  text-transform: uppercase;
  height: 56px;
  margin: 27px 0 0 0;
  background: linear-gradient(0deg, #0b92de, #0b92de), #191a1e;
  font-family: "SFProDisplay", Helvetica, Arial;
  font-size: 20px;
}
.Reg__Btn {
  text-align: left;
  width: 250px;
  color: #0277b9;
  height: 24px;
  margin: 30px 0 0 20px;
  font-family: "SFProDisplay", Helvetica, Arial;
  font-size: 20px;
}

.AuthImgBg {
  position: absolute;
  top: 98px;
  left: 794px;
  width: 542px;
  height: 542px;
  background: url("../assets/image/authBack.png") center no-repeat;
  background-size: cover;
}
</style>

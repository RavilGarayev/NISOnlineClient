<template>
  <div class="Wrapper">  
    <div class="Registration" >  
    <div class="NisLogo"></div>
    <div class="Registration__Block" v-show="page_count" >
        <div class="Registration__Top">
            <div class="Registration__Top__Text">Старт</div>
            <div class="Registration__Count">1/2</div>
        </div>
        <div class="Registration__inputs">
            <el-input
                placeholder="Фамилия"
                v-model="firstName"
                class="Registration__Inputs"
                clearable>
            </el-input>
            
            <el-input
                placeholder="Имя"
                v-model="name"
                class="Registration__Inputs"
                clearable>
            </el-input>

            <el-input
                placeholder="Отчество"
                v-model="secondName"
                class="Registration__Inputs"
                clearable>
            </el-input>
        </div>
        
        <el-checkbox v-model="checked" class="Reg__Checked">Являетесь ли вы учеником?</el-checkbox>

        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <div class="Img__Text">
            Загрузи фото
        </div>

        <el-button class="Next__RegBtn" @click="nextPage" type="primary">Далее</el-button>
    </div>

    <div class="Registration__Block2"  v-show="page_count_reverse" >
        <div class="Registration__Top2">
            <div class="Registration__Top__Text">Финал!</div>
            <div class="Registration__Count">2/2</div>
        </div>
        <div class="Registration__inputs2" style="width: 451px">

            <el-input
                placeholder="Логин"
                v-model="login"
                class="Registration__input2"
                clearable>
            </el-input>

            <el-input
                placeholder="Пароль"
                v-model="password"
                class="Registration__input2"
                clearable>
            </el-input>

            <el-input
                placeholder="Повторите пароль"
                v-model="checkpassword"
                class="Registration__input2"
                clearable>
            </el-input>

        </div>
        
        <div class="Registration__inputs3" style="width: 299px">

            <el-input
                placeholder="ИИН"
                v-model="passportID"
                class="Registration__input3"
                clearable>
            </el-input>

            <el-select v-model="value" placeholder="Выберите школу">
                <el-option
                style="width: 299px "
                v-for="item in options"
                :key="item.value"
                class="Registration__input3"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>

        <div class="Registration__Langs">
            <div class="Registration__Langs__Text">
                выбери язык обучения
            </div>
            <div class="Registration__Langs__Btns">
                <el-button class="Registration__Langs__Btn">Қаз</el-button>
                <el-button class="Registration__Langs__Btn">Рус</el-button>
            </div>
        </div>

        <div class="Registration__Grade">
            <div class="Registration__Grade__Text">
                выберите свои класс
            </div>
            <div class="Registration__Grade__Btns">
                <el-button class="Registration__Grade__Btn">7</el-button>
                <el-button class="Registration__Grade__Btn">8</el-button>
                <el-button class="Registration__Grade__Btn">9</el-button>
                <el-button class="Registration__Grade__Btn">10</el-button>
                <el-button class="Registration__Grade__Btn">11</el-button>
            </div>
        </div>

        <el-button class="Registration__Back" @click="nextPage"><i class="el-icon-arrow-left"></i></el-button>
        <el-button class="Registration__Send">Готово</el-button>

    </div>

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
    firstName: "",
    name: "",
    secondName: "",
    checked: true,
    login: "",
    password: "",
    checkpassword: "",
    passportID: "",
    saveLogin: "",
    savePassword: "",
    putID: "",
    deleteID: "",
    viewID: "",
    putLogin: "",
    putPassword: "",
    page_count: true,
    page_count_reverse: false,
    picturSrc:
      "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    imageUrl: "",
    options: [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      }
    ],
    value: ""
  }),
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },
    nextPage() {
      this.page_count = !this.page_count;
      this.page_count_reverse = !this.page_count_reverse;
    },
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
  background-color: grey;
  font-family: "SFProDisplay", Helvetica, Arial;
}

.Registration {
  position: relative;
  width: 1440px;
  height: 1194px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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

.Registration__Block {
  position: relative;
  width: 751px;
  height: 441px;
}

.Registration__Block2 {
  position: relative;
  width: 451px;
  height: 852px;
}
.Registration__inputs2 {
  position: absolute;
  top: 60px;
  left: 0;
  width: 451px;
  height: 197px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.Registration__inputs3 {
  position: absolute;
  top: 330px;
  left: 0;
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.Registration__input2 {
  width: 451px;
  height: 56px;
  font-size: 20px;
  font-family: "SFProDisplay", Helvetica, Arial;
  font-style: italic;
  font-weight: 600;
  font-size: 20px;
}
.Registration__input3 {
  width: 299px;
  height: 56px;
  font-size: 20px;
  font-family: "SFProDisplay", Helvetica, Arial;
  font-style: italic;
  font-weight: 600;
  font-size: 20px;
}
.Registration__Langs {
  position: absolute;
  top: 590px;
  left: 0;
  width: 280px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.Registration__Langs__Text {
  font-style: 18px;
  margin: 0 0 0 20px;
  color: #656565;
}
.Registration__Langs__Btns {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.Registration__Langs__Btn {
  background-color: #f4c211;
  font-size: 18px;
  line-height: 21px;
  width: 130px;
  height: 56px;
  color: #000;
  font-weight: bold;
}
.Registration__Back {
  position: absolute;
  top: 0;
  left: -42px;
  width: 12px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 24px;
  border-radius: 4px;
  text-transform: uppercase;
  border: none;
}

.Registration__Grade {
  position: absolute;
  top: 480px;
  left: 0;
  width: 299px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.Registration__Grade__Text {
  font-style: 18px;
  margin: 0 0 0 20px;
  color: #656565;
}
.Registration__Grade__Btns {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.Registration__Grade__Btn {
  background-color: #f4c211;
  width: 51px;
  line-height: 60px;
  height: 51px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  color: #000;
}
.Registration__Top {
  position: absolute;
  top: 0;
  left: 0;
  width: 751px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Registration__Top2 {
  position: absolute;
  width: 451px;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Registration__Top__Text {
  font-family: "SFProDisplay", Helvetica, Arial;
  font-size: 36px;
}
.Registration__Count {
  font-family: "SFProDisplay", Helvetica, Arial;
  font-size: 23px;
}
.Registration__inputs {
  position: absolute;
  top: 100px;
  left: 0;
  width: 452px;
  height: 228px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.Registration__Text {
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
  font-size: 36px;
  font-weight: normal;
  margin: 0 0 57px 0;
}
.Registration__Inputs {
  font-family: "SFProDisplay", Helvetica, Arial;
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 30px 0;
  height: 56px !important;
}
.Registration__Send {
  position: absolute;
  left: -10px;
  top: 745px;
  width: 210px;
  height: 56px;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: linear-gradient(0deg, #0b92de, #0b92de), #191a1e;
}
.Reg__Checked {
  position: absolute;
  bottom: 21px;
  left: 0;
  width: 452px;
  height: 43px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.el-checkbox__label {
  font-family: "SFProDisplay", Helvetica, Arial;
  color: #000000 !important;
  font-weight: 600;
  font-size: 20px;
}
.el-checkbox__inner {
  background-color: #f4c211;
  width: 45px;
  height: 42px;
  font-size: 30px;
}
.el-checkbox__inner:after {
  content: "";
  top: 5px;
  left: 15px;
  width: 15px;
  height: 15px;
}

.el-checkbox__input is-checked {
  background-color: #f4c211;
  width: 45px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-uploader .el-upload {
  position: absolute;
  top: 94px;
  left: 540px;
  width: 210px;
  height: 210px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 210px;
  height: 210px;
  line-height: 210px;
  text-align: center;
}
.avatar {
  width: 210px;
  height: 210px;
  display: block;
}

.Img__Text {
  position: absolute;
  top: 317px;
  left: 540px;
  width: 210px;
  height: 21px;
  text-align: center;
  font-family: "SFProDisplay", Helvetica, Arial;
  color: #656565;
  font-weight: 600;
  font-size: 18px;
}
.Next__RegBtn {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 210px;
  text-transform: uppercase;
  height: 56px;
  margin: 27px 0 0 0;
  background: linear-gradient(0deg, #0b92de, #0b92de), #191a1e;
  font-family: "SFProDisplay", Helvetica, Arial;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 0.2em;
}
.RegImg {
  position: absolute;
  top: 98px;
  left: 794px;
}
</style>

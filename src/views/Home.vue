<template>
  <div>  
    <h1>Тест API 22222</h1>

  <el-input type="textarea" :rows="6" :resize="none"  placeholder="Введите логин" style="width: 250px;" v-model="saveLogin"></el-input ><hr/>

   <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 2}"  placeholder="Введите логин" style="width: 250px;" v-model="saveLogin"></el-input ><hr/>

  <el-input placeholder="Введите логин" style="width: 250px;" v-model="saveLogin"></el-input >

<el-input placeholder="Введите логин" style="width: 250px;" v-model="saveLogin"></el-input >

    

    
  <div class="container pt-5" id="app" v-cloak>
        <div class="card center">

            <el-button type="success" plain v-on:click="getTestAPI()">Получить всех пользователей</el-button>
            <ul>
                <li v-for="(item, index) in info" :key="index">
                    {{ index + 1 }} - {{ item.id }} {{ item.login }} - {{ item.password }}
                </li>
            </ul>
            <hr/>

            <div>
                <el-input  placeholder="Введите номер" v-model="viewID" style="width: 250px; height: 150px; margin-top: 10px;"></el-input >
            </div>
            <el-button class="primary" v-on:click="getTestAPIOne()">Получить одного пользователя</el-button>
            <div>
                {{ login }} - {{ password }}
            </div>
            <hr/>
            
            <div>
                <el-input  placeholder="Введите номер" v-model="deleteID" style="width: 250px; margin-top: 10px;"></el-input >
            </div>
            <el-button class="primary" v-on:click="deleteTestAPI()" style="margin-top: 10px">Удалить пользователя</el-button>
            <hr/>
            
            <div>
                <el-input  placeholder="Введите логин" v-model="saveLogin" style="width: 250px; margin-top: 10px;"></el-input >
                <el-input type="" placeholder="Введите пароль" v-model="savePassword" style="width: 250px; margin-top: 10px; margin-left: 15px;"></el-input >
            </div>
            <el-button class="primary" v-on:click="postTestAPI()" style="margin-top: 10px">Сохранить нового пользователя</el-button>
            <hr/>

            <div>
                <el-input  placeholder="Введите ID" v-model="putID" style="width: 250px; margin-top: 10px;"></el-input >
                <el-input  placeholder="Введите логин" v-model="putLogin" style="width: 250px; margin-top: 10px;"></el-input >
                <el-input  placeholder="Введите пароль" v-model="putPassword" style="width: 250px; margin-top: 10px; margin-left: 15px;"></el-input >
            </div>
            <el-button class="primary" v-on:click="putTestAPI()" style="margin-top: 10px">Изменить пользователя</el-button>


        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {    
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
        putPassword: ""
    }),
    methods:{
        getTestAPI() {

          alert("Сохранить?");        

          const res = {
              Password: "123",
              UserTypeID: 1,
              PersonObj: {ID: 1, LastName:"sdfsdfsdf", IIN: "1235466", Foto: "sadsadasd"},
              SchoolboyUsersObj: {ID: 1, ClassID: 1}
          }
          console.log(res);

          axios.post('http://localhost:56026/api/autorization/saveschoolboyuser', res)
            .then((response) => {             
              alert("Успешно");
            })
            .catch((error) => {
              console.log(error);
            }); 


          //   alert("Получить?");
          //   axios.get('http://localhost:56026/api/users').then(res => {
          //       this.info = res.data;
          //       console.log(res.data);
          //       alert("Успешно");
          //   })
          //   .catch((error) => {
          //     console.log(error);
          // });
        },        
        getTestAPIOne() {
            alert("Получить?");
            axios.get('http://localhost:56026/api/users/' + this.viewID).then(resOne => {
                this.login = resOne.data.login;
                this.password = resOne.data.password;
                alert("Успешно");
            })
            .catch((error) => {
              console.log(error);
          });
        },
        deleteTestAPI() {
          alert("Удалить?");
          axios.delete('http://localhost:56026/api/users/' + this.deleteID).then(resDel => {
              console.log(resDel);              
              alert("Успешно");
          })
          .catch((error) => {
              console.log(error);
          });
        },
        postTestAPI() {
          alert("Сохранить?");        

          const str = {
              Password: "sadasdasdasd",
              Login: "sdsdfsdfsd"
              // IsSchoolboy: false,
              // PersonObj: {LastName: "sdfsdfsdfsd"},
              // SchoolboyUsersObj: {}
          }

          console.log(str);

           axios.post('http://localhost:56026/api/autorization/adautorization', str)
            .then((response) => {
              console.log(response);
              alert("Успешно");
            })
            .catch((error) => {
              console.log(error);
            });

          // axios.post('http://localhost:56027/api/autorization/saveschoolboyuser', str)
          //   .then((response) => {
          //     console.log(response);
          //     alert("Успешно");
          //   })
          //   .catch((error) => {
          //     console.log(error);
          //   });
        },
        putTestAPI() {
          alert("Обновить?");
          const data = {
              ID: parseInt(this.putID),
              Login: this.putLogin,
              Password: parseInt(this.putPassword)
          }

          axios.put('http://localhost:56026/api/users', data)
            .then((response) => {
              alert("Успешно");
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }
  }
</script>

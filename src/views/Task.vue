<template>
  <div>  
    <h1>Добавление задания</h1>

    <div class="container pt-5" id="app" v-cloak>
      <div class="card center">

          <div>
            <el-select placeholder="Выберите предмет" style="width: 250px; margin-top: 10px;"></el-select  >                
          </div>
          <div>
            <el-select placeholder="Выберите тип теста" style="width: 250px; margin-top: 10px;"></el-select  >                
          </div>

          <div>
                <el-input  placeholder="Введите вопрос на рус" v-model="QuestionRU" style="width: 250px; margin-top: 10px;"></el-input >                
                <el-input  placeholder="Введите ответ №1" v-model="Answer_1" style="width: 250px; margin-top: 10px;"></el-input >
                <el-input  placeholder="Введите ответ №2" v-model="Answer_2" style="width: 250px; margin-top: 10px;"></el-input >
                <el-input  placeholder="Введите ответ №3" v-model="Answer_3" style="width: 250px; margin-top: 10px;"></el-input >
                <el-input  placeholder="Введите ответ №4" v-model="Answer_4" style="width: 250px; margin-top: 10px;"></el-input >
            </div>
            <el-button class="primary" v-on:click="saveAPI()" style="margin-top: 10px">Сохранить</el-button>
            <hr/>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    QuestionRU: "",
    Answer_1: "",
    Answer_2: "",
    Answer_3: "",
    Answer_4: ""
  }),
  methods: {
      saveAPI() {
          alert("Сохранить?");        

          const res = {
              QuestionRU: this.QuestionRU,
              StudySubjectNameID: 1,
              TestTypeID: 1,
              AnswerTestData: [
                { AnswerRU: this.Answer_1, IsTrue: true},
                { AnswerRU: this.Answer_2, IsTrue: false},
                { AnswerRU: this.Answer_3, IsTrue: false},
                { AnswerRU: this.Answer_4, IsTrue: false}
              ]           
          }
          console.log(res);

          axios.post('http://localhost:56026/api/questiontest', res)
            .then((response) => {
              console.log(response);
              this.QuestionRU = ""
              this.Answer_1 = ""
              this.Answer_2 = ""
              this.Answer_3 = ""
              this.Answer_4 = ""
              alert("Успешно");
            })
            .catch((error) => {
              console.log(error);
            });
        }
  }
}
</script>

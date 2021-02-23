<template>
  <div>  
    <h1>Добавление задания</h1>

    <div class="container pt-5" id="app" v-cloak>
      <div class="card center">

          <div>
            <el-select v-model="idSubject" placeholder="Выберите предмет">
              <el-option
                v-for="item in studySubjectName"
                :key="item.id"
                :label="item.nameRU"
                :value="item.id">
              </el-option>
            </el-select  >                
          </div>
          <div>
            <el-select v-model="idTest" placeholder="Выберите тип теста">
              <el-option
                v-for="item in testTypesArr"
                :key="item.id"
                :label="item.nameRU"
                :value="item.id">
              </el-option>
            </el-select>                
          </div>

          <div>
            <el-upload list-type="picture-card">
              <i class="el-icon-plus"></i>
            </el-upload>
            
            <el-dialog v-model="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>

          <div v-show="this.idTest === 1">
                <el-input  placeholder="Введите вопрос на рус" v-model="QuestionRU" style="width: 250px; margin-top: 10px;"></el-input >  <br/>            
                <el-input  placeholder="Введите ответ №1" v-model="Answer_1" style="width: 250px; margin-top: 10px;"></el-input >
                <el-checkbox v-model="checked1" style="margin-left: 10px">Правильный ответ</el-checkbox>  <br/> 
                <el-input  placeholder="Введите ответ №2" v-model="Answer_2" style="width: 250px; margin-top: 10px;"></el-input >
                <el-checkbox v-model="checked2" style="margin-left: 10px">Правильный ответ</el-checkbox>  <br/> 
                <el-input  placeholder="Введите ответ №3" v-model="Answer_3" style="width: 250px; margin-top: 10px;"></el-input >
                <el-checkbox v-model="checked3" style="margin-left: 10px">Правильный ответ</el-checkbox>  <br/> 
                <el-input  placeholder="Введите ответ №4" v-model="Answer_4" style="width: 250px; margin-top: 10px;"></el-input >
                <el-checkbox v-model="checked4" style="margin-left: 10px">Правильный ответ</el-checkbox>  <br/> 
            <hr/>
            <el-button class="primary" v-on:click="saveTest1()" style="margin-top: 10px">Сохранить</el-button>
            <hr/>
            </div>

            <div v-show="this.idTest === 4">
              <el-input  placeholder="Введите начало вопроса на рус" v-model="questionBeginRU" style="width: 250px; margin-top: 10px;"></el-input >  <br/>  
              <el-input  placeholder="Введите конец вопроса на рус" v-model="questionEndRU" style="width: 250px; margin-top: 10px;"></el-input >  <br/>  
              <el-input  placeholder="Введите ответ" v-model="answerInputRU" style="width: 250px; margin-top: 10px;"></el-input >  <br/>  
               
            <hr/>
            <el-button class="primary" v-on:click="saveTest4()" style="margin-top: 10px">Сохранить</el-button>
            <hr/>
            </div>            

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
    Answer_4: "",
    testTypesArr: '', 
    studySubjectName: '',
    idTest: '',
    idSubject: '',
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    questionBeginRU: "",
    questionEndRU: "",
    answerInputRU: ""
  }),
  methods: {
    saveTest1() {
        alert("Сохранить?");        

        const res = {
            QuestionRU: this.QuestionRU,
            StudySubjectNameID: this.idSubject,
            TestTypeID: this.idTest,
            AnswerTestData: [
              { AnswerRU: this.Answer_1, IsTrue: this.checked1},
              { AnswerRU: this.Answer_2, IsTrue: this.checked2},
              { AnswerRU: this.Answer_3, IsTrue: this.checked3},
              { AnswerRU: this.Answer_4, IsTrue: this.checked4}
            ]           
        }

        axios.post('http://localhost:56026/api/questiontest/savequestiontest', res)
          .then((response) => {
            console.log(response);
            this.QuestionRU = ""
            this.Answer_1 = ""
            this.Answer_2 = ""
            this.Answer_3 = ""
            this.Answer_4 = ""
            this.idTest = ''
            this.idSubject = ''
            this.checked1 = false
            this.checked2 = false
            this.checked3 = false
            this.checked4 = false
            alert("Успешно");
          })
          .catch((error) => {
            console.log(error);
          });
    },
    saveTest4() {
      const res = {
        StudySubjectNameID: this.idSubject,
        TestTypeID: this.idTest,
        QuestionBeginRU: this.questionBeginRU,
        QuestionEndRU: this.questionEndRU,
        AnswerInputRU: this.answerInputRU        
      }

      console.log(res);

      axios.post('http://localhost:56026/api/questiontest/saveinputTest', res)
          .then((response) => {
            console.log(response);
            this.questionBeginRU = ""
            this.questionEndRU = ""
            this.answerInputRU = ""
            this.idTest = ''
            this.idSubject = ''
            alert("Успешно");
          })
          .catch((error) => {
            console.log(error);
          });
    }
  },
  mounted: function(){
        axios.get('http://localhost:56026/api/QuestionTest/dicTestTypes').then(res => {
                this.testTypesArr = res.data;
            })
            .catch((error) => {
              console.log(error);
        });
         axios.get('http://localhost:56026/api/QuestionTest/dicStudySubjectName').then(res => {
              this.studySubjectName = res.data;
          })
          .catch((error) => {
            console.log(error);
        });
  }
}
</script>

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
          <hr/>
          
          <div v-show="this.idTest === 1">
              Добавить вопрос<br/>    
              <el-input  placeholder="Введите вопрос на рус" v-model="QuestionRU" style="width: 250px; margin-top: 10px;"></el-input >
              <hr/>
              Добавьте ответы <br/>              
              <el-input  placeholder="Введите ответ" v-model="Answer_1" style="width: 250px; margin-top: 10px;"></el-input >
              <el-checkbox v-model="checked1" style="margin-left: 10px">Правильный ответ</el-checkbox>  <br/> 
              <div>
                <el-button class="primary" v-on:click="addAnswer()" style="margin-top: 10px">Добавить</el-button>
              </div>
              <div>  
                  <li v-for="answer in answerTestData" :key="answer.AnswerRU">
                    {{ answer.AnswerRU }} - {{ answer.IsTrue }}
                  </li>                    
              </div>
          <hr/>
          <el-button class="primary" v-on:click="saveTest1()" style="margin-top: 10px">Сохранить</el-button>
          <hr/>
          </div>
          
          <div v-show="this.idTest === 4">
            <el-input  placeholder="Введите начало вопроса на рус" v-model="questionBeginRU" style="width: 250px; margin-top: 10px;"></el-input >    
            <el-input  placeholder="Введите середину вопроса на рус" v-model="questionEndRU" style="width: 250px; margin-top: 10px;"></el-input >  
            <el-input  placeholder="Введите конец вопроса на рус" v-model="questionEndRU" style="width: 250px; margin-top: 10px;"></el-input >  <br/>  
            <el-input  placeholder="Введите ответ (начало)" v-model="answerInputRU" style="width: 250px; margin-top: 10px;"></el-input >  
            <el-input  placeholder="Введите ответ (середин)" v-model="answerInputRU" style="width: 250px; margin-top: 10px;"></el-input >
            <el-input  placeholder="Введите ответ (конец)" v-model="answerInputRU" style="width: 250px; margin-top: 10px;"></el-input ><br/>  
              
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
    testTypesArr: '', 
    studySubjectName: '',
    answerTestData: [],
    idTest: '',
    idSubject: '',
    checked1: false,
    checked2: false,
    checked3: false,
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
            AnswerTestData: this.answerTestData
        }
        console.log(res);

        axios.post('http://localhost:56026/api/questiontest/savequestiontest', res)
          .then((response) => {
            console.log(response);
            this.QuestionRU = ""
            this.Answer_1 = ""
            this.idTest = ''
            this.idSubject = ''
            this.checked1 = false
            this.answerTestData = []
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
    },
    addAnswer(){
      this.answerTestData.push({ AnswerRU: this.Answer_1, IsTrue: this.checked1 })  
      this.Answer_1 = ''
      this.checked1 = false         
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


<template>
  <div class="Wrapper">
    <div class="CloseTest">
      <el-container style="padding: 0">
        <el-main style="padding: 0">
          <el-tabs type="card">
            <el-tab-pane label="Каз">
              <div class="Information__Block">
                <div class="CloseTestNameBlock">
                  <div class="CloseTestName">Закрытый тест</div>
                  <div class="CloseTestDescription">
                    пояснение: описательная часть <br />
                    раздела, в случаи необходимости
                  </div>
                </div>
                <div class="CloseTest__SkillsBlock">
                  <div class="SkillsBlock__Description">выберите навык</div>
                  <div class="SkillsBlock__Takes">
                    <el-select
                      v-model="info"
                      @click="getTestAPI"
                      placeholder="Select"
                    >
                      <el-option
                        v-for="(inf, index) in info"
                        :key="index"
                        :label="inf.nameRU"
                        :value="inf.nameKZ"
                      >
                        {{ inf.nameKZ }}
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div class="Question__Block">
                <div class="Question__Top">
                  Вопрос
                  <div class="Question__Count">1/10</div>
                </div>
                <el-input
                  class="Question__Input"
                  type="textarea"
                  placeholder="Введите вопрос"
                  v-model="questionKZ"
                  clearable
                  maxlength="500"
                  show-word-limit
                  :autosize="{ minRows: 6, maxRows: 6 }"
                >
                </el-input>
                <div class="Question__UploadElements">
                  <div
                    class="Question__UploadElement"
                    style="margin-right: 40px"
                  >
                    <div
                      class="Question__Picture__Logo Question__Picture__Logo__Opacity"
                    ></div>
                    <div class="Question__Upload__Picture">
                      <el-upload
                        class="upload-demo Question__Upload__Picture"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-change="handleChange"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                      >
                        <el-button size="small" type="primary" class="BtnUpload"
                          >Загрузить картинку</el-button
                        >
                        <div slote="tip" class="el-upload__tip">
                          форматы jpg/png c размером 500Кб
                        </div>
                      </el-upload>
                    </div>
                  </div>
                  <div class="Question__UploadElement">
                    <div
                      class="Question__Video__Logo Question__Picture__Logo__Opacity"
                    ></div>
                    <el-upload
                      class="upload-demo Question__Upload__Picture"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="1"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary" class="BtnUpload"
                        >Загрузить видео</el-button
                      >
                      <div
                        slote="tip"
                        class="el-upload__tip"
                        style="width: 100%"
                      >
                        форматы видео mp4/video
                      </div>
                    </el-upload>
                  </div>
                </div>
              </div>
              <div class="Answers__Block">
                <div class="Answers">
                  <div :key="answer" v-for="{ answer, i } in answers">
                    <div class="Answer">
                      <div class="Answer__Left">
                        <div class="Answer__Top">
                          <div class="Answer__Top__Wrapper">
                            <label class="Answer__Count">
                              <label @click="removeGuest(i)">
                                Ответ {{ i + 1 }}
                              </label>
                            </label>
                          </div>
                          <div class="Answer__True__Description">
                            правильный ответ
                          </div>
                        </div>
                        <el-input
                          class="Answer__Input"
                          type="textarea"
                          placeholder="Введите вопрос"
                          v-model="answer0"
                          clearable
                          maxlength="500"
                          show-word-limit
                          :autosize="{ minRows: 5, maxRows: 5 }"
                        >
                        </el-input>
                      </div>
                      <div class="Answer__Right">
                        <div class="Destroy__Answer">
                          <el-button
                            @click="removeGuest(i)"
                            type="primary"
                            icon="el-icon-close"
                            class="Answer__Close"
                          ></el-button>
                        </div>
                        <div class="Answer__Upload">
                          <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="1"
                            :on-exceed="handleExceed"
                            :file-list="fileList"
                          >
                            <el-button
                              size="small"
                              type="primary"
                              class="BtnUpload"
                              >Загрузить картинку</el-button
                            >
                            <div slote="tip" class="el-upload__tip">
                              форматы jpg/png c размером 500Кб
                            </div>
                          </el-upload>
                        </div>
                      </div>
                    </div>
                  </div>

                  <el-button class="Add__Answer" @click="addComponent"
                    >Добавить ответ +</el-button
                  >
                </div>
              </div>
              <div class="CloseTest__Footer">
                <el-button @click="postTestAPI" class="Save__Btn"
                  >Сохранить</el-button
                >
              </div>
            </el-tab-pane>
            <el-tab-pane label="Рус">Config</el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      answer0: "",
      answer1: "",
      answer2: "",
      answer3: "",
      file: null,
      info: [
        {
          nameRu: "",
          nameKZ: "",
          publicCode: "",
          beginDate: "",
        },
      ],
      textarea: "",
      Answer__Input: "",
      studySubjectName: "",
      idSubject: "",
      options: [
        {
          value: "",
          label: "",
        },
        {
          value: "",
          label: "",
        },
      ],
      value: "",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      skillValue: "",
      TestDataTypeID: null,
      questionRU: "",
      questionKZ: "",
      IsQuestionStr: "",
      answers: [],
      QuestionImage: "",
      IsQuestionImage: "",
      SkillsNameID: "",
      FeedbackTestID: "",
      CloseTestAnswer: {
        AnswerRU: "",
        AnswerKZ: "",
        AnswerImage: "",
        IsTrue: "",
        IsAnswerStr: "",
        IsAnswerImage: "",
      },
    };
  },
  methods: {
    addComponent() {
      this.answers.push("");
      console.log(this.answers.length);
    },
    removeGuest(i) {
      this.answers.splice(i, 1);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
      this.file = file;
    },
    handleExceed(files, fileList) {
      console.log("file =  ", file);
      console.log("fileList = ", fileList);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    },
    getTestAPI() {
      axios
        .get("http://10.3.0.236:8880/api/ContentTest/dicSkills")
        .then((res) => {
          this.info = res.data;
          console.log(this.info);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    postTestAPI() {
      if (this.questionKZ.length > 0) {
        this.IsQuestionStr = true;
      }
      const str = {
        QuestionKZ: this.questionKZ,
        IsQuestionStr: this.IsQuestionStr,
        CloseTestAnswerObj: [
          {
            AnswerKZ: "Answer1",
            IsTrue: true,
            IsAnswerStr: true,
          },
          {
            AnswerKZ: "Answer2",
            IsTrue: false,
            IsAnswerStr: true,
          },
        ],
      };

      axios
        .post("http://10.3.0.236:8880/api/ContentTest/saveCloseTest", str)
        .then((response) => {
          console.log(response);
          alert("Успешно");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.Wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  font-family: "SFProDisplay-Black";
  padding: 0;
}
.CloseTest {
  width: 1040px;
  background-color: #f5f5f7;
}
.Information__Block {
  width: 756px;
  height: 87px;
  margin-left: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.CloseTestNameBlock {
  width: 310px;
  height: 100%;
}
.CloseTestName {
  font-size: 20px;
  font-weight: bold;
  margin: 6px 0 0 8px;
}
.CloseTestDescription {
  font-size: 16px;
  font-weight: normal;
  margin: 6px 0 0 8px;
}
.CloseTest__SkillsBlock {
  width: 406px;
  height: 100%;
}
.SkillsBlock__Description {
  font-size: 16px;
  font-weight: normal;
  margin: 2px 0 10px 20px;
}
.SkillsBlock__Takes {
  width: 406px;
  height: 43px;
}
.Question__Block {
  width: 850px;
  height: 300px;
  border-bottom: 1px #c4c4c4 solid;
  margin: 7px 0 0 80px;
}
.Question__Top {
  width: 50%;
  height: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  margin: 0 0 0 8px;
  font-weight: 900;
}
.Question__Count {
  margin: 0 0 0 5px;
}
.Question__UploadElements {
  width: 100%;
  margin: 16px 0 16px 0;
  display: flex;
  flex-direction: row;
}
.Question__UploadElement {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 185px;
  height: 66px;
}
.Question__Picture__Logo {
  background-size: cover;
  width: 18.67px;
  height: 23.33px;
  margin: 3px 4.5px;
  opacity: 0.5;
}
.Question__Picture__Logo__Opacity:hover {
  opacity: 1;
}
.Question__Video__Logo {
  background-size: cover;
  width: 18.67px;
  height: 23.33px;
  margin: 3px 4.5px;
  opacity: 0.5;
}
.Question__Upload__Picture {
  width: 155px;
  height: 100%;
}
.Answers__Block {
  width: 850px;
  margin: 20px 0 0 80px;
}
.Answers {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.Answer {
  width: 415px;
  height: 170px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px #c4c4c4 solid;
  border-radius: 4px;
  margin-bottom: 10px;
}
.Answer:hover {
  transition: 0.6s;
  border: 1px #2f3443 solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.Answer__Left {
  width: 234px;
  margin: 0 7px 0 10px;
}
.Answer__Right {
  width: 160px;
}
.Answer__Top {
  width: 223px;
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  margin: 14px 0 10px 11px;
}
.Answer__Top__Wrapper {
  display: flex;
  flex-direction: row;
  font-size: 18px;
}
.Answer__Count {
  margin: 0 0 0 3px;
}
.Answer__True__Description {
  width: 119px;
  background: linear-gradient(0deg, #72cd8b, #72cd8b), #f4c211;
  line-height: 17px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 2px 10px 4px;
}
.Answer__Input {
  width: 234px;
  height: 100px;
  border-radius: 4px;
}
.Destroy__Answer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.Answer__Close {
  font-weight: 900;
  font-size: 20px;
  padding: 1px 5px;
  border: 1px #c4c4c4 solid;
  border-radius: 4px;
  background-color: inherit;
  color: #c4c4c4;
  margin: 4px 0 4px 0;
}
.Answer__Close:hover {
  border: 1px #2f3443 solid;
  color: #2f3443;
  background-color: inherit;
  transition: 0.6s;
}
.Answer__Upload {
  width: 100%;
}
.BtnUpload {
  background: linear-gradient(
    0deg,
    rgba(47, 52, 67, 0.5),
    rgba(47, 52, 67, 0.5)
  );
  border: 1px rgba(47, 52, 67, 0.5) solid;
  width: 100%;
}
.BtnUpload:hover {
  transition: 0.6s;
  background: #2f3443;
  border: 1px rgba(47, 52, 67, 0.5) solid;
}
.Add__Answer {
  width: 418px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #656565;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  margin: 0 0 5px 0;
}
.Add__Answer:hover {
  background-color: #2f3443;
  color: white;
}
.CloseTest__Footer {
  width: 95%;
  height: 37px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 0 15px 30px;
}
.Save__Btn {
  width: 111px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #656565;
  border-radius: 4px;
  color: white;
  font-size: 16px;
}
.Save__Btn:hover {
  background-color: #2f3443;
  color: white;
}
</style>

class Person {
    constructor(){
        this.name = null;
        this.index = null;
        this.input = null;
        this.q1 = null;
        this.q2 = null;
        this.q3 = null;
        this.q4 = null;
        this.q5 = null;
    }

    getCount(){
        var peopleCountRef = database.ref('peopleCount');
        peopleCountRef.on("value",(data)=>{
          peopleCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          peopleCount: count
        });
      }

      getAnswer1(){
          var answer1Ref = database.ref("Answer1");
          answer1Ref.on("value", (data)=>{
              Answer1 = data.val();
          })
      }

      updateAnswer1(){
          database.ref('/').update({
              Answer1: this.q1
          })
      }

      getAnswer2(){
        var answer2Ref = database.ref("Answer2");
        answer2Ref.on("value", (data)=>{
            Answer2 = data.val();
        })
    }

    updateAnswer2(){
        database.ref('/').update({
            Answer2: this.q2
        })
    }

    // getAnswer3(){
    //     var answer3Ref = database.ref("Answer3");
    //     answer3Ref.on("value", (data)=>{
    //         Answer3 = data.val();
    //     })
    // }

    // updateAnswer3(){
    //     database.ref('/').update({
    //         Answer3: this.q3
    //     })
    // }
    
      getAnswer4(){
        var answerRef = database.ref("Answer4");
        answerRef.on("value", (data)=>{
            Answer4 = data.val();
        })
      }

      updateAnswer4(){
          database.ref('/').update({
              Answer4: this.q4
          })
      }

      getAnswer5(){
        var answer5Ref = database.ref("Answer5");
        answer5Ref.on("value", (data)=>{
            Answer5 = data.val();
        })
      }

      updateAnswer5(){
          database.ref('/').update({
              Answer5: this.q5
          })
      }

}
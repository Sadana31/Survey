class Form {
    constructor(){
        this.heading = createElement("h1", "A SURVEY ON KIDS ON SOCIAL MEDIA");

        this.question1 = createElement("h2", "1) Do you have kids or know kids who are always on Social Media?");
        this.radio1 = createRadio("h3");
        this.radio1.option("YES");
        this.radio1.option("NO");
        this.button2 = createButton("NEXT");
    }

    display(){
        this.heading.position(290,20);
        
            this.question1.position(350,130);
            this.radio1.position(600,190);
            this.button2.position(600,250);

            this.button2.mousePressed(()=>{
                peopleCount+=1;
                person.updateCount(peopleCount);
                person.q1 = this.radio1.value();
                person.updateAnswer1();
                this.question1.hide();
                this.radio1.hide();
                this.button2.hide();

                this.question2 = createElement("h2", "2) Does your kid use your social accounts?");
                this.radio2 = createRadio();
                this.radio2.option("YES");
                this.radio2.option("NO");
                this.button3 = createButton("NEXT");
                this.question2.position(350,130);
                this.radio2.position(600,190);
                this.button3.position(600,250);

                this.button3.mousePressed(()=>{
                    person.q2 = this.radio2.value();
                    person.updateAnswer2();
                    this.question2.hide();
                    this.radio2.hide();
                    this.button3.hide();
                        
                    this.question4 = createElement("h2", "3) How do you feel about them using social media?");
                    this.answer1 = createInput();
                    this.button5 = createButton("NEXT");
                    this.question4.position(350,130);
                    this.answer1.position(600,190);
                    this.button5.position(600,250);

                        this.button5.mousePressed(()=>{
                            person.q4 = this.answer1.value();
                            person.updateAnswer4();
                            this.question4.hide();
                            this.answer1.hide();
                            this.button5.hide();
            
                            this.question5 = createElement("h2", "4) What do you think will help them?");
                            this.answer2 = createInput();
                            this.button6 = createButton("FINISH");
                            this.question5.position(350,130);
                            this.answer2.position(600,190);
                            this.button6.position(600,250);

                            this.button6.mousePressed(()=>{
                                person.q5 = this.answer2.value();
                                person.updateAnswer5();
                                this.greeting = createElement("h1", "Thank you!");
                                this.greeting.position(550,200);
                                this.question5.hide();
                                this.answer2.hide();
                                this.button6.hide();
                            })
                        })
                    })
                
            })
        }  

        }
    

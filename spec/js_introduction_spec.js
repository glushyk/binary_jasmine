describe("Testing our code", function () {
  var man;
  var student;
  var professor;
  
  beforeEach( function () {
    man = new Man('Andrew', 22);
    student = new Student('Sasha', 20);
    professor = new Professor('Ivan', 42, 4);
  });

  describe("Duck Type testing", function () {
      it( "should be Man", function () {
            expect(duckType(man)).toEqual('type Man');
      });

      it("should be Student", function () {
            expect(duckType(student)).toEqual('type Student');
      });

  });

  describe("man testing", function () {
      it( "should be a man name", function () {
            expect(man.name).toEqual('Andrew');
      });
      it("should be a man age", function() {
            expect(man.age).toEqual(22);
      });
      it("should check whether the man is alive", function() {
            expect(man.live()).toEqual(man.name + ' is a live');
      });

  });

  describe("student testing", function () {
      it( "should be a student name", function () {
            expect(student.name).toEqual('Sasha');
      });
      it("should be a student age", function() {
            expect(student.age).toEqual(20);
      });
      it("should check whether the student is alive", function() {
            expect(student.live()).toEqual(student.name + ' is a live');
      });
       it("should check whether the student is studying", function() {
            expect(student.study()).toEqual(student.name + ' want study in Binary Academy');
      });

  });

  describe("professor testing", function () {
      it( "should be a professor name", function () {
            expect(professor.name).toEqual('Ivan');
      });
      it("should be a professor age", function() {
            expect(professor.age).toEqual(42);
      });
      it( "should be a professor experience", function () {
            expect(professor.experience).toEqual(4);
      });
      it("should check whether the professor is alive", function() {
            expect(professor.live()).toEqual(professor.name + ' is a live');
      });
      it("should check whether the professor knows English", function() {
            expect(professor.speackEnglish()).toEqual(professor.name + ' know English language');
      });
      it("should check whether the professor teaching (yes)", function() {
            expect(professor.teach()).toEqual(professor.name + ' is our teacher');
      });
      it("should check whether the professor teaching (not)", function() {
        professor.experience = 0;
            expect(function() {
              professor.teach();
            }).toThrowError(professor.name + ' isnt our teacher');
      });
      
      

  });


  

});



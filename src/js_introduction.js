function Man(name, age) {		//Конструктор Man
	this.name = name;
	this.age = age;
}

Man.prototype.live = function() {		//Метод в Man
	return ( this.name + ' is a live');
}

function Student() {
	Man.apply(this, arguments);
}

Student.prototype = Object.create(Man.prototype);		//Создаем наследование
Student.prototype.constructor = Student;

Student.prototype.study = function() {
	return ( this.name + ' want study in Binary Academy' );
}

function Professor(name, age, experience) {
	Man.apply(this, arguments);
	this.experience = experience;
}

Professor.prototype = Object.create(Man.prototype);		//Создаем наследование
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
	if(this.experience != 0) {
		return ( this.name + ' is our teacher' );
	} else {
		throw new Error (this.name + ' isnt our teacher')
	}
}

Professor.prototype.speackEnglish = function() {
	return ( this.name + ' know English language' );
}

function duckType(obj) {
	return obj.study?'type Student':'type Man';
}



var man = new Man('Andrew', 22);
var student = new Student('Sasha', 20);
var professor = new Professor('Ivan', 42, 6);

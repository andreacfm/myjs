// classes
var Person = function(name){
	this.name = name || 'Andrea';
};
Person.prototype.getName = function(){
	return this.name;
};



var Child = function(name,lastname){
	Person.call(this,name);
	this.lastname = lastname;
};
Child.prototype = new Person();
Person.prototype.getFullName = function(){
	return this.name + ' ' +this.lastname;
};


// test person with default name
var p = new Person();
console.log('Default person name is: ' + p.getName() ) 


// test person with custom name
var p = new Person("John");
console.log('Custom person name is: ' + p.getName() ) 


// test child with default name
var c = new Child();
console.log('Child name is: ' + c.getName() ) 


// test person with custom name
var p = new Child("John", "Smith");
console.log('Child full name name is: ' + p.getFullName() ) 

// test person does not have full name

console.log('Person full name is:' p.getFullName() )



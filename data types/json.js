let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

// Преобразование obj в JSON
let json = JSON.stringify(student); // {"name": "John", "age": 30, "isAdmin": false, "courses": ["html", "css", "js"], "wife": null}
let json2 = JSON.stringify(student, ["name", "age", "isAdmin"]); // {"name":"John","age":30,"isAdmin":false}

// Преобразовать JSON в obj
let value = JSON.parse(json)

// reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

// Кастомный toJSON
let fruits = {
    orange: 5,
    banana: 10,
    apple: 2,
    toJSON(){
        return {
            orange: this.orange,
            banana: this.banana,
        }
    },
}

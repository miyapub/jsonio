var jsonio=require('../index');
/*
jsonio.write('test.json',{
    name:'tom',
    age:18
});*/

jsonio.append('test.json',{
    name:'jerry',
    age:21
});


jsonio.read('test.json',function(text){
    console.log(text);
})
// BMI CALCULATOR
var age = document.getElementById('age');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var male = document.getElementById('m');
var female = document.getElementById('f');
var form = document.getElementById('form');
var submit = document.getElementById('submit');

function validateform()
{
    if(
        age.value == '' ||
        height.value == '' ||
        weight.value == '' ||
        (male.checked == false && female.checked == false)
    ){
        var h4 = document.createElement('h4');
        var b = document.createTextNode('Masukkan semua informasi yang ada!');
        h4.appendChild(b);
        document.body.appendChild(h4);
        submit.removeEventListener('click', countBmi);
    }else{
        countBmi();
    }
}

function countBmi()
{
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push('male');
    }else if(female.checked){
        p.push('female');
    }
    form.reset();
    
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = '';
    if(bmi < 18.5){
        result = 'Kurus';
    }else if(18.5 <= bmi && bmi <= 24.9){
        result = 'Sehat';
    }else if(25 <= bmi && bmi <= 29.9){
        result = 'Kegemukan';
    }else if(30 <= bmi && bmi <= 34.9){
        result = 'Obesitas';
    }else if(35 <= bmi){
        result = 'Sangat Obesitas'
    }
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h2');
    var t = document.createTextNode(result);
    var b = document.createTextNode('IMT : ');
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    submit.removeEventListener('click', countBmi);
    submit.removeEventListener('click', validateform);
}

submit.addEventListener('click', validateform);
submit.addEventListener('click', countBmi);
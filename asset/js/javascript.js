var button = document.querySelector('button#button')

button.onclick = function() {
    function create_img(sex, age){
        result.innerHTML = ''
        var text
        var img = document.createElement('img')
        img.setAttribute('alt', 'imagem representativa')
        img.setAttribute('class', 'img')
        if (sex == 'feminino') {
            if (age < 1) {
                img.setAttribute('src', 'asset/img/recem_nascido.jpg')
            }else if (age < 3) {
                img.setAttribute('src', 'asset/img/woman_baby.jpg')
            }else if (age < 8) {
                img.setAttribute('src', 'asset/img/woman_child.jpg')
            }else if (age < 15) {
                img.setAttribute('src', 'asset/img/woman_12.jpg')
            }else if (age < 28) {
                img.setAttribute('src', 'asset/img/woman_teen.jpg')
            }else if (age < 38) {
                img.setAttribute('src', 'asset/img/woman_35.jpg')
            }else if (age < 60) {
                img.setAttribute('src', 'asset/img/woman_50.jpg')
            }else if (age < 80){
                img.setAttribute('src', 'asset/img/woman_idosa.jpg')
            }else if (age < 105) {
                img.setAttribute('src', 'asset/img/woman_100.jpeg')
            }else {
                img.setAttribute('src', 'asset/img/rip.jpg')
            }
            
        }else {
            if (age < 1) {
                img.setAttribute('src', 'asset/img/recem_nascido.jpg')
            }else if (age < 3) {
                img.setAttribute('src', 'asset/img/men_baby.jpg')
            }else if (age < 8) {
                img.setAttribute('src', 'asset/img/men_child.jpg')
            }else if (age < 15) {
                img.setAttribute('src', 'asset/img/men_12.jpg')
            }else if (age < 28) {
                img.setAttribute('src', 'asset/img/men_teen.png')
            }else if (age < 38) {
                img.setAttribute('src', 'asset/img/men_35.jpg')
            }else if (age < 60) {
                img.setAttribute('src', 'asset/img/men_50.jpg')
            }else if (age < 105) {
                img.setAttribute('src', 'asset/img/men_100.jpg')
            }else {
                img.setAttribute('src', 'asset/img/rip.jpg')
            }
            
        }

        if (age < 10) {
            age = '0' + age
        }

        if (age == 1) {
            text = document.createTextNode(`Você é do sexo ${sex} e tem ${age} ano de idade`)
        }else {
            text = document.createTextNode(`Você é do sexo ${sex} e tem ${age} anos de idade`)
        }

        if (age > 100) {
            text = document.createTextNode(`Você é do sexo ${sex} e provavelmente ja não esta entre nós`)
        }

        result.appendChild(text)
        result.appendChild(img)
    }

    var date = new Date()
    var year = date.getFullYear()
    var inputTextContent = document.querySelector('input#birthday_year')
    var birthday = Number(inputTextContent.value)
    if (birthday == 0 || birthday > year) {
        window.alert('Insira um ano de nascimento válido')
    }else {
        var age = year - birthday
        var result = document.querySelector('div#resp')
        var section = document.querySelector('section')
        section.style.height = '400px'
        var sex = document.getElementsByName('sex')
    
        if (sex[0].checked) {
            sex = 'masculino'
        }else if (sex[1].checked){
            sex = 'feminino'
        }

        create_img(sex, age)

        inputTextContent.value = ''
        inputTextContent.focus()

        

    }

    
}

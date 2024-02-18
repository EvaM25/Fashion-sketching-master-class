//Application

let selector = document.querySelector("#tel")
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)


let validation = new JustValidate("#form")

validation.addField("#name", [
    {
      rule: "required", 
      errorMessage: "Введите имя"  
    },
    {
        rule: "minLength", 
        value: 2,
        errorMessage: "Имя должно быть не короче 2-х символов"  
      }
]).addField("#tel", [
    {
      validator: (value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Boolean(Number(tel) && tel.length > 0)
      },
      errorMessage: "Введите телефон"  
    },
    {
      validator: (value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Boolean(Number(tel) && tel.length === 10)
      }, 
        errorMessage: "Введите телефон полностью"  
      }
    ]).addField("#email", [
        {
          rule: "required", 
          errorMessage: "Введите E-mail"  
        },
        {
            rule: "email", 
            errorMessage: "Введите корректный email"  
          }
    ]).addField("#checkbox",[
        {
          rule: "required",
          errorMessage: "Требуется согласие на обработку данных "
        }
    ]).onSuccess((event) => {

        console.log('Validation passes and form submitted', event);
    
        let formData = new FormData(event.target);
    
        console.log(...formData);
    
        let xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
              showModal();
            }
          }
        }
    
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
    
        event.target.reset();
      });

      function showModal(){
        document.getElementById("modal").classList.add("open")
      }
      
      document.getElementById("close-modal").addEventListener("click",  function(){
        document.getElementById("modal").classList.remove("open")
      });
      
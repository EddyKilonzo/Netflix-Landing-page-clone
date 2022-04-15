
let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll('.answer');


questions.forEach(question => {
    question.addEventListener('click', function(e){
        let answer = e.target.nextElementSibling;
        let span = e.target.children[0];
        if(answer.style.display === 'block') {
            answer.style.display = 'none';
            span.textContent = '+';
        } else {
            answers.forEach(answer => answer.style.display = 'none');
            questions.forEach(question => question.children[0].textContent = '+');
            answer.style.display = 'block';
            span.textContent = 'x';
            
        }
    
    })
})



   

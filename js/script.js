const questions = document.querySelectorAll('.question');

questions.forEach( (question) => {

    const selected = question.querySelector('.question-title');
    let icon = question.querySelector('i');

    selected.addEventListener('click', () => {
      
        questions.forEach((item) => {
            if( item !== question ){
                item.classList.remove('active');
                const iconChange = item.querySelector('i');
                iconChange.classList.add('fa-plus');
            }
        });
        
        if(!question.classList.contains('active')){
            question.classList.add('active');
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        }else{
            question.classList.remove('active');
            icon.classList.add('fa-plus');
            icon.classList.remove('fa-minus');
        }
    })
});

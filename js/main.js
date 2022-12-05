let header = document.querySelector('header');
let btt = document.querySelector('.go_top');
let qnaWrapper = document.querySelectorAll('.qna_list');

if(qnaWrapper.length > 0){
    //about 아코디언
    qnaList = qnaWrapper[0].querySelectorAll('.qna_list li');
    console.log(qnaList);

    for(list of qnaList){
        list.addEventListener('click',e=>{
            console.log(e.target, e.currentTarget);
            for(li of qnaList){
                li.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
        })
    }
}

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
    if(window.pageYOffset > 300){
        btt.classList.add('active');
    }else{
        btt.classList.remove('active');
    }
});
btt.addEventListener('click',e=>{
    e.preventDefault();
    scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    });
});


//후기 슬라이드

let sliderWrapper = document.querySelector('.slide_wrapper'),
    sliderContainer = document.querySelector('.slide_container'),
    slide = sliderContainer.querySelectorAll('li'),
    slideCount = slide.length,
    prevBtn = sliderWrapper.querySelector('.fa-chevron-left'),
    nextBtn = sliderWrapper.querySelector('.fa-chevron-right'),
    currentIndex  = 0,
    timer;

//슬라이드 부모(sliderContainer) 너비 지정, 대상.offsetWidth
sliderContainer.style.width = `${sliderWrapper.offsetWidth*slideCount}px`;

for(item of slide){
    item.style.width = `${sliderWrapper.offsetWidth}px`;
}

//슬라이드 이동 함수

function gotoSlide(idx){

    if(idx > slideCount - 1){
        idx = 0;
    } else if(idx < 0){
        idx = slideCount - 1
    }
    sliderContainer.style.left = `${-idx*100}%`;
    currentIndex = idx;
    console.log(currentIndex);
}
//다음 버튼을 클릭하면 할일 
nextBtn.addEventListener('click',()=>{
    gotoSlide(++currentIndex);
});
prevBtn.addEventListener('click',()=>{
    gotoSlide(--currentIndex);
});

//자동 슬라이드
/*
slideWrapper 마우스들어오면 멈추고, 나가면 다시 자동 슬라이드
*/
function autoslide(){
    timer = setInterval(()=>{
        gotoSlide(++currentIndex)
    }, 4000);
}
autoslide();

sliderWrapper.addEventListener('mouseenter',()=>{
    clearInterval(timer);
});
sliderWrapper.addEventListener('mouseleave',()=>{
    autoslide();
});


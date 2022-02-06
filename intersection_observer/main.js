let boxes = document.getElementsByClassName('box');

let thirdDiv = document.getElementsByClassName('third');

thirdDiv = Array.from(thirdDiv);

console.log(thirdDiv);

boxes = Array.from(boxes);


let options = {
    root : null,
    threshold : .15,
    rootMargin : "-80px"
};


let newobserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting === false){
            return;
        }
        entry.target.classList.add('re-appear');
        newobserver.unobserve(entry.target);
    })
},options)

newobserver.observe(thirdDiv[0]);

let observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){
        if(entry.isIntersecting === false){
            return;    
        }
        entry.target.classList.add('appear');
        // console.log(entry.target);
        observer.unobserve(entry.target);
    });

},options);


boxes.forEach(box => observer.observe(box));


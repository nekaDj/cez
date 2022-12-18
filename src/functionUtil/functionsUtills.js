

export function swipeImage(){

}
/**swipe image */
//     let slideIndex = 1 ;
// function plusSlides(n) {
//     showSlides(slideIndex += n, company_image_slide);
// }

export function showSlides(slideIndex, n, reference) {
    // console.log(n)
    let i;
    let slides =  reference[0].current.children ;
    let text =  reference[1].current.children ;
    // if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    /*TEXT AND SLIDE MUST BE THE SAME SIZE */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        text[i].style.display = "none";
    }
    slides[slideIndex % slides.length].style.display = "block";
    text[slideIndex % slides.length].style.display = "block";
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlides() {
    // Ẩn tất cả các slide
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    // Tăng chỉ số slide
    slideIndex++;
    // Nếu chỉ số vượt quá số lượng slide, quay lại slide đầu tiên
    if (slideIndex > slides.length) {
        slideIndex = 1;} 
        // Hiển thị slide hiện tại
        slides[slideIndex - 1].style.display = 'block';
        // Thay đổi slide sau mỗi 3 giây (3000ms)
        setTimeout(showSlides, 3000);
}
// Khởi động slideshow
showSlides();
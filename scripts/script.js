const btn_section_one = document.querySelectorAll('.btn-sec-one');
const content_section_one = document.querySelectorAll('.content-one');
const image_section_one = document.querySelectorAll('.image-one');

btn_section_one.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // ลบ class ทั้งหมดใน btn_section_one
        btn_section_one.forEach(btn => {
            btn.classList.remove('bg-slide-in');
            btn.classList.remove('bg-[#FFC501]');
        });
        // ซ่อน content ทั้งหมดใน content_section_one
        content_section_one.forEach(content => {
            content.classList.add('hidden');
        });
        // ซ่อน image ทั้งหมดใน image_section_one
        image_section_one.forEach(img => {
            img.classList.add('hidden');
        });
        btn.classList.add('bg-slide-in');
        content_section_one[index].classList.remove('hidden');
        image_section_one[index].classList.remove('hidden');
    });
});
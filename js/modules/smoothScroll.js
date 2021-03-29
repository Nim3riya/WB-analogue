{
    const scrollLinks = document.querySelectorAll('a.scroll-link');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', (e) => {
            e.preventDefault();
            const id = scrollLink.getAttribute('href')
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}
'use strict'; 
{
// articleが交差した際の処理

const targets = document.querySelectorAll('article');
                //   監視した要素の数だけIntersectionObserver配列が入る
function callback(entries) {
    entries.forEach(entry => {
        // もし既に表示されていたらreturn
        if(!entry.isIntersecting) {
            return
        }

        entry.target.classList.add('appear');
    });
}

const observer = new IntersectionObserver(callback, {
    threshold: .4,
});

targets.forEach(target => {
    // articleにをobserver機能で監視する
    observer.observe(target);
});

}

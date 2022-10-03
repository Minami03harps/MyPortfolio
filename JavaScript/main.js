'use strict';
{ 
    // ハンバーガーメニュー=================================================
    const hamburger = document.getElementById('hamburger');
    const spMenu = document.querySelector('.sp-menu');
    const spMask = document.querySelector('.sp-mask');
    const overlay = document.querySelector('.overlay');

    // ハンバーガーボタンとsp-menuの開閉する処理
    function open() {
        hamburger.classList.toggle('open');
        spMenu.classList.toggle('open');
        spMask.classList.toggle('open');
        overlay.classList.toggle('open');
    }
    // ハンバーガーボタンの開閉処理
    hamburger.addEventListener('click',  ()=> {
        open();
    });

    // sp-menu以外をクリックした場合にsp-menuを閉じる
    spMask.addEventListener('click', () => {
        open();
    });
    overlay.addEventListener('click', () => {
        open();
    });


    // mainvisualのタイピング機能===============================================
    const texts = [ 
        "Welcome to my PORTFOLIO page.",
    ];
    const p = document.querySelector('.typing');

    // 文字カウンター　
    let count = 0;

    let index = 0;
    // 一文字ずつ認識していくためのもの
    let currentText = "";
    // 打ち込まれた文字を格納していくもの
    let letter = "";


    (function type() {
        // 最初の文字だったら、文字横の縦線を消す
        if(count === texts.length) {
            function reset() {
                p.classList.add('hide')
            }
            setTimeout(reset,2400)
            return;
        }

        //contごとに打ち込まれるテキストをcurrentIndexで認識
        currentText = texts[count];


        // everytime goes through this one, 
        // it's gonna be 0→１→２→３→4 
        // it's gonna be indivisually over each　one of these
        // countが増えsていくたびに
        // 文字を0→１→２→３→4 と増やして　pに格納していく
        letter = currentText.slice(0, ++index);
        p.textContent = letter;


        if(letter.length === currentText.length) {
            count++;
            index = 0;
        }

        // タイピング処理を0.75秒かけて処理
        setTimeout(type,75);

    })();








    // プロフィール画像が徐々に表示される処理＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    const profileImg = document.querySelector('.profileImg');

    const targets = [
        profileImg,
    ];




    function callback(entries, obs) {
        console.log(entries);

        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }

        entry.target.classList.add('appear');


    obs.unobserve(entry.target);
        });
    }
    const options = {
        threshold: 0.3,
    }

    const observer = new IntersectionObserver(callback, options);
    
    targets.forEach(target => {
        observer.observe(target);
    });

}

// nullとは、オブジェクトが存在しないという意味
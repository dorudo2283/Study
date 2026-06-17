// ===============================
// 一問一答勉強サイト
// script.js
// ===============================

// 勉強開始ボタン
const startBtn = document.querySelector(".start");

if(startBtn){

    startBtn.addEventListener("click",()=>{

        startBtn.innerHTML="読み込み中...";

        startBtn.disabled=true;

        setTimeout(()=>{

            // 後で問題画面へ変更
            alert("問題画面は次回作成します！");

            startBtn.innerHTML="勉強を始める →";

            startBtn.disabled=false;

        },600);

    });

}


// ===============================
// 数字アニメーション
// ===============================

const numbers=document.querySelectorAll(".status h2");

numbers.forEach(number=>{

    const target=parseInt(number.innerText.replace(/,/g,""));

    let current=0;

    const speed=Math.max(1,Math.floor(target/80));

    const timer=setInterval(()=>{

        current+=speed;

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        number.innerText=current.toLocaleString();

    },15);

});


// ===============================
// 教科ボタン
// ===============================

document.querySelectorAll(".subject-list button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        document.querySelectorAll(".subject-list button").forEach(b=>{

            b.classList.remove("selected");

        });

        btn.classList.add("selected");

    });

});


// ===============================
// 今日の目標 保存
// ===============================

const checks=document.querySelectorAll(".goal input");

checks.forEach((check,index)=>{

    const data=localStorage.getItem("goal_"+index);

    if(data==="true"){

        check.checked=true;

    }

    check.addEventListener("change",()=>{

        localStorage.setItem("goal_"+index,check.checked);

    });

});


// ===============================
// スクロールでヘッダー影
// ===============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>20){

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.12)";

    }

    else{

        header.style.boxShadow="none";

    }

});


// ===============================
// 勉強時間（サンプル）
// ===============================

let hour=13;

setInterval(()=>{

    const title=document.title;

    if(title.includes("📚")){

        document.title="一問一答勉強サイト";

    }else{

        document.title="📚 一問一答勉強サイト";

    }

},1200);


// ===============================
// ページ表示アニメーション
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

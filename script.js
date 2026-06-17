// フェードイン
window.addEventListener("load",()=>{

    document.body.animate([

        {
            opacity:0,
            transform:"translateY(20px)"
        },

        {
            opacity:1,
            transform:"translateY(0px)"
        }

    ],{

        duration:600,
        easing:"ease"

    });

});

// ボタン
const btn=document.getElementById("startButton");

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="translateY(0px) scale(1)";

});

// 数字アニメーション

document.querySelectorAll(".status h2").forEach(item=>{

    const target=parseInt(item.innerText.replace(/[^0-9]/g,""));

    if(isNaN(target)) return;

    let current=0;

    const timer=setInterval(()=>{

        current+=Math.ceil(target/60);

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        if(item.innerText.includes("Pt")){

            item.innerText=current.toLocaleString()+"Pt";

        }else if(item.innerText.includes("時間")){

            item.innerText=current+"時間";

        }else{

            item.innerText=current.toLocaleString()+"問";

        }

    },20);

});

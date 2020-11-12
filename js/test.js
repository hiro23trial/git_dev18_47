// jsを記述する際はここに記載していく
// console.log("はじめてのジャバスクリプト");
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");

// var name="よしのひろと";
// console.log(name);

// var point=90;
// if(point>=80){
//     console.log("素晴らしい!おめでとう!");
// }else{
//     console.log("もっと頑張りましょう!");
// }
//   $(function () {
//     // この中に書いていく
//     $(".button").on("click", function () {
//         // $(".button").css("color", "red");
//         // $(".kekka").html("押されましたよ");
// var random = Math.floor(Math.random() * 7);
// console.log(random, "便利な機能を使ってランダムな数字が出ます");

// if(random == 0){
//     console.log("大吉");
//     $(".kekka").html("大吉");
//   }else if(random == 1){
//     console.log("吉");
//     $(".kekka").html("吉");
//   }else if(random == 2){
//     console.log("中吉");
//     $(".kekka").html("中吉");
//   }else if(random == 3){
//     console.log("小吉");
//     $(".kekka").html("小吉");
//   }else if(random == 4){
//     console.log("末吉");
//     $(".kekka").html("末吉");
//   }else if(random == 5){
//       console.log("凶");
//       $(".kekka").html("凶");
//   }else if(random == 6){
//     console.log("大凶");
//     $(".kekka").html("大凶");
//   }
//   });
// });

// グーだけ押すと連続でじゃんけんできるようになってる

// $(function(){
//   $(".gu").on("click",function(){
//     var comp=Math.floor(Math.random() * 3);

//     if (comp==0){
//       $(".pcgu").show();
//       $(".pctyoki").fadeOut();
//       $(".pcpa").fadeOut();
//       $(".kekka").html("あいこ！");
//     }else if(comp==1){
//       $(".pctyoki").show();
//       $(".pcgu").fadeOut();
//       $(".pcpa").fadeOut();
//       $(".kekka").html("勝ち！");
//     }else if(comp==2){
//       $(".pcpa").show();
//       $(".pcgu").fadeOut();
//       $(".pctyoki").fadeOut();
//       $(".kekka").html("負け！");}
//   })
// })

// $(function(){
//   $(".tyoki").on("click",function(){
//     var comp=Math.floor(Math.random() * 3);

//     if (comp==0){
//       $(".pc").text("グー");
//       $(".kekka").html("負け！");
//     }else if(comp==1){
//       $(".pc").text("チョキ");
//       $(".kekka").html("あいこ！");
//     }else if(comp==2){
//       $(".pc").text("パー");
//       $(".kekka").html("勝ち！");}
//   })
// })

// $(function(){
//   $(".pa").on("click",function(){
//     var comp=Math.floor(Math.random() * 3);

//     if (comp==0){
//       $(".pc").text("グー");
//       $(".kekka").html("勝ち！");
//     }else if(comp==1){
//       $(".pc").text("チョキ");
//       $(".kekka").html("負け！");
//     }else if(comp==2){
//       $(".pc").text("パー");
//       $(".kekka").html("あいこ！");}
//   })
// })

// ルフィが出るようなしよう
$(function(){
  $(".gu").on("click",function(){
    var comp=Math.floor(Math.random() * 3);

    if (comp==0){
        $(".pctyoki").fadeOut();
        $(".pcpa").fadeOut();
        $(".pcgu").show();
    }else if(comp==1){
      $(".pctyoki").show();
      $(".pcgu").fadeOut();
      $(".pcpa").fadeOut();
      $("body").css("background-image","url(img/ruffygu.jpg)")
    }else if(comp==2){
      $(".pcpa").show();
      $(".pcgu").fadeOut();
      $(".pctyoki").fadeOut();
      $("body").css("background-image","url(img/ruffymake.jpg)")
    }
  })
})

$(function(){
  $(".tyoki").on("click",function(){
    var comp=Math.floor(Math.random() * 3);

    if (comp==0){
      $(".pctyoki").fadeOut();
      $(".pcpa").fadeOut();
      $(".pcgu").show();
      $("body").css("background-image","url(img/zoromake.jpg)")
    }else if(comp==1){
      $(".pctyoki").show();
      $(".pcgu").fadeOut();
      $(".pcpa").fadeOut();
    }else if(comp==2){
      $(".pcpa").show();
      $(".pcgu").fadeOut();
      $(".pctyoki").fadeOut();
      $("body").css("background-image","url(img/zorotyoki.jpg)");
    }
  })
})

$(function(){
  $(".pa").on("click",function(){
    var comp=Math.floor(Math.random() * 3);

    if (comp==0){
      $(".pctyoki").fadeOut();
      $(".pcpa").fadeOut();
      $(".pcgu").show();
      $("body").css("background-image","url(img/sanjipa.jpg)")
    }else if(comp==1){
      $(".pctyoki").show();
      $(".pcgu").fadeOut();
      $(".pcpa").fadeOut();
      $("body").css("background-image","url(img/sanjimake.jpg)")
    }else if(comp==2){
      $(".pcpa").show();
      $(".pcgu").fadeOut();
      $(".pctyoki").fadeOut();
    }
  })
})
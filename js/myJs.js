const textConfig = {
  text1: "Hallo chị!!!",
  text2: "Em có điều này muốn nói với chị",
  text2a: "Em với chị cùng biết nhau được một khoảng thời gian rồi",
  text2b:
    "Thời gian 3 tháng cũng không dài, có vui cũng có buồn, có giận dỗi cũng có sự quan tâm yêu thương.",
  text2c:
    "Trãi qua mối ngày như vậy thì tình cảm trong em đối với chị ngày một lớn hơn và em càng không thể tự kiềm chế được mà càng thích chị hơn.",
  text2d:
    "Trong thời gian đó, em cũng đã nhiều lần khiến chị không vui, bực mình vì sự vô tri của bản thân",
  text2e:
    "Hiện tại em đã nhận ra những sai sót của bản thân và đang cố gắng để thay đổi tốt hơn từng ngày.",
  text2f: "Nay nhân ngày thất tịch em có điều này muốn nói với chị",
  text3: "Em thật sự rất thích chị, nên là...",
  text3b: "Chị đồng ý làm người yêu của em nha!!!!",
  text3c:
    "Em hứa từ nay sẽ luôn làm cho chị vui vẻ, sẽ không làm nhưng điều khiến chị không vui và bực mình nữa.",
  text4:
    "Nếu chị ko trả lời mà thoát ra tức là muốn làm người yêu của em rùi đó nha :3",
  text5: "Honggg",
  text6: "Cóoooooo ",
  text7: "Viết gì đó cho em đi",
  text8: "Gửi cho em <3",
  text9: "Vì em deptry :3",
  text10: "em biết mà ^^ Yêu chị 300.000",
  text11: "Qua discord trả lời em nhé",
  text12: "oke nè <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    // secondQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  secondQuestion();

  $("#text3").html(textConfig.text3);
  $("#text3b").html(textConfig.text3b);
  $("#text3c").html(textConfig.text3c);

  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cheemsXinChao.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      secondQuestion();
    });
  }

  function secondQuestion() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2a,
      imageUrl: "img/cheemsXinChao.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      secondQuestionb();
    });
  }

  function secondQuestionb() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2b,
      imageUrl: "img/cheemsXinChao.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      secondQuestionc();
    });
  }

  function secondQuestionc() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2c,
      imageUrl: "img/cheemsXinChao.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      secondQuestiond();
    });
  }

  function secondQuestiond() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2d,
      imageUrl: "img/meoxinloi.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      secondQuestione();
    });
  }

  function secondQuestione() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2e,
      imageUrl: "img/cheemsCaiThien.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
      secondQuestionf();
    });
  }

  function secondQuestionf() {
    $(".content").hide();
    Swal.fire({
      // title: textConfig.text1,
      text: textConfig.text2f,
      imageUrl: "img/cheemsXinChao.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      width: 900,
      confirmButtonText: textConfig.text12,
      background: '#fff url("img/iput-bg.jpg")',
      title: textConfig.text10,
      text: textConfig.text11,
      confirmButtonColor: "#83d0c9",
      onClose: () => {
        window.location = "https://discord.com/channels/@me/887985085918351370";
      },
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});

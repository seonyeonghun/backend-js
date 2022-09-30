$(function () {
  // 확인 버튼 클릭하면 (js)XMLHttpRequest 객체를 이용해 비동기 통신
  document.querySelector("#checkForm").addEventListener("submit", function () {
    const query = {
      guest_name: document.querySelector("#guest_name").value,
      guest_phone: document.querySelector("#guest_phone").value,
    };

    send_post_data_by_XHR("/send_post", query);
  });
  function send_post_data_by_XHR(url, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("post", url);
    xhr.setRequestHeader("Content-Type", "application/json"); // 요청헤더를 json으로
    xhr.send(JSON.stringify(data));
  }
  // ajax_send 버튼 클릭으로 post 방식의 데이터 전송 (update)
  $("#ajax_send").click(function () {
    // ajax로 통신 - 교재 p.501 참고
    const ajax_data = {
      name: $("#guest_name").val(),
      phone: $("#guest_phone").val(),
    };
    $.ajax({
      url: "/send_post_ajax",
      method: "post",
      data: ajax_data, // jquery.com 참고
      //dataType: "json",
      success: function (responseData) {
        console.log("post 전송 성공!");
        console.log(typeof responseData, responseData); // 요청 성공에 따른
        $(".ajax_result").html(
          `<h2>${responseData.guest_name}님, 연락처는 ${responseData.guest_phone}</h2>`
        );
      },
      error: function () {
        console.log("post 전송 에러!");
      },
    });
  });
});

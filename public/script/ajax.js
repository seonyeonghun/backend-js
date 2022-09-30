$(function(){
    // 예약확인 버튼 클릭하면
    $("#checkForm").submit(function(e){        
        e.preventDefault(); // form이 submit을 발생
        // ajax로 통신 - 교재 p.501 참고
        const query = {
            guest_name: $("#guest_name").val(),
            guest_phone: $("#guest_phone").val()
        }
        $.ajax({
            url: "/send_reserve",
            method: "post",
            data: query, // jquery.com 참고
            //dataType: "json",
            success: function(data){
                alert("post 전송 성공!, 메인페이지로 이동합니다.");
                location.href="/"
            },
            error: function(data){
                alert("에러발생");
                console.log(data);
            }
        })
    })
})


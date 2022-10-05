const express = require("express");
const router = express.Router();
const controller = require("./home.ctrl");

// routing 처리 : 요청에 따른 응답 방법을 결정하는 것
// routing method : .get(), .post(), .put(), .del(), .patch()...expressjs.con > 라우팅 안내서 참고!!

router.get("/", controller.home);

router.get("/tour", controller.tour);

router.get("/reserve", controller.reserve);

router.get("/customer", controller.customer);

router.post("/send_post", controller.sendPost);

router.post("/send_post_ajax", controller.sendPostAjax);

module.exports = router;

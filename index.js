import Axios from "axios";
import DayJs from "dayjs";

const sendMsg = ({ text }) => {
  Axios.post(
    "https://open.feishu.cn/open-apis/bot/v2/hook/e8710ef9-6cfa-492f-a7c4-fb4b74f1a577",
    {
      msg_type: "text",
      content: {
        text,
      },
    }
  );
};
const endWork = "21:00";
const init = () => {
  console.log(DayJs().format("YYYY-MM-DD"));
  const isFriday = DayJs().day() === 5;
  const hour = DayJs().hour();
  const minute = DayJs().minute();
  //   周五提醒
  if (isFriday) {
    if (hour === 9) {
      sendMsg({ text: "今天周五，别太卷了" });
    }
    //   三小时倒计时
    if (21 - hour === 3) {
      sendMsg({ text: "还有三小时下班" });
    }
    if (21 - hour === 1) {
      sendMsg({ text: "还有一小时下班" });
    }
    //   下班提醒
    if (isFriday && `${hour}:${minute}` === endWork) {
      sendMsg({ text: '<at user_id="all">所有人</at>  别卷了，下班下班' });
    }
  }
};

setTimeout(() => {
  init();
}, 1000);

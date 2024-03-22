import Axios from "axios";

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

sendMsg({ text: '<at user_id="all">所有人</at>  别卷了，下班下班' });

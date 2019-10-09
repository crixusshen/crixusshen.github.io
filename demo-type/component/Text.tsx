/*
 * @Author: YangJiaqi
 * @Date: 2019-10-08 14:41:49
 * @Company: orientsec.com.cn
 * @Description:
 */
const { h } = require("fastman/coreman");

interface IProps {
  text: string;
}

export default class SmsCode {
  constructor(private props: IProps) {}

  public render() {
    return (
      <h1 type="button" class="smscode active">
        {this.props.text}
      </h1>
    );
  }
}

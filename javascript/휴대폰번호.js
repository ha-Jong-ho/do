class UserData{
  constructor(phoneNum) {
    this.replaceNumber = (num) => {
        return num.replaceAll(/[\w]/gi, '*');
    };
    this.setPhoneNum = (phoneNum) => {
      this.phoneNum = phoneNum;
      if (this.phoneNum && this.phoneNum.length > 3) {
        let div = this.phoneNum.length - 4;
        let marking_num = this.phoneNum.substring(0, div);
        let leaving_num = this.phoneNum.substring(div);
        this.phoneNum = this.replaceNumber(marking_num) + leaving_num;
      } else {
        this.phoneNum = this.replaceNumber(this.phoneNum);
      }
    };
    this.getPhoneNum = () => {
      return this.phoneNum;
    }
    this.setPhoneNum(phoneNum);
  }
}


function solution(phone_number) {
    let d = new UserData(phone_number);
    return d.getPhoneNum();
}
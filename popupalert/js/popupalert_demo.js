function disp_prompt() {
    var name = prompt("请输入您的名字");
    if (name != null && name !== "") {
        document.write("你好！" + name + " 今天过得怎么样？");
    } else {
        alert("请输入姓名");
    }
}
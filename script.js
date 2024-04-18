// script.js
function showSignal() {
    var input = document.getElementById('trafficInput').value;
    var resultText = '';
    switch (input) {
        case '1':
            resultText = '红灯停';
            break;
        case '2':
            resultText = '绿灯行';
            break;
        case '3':
            resultText = '黄灯亮了等一等';
            break;
        default:
            resultText = '注意交通安全';
    }
    document.getElementById('result').textContent = resultText;
}

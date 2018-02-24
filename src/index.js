module.exports = function check(str, bracketsConfig) {
    var bracket_keys = {};
    for (var i = 0; i < bracketsConfig.length; i++){
        bracket_keys[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    if (str.length % 2 === 1) { return false; }
    var st = [], flag = false;
    for (i = 0; i < str.length; i++){
        if (bracket_keys[str[i]] === undefined) {
            st.push(str[i]);
        }
        else {
            if (bracket_keys[str[i]] === st[st.length - 1]) {
                st.pop()
            }
            else{
                st.push(str[i]);
            }
        }
    }
    return st.length === 0;
};

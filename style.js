function insert(num) {
        if ($(".display input").val() == 0) $(".display input").val("");
        $(".display input").val($(".display input").val() + num);
        }
function eql() {
        $(".display input").val(eval($(".display input").val()));
        }
function cl() {
        $(".display input").val(0);
        }
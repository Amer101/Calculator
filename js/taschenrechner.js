$(document).ready(function(){


/*    function getFormattedNumber(num){
        if(num=="-"){
            return "";
        }
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
    }
    function reverseNumberFormat(num){
        return Number(num.replace(/,/g,''));
    } */

    var num = document.getElementsByClassName("num");
    for(var i=0; i<num.length; i++) {
        
        num[i].addEventListener('click',function(){
        //    var output = reverseNumberFormat( $("#output").text() );
            var output = $("#output").text();
            if(output!=NaN){
                output=(output+this.value);
        //        $(".output").text(getFormattedNumber(output)); 
                $(".output").text(output);
            }
        })
        
    }
    

    var operator = document.getElementsByClassName("operator");
    for (var i=0; i<operator.length; i++) {
        operator[i].addEventListener('click',function(){
            if(this.id=="restart"){
                $(".output").text("");
                $(".history").text("");
            }

            if($(".output").text()==""){
                $(".history").text("");
            }else{
                if($(".history").text()==""){
                    var output = $("#output").text();
                    $(".history").text(output+this.id);
                    $(".output").text("");
                }else{
                    var output = $("#output").text();
                    var history = $(".history").text();
                    output = history + output;
                    $(".history").text(output+this.id);
                    $(".output").text("");
                }
            }
/*            if(this.id=="("){
                $(".history").text(this.id);
                $(".output").text("");
            }
            if(this.id==")"){
                var history = $(".history").text();
                var output = $(".output").text();
                history = history + output;
                $(".history").text(history);
                $(".output").text("");
            } */
        })
    }

    var wOperator = document.getElementsByClassName("w-operator");
    for (var i=0; i<wOperator.length; i++) {
        wOperator[i].addEventListener('click',function(){
            if($(".output").text()==""){
                $(".history").text("");
            }else{
                if($(".history").text()==""){
                    var output = $("#output").text();
                    if(this.id=="pow"){
                        output = Math.pow(output,2);
                        $(".output").text(output);
                    }else if(this.id=="sqrt"){
                        output = Math.sqrt(output);
                        $(".output").text(output);
                    }else if(this.id=="1/x"){
                        output = 1/output;
                        $(".output").text(output);
                    }else if(this.id=="power"){
                        $(".history").text(output+"^");
                        $(".output").text("");
                    }else if(this.id=="log"){
                        output = Math.log(output);
                        $(".output").text(output);
                    }else if(this.id=="exp"){
                        output = Math.exp(output);
                        $(".output").text(output);
                    }else if(this.id=="abs"){
                        output = Math.abs(output);
                        $(".output").text(output);
                    }
                }
            }
        })
    }


    $("#on").click(function(){
        $("div").removeClass("hidden");
        $("input").removeClass("hidden");
        $(".num, .operator, .equal, .remove").css("margin-bottom","10px");
        $(".calculator").css("width","370px");
        $(".calculator").css("transform","translate(190%, 20%)");
        $(".calculator").css("height","250px");
    })

    $("#off").click(function(){
        $(".visa").addClass("hidden");
        $(".w-operator").addClass("hidden");
        $(".num, .operator, .equal, .remove").css("margin-bottom","20px");
        $(".calculator").css("width","300px");
        $(".calculator").css("transform","translate(220%, 20%)");
        $(".calculator").css("height","200px");
    })
    
    $(".remove").click(function(){
        var output = $(".output").text();
        output = output.slice(0 , output.length-1);
        $("#output").text(output);
    });

    $(".equal").click(function(){
        var output = $("#output").text();
        var history = $("#history").text();
        var n = history.includes("/");
        var x = history.includes("^");
        if(n===true&&output=="0") {
            $(".output").text("Teilen durch 0 ist nicht moeglich")
        }else if(x===true){
            history = history.slice(0 , history.length-1);
            var result = Math.pow(history,output);
            $(".history").text("");
            $(".output").text(result);
        }
        else{
        history = history + output;
        var result = eval(history);
        $(".history").text("");
        $(".output").text(result);
        }
    })

}); 


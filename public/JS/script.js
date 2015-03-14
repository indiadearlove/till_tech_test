$().ready(
    function(){
        var dataSet;
        $.getJSON("hipstercoffee.js",function(d){}).success(processData);

        function processData(ds){
            dataSet = ds;
        }

        $("button").click(function(){
            $("#heading").empty().html(dataSet[Number($(this).attr('val'))].heading);
            $("#image").empty().html("<img src='" + dataSet[Number($(this).attr('val'))].image + "' />");
        }
    }
);
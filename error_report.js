videojs.registerPlugin("ErrorReport",function(){
    var error_ip;
    var error_report;

    $(function(){
        var myPlayer = videojs('vjs_video_3');
        myPlayer.one("loadstart",function(){

            myPlayer.on('error', function() {
                console.log('in error');
                var error = myPlayer.error();
                var error_time = new Date();
                var error_time_GMT8 = error_time.toLocaleString();
                // 錯誤發生時間

                error_report = 
                    'Uh-oh...Something went wrong!' +
                    device_type() +
                    '; \nError Time: ' + error_time +
                    '; \nError Code: ' + error.code +
                    '; \nError Msg: ' + error.message;
                // 錯誤資訊字串定義

                $.getJSON('https://ipinfo.io', function(data){
                    error_ip = JSON.parse(JSON.stringify(data.ip));

                });

                $(".vjs-errors-ok-button-container").append('<button id="eMarki">Report</button>')
                $("#eMarki").click(function(){
                    $.ajax({
                        type:"GET",
                        url:"https://52.193.220.96/error_listener/",
                        data:{"error_report": error_report, "error_ip": error_ip},
                        success: function(ret){
                            console.log("send report success");
                            console.log(data);
                        }
                    });
                    window.open("https://docs.google.com/forms/d/1L4dnmWEyZ0F9Ji_KETUaewwCEFw3-uHBnoOHydb-sOU/edit?usp=sharing");
                });
            });

        });
    });

    // 下載 log 檔案 ( 目前無需要 )
    function createDownloadFile(error_report) {
        var blob = new Blob([error_report]);
        var link = $("#error_Report")[0];
        link.download = "log.txt";
        link.href = URL.createObjectURL(blob);
    }

    // 判斷使用裝置
    function device_type(){
        var userAgent = navigator.userAgent;
        // 取得 userAgent 字串
        var Browser = Browser_type(userAgent);
        // 取得 目前使用瀏覽器
        var Device = 'Undefined';
        // 定義 目前使用設備

        is_iPad = /(?:iPad|PlayBook)/.test(userAgent);
        is_aPad = /(?:Android)/.test(userAgent) && !/(?:Mobile)/.test(userAgent);
        is_iPhone = /(?:iPhone)/.test(userAgent) && !is_iPad && !is_aPad;
        is_aPhone = /(?:Android)/.test(userAgent) && !is_iPad && !is_aPad;
        is_PC = !is_iPad && !is_aPad && !is_iPhone;

        if (is_iPad == true) {Device = 'iPad';}
        // 是否為 iPad
        else if (is_aPad == true) {Device = 'Android_Tablet';}
        // 是否為 Android_Tablet
        else if (is_iPhone == true) {Device = 'iPhone';}
        // 是否為 iPhone
        else if (is_aPhone == true) {Device = 'Android_Phone';}
        // 是否為 Android_Phone
        else if (is_PC == true) {Device = 'PC';}
        // 是否為 PC

        return ('\nBrowser: ' + Browser + '; \nDevice: ' + Device);
    }

    // 判斷瀏覽器類型
    function Browser_type(userAgent){  
        if (userAgent.indexOf("Trident") > -1) {return 'IE';};
        // IE 瀏覽器
        if (userAgent.indexOf("Edge") > -1) {return 'Edge';};
        // Edge 瀏覽器
        if (userAgent.indexOf("Opera") > -1) {return 'Opera';}; 
        // Opera 瀏覽器
        if (userAgent.indexOf("Firefox") > -1) {return 'FireFox';};
        // FireFox 瀏覽器
        if (userAgent.indexOf("Chrome") > -1){return 'Chrome';};
        // Chrome 瀏覽器
        if (userAgent.indexOf("Safari") > -1) {return 'Safari';};
        // Safari 瀏覽器
    }
});

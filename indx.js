$(document).ready(function(){


    $('#exampleCheck1').change(function(){
    
    if($("#exampleCheck1").prop("checked")){
     $("#exampleInputPassword1").attr({ type: "text" });
    } else{
        $("#exampleInputPassword1").attr({ type: "password" });
    }

    });



    // $('#exampleInputPassword1').click(function () {
    //     $("#warning").hide();
    // });

    // $('#exampleInputEmail1').click(function () {
    //     $("#warning").hide();
    // });


    $("#signin").on('click',function(){

        var password = $("#exampleInputPassword1").val();
        var user = $("#exampleInputEmail1").val();
        var form_data = {
            'email': user,
            'password': password
        };

        // const url = 'https://demo.ali-chv.com/api/login'
        // const data = {
        //     'email': "demo@example.com",
        //     'password': "Demo2021"

        // }

        // axios.post(url, data, {   Headers: { "Accept": "application/json","Content-Type": "application/json"}  } )

        axios({
            method: 'post',
            url: 'https://demo.ali-chv.com/api/login',
            Headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            
            data: form_data,
        })
            .then(function (response) {
                var res = response.data;
                console.log(response);
                if (res.status==200){
                $("#warning").hide();
                window.location.replace('./gamePage.html');
                }
               
                
             })
             .catch(function (error) {
                 console.log(error);
                 $("#warning").show();
                // $("#warning").removeClass('hide');

             }) ;

    


        });


});































            // formdata: {
            // "email": user,
            // "password": password
            // }

            
            
            
                        // data: {
                        //     firstName: 'Fred',
                        //     lastName: 'Flintstone'
                        // }
            
            
            // axios.post('/login', {
            //     firstName: 'Finn',
            //     lastName: 'Williams'
            // })
            //     .then((response) => {
            //         console.log(response);
            //     }, (error) => {
            //         console.log(error);
            //     });
            //    .catch (function (error) {
                // handle error
                // console.log(error);
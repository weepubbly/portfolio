
let info = [];
    $(function(){
        $('#save').click(function(){
            let membernum = $('#membernum').val();
            let name = $('#name').val();
            let engname = $('#engname').val();
            let start = $('#start').val();
            let dob = $('#dob').val();
            let phone = $('#phone').val();
            let email = $('#email').val();
            let statement = $('#statement').val();
            let index = info.length;
            info.push([]);
            info[index].push(membernum);
            info[index].push(name);
            info[index].push(engname);
            info[index].push(start);
            info[index].push(dob);
            info[index].push(phone);
            info[index].push(email);
            info[index].push(statement);

            let ul="";
            $.each(info, function(index, element){
                ul+="<li><p>"+element[0]+"</p><p>"+element[1]+"</p><p>"+element[2]+"</p><p>"+element[3]+"</p><p>"+element[4]+"</p><p>"+element[5]+"</p><p>"+element[6]+"</p><p>"+element[7]+"</p></li>";
            });
            $(ul).appendTo('.information');
        });
    });


    $('#content').empty();
    $.ajax({
        url:'list.json',
        dataType:'json',
        success:function(d){
            let str = $('<ul class = "information">');
            for(let i  in d.DATA){
                let row = $('<li />').append(
                    $('<p />').text(d.DATA[i].membernum),
                    $('<p />').text(d.DATA[i].name), 
                    $('<p />').text(d.DATA[i].engname), 
                    $('<p />').text(d.DATA[i].start), 
                    $('<p />').text(d.DATA[i].dob), 
                    $('<p />').text(d.DATA[i].phone),
                    $('<p />').text(d.DATA[i].email),
                    $('<p />').text(d.DATA[i].statement) 
                );
                str.append(row);
            }
            $('#content').append(str);
        },
        error:function(e){
            console.log(e);
        }
    });    
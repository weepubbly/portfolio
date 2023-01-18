let info = [];
    $(function(){
        $('#save').click(function(){
            let membernum = $('#membernum').val();
            let name = $('#name').val();
            let engname = $('#engname').val();
            let start = $('#start').val();
            let dob = $('#dob').val();
            let idnum = $('#idnum').val();
            let phone = $('#phone').val();
            let email = $('#email').val();
            let index = info.length;
            info.push([]);
            info[index].push(membernum);
            info[index].push(name);
            info[index].push(engname);
            info[index].push(start);
            info[index].push(dob);
            info[index].push(idnum);
            info[index].push(phone);
            info[index].push(email);

            let ul="<ul>";
            $.each(info, function(index, element){
                ul+="<li><p>"+element[0]+"</p><p>"+element[1]+"</p><p>"+element[2]+"</p><p>"+element[3]+"</p><p>"+element[4]+"</p><p>"+element[5]+"</p><p>"+element[6]+"</p><p>"+element[7]+"</p></li>";
            });
            ul += "</ul>";
            $('#content').html(ul);
        });
    });
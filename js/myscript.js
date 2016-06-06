/* =============================================================================================================================================== */
//Default transition
function tranzicionet() { 
    $.mobile.defaultPageTransition = "none";
	//getYoutube();
}

var attachFastClick = Origami.fastclick;
attachFastClick(document.body);


/* 
================================================================================
        Dergo Mesazh 
================================================================================
*/  
 /*       $(document).ready(function() {
            function dergoMesazh(){
  
                var formData = $("#callAjaxForm").serialize();
                console.log(formData);
                $.ajax({
                    type: "POST",
                    url: "http://radio-pendimi.com/mobile/send.php",
                    crossDomain:true,
                    cache: false,
                    data: formData,
                    success: onSuccess,
                    error: onError
                });
				return false;
            }
            
            $("#reset").click(function() {
				$('#callAjaxForm').trigger("reset");
				$('#notification').text("");
			});
            function onSuccess(data, status)
            {
                data = $.trim(data);
                $("#notification").text(data);
            }

            function onError(data, status)
            {
                // handle an error
            }
            
        });//end

*/

/* 
================================================================================
    Transmetime Direkte (Youtube Events)
================================================================================
*/

function broadcast(data){
	if (data.items.length != 0){
			var id,title;
		id = data.items[0].snippet.resourceId.videoId;
		title = data.items[0].snippet.title;
		document.getElementById("yt-status").innerHTML = title;
		//var output = '<div class="statusi-div"><span style="background:#6d4253; padding:8px; border-radius:8px;">Jeni duke shikuar: ' + title + '</span></div><br>';
		var output ='';
		output += '<iframe src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen class="yt-playeri"></iframe>';
		//output += '<p class="player-description">' + unescape(description) + '</p>';
	   // console.log(data);
		$('#transmetime-list').html(output);
	} else document.getElementById("yt-status").innerHTML = "Për momentin nuk ka transmetim direkt";
}
/*
function getYoutube(){
	$.get("https://www.googleapis.com/youtube/v3/playlistItems",{
		part: 'snippet',
		maxResults: 5,
		playlistId: 'PLBm6IaQX_2oLhbcD8AvsKyZdfD2lSvpqb',
		key: 'AIzaSyDhDZjburmzpaoH39Uj4dnU6X_GRLbCVW0'
	}, function(data){
		console.log(data);
	}); //get function end
}*/



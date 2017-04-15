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
        //     function dergoMesazh(){
        //         var formData = $("#callAjaxForm").serialize();
        //         console.log(formData);
        //         $.ajax({
        //             type: "POST",
        //             url: "http://radio-pendimi.com/mobile/send.php",
        //             crossDomain:true,
        //             cache: false,
        //             data: formData,
        //             success: onSuccess,
        //             error: onError
        //         });
		// 		return false;
        //     }

        //     function onSuccess(data, status)
        //     {
        //         data = $.trim(data);
        //         $("#notification").text(data);
        //     }

        //     function onError(data, status)
        //     {
        //         // handle an error
        //     }

        // $("#reset").click(function() {
		// 		$('#callAjaxForm').trigger("reset");
		// 		$('#notification').text("");
		// 	});
        // $(document).ready(function() {
            
            
            
            
            
            
        // });//end



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


/*=================================================
	       ANGULAR APPLICATION
==================================================*/
var app = angular.module('APP',[]);

app.controller("dergoMesazhCtrl",function($scope,$timeout,$http){
	$scope.notification = "";
	$scope.errorInput = false;

	$scope.dergoMesazhin = function(){
		if ($scope.emri != undefined && $scope.mesazhi != undefined){

			var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
    
    $http.post('http://radio-pendimi.com/mobile/send-angular.php',{
        'emri': $scope.emri,
        'mesazhi': $scope.mesazhi,
		'sistemiOperativ': "iOS APP"
    },config).then(function(resp){
		$scope.notification = resp.data.results;

        $timeout(function(){
            $scope.notification = "";
        },3000);
        
        $scope.emri = "";
        $scope.mesazhi = "";
		});

		} else {
			 $scope.notification = "Ju lutemi plotësoni fushat e nevojshme dhe provoni përsëri!";
			 $scope.errorInput = true;
			  $timeout(function(){
            $scope.notification = "";
						$scope.errorInput = false;
        },3000);
		}
	}

})
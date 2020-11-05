$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(() => {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

// Photo Upload

// $(document).ready(function() {
//     if (window.File && window.FileList && window.FileReader) {
//       $("#files").on("change", function(e) {
//         var files = e.target.files,
//           filesLength = files.length;
//         for (var i = 0; i < filesLength; i++) {
//           var f = files[i]
//           var fileReader = new FileReader();
//           fileReader.onload = (function(e) {
//             var file = e.target;
//             $("<span class=\"pip\">" +
//               "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
//               "<br/><span class=\"remove\"><i class=\"fas fa-trash\"></i></span>" +
//               "</span>").insertAfter("#files");
//             $(".remove").click(function(){
//               $(this).parent(".pip").remove();
//             });
            
//             // Old code here
//             /*$("<img></img>", {
//               class: "imageThumb",
//               src: e.target.result,
//               title: file.name + " | Click to remove"
//             }).insertAfter("#files").click(function(){$(this).remove();});*/
            
//           });
//           fileReader.readAsDataURL(f);
//         }
//       });
//     } else {
//       alert("Your browser doesn't support to File API")
//     }
//   });

$(document).ready(function(){
    $('#image').change(function(){
        $("#frames").html('');
        if ($(this)[0].files.length > 12) {
            limit = 12;
            $("#frames").append('<p class="alert alert-danger mt-3">Max 12 images allowed</p>');
        }
        else {
            limit = $(this)[0].files.length;
        }
        for (var i = 0; i < limit; i++) {
            document.getElementById("uploadID"+(i+1)).innerHTML = "";
            $("#uploadID"+(i+1)).append('<img src="'+window.URL.createObjectURL(this.files[i])+'" class="previewIMG"/>');
        }
        for (var i = limit; i < 12; i++) {
            document.getElementById("uploadID"+(i+1)).innerHTML = "";
            $("#uploadID"+(i+1)).append(`<span><i class="fa-2x fas fa-camera-retro"></i></span>
            <span>Add Photo</span>`);
        }
    });
});
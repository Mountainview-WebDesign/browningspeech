/*! 28-01-2014 by krivinarius@gmail.com */
jQuery(function(a){function b(){return c=[],d=a("#sidebar-list"),d.find(".sidebar-item").each(function(){c.push(a(this).text())}),c}var c,d,e=a("#generate-sidebar"),f=a("#save-sidebars"),g=a("#new-sidebar");b(),d.sortable({axis:"y"}),e.on("click",function(e){e.preventDefault();var f=g.val();b(),-1===a.inArray(f,c)&&f?(d.append('<li><span class="sidebar-item">'+f+'</span><span class="delete-sidebar-item"><a href="#">delete</a></span></li>'),g.val("")):f?alert("Sidebar by that name already exists!"):alert("Please enter a name for the sidebar.")}),f.on("click",function(c){c.preventDefault(),a("#ajax-loading-img").fadeIn(),a.ajax({url:ajaxurl,type:"POST",dataType:"json",data:{action:"sidebarGeneratorAjax",sidebars:b()}}).done(function(){a("#save-background").fadeIn(),a("#ajax-loading-img").fadeOut(),window.setTimeout(function(){a("#save-background").fadeOut()},2e3)})}),a("#sidebar-list").on("click",".delete-sidebar-item",function(b){b.preventDefault();var c='CAUTION: You are about to delete a sidebar. Remember to press "Save" to commit the change.';confirm(c)&&a(this).parent().remove()}),a.fn.center=function(){return this.animate({top:(a(window).height()-this.height()-200)/2+a(window).scrollTop()+"px"},100),this.css("left",350),this},a("#save-background").center(),a("#ajax-loading-img").center(),a(window).scroll(function(){a("#save-background").center(),a("#ajax-loading-img").center()})});
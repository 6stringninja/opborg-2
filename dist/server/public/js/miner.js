   $(function () {
       // Handler for .ready() called.
       var html = '';
       var people = ['geddy', 'neil', 'alex'];
       var template = `    
           <% data.forEach(function(d) { %> 
   <div class="row miner-row " id='!id!'>
            <div class="col-1 data-icon" style="color:<%=d.color%>"><i class='fas fa-robot'></i> </div>
            <div class = "col-3 data-client" > <%=d.name %> </div>
            <div class = "col-3 data-ip" > <%=d.ip %> </div>
             
             <div class = "col-3 data-created" > <%=d.hashRate10s %> - <%=d.hashRate1m %> - <%=d.hashRate10m %> </div>
             <div class = "col-1 data-created" > <%=d.hashRate10s %> </div>
        </div>
           <% }); %>
    `;
    function RenderMiners(data){
  var html = ejs.render(template, {
      data:data
  });

  // With jQuery:
  $('#miner-content').html(html);
    }
     
 function pollForData(){
  $.getJSON("api/clients", function (data) {
      var items = [];
      console.log(data.data);
      RenderMiners(data.data);
      setTimeout(() => {
          pollForData();
      }, 1000);
  });
 }
     pollForData();
       // Vanilla JS:
       // document.getElementById('output').innerHTML = html;


   });
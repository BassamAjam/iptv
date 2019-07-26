function detachAll(){
  $( ".m3u, .m3u-xtream, .macAddress-app, .macAddress-mag, .macAddress-tv, .otherDevice" ).detach();
}

var selectedDevice = "";
var macAddressMag = `<h3 class="mb-10">MAC Address</h3>
                     <div data-for="macAddress">
                       <label for="macAddress"></label>
                       <input type="text" name="macAddress" data-form-field="MAC Address"
                         placeholder="Always started with 00 : 1A : 79 : xx : yy : zz" onfocus="this.placeholder = ''"
                         onblur="this.placeholder = 'Always started with 00 : 1A : 79 : xx : yy : zz'" class="single-input">
                     </div>`;
var macAddressTV = `<h3 class="mb-10">MAC Address</h3>
                    <div data-for="macAddress">
                      <label for="macAddress"></label>
                      <input type="text" name="macAddress" data-form-field="MAC Address"
                        placeholder="aa : bb : cc : dd : ee : ff" onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'aa : bb : cc : dd : ee : ff'" class="single-input">
                    </div>`;

$(document).ready(function(){
  $("select.device").change(function(){
      selectedDevice = $(this).children("option:selected").val();

    if(selectedDevice === "Android Box" || selectedDevice === "Fire Stick") {
      detachAll();
      $('#mac-m3u').append(`
        <div class="macAddress-app">
          <p>
            <a href="./iptv-configurations" target="_blank">Get "OTT IPTV STB" application</a>.<br>
            If you have the MAC Address of the application, add it now.
          </p>
          ${macAddressMag}
        </div>
      `);
    } else if(selectedDevice === "Mag Box"){
      detachAll();
      $('#mac-m3u').append(`
        <div class="macAddress-mag">
          ${macAddressMag}
        </div>
      `);
    } else if(selectedDevice === "Smart TV (Samsung/LG)"){
      detachAll();
      $('#mac-m3u').append(`
        <div class="macAddress-tv">
          <p>
            Add the MAC address of <a href="./iptv-configurations" target="_blank">"Smart IPTV"</a> application. If you use another application, tell us the name in the "Message field".
          </p>
          ${macAddressTV}
        </div>
      `);
    } else if(selectedDevice === "Android (Phone/Tablet)" || selectedDevice === "Windows PC") {
      detachAll();
      $('#mac-m3u').append(`
      <div class="m3u">
        <h3 class="mb-30">Streaming Line</h3>
          <div class="switch-wrap d-flex justify-content-between">
            <p>01. m3u URL</p>
            <div class="primary-switch" data-for="m3uURL">
              <input data-form-field="m3u Url" type="checkbox" id="default-switch" checked>
              <label for="default-switch"></label>
            </div>
          </div>
      </div>
      `);
    } else if(selectedDevice === "All Apple devices" ){
      detachAll();
      $('#mac-m3u').append(`
      <div class="m3u-xtream">
        <h3 class="mb-30">Streaming Line</h3>
          <div class="switch-wrap d-flex justify-content-between">
            <p>01. m3u URL</p>
            <div class="primary-switch" data-for="m3uURL">
              <input data-form-field="m3u Url" type="checkbox" id="default-switch">
              <label for="default-switch"></label>
            </div>
          </div>
          <div class="switch-wrap d-flex justify-content-between">
            <p>02. Xtream Code API Account</p>
            <div class="primary-switch" data-for="account">
              <input data-form-field="Account" type="checkbox" id="primary-switch" checked>
              <label for="primary-switch"></label>
            </div>
          </div>
      </div>
      `);
    } else {
      detachAll();
      $('#mac-m3u').append(`
        <div class="otherDevice">
          <p>
            Tell us in the "Message" field which device or application you are using.
          </p>
        </div>
      `);
    }
  });
});

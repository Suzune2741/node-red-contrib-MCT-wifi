module.exports = function(RED) {
    
    function WIFI_Node(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.SSID = config.SSID;
        this.PASSWARD = config.PASSWARD;
        
        node.on('input', function () {
            if (node.PASSWARD == "" && node.SSID == "") {
                throw new Error("SSIDまたはパスワードが入力されていません");
            }
         });
    }

    RED.nodes.registerType("Wi-Fi",WIFI_Node);
}

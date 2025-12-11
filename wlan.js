module.exports = function(RED) {
    
    function wlan_Node(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.mode = config.mode;
        this.ssid = config.ssid;
        this.password = config.password;
        
        node.on('input', function () {
            if (node.password == "" && node.ssid == "") {
                throw new Error("SSIDまたはパスワードが入力されていません");
            }
         });
    }

    RED.nodes.registerType("wlan",wlan_Node);
}

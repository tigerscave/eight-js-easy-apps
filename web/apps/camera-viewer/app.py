import eel
import subprocess

eel.init('web')

@eel.expose
def ping_host(host):
    res = subprocess.run(["ping", host, "-c", "1", "-W", "300"], stdout=subprocess.PIPE, text=True)

    if res.returncode == 0 :
        result = "success!!"
    else:
        result = "failed..."

    return result

eel.start('index.html', mode='chrome', port=8081, size=(600, 400))
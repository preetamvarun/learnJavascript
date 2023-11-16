// In proxy pattern we will be having a proxy object through which we will access the real object. The
// proxy object will control the access to real object.

class RealObject {
  callToExternalAPI() {
    console.log('Calling to an external API');
  }
}

class ProxyObject {
  accessPoint() {
    return true;
  }
  request(ro) {
    if (this.accessPoint()) {
      ro.callToExternalAPI();
    }
  }
}

let ro = new RealObject();
let po = new ProxyObject();

po.request(ro);

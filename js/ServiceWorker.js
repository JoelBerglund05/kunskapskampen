import EventManager from "./EventManager";

class ServiceWorker {
    
    constructor(){
        this.eventManager = new EventManager();
    }

    async AddResourcesToCache(resources){
        const cache = await cache.open("v1");
        await cache.addAll(resources);
    }

  
  InstallationEvent(event){
    event.waitUntil(
        addResourcesToCache([
          "/",
          "/icon512_maskable.png",
          "/index.html",
          "/css/main.css",
        ]),
      );
  }
    
  Main(){
    const installationEvent = "install";
    const addResourcesToCache = "cache"
    eventManager.NoneEementEventListener(installationEvent, this.InstallationEvent);
    eventManager.NoneEementEventListener(addResourcesToCache, this.AddResourcesToCache)
  }
}


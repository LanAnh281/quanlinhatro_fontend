import createApiClient from "./api.services.js";

class hoadonService{
    constructor(baseUrl="/api/diennuoc"){
        this.api=createApiClient(baseUrl);
    }
    async layGDN(){
        return (await this.api.get("/")).data;
    };
    async themGDN(data){
        return (await this.api.post("/",data)).data;
    };
   
}

export default new hoadonService();
import createApiClient from "./api.services.js";

class nhatroService{
    constructor(baseUrl="/api/nhatro"){
        this.api=createApiClient(baseUrl);
    }
    async layTTNT(){
        return (await this.api.get("/")).data;
    };
    async chinhsuaNT(data){
        return (await this.api.put("/",data)).data;
    };
    
}
export default new nhatroService();
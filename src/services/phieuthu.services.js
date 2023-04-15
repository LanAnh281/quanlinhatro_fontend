import createApiClient from "./api.services.js";

class phieuthuService{
    constructor(baseUrl="/api/phieuthu"){
        this.api=createApiClient(baseUrl);
    }
    async layDSPT(){
        return (await this.api.get("/")).data;
    };
   
   
}

export default new phieuthuService();
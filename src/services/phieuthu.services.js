import createApiClient from "./api.services.js";

class phieuthuService{
    constructor(baseUrl="/api/phieuthu"){
        this.api=createApiClient(baseUrl);
    }
    async layPT(mahd){
        return (await this.api.get(`/${mahd}`)).data;
    };
    async layDSPT(){
        return (await this.api.get(`/`)).data;
    };
   
}

export default new phieuthuService();
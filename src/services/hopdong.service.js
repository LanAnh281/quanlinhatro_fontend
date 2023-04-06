import createApiClient from "./api.services.js";

class hopdongService{
    constructor(baseUrl="/api/hopdong"){
        this.api=createApiClient(baseUrl);
    }
    async layDSHD(){
        return (await this.api.get("/")).data;
    }
    
}
export default new hopdongService();
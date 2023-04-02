import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/loaiphong"){
        this.api=createApiClient(baseUrl);
    }
    async layDSLP(){
        return (await this.api.get("/")).data;
    }
    async themLP(){
        return (await this.api.post("/")).data;
    }
}

export default new loaiphongService();
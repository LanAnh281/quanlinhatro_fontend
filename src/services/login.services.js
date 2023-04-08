import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/login"){
        this.api=createApiClient(baseUrl);
    }
    async KTDN(data){
        return (await this.api.post("/",data)).data;
    };

}

export default new loaiphongService();
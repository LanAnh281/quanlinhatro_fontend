import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/login"){
        this.api=createApiClient(baseUrl);
    }
    async KTDN(data){
        return (await this.api.post("/",data)).data;
    };
    async Quyen(){
        return (await this.api.get("/")).data;
    };

}

export default new loaiphongService();
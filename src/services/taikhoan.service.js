import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/taikhoan"){
        this.api=createApiClient(baseUrl);
    }
    async layDSTK(){
        return (await this.api.get("/")).data;
    }

    async layTK(sotk){
        return (await this.api.get(`/${sotk}`)).data;
    }
   
}

export default new loaiphongService();
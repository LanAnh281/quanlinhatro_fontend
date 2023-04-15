import createApiClient from "./api.services.js";

class hoadonService{
    constructor(baseUrl="/api/hoadon"){
        this.api=createApiClient(baseUrl);
    }
    async layDSHD(){
        return (await this.api.get("/")).data;
    };
    async xoaHD(mahd){
        return (await this.api.delete(`/${mahd}`)).data;
    };
   
}

export default new hoadonService();
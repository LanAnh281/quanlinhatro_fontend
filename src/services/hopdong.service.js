import createApiClient from "./api.services.js";

class hopdongService{
    constructor(baseUrl="/api/hopdong"){
        this.api=createApiClient(baseUrl);
    }
    async layDSHD(){
        return (await this.api.get("/")).data;
    };
    async themHD(data){
        return (await this.api.post("/",data)).data;
    };
    async xoaHD(mahd){
        return (await this.api.delete(`/${mahd}`)).data;
    };
    
}
export default new hopdongService();
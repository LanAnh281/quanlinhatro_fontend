import createApiClient from "./api.services.js";

class hopdongService{
    constructor(baseUrl="/api/hopdong"){
        this.api=createApiClient(baseUrl);
    }
    
    async layDSHD(){
        return (await this.api.get("/")).data;
    };
    async layHD(mahd){
        return (await this.api.get(`/${mahd}`)).data;
    };
   
    async themHD(data){
        return (await this.api.post("/",data)).data;
    };
    async chinhsuaHDKhach(data){
        return (await this.api.put("/",data)).data;
    };
    async chinhsuaHD(mahd,data){
        return (await this.api.put(`/${mahd}`,data)).data;
    };
    async xoaHD(mahd){
        return (await this.api.delete(`/${mahd}`)).data;
    };
    async layHDK(){
        return (await this.api.get("/hd/khach")).data;
    };
    
}
export default new hopdongService();
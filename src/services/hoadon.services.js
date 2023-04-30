import createApiClient from "./api.services.js";

class hoadonService{
    constructor(baseUrl="/api/hoadon"){
        this.api=createApiClient(baseUrl);
    }
    async layDSHD(){
        return (await this.api.get("/")).data;
    };
    async layHD(mahd){
        return (await this.api.get(`/${mahd}`)).data;
    };
    async layHDK(data){
        return (await this.api.get('/hd/khach',data)).data;
    };
    async xoaHD(mahd){
        return (await this.api.delete(`/${mahd}`)).data;
    };
    async themHD(data){
        return (await this.api.post(`/`,data)).data;
    };
    async chinhsuaHD(mahd,data){
        return (await this.api.put(`/${mahd}`,data)).data;
    };
   
}

export default new hoadonService();
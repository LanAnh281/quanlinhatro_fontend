import createApiClient from "./api.services.js";

class khachhangService{
    constructor(baseUrl="/api/khachtro"){
        this.api=createApiClient(baseUrl);
    }
    async layDSKH(){
        return (await this.api.get("/")).data;
    };
    async themKH(data){
        return (await this.api.post("/",data)).data;
    };
    async layKH(sotk){
        return (await this.api.get(`${sotk}`)).data;
    }
    async chinhsuaKH(sotk,data){
        return (await this.api.put(`${sotk}`,data)).data;
    }
    async xoaKH(sotk){
        return (await this.api.delete(`/${sotk}`)).data;
    }
    async layKT(){
        return (await this.api.get("/khach")).data;
    };
    
}
export default new khachhangService();
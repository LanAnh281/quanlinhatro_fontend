import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/loaiphong"){
        this.api=createApiClient(baseUrl);
    }
    async layDSLP(){
        return (await this.api.get("/")).data;
    };
    async layLP(maloai){
        return (await this.api.get(`/${maloai}`)).data;
    };
    async themLP(data){
        return (await this.api.post("/",data)).data;
    };
    async capNhatLP(maloai,data){
        return (await this.api.put(`/${maloai}`,data)).data;
    };
    async xoaLP(maloai){
        return (await this.api.delete(`/${maloai}`)).data;
    }
}

export default new loaiphongService();
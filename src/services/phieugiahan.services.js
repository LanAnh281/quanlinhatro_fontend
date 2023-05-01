import createApiClient from "./api.services.js";

class phieugiahanService{
    constructor(baseUrl="/api/phieugiahan"){
        this.api=createApiClient(baseUrl);
    }
    async layDSP(){
        return (await this.api.get("/")).data;
    };
    async themPhieu(data){
        return (await this.api.post("/giahan/khach",data)).data;

    };
    async dsphieugh(){
        return (await this.api.get("/giahan/khach")).data;

    };
    async xoaphieugh(maphieu){
        return (await this.api.delete(`${maphieu}`)).data;

    };
    async chinhsuaTT(data){
        return (await this.api.put('/',data)).data;
    };
    
}
export default new phieugiahanService();
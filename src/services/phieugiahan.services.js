import createApiClient from "./api.services.js";

class phieugiahanService{
    constructor(baseUrl="/api/phieugiahan"){
        this.api=createApiClient(baseUrl);
    }
    async layDSP(){
        return (await this.api.get("/")).data;
    };
    async chinhsuaTT(maphieu){
        return (await this.api.put('/')).data;
    };
    
}
export default new phieugiahanService();
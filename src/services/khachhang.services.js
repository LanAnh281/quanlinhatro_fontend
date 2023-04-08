import createApiClient from "./api.services.js";

class khachhangService{
    constructor(baseUrl="/api/khachtro"){
        this.api=createApiClient(baseUrl);
    }
    async layDSKH(){
        return (await this.api.get("/")).data;
    };
    
}
export default new khachhangService();
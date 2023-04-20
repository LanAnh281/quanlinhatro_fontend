import createApiClient from "./api.services.js";

class paypalService{
    constructor(baseUrl="/api/paypal"){
        this.api=createApiClient(baseUrl);
    }
    async hienTT(){
        return (await this.api.get("/")).data;
    };
    async taoTT(){
        return (await this.api.post("/")).data;
    };
    
}
export default new paypalService();
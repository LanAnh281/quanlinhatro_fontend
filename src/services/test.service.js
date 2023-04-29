import createApiClient from "./api.services.js";

class loaiphongService{
    constructor(baseUrl="/api/upload"){
        this.api=createApiClient(baseUrl);
    }
   

    async testU(){
        return (await this.api.post('/')).data;
    }
    
   
}

export default new loaiphongService();